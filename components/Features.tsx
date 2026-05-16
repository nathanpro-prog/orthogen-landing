const features = [
  {
    icon: "📄",
    title: "Import de bilans RTF",
    description:
      "Importez vos fichiers RTF existants. OrthoGen extrait automatiquement les données du patient, les tests réalisés et les résultats cliniques.",
  },
  {
    icon: "🤖",
    title: "Génération IA par sections",
    description:
      "Claude AI rédige l'analyse par domaine, la synthèse diagnostique, le diagnostic orthophonique et le projet thérapeutique — en langage clinique.",
  },
  {
    icon: "✏️",
    title: "Éditeur WYSIWYG intégré",
    description:
      "Modifiez chaque section directement dans l'interface. L'historique des révisions vous permet de restaurer n'importe quelle version antérieure.",
  },
  {
    icon: "📝",
    title: "Export Word professionnel",
    description:
      "Générez un document .docx paginé avec votre en-tête professionnelle, les informations du patient et votre signature — prêt à envoyer.",
  },
  {
    icon: "🗂️",
    title: "Gestion des patients",
    description:
      "Retrouvez l'historique complet de chaque patient : bilans initiaux, renouvellements, et évolution clinique sur la durée.",
  },
  {
    icon: "🔒",
    title: "Sécurité & conformité",
    description:
      "Données chiffrées, hébergées en Europe, accès strictement personnel. Vos bilans finalisés sont verrouillés pour garantir leur intégrité.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Tout ce dont vous avez besoin
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-500">
            Un flux de travail pensé pour les orthophonistes libéraux — de
            l&apos;import à l&apos;export, sans friction.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7 hover:border-brand-100 hover:bg-brand-50 transition-colors"
            >
              <div className="mb-4 text-3xl">{f.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
