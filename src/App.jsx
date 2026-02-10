import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import FinalCTA from './components/FinalCTA'

export default function App(){
  return (
    <div className="min-h-screen bg-bg-dark text-zinc-100">
      <div className="page-glow" aria-hidden="true" />
      <Nav />
      <main>
        <section id="hero-panel">
          <Hero />
        </section>
        <section id="maturity-panel">
          <Problem />
        </section>
        <section id="impact-panel">
          <Services />
        </section>
        <section id="work-panel">
          <HowWeWork />
        </section>
        <section id="contact-panel">
          <FinalCTA />
        </section>
      </main>
    </div>
  )
}
