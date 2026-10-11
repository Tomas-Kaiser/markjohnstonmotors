export const site = {
  name: "Mark Johnston Motors",
  legalName: "Mark Johnston Motors Ltd.",
  tagline: "For all your motoring needs",
  url: "https://markjohnstonmotors.ie",
  email: "info@markjohnstonmotors.ie",
  description:
    "Trusted servicing, full diagnostics, NCT checks and repairs, and tyre services for all makes of cars and light commercial vehicles across three Wicklow garages in Rathnew, Blainroe and Wicklow Town.",
};

export type Garage = {
  id: string;
  name: string;
  town: string;
  address: string;
  phone: string;
  /** Precise Google Maps target (Eircode, listing or street) — not the business name, which Google resolves to the Blainroe listing. */
  mapQuery: string;
  /** Google Business listing, where one exists. */
  googleListing?: string;
  geo?: { lat: number; lng: number };
  image: string;
  imageAlt: string;
};

export const garages: Garage[] = [
  {
    id: "rathnew",
    name: "Rathnew Garage",
    town: "Rathnew",
    address: "Ballybeg, Rathnew, Co. Wicklow A67 Y602",
    phone: "087 678 9903",
    mapQuery: "A67 Y602",
    image: "/images/garage-rathnew.jpg",
    imageAlt: "Mark Johnston Motors sign listing car servicing, diagnostics, pre-NCT testing and A/C repair",
  },
  {
    id: "blainroe",
    name: "Blainroe Garage",
    town: "Blainroe",
    address: "Old Vartry Garage, Blainroe, Co. Wicklow",
    phone: "087 678 9903",
    mapQuery: "52.9516975,-6.0523865",
    googleListing: "https://maps.google.com/?cid=3545295119957239189",
    geo: { lat: 52.9516975, lng: -6.0523865 },
    image: "/images/garage-blainroe.jpg",
    imageAlt: "Garage building with a red roller door and tyre and puncture repair signage",
  },
  {
    id: "wicklow-town",
    name: "Wicklow Town Garage",
    town: "Wicklow Town",
    address: "2A New Street, Wicklow Town, Co. Wicklow A67 D542",
    phone: "087 625 3228",
    mapQuery: "2A New St, Corporation Lands, Wicklow, A67 D542",
    geo: { lat: 52.9791646, lng: -6.0393469 },
    image: "/images/garage-wicklow-town.jpg",
    imageAlt: "Mark Johnston Motors shopfront on New Street with red window frames",
  },
];

export const phoneLines = [
  { label: "Rathnew & Blainroe", phone: "087 678 9903" },
  { label: "Wicklow Town", phone: "087 625 3228" },
];

export const services = [
  {
    title: "Servicing & Repairs",
    body: "Comprehensive servicing and repairs for all makes of cars and light commercial vehicles, carried out by experienced technicians.",
    icon: "wrench",
  },
  {
    title: "Full Diagnostics",
    body: "Advanced diagnostic equipment to pinpoint faults quickly and get your vehicle running smoothly again.",
    icon: "gauge",
  },
  {
    title: "NCT Checks & Repairs",
    body: "Pre-NCT checks and any repairs needed so you go into your test with confidence and peace of mind.",
    icon: "clipboard",
  },
  {
    title: "Tyres & Punctures",
    body: "New tyres, fast puncture repairs and wheel balancing to keep you safe on Wicklow roads.",
    icon: "tyre",
  },
] as const;

export const serviceTypes = [
  "Full Diagnostics",
  "NCT Repair",
  "NCT Check",
  "Tyre / Puncture Repair",
  "General Maintenance",
  "Other",
];

export const telHref = (phone: string) => `tel:+353${phone.replace(/\s/g, "").replace(/^0/, "")}`;

export const mapHref = (g: Garage) =>
  g.googleListing ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.mapQuery)}`;
