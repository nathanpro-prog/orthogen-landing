import Link from "next/link";
import { config } from "@/lib/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-brand-700">
          OrthoGen
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 sm:flex">
          <Link href="#features" className="hover:text-gray-900 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="hover:text-gray-900 transition-colors">
            Tarifs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={config.loginUrl}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Connexion
          </Link>
          <Link
            href={config.signupUrl}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Essai gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
