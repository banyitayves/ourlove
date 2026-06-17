"use client";

import { useMemo, useState } from "react";

const notes = [
  "You make every ordinary moment feel magical.",
  "Your smile is my favorite sunrise.",
  "I love the way our hands fit together perfectly.",
  "Our love story is my all-time favorite playlist.",
  "I still get butterflies when I think of you.",
  "Every day with you feels like the best chapter yet.",
  "You are my person, my home, and my adventure.",
];

export default function LoveNote() {
  const [noteIndex, setNoteIndex] = useState(0);
  const note = notes[noteIndex];

  const nextNote = () => {
    const next = Math.floor(Math.random() * notes.length);
    setNoteIndex(next);
  };

  const heartEmoji = useMemo(() => (noteIndex % 2 === 0 ? "❤️" : "💌"), [noteIndex]);

  return (
    <div className="rounded-[2rem] border border-pink-200/80 bg-rose-50/90 p-6 shadow-2xl shadow-rose-200/50 dark:border-pink-600/60 dark:bg-rose-950/80 dark:shadow-rose-950/20">
      <p className="text-sm uppercase tracking-[0.35em] text-rose-700 dark:text-rose-300">Love note</p>
      <p className="mt-5 min-h-[5rem] text-xl leading-8 text-slate-900 dark:text-slate-100">{heartEmoji} {note}</p>
      <button
        type="button"
        onClick={nextNote}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        Show another reason
      </button>
    </div>
  );
}
