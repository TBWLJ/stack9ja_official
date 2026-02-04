"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "Company", href: "/company", current: false },
  { name: "Solutions", href: "/solution", current: false },
//   { name: "Resources", href: "/resources", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6 data-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 data-open:block" />
            </DisclosureButton>
          </div>

          {/* Left: Logo + Links */}
          <div className="flex flex-1 items-center justify-center sm:justify-start gap-10">
            <div className="flex shrink-0 items-center gap-2">
              <img src="cp.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-semibold text-gray-900 tracking-tight">
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
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600",
                    "relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-600 after:transition-all hover:after:w-full"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" />
            </button>

            {/* CTA Button */}
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              Get Started
            </a>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full focus:outline-none focus:ring-2 focus:ring-green-500">
                <span className="sr-only">Open user menu</span>
                <img
                  src="cp.png"
                  alt="User"
                  className="h-9 w-9 rounded-full border border-gray-200"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5 focus:outline-none data-closed:scale-95 data-closed:opacity-0 transition"
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </a>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden border-t border-gray-200 bg-white">
        <div className="space-y-1 px-4 py-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-green-50 text-green-600"
                  : "text-gray-700 hover:bg-gray-100",
                "block rounded-lg px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          <a
            href="/contact"
            className="block rounded-lg bg-green-600 px-3 py-2 text-center font-semibold text-white hover:bg-green-700"
          >
            Get Started
          </a>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
