import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'

export default function Hero(){
  const { t } = useI18n()
  const highlights = t('hero.highlights') || []

  return (
    <section id="hero" className="pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="inline-flex items-center rounded-full border border-raven-yellow/40 bg-raven-yellow/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-raven-yellow">
            {t('hero.badge')}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white">
            {t('hero.headline')}
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-xl">{t('hero.sub')}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-raven-yellow px-6 py-3 text-black font-semibold hover:bg-raven-yellow-2 transition">
              {t('hero.primaryCta')}
            </a>
            <a href="#services" className="inline-flex items-center rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 hover:border-raven-yellow hover:text-raven-yellow transition">
              {t('hero.secondaryCta')}
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            {highlights.map((item, index) => (
              <div key={index} className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm font-semibold text-zinc-200">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 shadow-xl shadow-black/40"
        >
          <div className="text-sm font-semibold text-raven-yellow uppercase tracking-wide">Diagnostico inicial de QA</div>
          <h2 className="mt-3 text-2xl font-bold text-white">Descreva seu desafio de qualidade</h2>
          <p className="mt-2 text-zinc-400">Em poucos pontos, avaliamos riscos, maturidade de testes e oportunidades de automacao.</p>
          <form
            className="mt-6 space-y-3"
            action="https://formsubmit.co/joaolucas_oh@outlook.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Novo lead (Hero) - Raven Tech QA" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="nome" required className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Nome" />
            <input type="email" name="email" required className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Email corporativo" />
            <textarea name="mensagem" required className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 h-28 resize-none text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Stack, tipo de testes e principal dor" />
            <button type="submit" className="w-full rounded-xl bg-raven-yellow text-black font-semibold py-3 hover:bg-raven-yellow-2 transition">Receber plano inicial</button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
