import Image from "next/image";
import Link from "next/link";
import { HeroSection, FeatureSection, TechStackSection } from "@/components/sections";
import { Footer } from "@/components/layout/footer";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="flex w-full max-w-5xl flex-col items-center justify-center px-8 py-24 text-center sm:px-12 sm:py-32">

        {/* ====== Company Logo ====== */}
        <Image
          src="/images/jogchain head.png"
          alt="Jog Chain Technology Logo"
          width={100}
          height={100}
          className="mb-8 rounded-full"
          priority
        />

        <HeroSection />

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

        <FeatureSection />

        {/* ====== Visual Divider ====== */}
        <div className="my-20 h-px w-32 bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-50" />

        <TechStackSection />

        {/* ====== Footer ====== */}
        <Footer />
      </main>
    </div>
  );
}
