"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const ease = [0.21, 0.6, 0.35, 1] as const;

export function HomeHero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <Image
          src={images.heroPrimary}
          alt="Made-to-order House of Darya rings, worn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas from-15% via-canvas/55 via-50% to-transparent to-80%" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas/90 to-transparent" />
      </motion.div>

      <div className="shell relative z-10 flex min-h-svh flex-col justify-center pb-24 pt-32">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="label text-gold"
          >
            Made-to-Order Fine Jewellery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease }}
            className="display mt-6 text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Jewellery that begins <em className="font-display italic text-gold">with you</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mt-7 max-w-md"
          >
            <span className="block text-[1.05rem] font-medium leading-7 text-ink">
              Some jewellery is made to be sold. Ours is made to be yours.
            </span>
            <span className="mt-4 block text-[0.95rem] leading-7 text-mist">
              Discover thoughtfully designed signature collections or commission a piece through our
              Home Atelier. Every House of Darya creation is personalised with intention, crafted
              with complete transparency, and made to become part of your story.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/home-atelier" className="btn-gold">
              Book Home Atelier
            </Link>
            <Link href="/collections" className="btn-line bg-canvas/40 backdrop-blur-sm">
              Explore Collections
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-2"
          >
            {["HUID Hallmarked", "IGI Certified Diamonds"].map((mark) => (
              <span key={mark} className="text-[0.62rem] uppercase tracking-[0.22em] text-mist">
                {mark}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
