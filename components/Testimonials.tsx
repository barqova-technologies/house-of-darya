"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { reviews, type Review } from "@/lib/reviews";
import { SectionHeading } from "@/components/SectionHeading";

const ease = [0.21, 0.6, 0.35, 1] as const;

const column: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const frame: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease } },
};

const rule: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.9, ease } },
};

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <motion.figure
      ref={ref}
      className="flex w-[82vw] shrink-0 snap-start flex-col sm:w-[58vw] md:w-[clamp(19rem,30vw,25rem)]"
      variants={column}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delayChildren: (index % 3) * 0.12 }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-veil">
        <motion.div variants={frame} className="absolute inset-0">
          <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[7%]">
            {review.image ? (
              <Image
                src={review.image}
                alt={review.alt ?? review.name}
                fill
                sizes="(max-width: 768px) 82vw, 25rem"
                style={{ objectPosition: review.focus ?? "center" }}
                className="object-cover"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center font-display text-5xl italic text-gold/40">
                {review.name.charAt(0)}
              </span>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.span variants={rise} className="mt-7 block font-display text-base italic text-mist">
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <motion.blockquote
        variants={rise}
        className="mt-3 flex-1 font-display text-[1.25rem] leading-[1.55] tracking-tight text-ink lg:text-[1.35rem]"
      >
        &ldquo;{review.quote}&rdquo;
      </motion.blockquote>

      <figcaption className="mt-8">
        <motion.span variants={rule} className="block h-px w-full origin-left bg-line" />
        <motion.span variants={rise} className="mt-5 block">
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="display text-lg text-ink">{review.name}</span>
            <span className="text-[0.62rem] uppercase tracking-[0.22em] text-mist">
              {review.location}
            </span>
          </span>
          {review.piece && (
            <span className="mt-2 block text-[0.62rem] uppercase tracking-[0.16em] text-gold">
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
      <div className="shell py-24 lg:py-32">
        <SectionHeading
          eyebrow="In Their Words"
          title="Made in conversation, worn every day since"
          intro="Each of these began with someone telling us what they actually wanted. These are the words they sent once the piece was theirs."
        />

        <div
          ref={rail}
          tabIndex={0}
          role="region"
          aria-label="Client reviews"
          className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-x-6 overflow-x-auto pb-1 outline-none md:mt-20 md:gap-x-10 lg:gap-x-16"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {reviews.length > 1 && (
          <div className="mt-10 h-px w-full bg-line md:mt-12">
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
