import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center px-8 py-24 text-center sm:py-32 sm:px-12">
        
        {/* ====== Company Logo ====== */}
        <Image
          src="/images/jogchain head.png"
          alt="Jog Chain Technology Logo"
          width={100}
          height={100}
          className="mb-8 rounded-full"
          priority
        />

        {/* ====== Hero Section ====== */}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Building Intelligent Foundations for the Digital Future
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Jog Chain Technology connects innovation, engineering, and AI to build
          scalable software, machine learning solutions, and data-driven systems
          that move the world forward.
        </p>

        {/* ====== Call to Action Buttons ====== */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Get in Touch
          </Link>
        </div>

        {/* ====== Visual Divider ====== */}
        <div className="my-20 h-px w-32 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50" />

        {/* ====== Tagline / Secondary Section ====== */}
        <section className="flex flex-col items-center">
          <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
            We specialize in:
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-4 text-zinc-600 dark:text-zinc-400">
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Artificial Intelligence
            </li>
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Web & Software Engineering
            </li>
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Data Science & Analytics
            </li>
            <li className="rounded-full border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700">
              Cloud Infrastructure
            </li>
          </ul>
        </section>

        {/* ====== Footer Note ====== */}
        <footer className="mt-24 text-sm text-zinc-500 dark:text-zinc-600">
          © {new Date().getFullYear()} Jog Chain Technology. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
