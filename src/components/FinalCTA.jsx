import React from 'react'
import { useI18n } from '../i18n/I18nProvider'

export default function FinalCTA(){
  const { t } = useI18n()

  return (
    <section id="contact" className="pt-12 pb-24 px-6">
      <div className="max-w-6xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('final.headline')}</h2>
            <p className="mt-4 text-zinc-300">{t('final.sub')}</p>
            <p className="mt-6 text-sm text-zinc-400">{t('final.calendlyPlaceholder')}</p>

            <div className="mt-8 space-y-2 text-zinc-200">
              <p><strong className="text-raven-yellow">Email:</strong> {t('final.details.email')}</p>
              <p><strong className="text-raven-yellow">Telefone:</strong> {t('final.details.phone')}</p>
              <p><strong className="text-raven-yellow">Escopo:</strong> {t('final.details.location')}</p>
            </div>
          </div>

          <form
            className="space-y-3"
            action="https://formsubmit.co/joaolucas_oh@outlook.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Novo lead (Contato) - Raven Tech QA" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="nome" required className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Nome" />
            <input type="email" name="email" required className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Email" />
            <input type="text" name="empresa" className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Empresa" />
            <textarea name="mensagem" required className="w-full rounded-xl border border-zinc-700 bg-black/60 px-4 py-3 h-28 resize-none text-zinc-100 focus:outline-none focus:ring-2 focus:ring-raven-yellow/30" placeholder="Contexto atual de QA e objetivo com testes" />
            <button type="submit" className="w-full rounded-xl bg-raven-yellow hover:bg-raven-yellow-2 text-black font-semibold py-3 transition">
              {t('final.cta')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
