import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales — OrthoGen",
  description:
    "Mentions légales du site OrthoGen conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN).",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar showNavLinks={false} />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          {/* Page title */}
          <div className="mb-10 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-700">
              Mentions légales
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Conformément à la loi n° 2004-575 du 21 juin 2004 pour la
              confiance dans l&apos;économie numérique (LCEN), art. 6-III.
              <br />
              Dernière mise à jour : mai 2026.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-gray-700">
            {/* 1. Éditeur */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                Le site OrthoGen (
                <span className="font-medium">orthogen.fr</span>) est édité par :
              </p>
              <ul className="space-y-1 pl-0">
                <li>
                  <span className="font-medium">Raison sociale :</span>{" "}
                  OrthoGen
                </li>
                <li>
                  <span className="font-medium">Forme juridique :</span>{" "}
                  Entreprise individuelle
                </li>
                <li>
                  <span className="font-medium">Siège social :</span>{" "}
                  France
                </li>
                <li>
                  <span className="font-medium">Email :</span>{" "}
                  <a
                    href={`mailto:${config.contactEmail}`}
                    className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    {config.contactEmail}
                  </a>
                </li>
              </ul>
            </section>

            {/* 2. Directeur de publication */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication est le représentant légal de
                l&apos;Éditeur, joignable à l&apos;adresse{" "}
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  {config.contactEmail}
                </a>
                .
              </p>
            </section>

            {/* 3. Hébergement */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                3. Hébergement
              </h2>
              <p className="mb-4">
                Le site et ses données sont hébergés par les prestataires
                suivants :
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Vercel Inc.</p>
                  <p className="text-gray-500">
                    340 Pine Street, Suite 701
                    <br />
                    San Francisco, CA 94104, États-Unis
                  </p>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    vercel.com
                  </a>
                </div>
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <p className="font-medium text-gray-900">Supabase Inc.</p>
                  <p className="text-gray-500">
                    970 Toa Payoh North #07-04, Singapour 318992
                    <br />
                    (données stockées en région EU — eu-west)
                  </p>
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    supabase.com
                  </a>
                </div>
              </div>
            </section>

            {/* 4. Propriété intellectuelle */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                4. Propriété intellectuelle
              </h2>
              <p className="mb-2">
                L&apos;ensemble des éléments constituant le site OrthoGen
                (textes, graphismes, logiciels, images, structure) est la
                propriété exclusive de l&apos;Éditeur ou fait l&apos;objet
                d&apos;une autorisation d&apos;utilisation. Toute reproduction,
                représentation, modification, publication ou adaptation, sans
                autorisation écrite préalable de l&apos;Éditeur, est interdite.
              </p>
              <p>
                Le logiciel OrthoGen utilise des composants open source dont les
                licences sont respectées conformément à leurs termes (MIT,
                Apache 2.0, etc.).
              </p>
            </section>

            {/* 5. Données personnelles */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                5. Données personnelles
              </h2>
              <p>
                Le site OrthoGen ne collecte aucune donnée personnelle via ce
                site vitrine. Les données personnelles des utilisateurs de
                l&apos;application sont traitées dans le cadre de
                l&apos;utilisation du service OrthoGen. Pour toute information,
                consultez la{" "}
                <a
                  href={`${config.appUrl}/privacy`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  Politique de confidentialité
                </a>{" "}
                et les{" "}
                <a
                  href={`${config.appUrl}/terms`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  Conditions Générales d&apos;Utilisation
                </a>
                .
              </p>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                6. Cookies
              </h2>
              <p>
                Ce site vitrine n&apos;utilise pas de cookies de traçage ou
                publicitaires. Aucun cookie n&apos;est déposé lors de votre
                visite sur cette page. L&apos;application OrthoGen utilise
                uniquement un token de session technique, strictement nécessaire
                au maintien de votre connexion.
              </p>
            </section>

            {/* 7. Liens hypertextes */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                7. Liens hypertextes
              </h2>
              <p className="mb-2">
                Le site peut contenir des liens vers des sites tiers. Ces liens
                sont fournis à titre informatif. L&apos;Éditeur n&apos;exerce
                aucun contrôle sur ces sites et décline toute responsabilité
                quant à leur contenu ou leur politique de confidentialité.
              </p>
              <p>
                La création de liens hypertextes pointant vers OrthoGen est
                soumise à l&apos;accord préalable et écrit de l&apos;Éditeur.
              </p>
            </section>

            {/* 8. Droit applicable */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                8. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                français. Tout litige relatif à l&apos;utilisation du site sera
                soumis à la compétence exclusive des tribunaux français.
              </p>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                9. Contact
              </h2>
              <p>
                Pour toute question ou réclamation concernant ce site,
                contactez-nous à :{" "}
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                >
                  {config.contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer showNavLinks={false} />
    </>
  );
}
