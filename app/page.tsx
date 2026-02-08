import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        Vibe Heist Web
      </h1>
      <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        The official web portal and launcher for Vibe Heist. Built with Next.js
        16 to serve as the secure container for the WASM-based open-world
        simulation. (In Development)
      </p>
      <Link
        href={`/play${process.env.NODE_ENV === "production" ? "" : "/index.html"}`}
        className="rounded-full bg-foreground px-8 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Play
      </Link>
    </div>
  );
}
