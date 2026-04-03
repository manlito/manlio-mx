import styles from '../styles/Layout.module.css'
import { useLang } from '../contexts/LanguageContext'

const Menu = () => {
  const { lang, toggleLang } = useLang()

  return (
    <div className={styles.menu}>
      <div className={styles.name}>
        <a href="/">Manlio Barajas, <span style={{ fontWeight: "lighter" }}>PhD</span></a>
      </div>
      <div className={styles.links}>
        <button
          onClick={toggleLang}
          style={{
            background: 'none',
            border: '1px solid currentColor',
            color: 'inherit',
            cursor: 'pointer',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            marginRight: '10px',
            opacity: 0.7,
          }}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <a target="_blank" href="http://www.linkedin.com/in/manlio-barajas"><img src="/linkedin.svg" height="25" /></a>
      </div>
    </div>
  )
}

export default Menu;
