import Head from 'next/head'
import generalStyles from '../../styles/General.module.css'
import styles from '../../styles/SuperpixelMesh.module.css'
import { useEffect, useState } from 'react'
import { Layout, Container, Main } from '../../components/Layout'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import DropZone from '../../components/DropZone'
import MeshCanvas from '../../components/projects/superpixel-mesh/MeshCanvas';
import SuperpixelWorker from '../../components/projects/superpixel-mesh/SuperpixelMesh.worker.js';

const SuperpixelMesh = () => {
  const [worker, setWorker] = useState(undefined);
  const [mesh, setMesh] = useState();
  const [imageURL, setImageURL] = useState('');
  const [image, setImage] = useState({
    rgbaArray: [],
    width: 1280,
    height: 300
  });
  const [isRunning, setIsRunning] = useState(false);
  const [meshingOptions, setMeshingOptions] = useState({
    targetSize: 25,
    regularization: 5.0,
    maxIterations: 15
  });

  useEffect(() => {
    setWorker(new SuperpixelWorker());
  }, []);

  useEffect(() => {
    if (worker) {
      worker.onmessage = (event) => {
        const { mesh, iteration, cost, isFinished } = event.data;
        setMesh(mesh);
        setIsRunning(!isFinished);
      };
    }
  }, [worker]);

  useEffect(() => {
    if (imageURL) {
      setMesh({ faces: [], vertices: [] });
      const image = new Image();
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      image.onload = () => {
        console.log(`Loaded image size: ${image.width} x ${image.height}`)
        // Resize image to 1280 x ???
        const scale = 1280 / image.width;
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const rgbaArray = context.getImageData(0, 0, canvas.width, canvas.height).data;
        setImage({
          rgbaArray,
          width: canvas.width,
          height: canvas.height
        })
      }
      image.src = imageURL;
    }
  }, [imageURL]);


  const isImageReady = () => imageURL ? true : false

  const handleDropFile = (fileURL) => {
    setImageURL(fileURL);
  }

  const handleUseExample = () => {
    setImageURL('/plane.jpg');
  }

  const handleProcess = () => {
    const validSettings = {
      targetSize: meshingOptions.targetSize || 25,
      regularization: meshingOptions.regularization || 5.0,
      maxIterations: meshingOptions.maxIterations || 15
    }
    setMeshingOptions((currentOptions) => ({
      ...validSettings
    }));
    worker.postMessage({
      ...image,
      options: validSettings});
    setIsRunning(true);
  }

  const handleChangeTargetSize = (event) => {
    const newTargetSize = event.target.value ? parseInt(event.target.value): undefined;
    setMeshingOptions((currentOptions) => ({
      ...currentOptions,
      targetSize: newTargetSize
    }));
  }

  const handleChangeRegularization = (event) => {
    const newRegularization = event.target.value ? parseFloat(event.target.value) : undefined;
    setMeshingOptions((currentOptions) => ({
      ...currentOptions,
      regularization: newRegularization
    }));
  }

  return (
    <Layout >

      <Header />
      <Container>

        <Main>
          <Menu />

          <section>
            <h2>What's the problem</h2>
            <p>I needed a segmentation of the image with some weird contraint: Each segment has to be a quadrilateral with sort of the same size.</p>

            <div className={generalStyles.image} >
              <img src="/superpixel-mesh-cover.jpg" />
              <p>Image of a plane with a possible segmentation <br /><small>(Image: 
                
                <span style={{fontSize: '0.9rem', fontStyle: 'italic'}}><a href="https://www.flickr.com/photos/45549579@N05/8276354739" target="_blank">"XA-VOC Volaris Airlines Airbus A319-132 C/N 2997 'Claudia'"</a><span> by <a target="_blank" href="https://www.flickr.com/photos/45549579@N05">TDelCoro</a></span> is licensed under <a target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/?ref=ccsearch&atype=html" style={{marginRight: '5px'}}>CC BY-SA 2.0</a></span>

                </small></p>
            </div>

            <p>Each quadrilateral is a superpixel, which is a connected group of pixels with similar intensities. You can imagine how many applications that can have. (see <a href="https://openaccess.thecvf.com/content_CVPR_2020/html/Yang_Superpixel_Segmentation_With_Fully_Convolutional_Networks_CVPR_2020_paper.html" target="_blank">here</a>, it's 2020 and we are still working on that problem given its importance).</p>

            <p>Now, here the key is the <i>quadrilateral</i>. Superpixel methods only care abour base pixel grouping, but in our case here we deal with a geometrical shape. So, intead of outputting an image, we output a mesh, defined by:</p>

            <ul>
              <li><i>Vertices</i>, which are pixel coordinates, which map to some quadrilateral corner</li>
              <li><i>Faces</i>, which in our case each face has 4 indices, one for each vertex</li>
            </ul>

            <p>In addition, our goal of <i>sort of the same size</i> makes things impossible. Having consistent pixel data without breaking this requirement. Superpixels are irregular in nature, and forcing them to be square is really the issue.</p>
          </section>

          <section>
            <h2>A solution</h2>

            <p>So we know we want to find the 4 vertices coordinates for each superpixel. </p>

            <p>A first attemt to solve would be to stand on giants shoulders and use something existing for superpixels, and after having superpixels identified, do some set of polygonal fits to find quadrilaterals. But using something existing, first it removes the fun, and second, that extra transform/optimization removes an opportunity to do things better. This is because the actual solution may be different when forcing the quadrilateral constraint for a superpixel.</p>

            <p>Instead, let's define the problem as an optimization problem. Why? Note first how superpixels are connected. Let's say you shift a vertex by some ammount. To improve the solution, we are likely to adjust the all the quadrilaterals that use that vertex, which will be 4. But if we adjust those neighbors, we may also need to update the neighbors of the neighbors, and so on.</p>

            <h3>Algorithm</h3>

            <p>
              Being a fan of <a href="http://ceres-solver.org/" target="_blank">ceres-solver</a> I though, this is for sure a problem we can model with that. The following is the algo:
          </p>

            <ol>
              <li>Take input image and apply some blur. This makes optimizer life's easier.</li>
              <li>Initialize the mesh. We create square superpixels of some size that cover the input image.</li>
              <li>Create an optimization problem with that initial mesh and optimize vertex coordinates</li>
            </ol>
          </section>

          <section>
            <h2>Try it yourself</h2>

            <p>Next is a demo that was implemented in C++ and then targeted to the web using WebAssembly.</p>
            <p className={generalStyles.warning}>
              Image you choose <b>WON'T BE SENT TO ANY SERVER!</b> it will be processed locally in your device.</p>

            <h3> Pick an image</h3>
            <div className={styles.browse} >
              <DropZone
                style={{ display: 'flex', flexGrow: 1 }}
                onDropFile={handleDropFile}
              />
              <span style={{
                margin: '1rem',
                display: 'flex',
                alignItems: 'center'
              }}>or</span>

              <div style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <img
                  src="/plane-thumb.jpg"
                  style={{ marginBottom: 8, borderRadius: 10 }} />
                <button className="button primary" onClick={handleUseExample}>Use sample image</button>
              </div>
            </div>

            <div style={{ display: isImageReady() ? 'block' : 'none' }}>

            <h3>Preview</h3>

            <MeshCanvas
              image={imageURL}
              width={image.width}
              height={image.height}
              mesh={mesh}
            />
            <h3>Process</h3>
            <div className={styles.process}>
              <div>
                <form className={styles.form}>
                  <div>
                    <label>Target square size</label>
                    <input
                      type="number"
                      min="10"
                      max="100"
                      onChange={handleChangeTargetSize}
                      value={meshingOptions.targetSize} />
                  </div>
                  <div>
                    <label>Regularization factor</label>
                    <input
                      type="number"
                      step=".1"
                      min="0"
                      max="100000"
                      onChange={handleChangeRegularization}
                      value={meshingOptions.regularization} />
                  </div>
                </form>
              </div>
              <button
                disabled={isRunning} 
                onClick={handleProcess} >
                {!isRunning &&
                  <span>Run Superpixel Mesh</span>
                }
                {isRunning &&
                  <span>...Running...</span>
                }
                </button>
            </div>
            </div>

          </section>

          <section>
            <h2>Code</h2>

            <p>The following pieces are involved</p>

            <ul>
              <li><a href="http://ceres-solver.org/" target="_blank" >ceres-solver</a>. The optimizer we use here to optimize our cost function (see more bellow).</li>
              <li><a href="http://eigen.tuxfamily.org/index.php?title=Main_Page" target="_blank" >Eigen</a>. Linear algebra backend that we use with ceres. Note that other backens are available for ceres, but Eigen plays well with WebAssembly.</li>
              <li><a href="https://github.com/manlito/superpixel-mesh" target="_blank" >superpixel-mesh</a>.  This is actual code that performs meshing, written in C++17.</li>
              <li><a href="https://emscripten.org/" target="_blank" >emscripten</a>. LLVM based toolchain to compile our C++ code to WASM.</li>
              <li><a href="https://github.com/manlito/superpixel-mesh-wasm" target="_blank" >superpixel-mesh-wasm</a>. CMake script and WebIDL definitions to port superpixel mesh to the browser.</li>
            </ul>

            <p>As for the browser portion of this:</p>

            <ul>
              <li><a href="https://webpack.js.org/loaders/worker-loader/" target="_blank">worker-loader</a>. WebPack loader to easily call web workers as modules.</li>
              <li><a href="https://webpack.js.org/loaders/file-loader/" target="_blank">file-loader</a>. Another loader to copy the WASM file to the output folder.</li>
            </ul>

          </section>

          <section>

            <h2>The Math</h2>
            <p>First, lets define define an error function we would to minimize:</p>

            <p className={generalStyles.math}>
              Error(V<sub>1</sub>, V<sub>2</sub> ...V<sub>n</sub>) =
            &sum;SuperpixelDissimilary + &lambda; &sum;Regularization
            </p>

            <p>
              As for sumations, in both cases we have 1 term for each superpixel. Let's review each term:
            </p>

            <p className={generalStyles.math}>
            SuperpixelDissimilary(V<sub>1</sub>, V<sub>2</sub>, V<sub>3</sub>, V<sub>4</sub>) =
            &sum;StdDev(I(<b>x</b>))
            </p>

            <p>Here <i className={generalStyles.math}>I(<b>x</b>)</i> refers to all pixels in the superpixel. We compute the standard deviation and that becomes our dissimilarity term: we want to minimize this std deviation in each superpixel. To normalize the area of the pixels, we use the 4 vertices of each superpixel to compute a homography from the configuration to a fixed size square. In this part <i>ceres-solver</i> is really handy as it already has an interpolation implementation that we need to get the remapped pixels.</p>

            <p><i className={generalStyles.math}>&lambda</i> is closely related to the regularization parameter you can change in the demo, but there ara additional normalization steps.</p>

            <p>As for regularization we first computer 4 triangle areas:</p>

            <p className={generalStyles.math}>
            Regularization(V<sub>1</sub>, V<sub>2</sub>, V<sub>3</sub>, V<sub>4</sub>) =
            (0.5 (targetArea) -
            TriangleArea(V<sub>4</sub>, V<sub>3</sub>, V<sub>2</sub>)) + <br />
            (0.5 (targetArea) -
            TriangleArea(V<sub>3</sub>, V<sub>2</sub>, V<sub>1</sub>)) + <br />
            (0.5 (targetArea) -
            TriangleArea(V<sub>2</sub>, V<sub>1</sub>, V<sub>4</sub>)) + <br />
            (0.5 (targetArea) -
            TriangleArea(V<sub>1</sub>, V<sub>4</sub>, V<sub>3</sub>)) +
            </p>

            <p>Where <i className={generalStyles.math}>targetArea</i> is the square of the <i className={generalStyles.math}>targetSize</i> parameter you can change in the demo. This regularization was the one I liked the most, it works as far as there are enough squares. </p>

            </section>

            <section>

              <h2>Conclusions</h2>

              <ul>
                <li>Just showed you a way to solve the problem of superpixels.</li>
                <li>It is not the faster (not even close) nor the best method, but, certainly it works and the behaviour can be tweaked.</li>
                <li>Furthermore, we can extend this to user other sources of data, for instance, using a depth map would be straight forward.</li>
                <li>In the short term I plan to support mutilevel meshing.I'll post an update here once done.</li>
              </ul>

            </section>

        </Main>

        <Footer />

      </Container>

    </Layout>
  )
}

export default SuperpixelMesh;