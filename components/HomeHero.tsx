"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const ease = [0.21, 0.6, 0.35, 1] as const;

export function HomeHero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-night">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease }}
        className="absolute inset-x-0 top-0 h-[78%] lg:inset-0 lg:h-full lg:w-[125%]"
      >
        <Image
          src={images.heroPrimary}
          alt="Made-to-order House of Darya rings, worn"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 125vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/75 via-42% to-transparent to-72% lg:hidden" />
      </motion.div>

      <div className="absolute inset-0 hidden bg-gradient-to-r from-night from-8% via-night/85 via-44% to-transparent to-72% lg:block" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night/60 to-transparent" />

      <div className="shell relative z-10 flex min-h-svh flex-col justify-end pb-14 pt-32 sm:pb-20 lg:justify-center lg:pb-24">
        <div className="max-w-md sm:max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="label text-white/60"
          >
            Made-to-Order Fine Jewellery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease }}
            className="display mt-5 text-[2.6rem] leading-[1.05] text-canvas sm:text-[3.4rem] lg:text-[4.2rem]"
          >
            Jewellery that begins
            <em className="mt-1 block font-display italic text-champagne">with you</em>
          </motion.h1>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.75, ease }}
            className="mt-7 hidden h-px w-16 origin-left bg-champagne/50 sm:block"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-6 max-w-sm text-[0.98rem] leading-7 text-white/70"
          >
            Some jewellery is made to be sold. Ours is made to be yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Link href="/home-atelier#book" className="btn bg-canvas text-night hover:bg-white">
              Book Home Atelier
            </Link>
            <Link
              href="/collections"
              className="btn border border-white/40 text-white transition-colors hover:border-white"
            >
              Explore Collections
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        aria-hidden="true"
        className="absolute bottom-10 right-12 z-10 hidden h-14 w-px overflow-hidden bg-white/20 lg:block"
      >
        <motion.span
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-full w-px bg-champagne"
        />
      </motion.span>
    </section>
  );
}
