import styles from '../styles/Home.module.css'
import generalStyles from '../styles/General.module.css'
import { Layout, Container, Main } from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout >

      <Header />
      <Container>

        <Main>
          <Menu />

          <h1>Applied computer vision</h1>

          {/* <p className={generalStyles.warning}>
            [4/2021] Available for contracting or full time. Drop me a message at <a href="mailto:manlito@gmail.com">manlito@gmail.com</a>.
          </p> */}

          <section>
            <h2>
              Showcase demo
            </h2>

            <a className={styles.showcase}
              style={{
                height: 200,
                backgroundImage: "url('/superpixel-mesh-cover.jpg')",
                backgroundPosition: "right",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              href="/projects/superpixel-mesh">
              <span><b>Superpixel Mesh</b> / Aligning a mesh to any image</span>
              <div className={styles['go-button']}>
                <button>Read and try</button>
              </div>
            </a>

            <div>
            </div>
          </section>

          <section>
            <h2>About me</h2>

            <p>Computer vision engineer working on 3D reconstruction with some fullstack dev skills. I have worked mostly for US startups solving challenges for which computer vision has a solution.</p>

            <h3>My value proposition:</h3>

            <div className={styles.values}>

              <div className={styles.value}>
                <p>
                  Production grade code.
                &nbsp;<small>You don't need to refactor everything upon completion. Research, code and productionize as it makes sense.</small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  Computer vision + full stack.
                &nbsp;<small>If your project has the right time-to-market but some budget constraints at the same time, I can take on fullstack duties. </small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  Culture and communication.
                &nbsp;<small>I have worked for 6 years for US based companies. My main timezone is CST, yet it is flexible.</small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  Complexity not a problem.
                &nbsp;<small>I have architected and implemented year long projects smoothly. Comfortable coaching.</small>
                </p>
              </div>

            </div>

            <div className={styles.hero} >
              <img src="deployment.svg" />
              <p>Code I have written is running in production in the 5 continents</p>
            </div>

            <h3>Experience</h3>

            <div className={styles.skills}>

              <div className={styles.skill}>
                <div>
                  <h4>Computer vision</h4>
                  <ul>
                    <li>Structure from motion</li>
                    <li>SLAM using GPS, IMU, LiDAR and vision</li>
                    <li>Multiview stereo</li>
                    <li>Photogrammetry</li>
                    <li>Surface reconstruction</li>
                    <li>Pointcloud processing</li>
                    <li>Calibration</li>
                    <li>Spatial reference transforms (GIS)</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Computer vision libraries</h4>
                  <ul>
                    <li>OpenCV, PointcloudLibray (PCL)</li>
                    <li><span className="tag is-small">SfM</span> VLFeat, FLANN, OpenMVG</li>
                    <li><span className="tag is-small">Multiview stereo</span> PMVS, SMVS</li>
                    <li><span className="tag is-small">Computational geometry</span> PoissonRecon, CGAL</li>
                    <li><span className="tag is-small">Math</span> Eigen, ceres-solver</li>
                    <li><span className="tag is-small">Visualization</span> VTK</li>
                    <li><span className="tag is-small">Parallelization</span> OpenMP, CUDA (beginner)</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Software engineering</h4>
                  <ul>
                    <li><span className="tag is-small">Languages</span> C++, Javascript, Python, Bash, C#, PHP</li>
                    <li><span className="tag is-small">Cloud</span> (AWS): EC2, Lightsail, Elastic Beanstalk, S3, Lambda, API Gateway, Cloudfront, Route53. (GCP): AppEngine</li>
                    <li><span className="tag is-small">Databases</span> MySQL, MS-SQL Server, MongoDB</li>
                    <li><span className="tag is-small">Tools</span> Docker, CMake, Make, GTest, GPerfTools, Protobuf, emscripten</li>
                    <li><span className="tag is-small">Frameworks</span> Qt, Node.JS, React, tensorflow (beginner)</li>
                  </ul>
                </div>
              </div>

            </div>

          </section>

        </Main>

        <Footer />

      </Container>

    </Layout>
  )
}
