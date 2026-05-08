"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Company", href: "/company", current: false },
  { name: "Solutions", href: "/solution", current: false },
  { name: "Audit", href: "/audit", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-[4.5rem] items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 data-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 data-open:block" />
            </DisclosureButton>
          </div>

          {/* Left: Logo + Links */}
          <div className="flex flex-1 items-center justify-center sm:justify-start gap-10">
            <div className="flex shrink-0 items-center gap-2">
              <img src="/cp.png" alt="Stack9Ja logo" className="h-9 w-auto" />
              <span className="font-semibold text-slate-950 tracking-tight">
                Stack9Ja
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-emerald-700"
                      : "text-slate-700 hover:text-emerald-700",
                    "relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-emerald-600 after:transition-all hover:after:w-full"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/20 transition-colors hover:bg-emerald-800"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden border-t border-slate-200 bg-white">
        <div className="space-y-1 px-4 py-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-700 hover:bg-slate-100",
                "block rounded-lg px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          <a
            href="/contact"
            className="block rounded-lg bg-emerald-700 px-3 py-2 text-center font-semibold text-white hover:bg-emerald-800"
          >
            Book a consultation
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
