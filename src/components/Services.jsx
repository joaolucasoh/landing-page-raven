import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Services(){
  const { t } = useI18n()
  const cards = t('services.cards') || []
  const scrollToPanel = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="impact" className="py-20 md:py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('services.title')}</h3>
          <p className="mt-5 text-zinc-300 max-w-3xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {cards[0] && (
            <motion.article
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.4 }}
              className="border border-zinc-800/70 bg-zinc-950/50 rounded-xl p-6 md:p-7"
            >
              <h4 className="text-xl md:text-2xl font-semibold text-white leading-snug">{cards[0].title}</h4>
              <p className="mt-3 text-zinc-400 leading-relaxed">{cards[0].desc}</p>
            </motion.article>
          )}

          {cards.slice(1).map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border border-zinc-800/60 bg-zinc-950/30 rounded-xl p-5"
            >
              <h4 className="text-lg font-semibold text-white leading-snug">{c.title}</h4>
              <p className="mt-2.5 text-zinc-400 leading-relaxed text-sm">{c.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToPanel('contact-panel')}
            className="inline-flex items-center rounded-full bg-raven-yellow px-6 py-3 text-black font-semibold hover:bg-raven-yellow-2 transition"
          >
            {t('services.cta')}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
