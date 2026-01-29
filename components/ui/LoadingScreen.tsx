"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[5000] flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinning Coin Logo */}
        <div className="perspective-1000">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-32 h-32 relative preserve-3d"
          >
            {/* Coin Face */}
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 shadow-[0_4px_10px_rgba(0,0,0,0.1)] overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/Logo Qtech-1.png"
                alt="Qtech Logo"
                fill
                className="object-contain p-4"
              />
            </div>
          </motion.div>
        </div>

        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-black text-xl font-bold tracking-widest uppercase mt-8"
        >
          Loading Experience...
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
