import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import HowWeWork from './components/HowWeWork'
import LeadCapture from './components/LeadCapture'
import Fit from './components/Fit'
import FinalCTA from './components/FinalCTA'

export default function App(){
  return (
    <div className="min-h-screen bg-bg-dark text-zinc-100">
      <div className="page-glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <HowWeWork />
        <LeadCapture />
        <Fit />
        <FinalCTA />
      </main>
    </div>
  )
}
