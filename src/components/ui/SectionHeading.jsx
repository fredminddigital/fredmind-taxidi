import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  serif = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl text-center"
    >
      {eyebrow ? (
        <div
          className={`text-xs font-semibold uppercase tracking-[0.32em] ${
            light ? "text-[#f4a300]" : "text-[#4f8fe5]"
          }`}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={`mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-black"
        }`}
        style={
          serif ? { fontFamily: "Georgia, 'Times New Roman', serif" } : undefined
        }
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={`mx-auto mt-6 max-w-3xl text-base leading-8 sm:text-lg ${
            light ? "text-white/75" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
