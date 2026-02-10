import React from 'react'
import Logo from '../assets/raven-logo.png'
import { useI18n } from '../i18n/I18nProvider'

export default function Nav(){
  const { lang, setLang, t } = useI18n()

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/85 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero-panel" className="flex items-center gap-3">
          <img src={Logo} alt="Raven Tech" className="w-[4.22rem] h-[4.22rem] rounded-lg object-cover" />
          <div>
            <div className="text-[1.37rem] font-bold leading-none text-white">Raven Tech</div>
            <div className="text-[0.92rem] text-zinc-400">Quality Engineering</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-zinc-300">
          <a href="#maturity-panel" className="hover:text-raven-yellow transition">{t('nav.services')}</a>
          <a href="#impact-panel" className="hover:text-raven-yellow transition">{t('nav.checklist')}</a>
          <a href="#work-panel" className="hover:text-raven-yellow transition">{t('nav.work')}</a>
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
          <a
            href="#contact-panel"
            className="hidden sm:inline-flex bg-raven-yellow hover:bg-raven-yellow-2 text-black rounded-full px-5 py-2.5 text-sm font-semibold transition"
          >
            {t('nav.book')}
          </a>
        </div>
      </div>
    </header>
  )
}
