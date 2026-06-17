"use client";

import { motion } from "framer-motion";

export default function SpotifyCard() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="rounded-[2rem] border border-emerald-200 bg-emerald-50/90 p-6 shadow-2xl shadow-emerald-200/35 dark:border-emerald-700/70 dark:bg-emerald-950/80 dark:shadow-emerald-950/20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-300">Soundtrack</p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">Relationship playlist</h2>
      <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
        A curated playlist for your favorite dates, road trips, and cozy nights in.
      </p>
      <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white/90 p-4 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-slate-950/10">
        <p className="font-semibold text-slate-900 dark:text-white">Shared Spotify vibes</p>
        <a
          className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
          href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
          target="_blank"
          rel="noreferrer"
        >
          Open playlist
        </a>
      </div>
    </motion.section>
  );
}
