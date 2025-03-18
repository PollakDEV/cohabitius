import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Simplify Shared Living?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of happy roommates already enjoying stress-free
          cohabitation
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/waitlist"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-lg"
          >
            Start Using Cohabitius
          </Link>
          <Link
            href="/waitlist"
            className="border border-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
