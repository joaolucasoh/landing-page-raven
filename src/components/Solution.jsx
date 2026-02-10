import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Solution(){
  const { t } = useI18n()
  const bullets = t('solution.bullets') || []

  return (
    <section className="pt-8 pb-12 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div className="text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white">{t('solution.title')}</h3>
          <p className="mt-4 text-zinc-300 max-w-xl">{t('solution.subtitle')}</p>
        </div>
        <div className="space-y-3">
          {bullets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-4"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-raven-yellow" />
              <div className="text-zinc-200 font-medium">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
