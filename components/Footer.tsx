import React from 'react';
import Link from 'next/link';

const productLinks = [
  { label: 'Panelly', href: 'https://panelly.name.ng/' },
  { label: 'Shop4Mi', href: 'https://shop4mi.com.ng/' },
  { label: 'Titos Corner', href: 'https://titoscorner.vercel.app/' },
  { label: 'Samaday Properties', href: 'https://samaday.com.ng/' },
];

const siteLinks = [
  { label: 'Company', href: '/company' },
  { label: 'Solutions', href: '/solution' },
  { label: 'Audit', href: '/audit' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src="/cp.png" className="h-10 w-auto" alt="Stack9Ja logo" />
            <span className="text-lg font-black text-slate-950">Stack9Ja</span>
          </div>
          <p className="mt-5 max-w-sm leading-7">
            We design and develop dependable technology platforms that help teams work smarter, launch faster, and serve customers with confidence.
          </p>
          <div className="mt-6 inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
            With Godliness and Excellence
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Products</h3>
          <div className="mt-5 space-y-3">
            {productLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block transition hover:text-emerald-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Company</h3>
          <div className="mt-5 space-y-3">
            {siteLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block transition hover:text-emerald-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Contact</h3>
          <div className="mt-5 space-y-3 leading-7">
            <p>Ogbomoso, Oyo State, Nigeria</p>
            <a className="block transition hover:text-emerald-700" href="mailto:info@cpal.com">
              info@cpal.com
            </a>
            <a className="block transition hover:text-emerald-700" href="tel:+2348120940814">
              +234 812 094 0814
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-6 text-center text-sm text-slate-500">
        © 2026 Stack9Ja Limited. Built for dependable digital transformation.
      </div>
    </footer>
  );
}
