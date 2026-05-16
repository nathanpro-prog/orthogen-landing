import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <Link href="/" className="text-lg font-bold text-brand-700">
            OrthoGen
          </Link>
          <p className="mt-1 text-sm text-gray-400">
            Bilans orthophoniques générés par l&apos;IA.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <Link href="#features" className="hover:text-gray-900 transition-colors">
            Fonctionnalités
          </Link>
          <Link href="#pricing" className="hover:text-gray-900 transition-colors">
            Tarifs
          </Link>
          <a href="mailto:contact@orthogen.fr" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
          <Link href="/mentions-legales" className="hover:text-gray-900 transition-colors">
            Mentions légales
          </Link>
        </nav>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} OrthoGen. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
