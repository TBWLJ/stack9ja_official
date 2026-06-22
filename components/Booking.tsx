import React from 'react';

const Booking = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          {/* Badge */}
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
            Newsletter
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Stay updated with Beitora
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Get product updates, fintech insights, company news, and exclusive
            announcements delivered directly to your inbox.
          </p>

          {/* Form */}
          <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 sm:max-w-md"
            />

            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-emerald-400"
            >
              Subscribe
            </button>
          </form>

          {/* Footer Text */}
          <p className="mt-4 text-sm text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;