"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { reviews, type Review } from "@/lib/reviews";

const ease = [0.21, 0.6, 0.35, 1] as const;

const column: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const frame: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease } },
};

const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.8, ease } },
};

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-4%", "4%"]);

  return (
    <motion.figure
      ref={ref}
      className="flex w-[80vw] shrink-0 snap-start flex-col sm:w-[56vw] md:w-auto"
      variants={column}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delayChildren: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-veil">
        <motion.div variants={frame} className="absolute inset-0">
          <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[6%]">
            {review.image ? (
              <Image
                src={review.image}
                alt={review.alt ?? review.name}
                fill
                sizes="(max-width: 768px) 80vw, 24rem"
                style={{ objectPosition: review.focus ?? "center" }}
                className="object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center font-display text-4xl italic text-gold/40">
                {review.name.charAt(0)}
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.blockquote
        variants={rise}
        className="mt-5 flex-1 font-display text-[0.95rem] leading-[1.65] tracking-tight text-ink lg:text-base"
      >
        &ldquo;{review.quote}&rdquo;
      </motion.blockquote>

      <figcaption className="mt-5">
        <motion.span variants={rule} className="block h-px w-full origin-left bg-line" />
        <motion.span variants={rise} className="mt-4 block">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="display text-base text-ink">{review.name}</span>
            <span className="text-[0.6rem] uppercase tracking-[0.22em] text-mist">
              {review.location}
            </span>
          </span>
          {review.piece && (
            <span className="mt-1.5 block text-[0.6rem] uppercase tracking-[0.16em] text-gold">
              {review.piece}
            </span>
          )}
        </motion.span>
      </figcaption>
    </motion.figure>
  );
}

export function Testimonials() {
  const rail = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: rail });

  if (reviews.length === 0) return null;

  return (
    <section className="border-t border-line">
      <div className="shell py-14 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="display text-center text-3xl text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          Your Story, <em className="italic text-gold">Our Pride</em>
        </motion.h2>

        <div
          ref={rail}
          tabIndex={0}
          role="region"
          aria-label="Client reviews"
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-x-6 overflow-x-auto pb-1 outline-none md:mt-12 md:grid md:grid-cols-3 md:gap-x-8 md:overflow-visible lg:gap-x-12"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {reviews.length > 1 && (
          <div className="mt-8 h-px w-full bg-line md:hidden">
            <motion.div
              style={{ scaleX: scrollXProgress }}
              className="h-px w-full origin-left bg-gold"
            />
          </div>
        )}
      </div>
    </section>
  );
}
