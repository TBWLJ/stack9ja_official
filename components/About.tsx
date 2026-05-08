import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Who we are</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            A technology partner built around confidence, not guesswork.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Stack9Ja develops and deploys practical technology platforms for organizations that need dependable execution, thoughtful design, and long-term support after launch.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Strategy', 'Clear scope before development starts.'],
              ['Delivery', 'Modern engineering with milestone visibility.'],
              ['Support', 'Guidance that continues after handoff.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-emerald-950/10 bg-emerald-950 p-6 text-white shadow-2xl shadow-emerald-950/20">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <img src="/cp.png" alt="Stack9Ja logo" className="h-14 w-auto rounded-lg bg-white p-2" loading="lazy" />
            <div>
              <p className="text-sm text-emerald-200">Operating principle</p>
              <h3 className="text-2xl font-black">Excellence with accountability</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['7+', 'client and product brands supported'],
              ['4', 'core product engineering services'],
              ['24h', 'typical first response window'],
              ['Africa', 'solutions designed for local realities'],
            ].map(([value, label]) => (
              <div key={value} className="rounded-lg bg-white/10 p-5">
                <p className="text-3xl font-black text-emerald-300">{value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-200">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/company" className="rounded-lg bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50">
              Learn about us
            </Link>
            <Link href="/company#why" className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Why teams choose us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
