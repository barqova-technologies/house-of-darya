"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.21, 0.6, 0.35, 1] as const;

export function EditorialImage({
  src,
  alt,
  sizes,
  priority = false,
  aspect,
  className = "",
  trigger = "inView",
  delay = 0,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  aspect: string;
  className?: string;
  trigger?: "inView" | "mount";
  delay?: number;
}) {
  const motionProps =
    trigger === "mount"
      ? {
          initial: { opacity: 0, scale: 1.08 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1.6, ease, delay },
        }
      : {
          initial: { opacity: 0, scale: 1.08 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 1.1, ease, delay },
        };

  return (
    <div className={`relative ${aspect} w-full overflow-hidden ${className}`}>
      <motion.div className="absolute inset-0" {...motionProps}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
}
