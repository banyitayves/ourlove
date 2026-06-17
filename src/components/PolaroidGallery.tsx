"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const gallery = [
  {
    title: "Cozy Night",
    caption: "Where we stayed up talking until sunrise.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Road Trip",
    caption: "Your laugh in the passenger seat made the miles melt away.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Sweet Picnic",
    caption: "A perfect afternoon under the sun with our favorite snacks.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
  },
];

export default function PolaroidGallery() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85 dark:shadow-slate-950/20">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Polaroid gallery</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Tap a memory to flip it over</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.button
            key={item.title}
            type="button"
            onClick={() => setFlipped(flipped === index ? null : index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-950 dark:shadow-slate-950/20"
          >
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 opacity-0 transition group-hover:opacity-100 dark:text-slate-300">
              Tap to flip
            </div>
            <div className={`flip-card-inner ${flipped === index ? "flipped" : ""}`}>
              <div className="flip-card-front h-full w-full">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                </div>
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center bg-rose-50 p-6 text-center dark:bg-rose-950/95 dark:text-rose-100">
                <p className="text-xl font-semibold text-rose-700 dark:text-rose-200">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{item.caption}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
