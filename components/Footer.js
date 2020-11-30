import styles from '../styles/Layout.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <span>Manlio Barajas / <a href="mailto:manlito@gmail.com">manlito@gmail.com</a></span>
    <span className={styles['footer-sep']}>&nbsp;/&nbsp;</span>
    <span>Applied computer vision</span>
  </footer>
)

export default Footer;