import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, CircleDot, ClipboardCheck, Gauge, Phone, Wrench } from "lucide-react";
import { GarageCard } from "@/components/garage-card";
import { garages, phoneLines, services, telHref } from "@/lib/site";

const serviceIcons = {
  wrench: Wrench,
  gauge: Gauge,
  clipboard: ClipboardCheck,
  tyre: CircleDot,
};

const highlights = [
  "All makes of cars & light commercial vehicles",
  "Experienced, friendly local technicians",
  "Three garages across Wicklow",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950">
        <Image
          src="/images/mechanic-engine.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="font-display text-lg font-bold uppercase tracking-widest text-brand-red">
            For all your motoring needs
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Expert care for your vehicle
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Professional servicing, diagnostics and NCT repairs across three convenient Wicklow locations in
            Rathnew, Blainroe and Wicklow Town.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#request"
              className="rounded-md bg-brand-red px-7 py-3.5 text-center font-semibold text-white shadow-lg transition-colors hover:bg-brand-red-dark"
            >
              Book a Service
            </Link>
            <a
              href={telHref(phoneLines[0].phone)}
              className="flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-5" aria-hidden />
              Call {phoneLines[0].phone}
            </a>
          </div>
        </div>
        <div className="h-1.5 bg-brand-red" />
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="font-display text-base font-bold uppercase tracking-widest text-brand-red">About us</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-navy-900 sm:text-5xl">
              Wicklow&apos;s trusted local garage
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-900/80">
              <p>
                Mark Johnston Motors Ltd. is a trusted automotive repair shop serving the Wicklow area with three
                convenient locations across Rathnew, Blainroe and Wicklow Town.
              </p>
              <p>
                From full diagnostics and NCT repairs to tyre services and routine maintenance, our experienced
                technicians provide comprehensive care for all makes of cars and light commercial vehicles.
              </p>
              <p>
                We combine technical expertise with friendly local service — reliable maintenance and repairs that
                drivers throughout Wicklow can trust.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 font-semibold text-navy-900">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-red" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -right-3 -bottom-3 h-full w-full rounded-2xl bg-brand-red sm:-right-5 sm:-bottom-5" />
            <Image
              src="/images/mechanic-engine.jpg"
              alt="Technician in work gloves servicing a car engine"
              width={940}
              height={788}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-base font-bold uppercase tracking-widest text-brand-red">What we do</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-navy-900 sm:text-5xl">
              Our services
            </h2>
            <p className="mt-4 text-lg text-navy-900/80">
              Expert automotive care across three convenient locations in Wicklow.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <article
                  key={s.title}
                  className="group rounded-xl border-t-4 border-brand-red bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold uppercase text-navy-900">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy-900/75">{s.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Garages */}
      <section id="garages" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-base font-bold uppercase tracking-widest text-brand-red">Find us</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-navy-900 sm:text-5xl">
              Our garages
            </h2>
            <p className="mt-4 text-lg text-navy-900/80">
              Visit any of our three locations across Wicklow for expert servicing and repairs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {garages.map((g) => (
              <GarageCard key={g.id} garage={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-navy-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase text-white">Call us today</h2>
            <p className="mt-2 text-white/80">Speak to the team or request a service online.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {phoneLines.map((l) => (
              <a
                key={l.phone}
                href={telHref(l.phone)}
                className="flex items-center gap-3 rounded-md bg-white/10 px-5 py-3 text-white transition-colors hover:bg-white/20"
              >
                <Phone className="size-5 text-brand-red" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-wide text-white/70">{l.label}</span>
                  <span className="font-semibold">{l.phone}</span>
                </span>
              </a>
            ))}
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
