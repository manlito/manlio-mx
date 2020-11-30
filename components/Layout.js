import styles from '../styles/Layout.module.css'

const Main = (props) => (
  <div className={styles.main}>
    { props.children}
  </div>
)

const Layout = (props) => (
  <div>
    { props.children}
  </div>
)

const Container = (props) => (
  <div className={styles.container}>
    { props.children}
  </div>
)

export { Layout, Container, Main };