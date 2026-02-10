import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/I18nProvider'
import RavenLogo from '../assets/raven-logo.png'

export default function ClientCarousel(){
  const { t } = useI18n()
  const items = t('clients.items') || []
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const count = items.length
  const autoplayMs = 4500

  useEffect(() => {
    if (count <= 1 || isPaused) return
    const stepMs = 50
    const step = stepMs / autoplayMs
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 1) {
          setCurrent((cur) => (cur + 1) % count)
          return 0
        }
        return next
      })
    }, stepMs)
    return () => window.clearInterval(timer)
  }, [count, isPaused])

  useEffect(() => {
    setProgress(0)
  }, [current])

  const visible = useMemo(() => {
    if (!count) return []
    const prev = (current - 1 + count) % count
    const next = (current + 1) % count
    return [items[prev], items[current], items[next]]
  }, [current, count, items])

  const goPrev = () => {
    setProgress(0)
    setCurrent((prev) => (prev - 1 + count) % count)
  }
  const goNext = () => {
    setProgress(0)
    setCurrent((prev) => (prev + 1) % count)
  }

  if (!count) return null

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

        <div
          className="mt-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visible.map((item, idx) => {
              const isCenter = idx === 1
              return (
                <article
                  key={`${item.name}-${idx}`}
                  className={`rounded-xl border px-5 py-6 transition ${
                    isCenter
                      ? 'border-raven-yellow/45 bg-zinc-900/60'
                      : 'border-zinc-800/70 bg-zinc-950/40 md:scale-[0.98]'
                  }`}
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
                  <p className={`text-lg font-semibold ${isCenter ? 'text-white' : 'text-zinc-300'}`}>{item.name}</p>
                  <p className={`mt-2 text-sm ${isCenter ? 'text-zinc-300' : 'text-zinc-400'}`}>{item.segment}</p>
                </article>
              )
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-raven-yellow hover:text-raven-yellow transition"
              aria-label="Previous client"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setProgress(0)
                    setCurrent(index)
                  }}
                  className={`relative h-2.5 overflow-hidden rounded-full transition ${
                    index === current
                      ? 'w-8 bg-zinc-700'
                      : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                  aria-label={`Go to client ${index + 1}`}
                >
                  {index === current && (
                    <span
                      className="absolute inset-y-0 left-0 rounded-full bg-raven-yellow"
                      style={{ width: `${Math.max(6, progress * 100)}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:border-raven-yellow hover:text-raven-yellow transition"
              aria-label="Next client"
            >
              ›
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
