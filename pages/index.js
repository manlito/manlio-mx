import styles from '../styles/Home.module.css'
import generalStyles from '../styles/General.module.css'
import { Layout, Container, Main } from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useT } from '../contexts/LanguageContext'

export default function Home() {
  const t = useT()

  return (
    <Layout >

      <Header />
      <Container>

        <Main>
          <Menu />

          <h1>{t('Applied computer vision', 'Visión computacional aplicada')}</h1>

          <section>
            <h2>
              {t('Showcase demo', 'Demo')}
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
              <span><b>Superpixel Mesh</b> / {t('Aligning a mesh to any image', 'Alineando una malla a cualquier imagen')}</span>
              <div className={styles['go-button']}>
                <button>{t('Read and try', 'Leer y probar')}</button>
              </div>
            </a>

            <div>
            </div>
          </section>

          <section>
            <h2>{t('Profile', 'Perfil')}</h2>

            <p>{t(
              'Computer vision engineer working on 3D reconstruction with some fullstack dev skills. Mostly working for US startups solving challenges for which computer vision has a solution.',
              'Ingeniero de visión computacional enfocado en reconstrucción 3D, con habilidades de desarrollo fullstack. Con experiencia sobre todo en startups gringas resolviendo retos donde la visión computacional es la solución.'
            )}</p>

            <h3>{t('Value proposition:', 'Propuesta de valor:')}</h3>

            <div className={styles.values}>

              <div className={styles.value}>
                <p>
                  {t('Production grade code.', 'Código listo para producción.')}
                &nbsp;<small>{t(
                  "No need to refactor everything upon completion. Research, code and productionize as it makes sense.",
                  'Sin necesidad de refactorizar todo al final. Investigación, código y producción conforme va teniendo sentido.'
                )}</small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  {t('Computer vision + full stack.', 'Visión computacional + full stack.')}
                &nbsp;<small>{t(
                  'Right time-to-market but some budget constraints? Fullstack duties covered too.',
                  'Buen time-to-market pero presupuesto apretado? Sin problema, el fullstack también se cubre.'
                )}</small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  {t('Culture and communication.', 'Cultura y comunicación.')}
                &nbsp;<small>{t(
                  '6 years of experience with US based companies. Main timezone is CST, yet flexible.',
                  '6 años de experiencia con empresas gringas. Zona horaria CST, pero flexible.'
                )}</small>
                </p>
              </div>

              <div className={styles.value}>
                <p>
                  {t('Complexity not a problem.', 'La complejidad no es bronca.')}
                &nbsp;<small>{t(
                  'Experience architecting and implementing year long projects smoothly. Coaching included.',
                  'Experiencia diseñando e implementando proyectos de más de un año sin bronca. Coaching incluido.'
                )}</small>
                </p>
              </div>

            </div>

            <div className={styles.hero} >
              <img src="deployment.svg" />
              <p>{t(
                'Code running in production across the 5 continents',
                'Código corriendo en producción en los 5 continentes'
              )}</p>
            </div>

            <h3>{t('Skills', 'Habilidades')}</h3>

            <div className={styles.skills}>

              <div className={styles.skill}>
                <div>
                  <h4>Classic Computer Vision</h4>
                  <ul>
                    <li>Structure from Motion</li>
                    <li>Bundle adjustment</li>
                    <li>Feature matching</li>
                    <li>{t('Intrinsics and rolling shutter model', 'Modelo de intrínsecos y rolling shutter')}</li>
                    <li>{t('GPS and control point optimization', 'Optimización de GPS y puntos de control')}</li>
                    <li>SDF Fusion</li>
                    <li>{t('Sensor fusion', 'Fusión de sensores')}</li>
                    <li>Pointcloud registration, ICP</li>
                    <li>Multiview stereo</li>
                    <li>{t('Color normalization', 'Normalización de color')}</li>
                    <li>{t('Surface reconstruction', 'Reconstrucción de superficies')}</li>
                    <li>Texture mapping</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Machine Learning</h4>
                  <ul>
                    <li><span className="tag is-small">Frameworks</span> Pytorch, HuggingFace transformers, drjit</li>
                    <li><span className="tag is-small">{t('Networks', 'Redes')}</span> Transformers, Roomformer, SALAD, Metric3D, Oneformer, DinoV2, VGGT</li>
                    <li><span className="tag is-small">VLM/LLM</span> Gemma3 (fine tuning)</li>
                  </ul>
                  <h4>{t('Rendering & Visualization', 'Renderizado y visualización')}</h4>
                  <ul>
                    <li><span className="tag is-small">Frameworks</span> mitsuba, pytorch3d</li>
                    <li><span className="tag is-small">{t('Methods', 'Métodos')}</span> Gaussian splatting, inverse rendering, {t('photometric optimization', 'optimización fotométrica')}</li>
                  </ul>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>{t('Software Engineering', 'Ingeniería de software')}</h4>
                  <ul>
                    <li><span className="tag is-small">{t('Languages', 'Lenguajes')}</span> C++, TS/JS, Python, Bash, Ruby, C#</li>
                    <li><span className="tag is-small">{t('Toolchain', 'Herramientas')}</span> CMake, GTest, pybind11, pytest</li>
                    <li><span className="tag is-small">Web</span> React, SvelteKit, emscripten</li>
                    <li><span className="tag is-small">{t('Mobile', 'Móvil')}</span> Android (classic and Compose)</li>
                    <li><span className="tag is-small">{t('Infra', 'Infraestructura')}</span> AWS, GCP, Vercel, Neon, Github Actions</li>
                    <li><span className="tag is-small">{t('Evaluation', 'Evaluación')}</span> Pachyderm, ArgoWorkflows</li>
                  </ul>
                </div>
              </div>

            </div>

            <h3>{t('Work experience', 'Experiencia laboral')}</h3>

            <div className={styles.skills}>

              <div className={styles.skill}>
                <div>
                  <h4>{t('Construction and insurance platform', 'Plataforma de construcción y seguros')}</h4>
                  <p><small>San Francisco, CA</small></p>
                  <p>{t(
                    'Scaling a 3D reconstruction pipeline now used for millions of reconstructions. Textured meshes for interior walkthroughs, a virtual experience that replaced a third-party vendor, and a WebAssembly-based bundle adjustment tool for CAD refinement.',
                    'Escalamiento de un pipeline de reconstrucción 3D que ahora se usa para millones de reconstrucciones. Mallas texturizadas para recorridos de interiores, una experiencia virtual que reemplazó a un proveedor externo, y una herramienta de bundle adjustment con WebAssembly para refinar CAD.'
                  )}</p>
                  <p><small><b>{t('Takeaways:', 'Aprendizajes:')}</b> {t(
                    'Shipping ML-heavy pipelines at scale, balancing accuracy with performance on mobile AR captures. 2 patents.',
                    'Llevar pipelines pesados de ML a escala, balancear precisión con rendimiento en capturas de AR móvil. 2 patentes.'
                  )}</small></p>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>{t('Knee Replacement company', 'Empresa de reemplazo de rodilla')}</h4>
                  <p><small>{t('Contract, Remote', 'Contrato, Remoto')}</small></p>
                  <p>{t(
                    'React-based CT segmentation editor for 3D visualization and a queue backend to run ML inference for reconstructing tibia and femur models. Part of an FDA-approved surgical planning system.',
                    'Editor de segmentación CT en React para visualización 3D y un backend con cola para correr inferencia ML y reconstruir modelos de tibia y fémur. Parte de un sistema de planificación quirúrgica aprobado por la FDA.'
                  )}</p>
                  <p><small><b>{t('Takeaways:', 'Aprendizajes:')}</b> {t(
                    'Working with medical imaging constraints and the rigor needed for FDA-grade software.',
                    'Restricciones de imagen médica y el rigor que necesita el software grado FDA.'
                  )}</small></p>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>{t('Drone company', 'Empresa de drones')}</h4>
                  <p><small>Guadalajara, Mexico</small></p>
                  <p>{t(
                    'Sub-5cm accurate photogrammetry pipeline from scratch, shipped to edge devices on every continent. Fastest SfM solution for drone mapping in the market. Optimized for GPU on ARM (Jetson) and x86, processing billions of points in under 7Gb. Later, contractor work on multi-sensor SLAM (LiDAR, GNSS, IMU, camera).',
                    'Pipeline de fotogrametría con precisión menor a 5cm desde cero, llevado a dispositivos edge en todos los continentes. La solución de SfM más rápida para mapeo con drones en el mercado. Optimizado para GPU en ARM (Jetson) y x86, procesando miles de millones de puntos en menos de 7Gb. Después, trabajo como contratista en SLAM multi-sensor (LiDAR, GNSS, IMU, cámara).'
                  )}</p>
                  <p><small><b>{t('Takeaways:', 'Aprendizajes:')}</b> {t(
                    'Building a product from zero, leading a team, and squeezing performance out of constrained hardware. 3 patents.',
                    'Construir un producto desde cero, liderar un equipo y sacarle todo el jugo a hardware limitado. 3 patentes.'
                  )}</small></p>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>Stealth startup</h4>
                  <p><small>Guadalajara, Mexico</small></p>
                  <p>{t(
                    'React/Electron surgical planning app for a robotic system that produced 3D representations from CT scans for implant placement.',
                    'App de planificación quirúrgica en React/Electron para un sistema robótico que generaba representaciones 3D a partir de tomografías para colocar implantes.'
                  )}</p>
                  <p><small><b>{t('Takeaways:', 'Aprendizajes:')}</b> {t(
                    'Bridging frontend UX with heavy 3D computation in a medical robotics context.',
                    'Conectar UX de frontend con cómputo 3D pesado en un contexto de robótica médica.'
                  )}</small></p>
                </div>
              </div>

              <div className={styles.skill}>
                <div>
                  <h4>{t('PhD research', 'Investigación de doctorado')}</h4>
                  <p><small>Monterrey, Mexico &amp; Edmonton, Canada</small></p>
                  <p>{t(
                    'Visual tracking and 3D pose estimation for UAV navigation. 4 published research articles including one at IROS. Research stay at University of Alberta on CAD-based 6DoF visual tracking.',
                    'Seguimiento visual y estimación de pose 3D para navegación de UAV. 4 artículos de investigación publicados, incluyendo uno en IROS. Estancia de investigación en la Universidad de Alberta sobre seguimiento visual 6DoF basado en CAD.'
                  )}</p>
                  <p><small><b>{t('Takeaways:', 'Aprendizajes:')}</b> {t(
                    'Going deep on a problem. The fundamentals of geometry and optimization used every day.',
                    'Meterle a fondo a un problema. Los fundamentos de geometría y optimización que se usan a diario.'
                  )}</small></p>
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
