"use client";

import { useEffect, useState } from "react";

type CoupleApi = {
  greeting: string;
  names: string[];
  story: string[];
  anniversary: string;
};

export default function ApiMessage() {
  const [message, setMessage] = useState<string>("Loading story from backend...");

  useEffect(() => {
    fetch("/api/couple")
      .then((res) => res.json())
      .then((data: CoupleApi) => {
        setMessage(`${data.greeting} ${data.names.join(" & ")}. Anniversary: ${data.anniversary}`);
      })
      .catch(() => {
        setMessage("Unable to load the backend story right now.");
      });
  }, []);

  return (
    <div className="rounded-3xl border border-white/20 bg-white/90 p-6 shadow-xl shadow-black/5 backdrop-blur-lg dark:bg-zinc-950/85 dark:shadow-white/5">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Live backend status</p>
      <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">{message}</p>
    </div>
  );
}
