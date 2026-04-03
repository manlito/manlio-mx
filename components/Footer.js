import styles from '../styles/Layout.module.css'
import { useT } from '../contexts/LanguageContext'

const Footer = () => {
  const t = useT()

  return (
    <footer className={styles.footer}>
      <span>Manlio Barajas / <a href="mailto:manlito@gmail.com">manlito@gmail.com</a></span>
      <span className={styles['footer-sep']}>&nbsp;/&nbsp;</span>
      <span>{t('Applied computer vision', 'Visión computacional aplicada')}</span>
      <span className={styles['footer-sep']}>&nbsp;/&nbsp;</span>
      <span><a href="/licenses">{t('Licenses', 'Licencias')}</a></span>
    </footer>
  )
}

export default Footer;
