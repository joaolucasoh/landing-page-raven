import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function HowWeWork(){
  const { t } = useI18n()
  const points = t('work.points') || []

  return (
    <section id="work" className="pt-14 pb-20 px-6 bg-black/20">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('work.title')}</h3>
          <p className="mt-5 text-zinc-300 max-w-3xl mx-auto leading-relaxed">{t('work.subtitle')}</p>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="border-t border-zinc-800/80 text-center">
            {points.map((point, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="py-6 md:py-7 border-b border-zinc-800/70"
              >
                <div className="grid grid-cols-1 md:grid-cols-8 gap-3 md:gap-6 items-start">
                  <div className="md:col-span-3 text-raven-yellow text-sm font-semibold uppercase tracking-wide">
                    0{index + 1}
                  </div>
                  <div className="md:col-span-5 md:text-left">
                    <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug max-w-2xl mx-auto md:mx-0">
                      {typeof point === 'string' ? point : point.title}
                    </h3>
                    {typeof point !== 'string' && (
                      <p className="mt-2.5 text-zinc-300/70 leading-relaxed max-w-2xl mx-auto md:mx-0">
                        {point.desc}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
