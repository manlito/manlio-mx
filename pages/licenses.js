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

          <h1>Licenses and attributions.</h1>

          <p>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </p>

          <p>
            <a href="http://ceres-solver.org/">ceres-solver</a> is licensed under the New <a href="https://github.com/ceres-solver/ceres-solver/blob/master/LICENSE">BSD license</a>. Copyright 2015 Google Inc. All rights reserved.
          </p>

          <p>
            <a href="http://eigen.tuxfamily.org/index.php?title=Main_Page">Eigen</a> is licensed under the <a href="https://www.mozilla.org/en-US/MPL/2.0/">MPL2</a>.
          </p>

          <p>
          <a href="https://github.com/manlito/superpixel-mesh">superpixel-mesh</a> is licensed under <a href="https://github.com/manlito/superpixel-mesh/blob/main/LICENSE">MIT</a>.
          </p>

        </Main>

        <Footer />

      </Container>

    </Layout>
  )
}
