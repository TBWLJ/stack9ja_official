import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const productLinks = [
  { label: "Panelly", href: "https://panelly.name.ng" },
  { label: "Finswitz", href: "https://finswitz.com" },
  { label: "ListingJet", href: "https://listingjet.name.ng" },
  { label: "Mivelo", href: "https://mivelo.name.ng" },
];


export default function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-linear-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="py-12">
          <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  Let's build something remarkable.
                </h2>
                <p className="mt-2 text-slate-600">
                  We help businesses launch reliable digital products with
                  speed, clarity, and excellence.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/beito.png"
                alt="Beitora"
                className="h-10 w-auto"
              />

              <span className="text-xl font-semibold tracking-tight text-slate-950">
                Beitora
              </span>
            </div>

            <p className="mt-5 max-w-sm leading-7 text-slate-600">
              Building dependable technology products that help teams work
              smarter, grow faster, and serve customers better.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
              Powering business systems across emerging markets.
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Products
            </h3>

            <div className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-slate-600 transition hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Company
            </h3>

            <div className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-slate-600 transition hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-950">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-emerald-700" />
                <span>Ogbomoso, Oyo State, Nigeria</span>
              </div>

              <a
                href="mailto:hello@beitora.com"
                className="flex items-center gap-3 transition hover:text-emerald-700"
              >
                <EnvelopeIcon className="h-5 w-5 text-emerald-700" />
                hello@beitora.com
              </a>

              <a
                href="tel:+2348120940814"
                className="flex items-center gap-3 transition hover:text-emerald-700"
              >
                <PhoneIcon className="h-5 w-5 text-emerald-700" />
                +234 812 094 0814
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Beitora. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-700">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-emerald-700">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}