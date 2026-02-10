import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Hero(){
  const { t } = useI18n()
  const highlights = t('hero.highlights') || []

  return (
    <section id="hero" className="pt-24 md:pt-28 pb-20 md:pb-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center rounded-full border border-raven-yellow/35 bg-raven-yellow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-raven-yellow">
            {t('hero.badge')}
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.96] text-white max-w-[18ch] sm:max-w-[20ch] lg:max-w-[22ch] mx-auto text-center">
            {t('hero.headline')}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-prose lg:max-w-[60ch] mx-auto">
            {t('hero.sub')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-panel"
              className="inline-flex items-center rounded-full bg-raven-yellow px-6 py-3 text-black font-semibold hover:bg-raven-yellow-2 transition"
            >
              {t('hero.primaryCta')}
            </a>
            <a
              href="#impact-panel"
              className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-3 text-zinc-200 font-semibold hover:border-raven-yellow hover:text-raven-yellow transition"
            >
              {t('problems.cta')}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {highlights.map((item, index) => (
              <span
                key={index}
                className="inline-flex h-10 items-center rounded-lg border border-zinc-800/80 bg-zinc-950/40 px-4 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/50 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
