import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Problem(){
  const { t } = useI18n()
  const items = t('problems.items') || []

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t('problems.title')}</h2>
        <p className="mt-4 text-zinc-300 max-w-3xl">{t('problems.subtitle')}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-raven-yellow/15 text-raven-yellow grid place-items-center font-bold">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
