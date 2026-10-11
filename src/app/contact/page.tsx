import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GarageCard } from "@/components/garage-card";
import { garages, site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us & Book a Service",
  description:
    "Contact Mark Johnston Motors in Rathnew, Blainroe or Wicklow Town, or request a service online for diagnostics, NCT checks and repairs, tyres and general maintenance.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="font-display text-lg font-bold uppercase tracking-widest text-brand-red">Get in touch</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold uppercase text-white sm:text-6xl">Contact us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Call your nearest garage, drop us an email, or request a service below and we&apos;ll get back to you
            promptly.
          </p>
        </div>
        <div className="h-1.5 bg-brand-red" />
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {garages.map((g) => (
              <GarageCard key={g.id} garage={g} showImage={false} />
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-xl bg-navy-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                <Mail className="size-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold uppercase">Email us</h2>
                <p className="text-white/80">For general enquiries and service requests</p>
              </div>
            </div>
            <a href={`mailto:${site.email}`} className="break-all text-lg font-semibold underline-offset-4 hover:underline">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <section id="request" className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold uppercase text-navy-900 sm:text-5xl">Request a service</h2>
          <p className="mt-3 mb-8 text-lg text-navy-900/80">
            Fill out the form and our team will get back to you to schedule your vehicle service.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
