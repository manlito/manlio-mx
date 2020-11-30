import styles from '../styles/Layout.module.css'

const Menu = () => (
  <div className={styles.menu}>
    <div className={styles.name}>
      <a href="/">Manlio Barajas, <span style={{ fontWeight: "lighter" }}>PhD</span></a>
    </div>
    <div className={styles.links}>
      <a target="_blank" href="http://www.linkedin.com/in/manlio-barajas"><img src="/linkedin.svg" height="25" /></a>
    </div>
  </div>
)

export default Menu;