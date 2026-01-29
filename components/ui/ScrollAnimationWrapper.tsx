"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "zoom-in" | "slide-in-right" | "slide-in-left";
}

const variants = {
  "fade-up": {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
  "slide-in-right": {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  "slide-in-left": {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
};

const ScrollAnimationWrapper = ({
  children,
  className,
  animation = "fade-up",
}: ScrollAnimationWrapperProps) => {
  return (
    <motion.div
      initial={variants[animation].initial}
      whileInView={variants[animation].whileInView}
      exit={variants[animation].exit}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("w-full relative", className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
