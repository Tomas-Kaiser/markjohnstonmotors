import Image from "next/image";
import { MapPin, Navigation, Phone } from "lucide-react";
import { type Garage, mapHref, telHref } from "@/lib/site";

export function GarageCard({ garage, showImage = true }: { garage: Garage; showImage?: boolean }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-navy-900/10 bg-white shadow-sm">
      {showImage && (
        <div className="relative aspect-[4/3]">
          <Image
            src={garage.image}
            alt={garage.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold uppercase text-navy-900">{garage.name}</h3>
        <p className="mt-3 flex gap-2 text-navy-900/80">
          <MapPin className="mt-0.5 size-5 shrink-0 text-brand-red" aria-hidden />
          {garage.address}
        </p>
        <a
          href={telHref(garage.phone)}
          className="mt-2 flex items-center gap-2 font-semibold text-navy-900 hover:text-brand-red"
        >
          <Phone className="size-5 shrink-0 text-brand-red" aria-hidden />
          {garage.phone}
        </a>
        <div className="mt-6 flex flex-wrap gap-3 pt-0 sm:mt-auto sm:pt-6">
          <a
            href={telHref(garage.phone)}
            className="flex-1 rounded-md bg-navy-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-navy-800"
          >
            Call
          </a>
          <a
            href={mapHref(garage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-navy-900/20 px-4 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900"
          >
            <Navigation className="size-4" aria-hidden />
            Directions
          </a>
        </div>
      </div>
    </article>
  );
}
