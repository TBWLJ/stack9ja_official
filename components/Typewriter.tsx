'use client';

import React from 'react';

const TypeError = () => {
  return (
    <section id="back" className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/band.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.22),transparent_34%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            New seasons. New styles. New solutions.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Introducing limited-time colors for Kiosk-Link Band for
            Businesses.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-bold text-emerald-950 shadow-xl shadow-emerald-950/30 transition hover:bg-emerald-400"
            >
              Shop
            </a>

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TypeError;