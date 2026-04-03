import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) setLang(saved)
  }, [])

  const toggleLang = () => {
    const next = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

export function useT() {
  const { lang } = useLang()
  return (en, es) => lang === 'es' ? es : en
}
