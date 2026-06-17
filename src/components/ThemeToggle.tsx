"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("couple-theme");
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("couple-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "dark" ? "Nighttime Vibe" : "Daytime Vibe"}
    </button>
  );
}
