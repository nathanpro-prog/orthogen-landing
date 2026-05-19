import Link from "next/link";
import { config } from "@/lib/config";

const plans = [
  {
    name: "Pro",
    price: "29 €",
    period: "/ mois",
    description: "30 jours d'essai gratuit — sans carte bancaire, sans engagement.",
    cta: "Démarrer l'essai gratuit",
    ctaHref: config.signupProUrl,
    highlighted: true,
    features: [
      "Bilans illimités",
      "Import RTF",
      "Génération IA (toutes sections)",
      "Export Word professionnel",
      "Éditeur WYSIWYG",
      "Historique des révisions",
      "Verrouillage & audit des bilans",
      "Support par e-mail sous 24 h",
    ],
    missing: [],
  },
  {
    name: "Cabinet",
    price: "79 €",
    period: "/ mois",
    description: "Pour les structures multi-praticiens qui veulent centraliser leur activité.",
    cta: "Nous contacter",
    ctaHref: `mailto:${config.contactEmail}`,
    highlighted: false,
    features: [
      "Tout ce qui est inclus dans Pro",
      "Jusqu'à 5 praticiens",
      "Gestion centralisée des patients",
      "Tableau de bord cabinet",
      "Support prioritaire téléphonique",
      "Onboarding personnalisé",
    ],
    missing: [],
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Tarifs simples et transparents
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Essayez le Pro pendant{" "}
            <span className="font-semibold text-gray-700">30 jours sans carte bancaire</span>.
            Résiliez à tout moment.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-500 bg-white shadow-xl shadow-brand-100 ring-2 ring-brand-500"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    <CrossIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-brand-600 text-white hover:bg-brand-700"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Vous avez des questions ? Écrivez-nous à{" "}
          <a href={`mailto:${config.contactEmail}`} className="text-brand-600 hover:underline">
            {config.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
