import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Vos bilans orthophoniques{" "}
          <span className="text-brand-600">en quelques minutes</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600">
          OrthoGen analyse vos bilans RTF, génère des comptes-rendus complets et
          personnalisés grâce à l&apos;IA, et les exporte directement en Word.
          Libérez du temps pour vos patients.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.orthogen.fr/signup"
            className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
          >
            Commencer gratuitement
          </Link>
          <Link
            href="#features"
            className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Voir les fonctionnalités →
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Aucune carte bancaire requise · 30 jours d&apos;essai gratuit
        </p>
      </div>
    </section>
  );
}
