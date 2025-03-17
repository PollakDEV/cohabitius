export default function LandingFooter() {
    return (
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Kamil Polak. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="hover:text-purple-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-purple-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }