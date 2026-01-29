"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimationWrapper = ({
  children,
  className,
}: ScrollAnimationWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("w-full relative", className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
