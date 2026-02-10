import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'
import CalendlyModal from './CalendlyModal'

export default function FinalCTA(){
  const { t } = useI18n()
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false)

  const openCalendly = useCallback(() => {
    setIsCalendlyOpen(true)
  }, [])

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false)
  }, [])

  const scrollToForm = useCallback((event) => {
    event.preventDefault()
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <section id="contact" className="pt-16 pb-24 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{t('final.headline')}</h2>
            <p className="mt-5 text-zinc-300 leading-relaxed max-w-3xl mx-auto">{t('final.sub')}</p>

            <div className="mt-8">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center justify-center rounded-full bg-raven-yellow px-8 py-4 text-base md:text-lg font-semibold text-black hover:bg-raven-yellow-2 transition"
              >
                {t('final.calendly.button')}
              </button>
              <p className="mt-6 text-sm text-zinc-500">
                <a href="#contact-form" onClick={scrollToForm} className="hover:text-zinc-300 transition">
                  {t('final.calendly.secondary')}
                </a>
              </p>
              <p className="mt-4 text-sm text-zinc-400">{t('final.calendlyPlaceholder')}</p>
            </div>

            <div className="mt-8 space-y-2 text-zinc-300 text-sm">
              <p><span className="text-raven-yellow font-semibold">{t('final.labels.email')}:</span> {t('final.details.email')}</p>
              <p><span className="text-raven-yellow font-semibold">{t('final.labels.phone')}:</span> {t('final.details.phone')}</p>
              <p><span className="text-raven-yellow font-semibold">{t('final.labels.coverage')}:</span> {t('final.details.location')}</p>
            </div>
          </div>

          <form
            id="contact-form"
            className="mt-10 space-y-3 border border-zinc-800/70 bg-zinc-950/45 rounded-2xl p-5 md:p-6 text-left max-w-3xl mx-auto"
            action="https://formsubmit.co/hello@ravenqe.io"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Novo diagnóstico Raven Tech" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="name" required className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder={t('final.form.name')} />
            <input type="email" name="email" required className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder={t('final.form.email')} />
            <input type="text" name="company" className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder={t('final.form.company')} />
            <textarea name="message" required className="w-full rounded-xl border border-zinc-700 bg-black/50 px-4 py-3 h-28 resize-none text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder={t('final.form.message')} />
            <button type="submit" className="w-full rounded-xl bg-raven-yellow hover:bg-raven-yellow-2 text-black font-semibold py-3 transition">{t('final.cta')}</button>
          </form>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => document.getElementById('hero-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="text-sm text-zinc-400 hover:text-raven-yellow transition"
          >
            {t('final.backToTop')}
          </button>
        </div>
      </motion.div>

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={closeCalendly}
        title={t('final.calendly.modalTitle')}
        calendlyUrl={t('final.calendly.url')}
      />
    </section>
  )
}
