import React from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function Fit(){
  const { t } = useI18n()
  const quotes = t('fit.good') || []
  const points = t('fit.bad') || []

  return (
    <section id="fit" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <h4 className="text-2xl font-bold text-white">{t('fit.goodTitle')}</h4>
          <div className="mt-5 space-y-4 text-zinc-300 leading-relaxed">
            {quotes.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-black/50 p-8">
          <h4 className="text-2xl font-bold text-white">{t('fit.badTitle')}</h4>
          <ul className="mt-5 space-y-3 text-zinc-300">
            {points.map((text, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-raven-yellow" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
