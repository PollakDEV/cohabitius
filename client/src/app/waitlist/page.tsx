export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-6xl font-bold text-purple-900">Cohabitius</h1>

        <p className="text-2xl text-purple-800">
          🚧 We&apos;re working hard to bring you an amazing experience! 🚧
        </p>

        <p className="text-lg text-purple-700">
          Our platform is currently under development. Stay tuned for updates as
          we prepare to launch. Thank you for your patience!
        </p>

        <div className="pt-6">
          <a
            href="mailto:support@cohabitius.com"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
