import React from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function HowWeWork(){
  const { t } = useI18n()
  const points = t('work.points') || []
  const stats = t('work.stats') || []

  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl bg-zinc-950 border border-zinc-800 text-white p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">{t('work.title')}</h3>
            <p className="mt-4 text-zinc-300 max-w-xl">{t('work.subtitle')}</p>
            <ul className="mt-8 space-y-3 text-zinc-200">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-raven-yellow" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((item, index) => (
              <article key={index} className="rounded-xl bg-black/50 border border-zinc-700 p-5">
                <div className="text-3xl font-extrabold text-raven-yellow">{item.value}</div>
                <div className="text-sm text-zinc-300 mt-1">{item.label}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
