'use client';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeError = () => {
  return (
    <section id="back" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.22),transparent_34%)]" />
      <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
            Trusted digital product partner for growing businesses
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Build technology your customers can trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Stack9Ja designs and develops secure web, mobile, cloud, commerce, and automation platforms with the clarity, quality, and support serious teams expect.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-emerald-950 shadow-xl shadow-emerald-950/30 transition hover:bg-emerald-400"
            >
              Start a project
            </a>
            <a
              href="/solution"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              View solutions
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {['Discovery first', 'Secure builds', 'Launch support', 'Clear reporting'].map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
            We deliver{' '}
            <span className="text-white">
              <Typewriter
                words={['web applications', 'mobile applications', 'cloud systems', 'cybersecurity guidance', 'digital commerce']}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1500}
                cursorBlinking={false}
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default  TypeError;
