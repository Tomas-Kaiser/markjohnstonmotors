import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center">
      <p className="font-display text-lg font-bold uppercase tracking-widest text-brand-red">404</p>
      <h1 className="mt-2 font-display text-5xl font-extrabold uppercase text-navy-900">Page not found</h1>
      <p className="mt-4 text-lg text-navy-900/80">Sorry, we couldn&apos;t find the page you were looking for.</p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-brand-red px-6 py-3 font-semibold text-white hover:bg-brand-red-dark"
      >
        Back to home
      </Link>
    </section>
  );
}
