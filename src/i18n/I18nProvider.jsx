import React, { createContext, useContext, useEffect, useState } from 'react'
import translations from './translations'

const I18nContext = createContext()

export function I18nProvider({ children }){
  const defaultLang = typeof window !== 'undefined' ? (localStorage.getItem('raven_lang') || 'pt') : 'pt'
  const [lang, setLang] = useState(defaultLang)

  useEffect(()=>{
    try { localStorage.setItem('raven_lang', lang) } catch(e){}
  }, [lang])

  const t = (path) => {
    const parts = path.split('.')
    let cur = translations[lang] || translations.pt
    for(const p of parts){
      if(!cur) return ''
      cur = cur[p]
    }
    return typeof cur === 'string' ? cur : cur
  }

  return (
    <I18nContext.Provider value={{lang, setLang, t}}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(){
  return useContext(I18nContext)
}
