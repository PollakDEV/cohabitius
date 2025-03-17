"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-6">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Oops! Looks like youre lost.
      </p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        The page you’re looking for doesn’t exist.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 rounded-xl bg-purple-600 text-white text-lg font-medium hover:bg-purple-800 transition"
      >
        Go Home
      </button>
    </div>
  );
}
