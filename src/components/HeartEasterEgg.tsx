"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HeartEasterEgg() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 shadow-2xl shadow-slate-200/40 dark:border-slate-700/70 dark:bg-slate-950/85 dark:shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Secret delight</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Tap the hidden heart</h3>
        </div>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-500"
        >
          {show ? "Hide hearts" : "Reveal hearts"}
        </button>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
        A sweet surprise appears when the heart is revealed — just like a secret message between the two of you.
      </p>
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="mt-6 grid grid-cols-5 gap-3"
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -16, 0], opacity: [0, 1, 0.75] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.08 }}
                className="text-3xl"
              >
                ❤️
              </motion.span>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
