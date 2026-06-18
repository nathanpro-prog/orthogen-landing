import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité — OrthoGen",
  description:
    "Politique de confidentialité d'OrthoGen : traitement des données personnelles, conformité RGPD, utilisation de l'IA Claude.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar showNavLinks={false} />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-10 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-700">
              Politique de confidentialité
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi
              Informatique et Libertés.
              <br />
              Dernière mise à jour : juin 2026.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-gray-700">
            {/* 1. Responsable */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                1. Responsable de traitement
              </h2>
              <ul className="space-y-1 pl-0">
                <li>
                  <span className="font-medium">Raison sociale :</span> OrthoGen
                </li>
                <li>
                  <span className="font-medium">Forme juridique :</span>{" "}
                  Entreprise individuelle
                </li>
                <li>
                  <span className="font-medium">Siège social :</span> France
                </li>
                <li>
                  <span className="font-medium">Contact :</span>{" "}
                  <a
                    href={`mailto:${config.contactEmail}`}
                    className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    {config.contactEmail}
                  </a>
                </li>
              </ul>
            </section>

            {/* 2. Données collectées */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                2. Données collectées
              </h2>
              <p className="mb-3">
                Lors de votre inscription et utilisation d&apos;OrthoGen, nous
                collectons les données suivantes :
              </p>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">Authentification :</span> adresse
                  e-mail, mot de passe (hashé, jamais stocké en clair)
                </li>
                <li>
                  <span className="font-medium">Profil orthophoniste :</span>{" "}
                  prénom, nom (optionnels)
                </li>
                <li>
                  <span className="font-medium">Données patient :</span> prénom,
                  nom, date de naissance, sexe, classe (tous optionnels — voir
                  section 3 sur l&apos;anonymisation)
                </li>
                <li>
                  <span className="font-medium">Données de bilan :</span> scores
                  issus de l&apos;export Exalang, analyses, synthèse, diagnostic,
                  projet thérapeutique
                </li>
                <li>
                  <span className="font-medium">Données techniques :</span>{" "}
                  adresse IP, User-Agent, horodatages (logs de connexion)
                </li>
              </ul>
            </section>

            {/* 3. Traitement par IA */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                3. Traitement par intelligence artificielle (Claude)
              </h2>
              <p className="mb-3">
                Les données de bilan sont transmises à l&apos;API{" "}
                <strong>Claude Sonnet</strong> d&apos;Anthropic pour générer
                automatiquement le contenu rédactionnel clinique.
              </p>
              <p className="mb-2 font-medium text-gray-900">
                Identifiants personnels jamais transmis à Claude :
              </p>
              <ul className="space-y-1 pl-4 text-gray-600">
                <li>✗ Prénom du patient</li>
                <li>✗ Nom du patient</li>
                <li>✗ Date de naissance complète</li>
              </ul>
              <p className="mb-2 mt-3 font-medium text-gray-900">
                Données transmises à Claude (contexte clinique uniquement) :
              </p>
              <ul className="space-y-1 pl-4 text-gray-600">
                <li>✓ Année de naissance (ex : 2015)</li>
                <li>✓ Sexe et classe scolaire</li>
                <li>✓ Scores et écarts-types Exalang (données cliniques anonymisées)</li>
                <li>✓ Type et date du bilan</li>
              </ul>
              <p className="mt-3 text-gray-500">
                Consultez les{" "}
                <a
                  href="https://www.anthropic.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  conditions d&apos;utilisation d&apos;Anthropic
                </a>{" "}
                pour les détails sur la politique de rétention des données.
              </p>
            </section>

            {/* 4. Finalités */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                4. Finalités et bases légales
              </h2>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">Fourniture du service :</span>{" "}
                  exécution du contrat (art. 6.1.b RGPD)
                </li>
                <li>
                  <span className="font-medium">Sécurité et logs :</span> intérêt
                  légitime (art. 6.1.f RGPD)
                </li>
                <li>
                  <span className="font-medium">
                    Traitement données de santé (bilans) :
                  </span>{" "}
                  consentement explicite de l&apos;orthophoniste (art. 9.2.a RGPD)
                </li>
              </ul>
            </section>

            {/* 5. Durée de conservation */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                5. Durée de conservation
              </h2>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">Données de compte :</span>{" "}
                  conservées jusqu&apos;à la suppression du compte
                </li>
                <li>
                  <span className="font-medium">Bilans et données patient :</span>{" "}
                  propriété de l&apos;orthophoniste, conservation indéfinie jusqu&apos;à
                  suppression manuelle
                </li>
                <li>
                  <span className="font-medium">Logs techniques :</span> 30 jours
                  maximum
                </li>
                <li>
                  <span className="font-medium">Données transmises à Anthropic :</span>{" "}
                  non utilisées pour entraînement (politique par défaut Anthropic)
                </li>
              </ul>
            </section>

            {/* 6. Droits RGPD */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                6. Vos droits
              </h2>
              <p className="mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="space-y-1 pl-4">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit de limitation du traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits :{" "}
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  {config.contactEmail}
                </a>
                . En cas de réclamation, vous pouvez saisir la CNIL (
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  cnil.fr
                </a>
                ).
              </p>
            </section>

            {/* 7. Hébergeurs */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                7. Hébergeurs et sous-traitants
              </h2>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">Vercel Inc. (États-Unis)</span> —
                  hébergement frontend et fonctions serverless
                </li>
                <li>
                  <span className="font-medium">
                    Supabase Inc. (région EU — Paris)
                  </span>{" "}
                  — base de données PostgreSQL, authentification
                </li>
                <li>
                  <span className="font-medium">Anthropic PBC (États-Unis)</span>{" "}
                  — traitement IA via Claude API
                </li>
              </ul>
              <p className="mt-3 text-gray-500">
                Les transferts vers des pays tiers (États-Unis) s&apos;effectuent
                dans le cadre des Clauses Contractuelles Types (CCT) de la
                Commission européenne.
              </p>
            </section>

            {/* 8. Sécurité */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                8. Sécurité des données
              </h2>
              <ul className="space-y-1 pl-4">
                <li>Authentification JWT (PKCE flow)</li>
                <li>
                  Row-Level Security (RLS) — isolation stricte des données par
                  utilisateur
                </li>
                <li>Chiffrement en transit (HTTPS / TLS 1.3)</li>
                <li>Aucune clé API exposée côté client</li>
                <li>Identifiants patients jamais transmis à des tiers (IA incluse)</li>
              </ul>
            </section>

            {/* 9. Modifications */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                9. Modifications de cette politique
              </h2>
              <p>
                Toute modification substantielle vous sera notifiée par e-mail au
                moins 30 jours avant son entrée en vigueur.
              </p>
            </section>

            {/* 10. Contact */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                10. Contact
              </h2>
              <p>
                Pour toute question relative à cette politique :{" "}
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  {config.contactEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer showNavLinks={false} />
    </>
  );
}
