import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'
import RavenLogo from '../assets/raven-logo.png'

export default function ClientCarousel(){
  const { t } = useI18n()
  const items = t('clients.items') || []
  if (!items.length) return null

  const marqueeItems = [...items, ...items]

  return (
    <section id="clients" className="py-16 md:py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('clients.title')}</h3>
        <p className="mt-4 text-zinc-300 max-w-3xl mx-auto">{t('clients.subtitle')}</p>

        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="client-marquee-track">
            {marqueeItems.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="client-marquee-card rounded-xl border border-zinc-800/70 bg-zinc-950/50 px-6 py-6"
              >
                <div className="mx-auto mb-4 flex h-28 items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-[6.6rem] w-auto object-contain opacity-95"
                    style={{ transform: `scale(${item.logoScale || 1})` }}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = RavenLogo
                    }}
                  />
                </div>
                <p className="text-lg font-semibold text-zinc-200">{item.name}</p>
                <p className="mt-2 text-sm text-zinc-400">{item.segment}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
