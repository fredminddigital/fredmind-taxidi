import React from "react";
import { motion } from "framer-motion";

export default function FloatingGlow({ className = "", duration = 8 }) {
  return (
    <motion.div
<<<<<<< HEAD
      animate={{ opacity: [0.18, 0.32, 0.18], scale: [1, 1.05, 1], y: [0, -18, 0] }}
=======
      animate={{
        opacity: [0.18, 0.32, 0.18],
        scale: [1, 1.05, 1],
        y: [0, -18, 0],
      }}
>>>>>>> 3737eb3d74878b0aa232bceecdba508288867552
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none rounded-full blur-3xl ${className}`}
    />
  );
}
