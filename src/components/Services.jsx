import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Services(){
  const { t } = useI18n()
  const cards = t('services.cards') || []

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">{t('services.title')}</h3>
            <p className="mt-3 text-zinc-300">{t('services.subtitle')}</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h4 className="text-xl font-semibold text-white">{c.title}</h4>
              <p className="mt-3 text-zinc-400">{c.desc}</p>
              <a href="#contact" className="mt-6 inline-flex text-raven-yellow font-semibold hover:text-raven-yellow-2 transition">
                {c.cta} <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
