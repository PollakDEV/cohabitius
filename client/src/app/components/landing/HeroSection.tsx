"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-40 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Simplify Shared Living with
        <span className="text-purple-600"> Cohabitius</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        The ultimate roommate management platform for expenses, tasks, and
        inventory. Keep your shared life organized and conflict-free.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link
          href="/auth/signup"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
        >
          Get Started Free
        </Link>
        <Link
          href="/auth/login"
          className="border-2 backg border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-lg sm:border-2 lg:border-4"
        >
          Existing User? Log In
        </Link>
      </div>
    </header>
  );
}
