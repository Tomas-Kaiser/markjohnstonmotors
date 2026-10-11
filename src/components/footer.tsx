import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { garages, phoneLines, site, telHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-block rounded-lg bg-white p-3">
            <Image src="/images/logo.png" alt={site.legalName} width={900} height={381} className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Servicing, diagnostics, NCT and tyre work for all makes of cars and light commercial vehicles across
            Wicklow.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Our Garages</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {garages.map((g) => (
              <li key={g.id} className="text-sm">
                <p className="font-semibold text-white">{g.name}</p>
                <p className="mt-1 flex gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" aria-hidden />
                  {g.address}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-white">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {phoneLines.map((l) => (
              <li key={l.phone}>
                <a href={telHref(l.phone)} className="flex items-center gap-2 hover:text-white">
                  <Phone className="size-4 text-brand-red" aria-hidden />
                  <span>
                    {l.label}: <span className="font-semibold text-white">{l.phone}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="size-4 shrink-0 text-brand-red" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/contact#request"
            className="mt-6 inline-block rounded-md bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark"
          >
            Request a Service
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/60 sm:px-6 lg:px-8">
          © {site.legalName} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
