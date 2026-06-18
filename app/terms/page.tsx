import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation — OrthoGen",
  description:
    "Conditions générales d'utilisation d'OrthoGen : accès au service, responsabilités, tarification, droit applicable.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar showNavLinks={false} />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-10 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-700">
              Conditions générales d&apos;utilisation
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              En utilisant OrthoGen, vous acceptez les présentes conditions.
              <br />
              Dernière mise à jour : juin 2026.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-gray-700">
            {/* 1. Objet */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                1. Objet du service
              </h2>
              <p>
                <strong>OrthoGen</strong> est une plateforme SaaS d&apos;aide à
                la rédaction de bilans orthophoniques du langage écrit. Elle
                utilise l&apos;intelligence artificielle (Claude Sonnet
                d&apos;Anthropic) pour générer automatiquement un contenu
                rédactionnel clinique à partir des données d&apos;évaluation
                saisies par l&apos;orthophoniste.
              </p>
            </section>

            {/* 2. Accès */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                2. Conditions d&apos;accès
              </h2>
              <p className="mb-2">
                L&apos;accès à OrthoGen est réservé aux :
              </p>
              <ul className="space-y-1 pl-4">
                <li>Orthophonistes et professionnels de santé qualifiés</li>
                <li>Personnes majeures (18 ans minimum)</li>
                <li>
                  Utilisateurs ayant accepté les présentes CGU et la{" "}
                  <a
                    href="/privacy"
                    className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    politique de confidentialité
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                Vous vous engagez à utiliser le service conformément à la
                réglementation en vigueur, notamment le Code de déontologie des
                orthophonistes et la réglementation RGPD.
              </p>
            </section>

            {/* 3. Données patient */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                3. Données patient et responsabilités RGPD
              </h2>
              <p className="mb-2">En utilisant OrthoGen, vous garantissez :</p>
              <ul className="space-y-2 pl-4">
                <li>
                  Avoir obtenu le consentement éclairé du patient (ou de son
                  représentant légal) pour le traitement de ses données via un
                  outil IA
                </li>
                <li>
                  Respecter les obligations du RGPD en tant que responsable de
                  traitement des données patient
                </li>
                <li>
                  Informer vos patients de l&apos;utilisation d&apos;une IA dans
                  la rédaction du bilan
                </li>
                <li>
                  Ne pas importer de données directement identifiantes
                  non nécessaires (utiliser les champs prénom/nom
                  uniquement si vous en avez l&apos;usage)
                </li>
              </ul>
            </section>

            {/* 4. Responsabilités IA */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                4. Responsabilité clinique — outil d&apos;aide, pas de
                substitution
              </h2>
              <p className="mb-2">
                OrthoGen est un <strong>outil d&apos;aide à la rédaction</strong>,
                non un dispositif médical ni un système de diagnostic autonome.
              </p>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">OrthoGen fournit :</span> un
                  contenu rédactionnel généré par IA, à titre de support
                </li>
                <li>
                  <span className="font-medium">Vous assumez :</span> la
                  validation clinique complète, la correction des erreurs
                  éventuelles, et la responsabilité juridique et déontologique
                  du bilan signé
                </li>
              </ul>
              <p className="mt-3 font-medium text-gray-900">
                Le bilan généré par OrthoGen ne peut être remis au patient ou
                au médecin prescripteur qu&apos;après relecture et validation
                complète par l&apos;orthophoniste.
              </p>
            </section>

            {/* 5. Limitation responsabilité */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                5. Limitation de responsabilité
              </h2>
              <p className="mb-2">OrthoGen ne saurait être tenu responsable de :</p>
              <ul className="space-y-1 pl-4">
                <li>
                  Erreurs, omissions ou imprécisions dans le contenu généré par
                  l&apos;IA
                </li>
                <li>
                  Toute conséquence clinique, médicale ou légale découlant de
                  l&apos;utilisation du bilan généré sans validation
                </li>
                <li>
                  Interruptions temporaires du service (maintenance, pannes
                  d&apos;infrastructure)
                </li>
                <li>
                  Perte de données résultant d&apos;un usage non conforme
                </li>
              </ul>
              <p className="mt-3">
                La responsabilité d&apos;OrthoGen est limitée au montant des
                sommes effectivement versées par l&apos;utilisateur au cours des
                12 mois précédant le litige.
              </p>
            </section>

            {/* 6. Propriété intellectuelle */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                6. Propriété intellectuelle
              </h2>
              <ul className="space-y-2 pl-4">
                <li>
                  <span className="font-medium">OrthoGen :</span> propriétaire du
                  code source, des prompts IA, de l&apos;interface et des
                  algorithmes
                </li>
                <li>
                  <span className="font-medium">Vous :</span> propriétaire des
                  bilans générés et des données patient que vous avez saisis
                </li>
              </ul>
              <p className="mt-3">
                Vous pouvez exporter, utiliser et archiver vos bilans à des fins
                professionnelles. Toute reproduction ou revente de la plateforme
                est interdite.
              </p>
            </section>

            {/* 7. Tarification */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                7. Tarification et paiement
              </h2>
              <ul className="space-y-2 pl-4">
                <li>
                  Les tarifs sont indiqués sur la page{" "}
                  <a
                    href="/#pricing"
                    className="text-brand-600 underline underline-offset-4 hover:text-brand-700"
                  >
                    Tarifs
                  </a>
                </li>
                <li>Facturation mensuelle, renouvellement automatique</li>
                <li>
                  Résiliation possible à tout moment depuis votre compte, avec
                  effet à la fin de la période en cours
                </li>
                <li>
                  Aucun remboursement pour les périodes déjà facturées, sauf
                  disposition légale contraire
                </li>
              </ul>
            </section>

            {/* 8. Résiliation */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                8. Suspension et résiliation
              </h2>
              <p className="mb-2">
                OrthoGen se réserve le droit de suspendre ou résilier votre accès
                en cas de :
              </p>
              <ul className="space-y-1 pl-4">
                <li>Non-paiement des frais d&apos;abonnement</li>
                <li>Violation des présentes CGU ou du RGPD</li>
                <li>
                  Tentative d&apos;accès non autorisé ou usage abusif du service
                </li>
                <li>
                  Utilisation à des fins contraires à la réglementation en
                  vigueur
                </li>
              </ul>
            </section>

            {/* 9. Droit applicable */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                9. Droit applicable et juridiction
              </h2>
              <p>
                Les présentes CGU sont régies par le <strong>droit français</strong>.
                En cas de litige, les parties s&apos;efforceront de trouver une
                solution amiable. À défaut, les tribunaux français compétents
                seront seuls compétents.
              </p>
            </section>

            {/* 10. Contact */}
            <section>
              <h2 className="mb-3 text-base font-semibold text-gray-900">
                10. Contact
              </h2>
              <p>
                Pour toute question relative aux présentes CGU :{" "}
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
