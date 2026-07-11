"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Shared easing — a refined "expo out" curve for editorial, premium motion.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_IN = [0.64, 0, 0.78, 0] as const;

// A gentle rise-and-fade used across the site for section content.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

// Stagger container for grouping children reveals.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

// Blur-in for hero headlines — feels expensive and soft.
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: EASE },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
  as?: keyof typeof motion;
  style?: React.CSSProperties;
  id?: string;
};

/**
 * Reveal — a viewport-triggered rise-and-fade wrapper.
 * Respects prefers-reduced-motion by rendering content immediately.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.2,
  style,
  id,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export { motion, useReducedMotion };
