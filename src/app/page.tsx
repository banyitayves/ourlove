import ApiMessage from "@/components/ApiMessage";
import Countdown from "@/components/Countdown";
import HeartEasterEgg from "@/components/HeartEasterEgg";
import LoveNote from "@/components/LoveNote";
import PhotoTimeline from "@/components/PhotoTimeline";
import PolaroidGallery from "@/components/PolaroidGallery";
import SpotifyCard from "@/components/SpotifyCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-cyan-50 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-50">
      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-6 py-10 sm:px-10 lg:px-16">
        <section className="rounded-[2.5rem] border border-white/80 bg-white/90 p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/90 dark:shadow-slate-950/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-rose-600 dark:text-rose-300">Welcome, love</p>
                  <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                    A romantic Next.js keepsake for <span className="text-rose-600">Yves</span> and his girlfriend.
                  </h1>
                </div>
                <ThemeToggle />
              </div>
              <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                Crafted with Tailwind CSS, Framer Motion, and heartfelt interactions. Explore your love story with animations, notes, memories, and a special countdown to your next milestone.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <LoveNote />
                <Countdown />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 sm:items-start lg:w-[420px]">
              <ApiMessage />
              <HeartEasterEgg />
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <PhotoTimeline />
            <PolaroidGallery />
          </div>
          <aside className="space-y-8">
            <SpotifyCard />
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl shadow-slate-200/40 dark:border-slate-700/70 dark:bg-slate-950/85 dark:shadow-slate-950/20">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Our love map</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Use this section to capture places you visited together. Replace this card with a custom map or travel stats to make the story even more personal.
              </p>
              <div className="mt-6 rounded-[1.75rem] bg-slate-100 p-6 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <p className="font-semibold">Our favorite places</p>
                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Cozy coffee dates in the city</li>
                  <li>• Sunset drives along the coast</li>
                  <li>• Weekend escapes to the mountains</li>
                </ul>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
