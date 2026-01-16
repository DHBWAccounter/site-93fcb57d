import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="#header"
            className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
          >
            Back to Top
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}