"use client";

import { motion } from "framer-motion";

const memories = [
  {
    title: "First Date",
    description: "Coffee, laughter, and the first spark of something unforgettable.",
    date: "June 17, 2023",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weekend Getaway",
    description: "A cozy trip with sunset walks and late-night talks.",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "City Adventure",
    description: "Discovering new streets, favorite cafés, and a perfect day together.",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PhotoTimeline() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85 dark:shadow-slate-950/20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Media & memories</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Photo timeline</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">
          Scroll through warm memories and watch each moment glide into view with a soft motion reveal.
        </p>
      </div>

      <div className="space-y-6">
        {memories.map((memory, index) => (
          <motion.article
            key={memory.title}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid gap-6 rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 shadow-xl shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/20 sm:grid-cols-[1fr_0.9fr]"
          >
            <div className="overflow-hidden rounded-[1.75rem] bg-slate-200">
              <img src={memory.image} alt={memory.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">{memory.date}</p>
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{memory.title}</h3>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{memory.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
