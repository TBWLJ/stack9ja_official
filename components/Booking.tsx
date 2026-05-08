import React from 'react'
import Link from 'next/link';

const Booking = () => {
  return (
    <section className="bg-slate-950 px-5 py-20 text-center text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">Get started</p>
        <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
          Ready to build a product people can trust?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Tell us what you want to improve. We will help you shape the right plan, timeline, and next step.
        </p>
        <div className="mt-10">
        <Link href="/contact">
          <button className="rounded-lg bg-emerald-500 px-8 py-4 text-base font-black text-emerald-950 shadow-xl shadow-black/20 transition hover:bg-emerald-400">Request a callback</button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Booking
