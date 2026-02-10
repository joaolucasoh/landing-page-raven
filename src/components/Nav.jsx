import React from 'react'
import Logo from '../assets/raven-logo.png'
import { useI18n } from '../i18n/I18nProvider'

export default function Nav(){
  const { lang, setLang, t } = useI18n()
  const scrollToPanel = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/85 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button type="button" onClick={() => scrollToPanel('hero-panel')} className="flex items-center gap-3 text-left">
          <img src={Logo} alt="Raven Tech" className="w-[4.22rem] h-[4.22rem] rounded-lg object-cover" />
          <div>
            <div className="text-[1.37rem] font-bold leading-none text-white">Raven Tech</div>
            <div className="text-[0.92rem] text-zinc-400">Quality Engineering</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          <button type="button" onClick={() => scrollToPanel('maturity-panel')} className="hover:text-raven-yellow transition">{t('nav.services')}</button>
          <button type="button" onClick={() => scrollToPanel('impact-panel')} className="hover:text-raven-yellow transition">{t('nav.checklist')}</button>
          <button type="button" onClick={() => scrollToPanel('work-panel')} className="hover:text-raven-yellow transition">{t('nav.work')}</button>
          <button type="button" onClick={() => scrollToPanel('contact-panel')} className="hover:text-raven-yellow transition">{t('nav.contact')}</button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang('pt')}
            className={`text-lg leading-none px-2 py-1 rounded ${lang === 'pt' ? 'bg-raven-yellow/65 text-black/90' : 'opacity-70 hover:opacity-100'}`}
            aria-label="Português"
            title="Português"
          >
            🇧🇷
          </button>
          <button
            onClick={() => setLang('en')}
            className={`text-lg leading-none px-2 py-1 rounded ${lang === 'en' ? 'bg-raven-yellow/65 text-black/90' : 'opacity-70 hover:opacity-100'}`}
            aria-label="English"
            title="English"
          >
            🇬🇧
          </button>
          <button
            onClick={() => setLang('es')}
            className={`text-lg leading-none px-2 py-1 rounded ${lang === 'es' ? 'bg-raven-yellow/65 text-black/90' : 'opacity-70 hover:opacity-100'}`}
            aria-label="Español"
            title="Español"
          >
            🇪🇸
          </button>
          <button
            type="button"
            onClick={() => scrollToPanel('contact-panel')}
            className="hidden sm:inline-flex bg-raven-yellow hover:bg-raven-yellow-2 text-black rounded-full px-5 py-2.5 text-sm font-semibold transition"
          >
            {t('nav.book')}
          </button>
        </div>
      </div>
    </header>
  )
}
