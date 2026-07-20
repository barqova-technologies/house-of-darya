"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";

const navItems = [
  { href: "/collections", label: "Collections" },
  { href: "/home-atelier", label: "Home Atelier" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-canvas/95 backdrop-blur-md transition-all duration-500 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="shell grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:text-gold ${
                pathname.startsWith(item.href) ? "text-gold" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 justify-self-start lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>

        <Logo className="h-12 w-auto justify-self-center sm:h-14" />

        <div className="hidden flex-col items-end justify-self-end lg:flex">
          <Link href="/home-atelier#book" className="btn-gold !px-6 !py-3">
            Book Home Atelier
          </Link>
          <Link
            href="/home-atelier"
            className="mt-1.5 text-[0.56rem] uppercase tracking-[0.2em] text-mist transition-colors hover:text-gold"
          >
            What is Home Atelier?
          </Link>
        </div>
        <span className="justify-self-end lg:hidden" aria-hidden="true" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.21, 0.6, 0.35, 1] }}
            className="overflow-hidden border-t border-line bg-canvas lg:hidden"
          >
            <nav className="shell flex flex-col py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="display block border-b border-line py-4 text-2xl text-ink transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/home-atelier"
                  className="block border-b border-line py-4 text-sm uppercase tracking-[0.2em] text-mist transition-colors hover:text-gold"
                >
                  What is Home Atelier?
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link href="/home-atelier#book" className="btn-gold w-full">
                  Book Home Atelier
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
