import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function LeadCapture(){
  const { t } = useI18n()
  const cases = t('lead.cases') || []

  return (
    <section id="checklist" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white">{t('lead.title')}</h3>
        <p className="mt-4 text-zinc-300">{t('lead.subtitle')}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="text-xs uppercase tracking-wide font-bold text-raven-yellow">{item.client}</div>
              <p className="mt-3 text-zinc-300 leading-relaxed">{item.summary}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          <button className="rounded-full bg-raven-yellow text-black font-semibold px-6 py-3 hover:bg-raven-yellow-2 transition">
            {t('lead.button')}
          </button>
          <p className="text-sm text-zinc-400">{t('lead.disclaimer')}</p>
        </div>
      </div>
    </section>
  )
}
