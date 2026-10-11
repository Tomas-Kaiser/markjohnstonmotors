"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { garages, serviceTypes } from "@/lib/site";
import { type FormState, requestService } from "./actions";

const initialState: FormState = { status: "idle", message: "" };

const inputClass =
  "mt-1.5 block w-full rounded-md border border-navy-900/20 bg-white px-3.5 py-2.5 text-navy-950 shadow-sm outline-none transition focus:border-navy-700 focus:ring-2 focus:ring-navy-700/20 aria-[invalid=true]:border-brand-red";

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-brand-red">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(requestService, initialState);
  const e = state.errors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-xl bg-white p-10 text-center shadow-sm" role="status">
        <CheckCircle2 className="size-12 text-green-600" aria-hidden />
        <p className="mt-4 text-lg font-semibold text-navy-900">{state.message}</p>
      </div>
    );
  }

  const aria = (name: keyof typeof e) =>
    e[name] ? { "aria-invalid": true, "aria-describedby": `${name}-error` } : {};

  return (
    <form action={formAction} className="grid gap-5 rounded-xl bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field id="name" label="Your name" error={e.name}>
        <input id="name" name="name" required autoComplete="name" defaultValue={v.name} className={inputClass} {...aria("name")} />
      </Field>
      <Field id="email" label="Email address" error={e.email}>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={v.email}
          className={inputClass}
          {...aria("email")}
        />
      </Field>
      <Field id="phone" label="Phone number" error={e.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          defaultValue={v.phone}
          className={inputClass}
          {...aria("phone")}
        />
      </Field>
      <Field id="garage" label="Preferred garage" error={e.garage}>
        <select id="garage" name="garage" required defaultValue={v.garage ?? ""} className={inputClass} {...aria("garage")}>
          <option value="" disabled>
            Select a location
          </option>
          {garages.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name} – {g.address.split(",")[0]}
            </option>
          ))}
        </select>
      </Field>
      <Field id="vehicle" label="Vehicle make & model" error={e.vehicle}>
        <input
          id="vehicle"
          name="vehicle"
          placeholder="e.g. Toyota Corolla 2018"
          defaultValue={v.vehicle}
          className={inputClass}
        />
      </Field>
      <Field id="service" label="Type of service" error={e.service}>
        <select id="service" name="service" required defaultValue={v.service ?? ""} className={inputClass} {...aria("service")}>
          <option value="" disabled>
            Select service type
          </option>
          {serviceTypes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field id="message" label="Additional details" error={e.message} className="sm:col-span-2">
        <textarea id="message" name="message" rows={5} defaultValue={v.message} className={inputClass} {...aria("message")} />
      </Field>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-brand-red px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark disabled:opacity-60"
        >
          {pending ? "Sending…" : "Request Service"}
        </button>
        {state.status === "error" && (
          <p className="text-sm font-medium text-brand-red" role="alert">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
