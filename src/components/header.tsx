"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { phoneLines, telHref } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#garages", label: "Our Garages" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Mark Johnston Motors Ltd – home"
            width={900}
            height={381}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-900 transition-colors hover:text-brand-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref(phoneLines[0].phone)}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-900 lg:flex"
          >
            <Phone className="size-4 text-brand-red" aria-hidden />
            {phoneLines[0].phone}
          </a>
          <Link
            href="/contact#request"
            className="rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
          >
            Book a Service
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-navy-900/10 bg-white md:hidden" aria-label="Mobile">
          <ul className="space-y-1 px-4 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 font-semibold text-navy-900 hover:bg-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact#request"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-brand-red px-3 py-3 text-center font-semibold text-white"
              >
                Book a Service
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
