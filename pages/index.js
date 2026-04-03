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

            <h3>Skills</h3>

            <div className={styles.skills}>

              <div className={styles.skill}>
                <div>
                  <h4>Classic Computer Vision</h4>
                  <ul>
                    <li>Structure from Motion</li>
                    <li>Bundle adjustment</li>
                    <li>Feature matching</li>
                    <li>Intrinsics and rolling shutter model</li>
                    <li>GPS and control point optimization</li>
                    <li>SDF Fusion</li>
                    <li>Sensor fusion</li>
                    <li>Pointcloud registration, ICP</li>
                    <li>Multiview stereo</li>
                    <li>Color normalization</li>
                    <li>Surface reconstruction</li>
                    <li>Texture mapping</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Machine Learning</h4>
                  <ul>
                    <li><span className="tag is-small">Frameworks</span> Pytorch, HuggingFace transformers, drjit</li>
                    <li><span className="tag is-small">Networks</span> Transformers, Roomformer, SALAD, Metric3D, Oneformer, DinoV2, VGGT</li>
                    <li><span className="tag is-small">VLM/LLM</span> Gemma3 (fine tuning)</li>
                  </ul>
                  <h4>Rendering &amp; Visualization</h4>
                  <ul>
                    <li><span className="tag is-small">Frameworks</span> mitsuba, pytorch3d</li>
                    <li><span className="tag is-small">Methods</span> Gaussian splatting, inverse rendering, photometric optimization</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Software Engineering</h4>
                  <ul>
                    <li><span className="tag is-small">Languages</span> C++, TS/JS, Python, Bash, Ruby, C#</li>
                    <li><span className="tag is-small">Toolchain</span> CMake, GTest, pybind11, pytest</li>
                    <li><span className="tag is-small">Web</span> React, SvelteKit, emscripten</li>
                    <li><span className="tag is-small">Mobile</span> Android (classic and Compose)</li>
                    <li><span className="tag is-small">Infra</span> AWS, GCP, Vercel, Neon, Github Actions</li>
                    <li><span className="tag is-small">Evaluation</span> Pachyderm, ArgoWorkflows</li>
                  </ul>
                </div>
              </div>

            </div>

            <h3>What I have worked on</h3>

            <div className={styles.timeline}>

              <div className={styles['timeline-entry']}>
                <h4>Senior Computer Vision Engineer</h4>
                <p className={styles['timeline-company']}>Construction and insurance platform &middot; San Francisco, CA</p>
                <p>Building and scaling the 3D reconstruction pipeline used by millions. My work covers bundle adjustment optimization for mobile AR captures, textured mesh generation for interior walkthroughs, and a WebAssembly-based system for CAD model refinement. I also led the development of a proprietary virtual experience that replaced a third-party vendor. 2 patents granted, 1 in process.</p>
              </div>

              <div className={styles['timeline-entry']}>
                <h4>Senior Software Engineer</h4>
                <p className={styles['timeline-company']}>Knee Replacement company &middot; Contract, Remote</p>
                <p>Built a React-based CT segmentation editor for low-latency 3D visualization and a queue-based backend to scale the 3D reconstruction of tibia and femur models. Part of an FDA-approved surgical planning system.</p>
              </div>

              <div className={styles['timeline-entry']}>
                <h4>Senior SLAM and Computer Vision Engineer</h4>
                <p className={styles['timeline-company']}>Drone company &middot; Contract, Guadalajara, Mexico</p>
                <p>Wrote a global optimizer with ceres-solver for LiDAR pose refinement in a multi-sensor SLAM system (LiDAR, RTK GNSS, IMU, camera). Also built a QT tool for verifying 3D capture accuracy.</p>
              </div>

              <div className={styles['timeline-entry']}>
                <h4>Senior Computer Vision Engineer</h4>
                <p className={styles['timeline-company']}>Stealth startup &middot; Guadalajara, Mexico</p>
                <p>Developed a React/Electron surgical planning app for a robotic system that communicated with a segmentation server to produce 3D representations from CT scans for implant placement.</p>
              </div>

              <div className={styles['timeline-entry']}>
                <h4>Computer Vision Engineering Lead</h4>
                <p className={styles['timeline-company']}>Drone company &middot; Guadalajara, Mexico</p>
                <p>Built a sub-5cm accurate photogrammetry pipeline from the ground up and shipped it to edge devices on every continent. It remains the fastest photogrammetry solution for drone mapping in the market. Optimized for GPU on ARM (Nvidia Jetson) and x86, generating billions of points with less than 7Gb of memory. 3 patents granted.</p>
              </div>

              <div className={styles['timeline-entry']}>
                <h4>PhD in Information Technologies and Communications</h4>
                <p className={styles['timeline-company']}>Monterrey, Mexico</p>
                <p>Visual tracking and 3D pose estimation for UAV navigation. Published 4 research articles including one at IROS. Research stay at University of Alberta, Canada on CAD-based 6DoF visual tracking.</p>
              </div>

            </div>

          </section>

        </Main>

        <Footer />

      </Container>

    </Layout>
  )
}
