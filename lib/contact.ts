import { site } from "@/lib/site";

const whatsappNumber = site.phone.replace(/\D/g, "");

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body?: string): string {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.email}?${params.join("&")}`;
}

export const telLink = `tel:${site.phone.replace(/\s/g, "")}`;
