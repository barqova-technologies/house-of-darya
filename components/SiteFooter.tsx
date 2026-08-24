import Link from "next/link";
import { Logo } from "@/components/Logo";
import { TrustMarks } from "@/components/TrustMarks";
import { site } from "@/lib/site";
import { collections } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-veil/60">
      <div className="shell py-12">
        <TrustMarks compact />
      </div>
      <div className="hairline" />
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo className="h-12 w-auto" />
          <p className="max-w-xs text-sm leading-6 text-mist">
            100% made-to-order diamond and gemstone jewellery, designed with you and crafted for
            you alone. Home Atelier service, by appointment.
          </p>
        </div>
        <div>
          <p className="label mb-5 text-[0.62rem] text-gold">Collections</p>
          <ul className="space-y-3">
            {collections.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/collections/${c.slug}`}
                  className="text-sm text-mist transition-colors hover:text-gold"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-5 text-[0.62rem] text-gold">The House</p>
          <ul className="space-y-3">
            {[
              { href: "/home-atelier", label: "Home Atelier" },
              { href: "/customise", label: "Customise a Design" },
              { href: "/consultation", label: "Request Consultation" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-mist transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label mb-5 text-[0.62rem] text-gold">Atelier</p>
          <ul className="space-y-3 text-sm text-mist">
            <li>{site.city}, Uttar Pradesh</li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp the Atelier
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="shell flex flex-col items-center justify-between gap-3 py-7 text-[0.68rem] uppercase tracking-[0.2em] text-mist sm:flex-row">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Made-to-Order Fine Jewellery</span>
        <span>
          Crafted by{" "}
          <a
            href="https://barqova.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold transition-colors hover:text-gold-soft"
          >
            Barqova Technologies
          </a>
        </span>
      </div>
    </footer>
  );
}
