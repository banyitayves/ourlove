"use client";

import { useEffect, useState } from "react";

const firstMoment = new Date("2023-06-17T18:00:00");
const anniversaryMonth = 6;
const anniversaryDay = 17;

function getNextAnniversary(now: Date) {
  const year = now.getMonth() + 1 > anniversaryMonth || (now.getMonth() + 1 === anniversaryMonth && now.getDate() > anniversaryDay)
    ? now.getFullYear() + 1
    : now.getFullYear();
  return new Date(year, anniversaryMonth - 1, anniversaryDay, 0, 0, 0);
}

function formatUnit(value: number) {
  return String(value).padStart(2, "0");
}

export default function Countdown() {
  const [timer, setTimer] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00", togetherDays: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const next = getNextAnniversary(now);
      const delta = next.getTime() - now.getTime();
      const days = Math.max(0, Math.floor(delta / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((delta / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((delta / (1000 * 60)) % 60));
      const seconds = Math.max(0, Math.floor((delta / 1000) % 60));
      const togetherDays = Math.floor((now.getTime() - firstMoment.getTime()) / (1000 * 60 * 60 * 24));

      setTimer({
        days: formatUnit(days),
        hours: formatUnit(hours),
        minutes: formatUnit(minutes),
        seconds: formatUnit(seconds),
        togetherDays,
      });
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-[2rem] border border-cyan-200/90 bg-cyan-50/90 p-6 shadow-2xl shadow-cyan-200/30 dark:border-cyan-700/70 dark:bg-cyan-950/75 dark:shadow-cyan-950/20">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">Together since</p>
      <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{timer.togetherDays}+ days of love</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        {[
          { label: "Days", value: timer.days },
          { label: "Hours", value: timer.hours },
          { label: "Minutes", value: timer.minutes },
          { label: "Seconds", value: timer.seconds },
        ].map((item) => (
          <div key={item.label} className="rounded-3xl bg-white/90 p-4 text-center shadow-sm shadow-slate-200/80 dark:bg-slate-950/90 dark:shadow-slate-950/20">
            <p className="text-3xl font-bold text-slate-950 dark:text-white">{item.value}</p>
            <p className="mt-1 text-sm uppercase text-slate-500 dark:text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">Counting toward your next anniversary on {anniversaryMonth}/{anniversaryDay}.</p>
    </div>
  );
}
