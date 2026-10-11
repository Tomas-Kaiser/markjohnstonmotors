import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { garages, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Car Servicing, Diagnostics & NCT Repairs in Wicklow`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: site.name,
    images: [{ url: "/images/logo.png", width: 900, height: 381, alt: site.name }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": garages.map((g) => ({
    "@type": "AutoRepair",
    name: `${site.name} – ${g.name}`,
    url: site.url,
    email: site.email,
    telephone: `+353 ${g.phone.replace(/^0/, "")}`,
    address: { "@type": "PostalAddress", streetAddress: g.address, addressRegion: "Co. Wicklow", addressCountry: "IE" },
    ...(g.geo && { geo: { "@type": "GeoCoordinates", latitude: g.geo.lat, longitude: g.geo.lng } }),
    ...(g.googleListing && { hasMap: g.googleListing }),
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${barlow.variable} antialiased`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
