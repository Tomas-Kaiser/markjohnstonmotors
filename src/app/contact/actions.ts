"use server";

import { garages, serviceTypes, site } from "@/lib/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<FieldName, string>>;
  values?: Partial<Record<FieldName, string>>;
};

type FieldName = "name" | "email" | "phone" | "garage" | "vehicle" | "service" | "message";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

const str = (fd: FormData, key: string) => String(fd.get(key) ?? "").trim();

export async function requestService(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real visitors never see or fill this field.
  if (str(formData, "company")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const values = {
    name: str(formData, "name"),
    email: str(formData, "email"),
    phone: str(formData, "phone"),
    garage: str(formData, "garage"),
    vehicle: str(formData, "vehicle"),
    service: str(formData, "service"),
    message: str(formData, "message"),
  };

  const errors: FormState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (!garages.some((g) => g.id === values.garage)) errors.garage = "Please choose a garage.";
  if (!serviceTypes.includes(values.service)) errors.service = "Please choose a service type.";
  if (values.message.length > 2000) errors.message = "Please keep your message under 2000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const garage = garages.find((g) => g.id === values.garage)!;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Garage: ${garage.name} (${garage.address})`,
    `Vehicle: ${values.vehicle || "—"}`,
    `Service: ${values.service}`,
    "",
    values.message || "(no additional details)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[service request – email not configured]\n" + body);
      return { status: "success", message: "Thanks! (Dev mode: request logged to the server console.)" };
    }
    console.error("RESEND_API_KEY is not set; service request could not be delivered.");
    return {
      status: "error",
      message: `Sorry, online requests are unavailable right now. Please call us on ${garage.phone}.`,
      values,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? `Website <noreply@${new URL(site.url).hostname}>`,
      to: process.env.CONTACT_TO_EMAIL ?? site.email,
      reply_to: values.email,
      subject: `Service request: ${values.service} – ${garage.town}`,
      text: body,
    }),
  });

  if (!res.ok) {
    console.error("Failed to send service request", res.status, await res.text());
    return {
      status: "error",
      message: `Sorry, something went wrong sending your request. Please call us on ${garage.phone}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks! Your request has been sent and our team will be in touch shortly.",
  };
}
