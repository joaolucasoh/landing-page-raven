import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Problem(){
  const { t } = useI18n()
  const items = t('problems.items') || []

  return (
    <section id="maturity" className="py-20 md:py-24 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('problems.title')}</h2>
          <p className="mt-5 text-zinc-300 max-w-3xl mx-auto">{t('problems.subtitle')}</p>
        </div>

        <div className="mt-10">
          <div className="border-t border-zinc-800/80 text-center">
            {items.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="py-6 md:py-7 border-b border-zinc-800/70"
              >
                <div className="grid grid-cols-1 md:grid-cols-8 gap-3 md:gap-6 items-start">
                  <div className="md:col-span-3 text-raven-yellow text-sm font-semibold uppercase tracking-wide">
                    0{i + 1}
                  </div>
                  <div className="md:col-span-5 md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">{item.title}</h3>
                    <p className="mt-2.5 text-zinc-300/70 leading-relaxed max-w-2xl mx-auto md:mx-0">{item.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#impact-panel"
            className="inline-flex items-center rounded-full bg-raven-yellow px-6 py-3 text-black font-semibold hover:bg-raven-yellow-2 transition"
          >
            {t('problems.cta')}
          </a>
        </div>
      </motion.div>
    </section>
  )
}
