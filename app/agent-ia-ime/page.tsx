import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge,
  BentoCard,
  ArrowRight,
  MicIcon,
  CheckIcon,
  ShieldIcon,
  SparklesIcon,
  HeartIcon,
  ClockIcon,
  DocumentIcon,
  UsersIcon,
  ClipboardIcon,
  BuildingIcon,
  EsmsPageNav,
  EsmsPageFooter,
} from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title:
    "Agent IA IME - Intelligence artificielle pour Instituts Medico-Educatifs | Marcelle",
  description:
    "Marcelle est l'agent IA concu pour les IME (Instituts Medico-Educatifs). Transmissions vocales, suivi educatif et pedagogique, preparation du PIA et coordination inter-equipes. Conforme RGPD et IA Act.",
  keywords: [
    "agent IA IME",
    "intelligence artificielle IME",
    "logiciel IME",
    "transmissions IME",
    "IA institut medico-educatif",
    "logiciel institut medico-educatif",
    "transmissions educatives IME",
    "PIA IME",
    "projet individualise accompagnement",
    "agent IA medico-social enfant",
  ],
  openGraph: {
    title:
      "Agent IA IME - Intelligence artificielle pour Instituts Medico-Educatifs | Marcelle",
    description:
      "Marcelle est l'agent IA concu pour les IME. Transmissions vocales, suivi educatif et pedagogique, preparation du PIA et coordination inter-equipes.",
    url: "https://marcelle.ai/agent-ia-ime",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelle - Agent IA pour Instituts Medico-Educatifs (IME)",
      },
    ],
  },
  alternates: {
    canonical: "https://marcelle.ai/agent-ia-ime",
  },
};

export default function AgentIaImePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle",
    applicationCategory: "HealthApplication",
    description:
      "Agent IA pour les Instituts Medico-Educatifs (IME) : transmissions vocales, suivi educatif et pedagogique, preparation du PIA.",
    url: "https://marcelle.ai/agent-ia-ime",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      category: "SaaS",
    },
  };

  return (
    <main className="min-h-screen bg-cream text-encre font-sans selection:bg-sauge/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EsmsPageNav />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-[72px] bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-20">
          <Link
            href="/#esms"
            className="inline-flex items-center gap-2 text-sm text-graphite hover:text-sauge mb-8"
          >
            &larr; Tous les etablissements
          </Link>

          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="sauge">
              <SparklesIcon className="w-3.5 h-3.5" /> Agent IA IME
            </Badge>
            <Badge variant="terracotta">
              <ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act
            </Badge>
          </div>

          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour
            <br />
            <span className="text-sauge">
              les Instituts Medico-Educatifs (IME)
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            Dans un IME, chaque journee mele apprentissages scolaires, ateliers
            educatifs, seances de reeducation et accompagnement comportemental.
            Marcelle structure et centralise les transmissions pour que chaque
            professionnel dispose d&apos;une vision complete du parcours de
            chaque jeune, du PIA aux notes quotidiennes.
          </p>

          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN IME ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-6">
            Qu&apos;est-ce qu&apos;un Institut Medico-Educatif ?
          </h2>
          <div className="prose max-w-none text-graphite leading-relaxed space-y-4">
            <p>
              L&apos;Institut Medico-Educatif (IME) accueille des enfants et
              adolescents de 6 a 20 ans presentant une deficience intellectuelle,
              avec ou sans troubles associes. Il reunit sous un meme toit une
              Section d&apos;Education et d&apos;Enseignement Specialise (SEES)
              pour les plus jeunes et une Section d&apos;Initiation et de Premiere
              Formation Professionnelle (SIPFPro) pour les adolescents.
            </p>
            <p>
              Le fonctionnement peut etre en semi-internat &mdash; les jeunes
              rentrent chez eux chaque soir &mdash; ou en internat, parfois sur
              un calendrier de 365 jours pour les situations les plus complexes.
              Chaque jeune beneficie d&apos;un Projet Individualise
              d&apos;Accompagnement (PIA) qui articule objectifs educatifs,
              pedagogiques, therapeutiques et de socialisation.
            </p>
            <p>
              La richesse de l&apos;accompagnement en IME reside dans la
              pluridisciplinarite : educateurs specialises, enseignants
              specialises, orthophonistes, psychomotriciens, psychologues et
              medecins collaborent au quotidien. Cette pluralite de regards est
              une force, mais elle genere un volume considerable
              d&apos;informations a transmettre, structurer et partager.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMENT MARCELLE S'ADAPTE ────────────────────────────────── */}
      <section className="bg-ardoise py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Comment Marcelle s&apos;adapte a l&apos;IME
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            Marcelle comprend le vocabulaire, les rythmes et les enjeux propres
            aux Instituts Medico-Educatifs. Voici comment l&apos;agent IA
            structure les transmissions de votre etablissement.
          </p>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Categories de transmissions
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Educatif",
                "Pedagogique",
                "Reeducation",
                "Comportement",
                "Autonomie",
                "Sante",
                "Social",
                "Preprofessionnel",
                "Communication",
                "Autre",
              ].map((cat) => (
                <Badge key={cat} variant="light">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          {/* Exemple de transmission */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Exemple de transmission generee par Marcelle
            </h3>
            <BentoCard variant="glass" className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <MicIcon className="w-5 h-5 text-sauge" />
                <span className="text-sm text-white/50">
                  Dictee vocale &rarr; transmission structuree
                </span>
              </div>
              <p className="text-white/90 leading-relaxed">
                &laquo;&nbsp;Yanis, groupe Tournesol. Seance pedagogique ce
                matin : bonne concentration sur l&apos;activite de calcul, a
                reussi les exercices de niveau 2. En atelier bois cet
                apres-midi, a travaille en binome avec Leila, bonne
                cooperation. Un episode d&apos;agitation a 15h lors de la
                transition, retour au calme apres 10 minutes dans l&apos;espace
                apaisement.&nbsp;&raquo;
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="light">Pedagogique</Badge>
                <Badge variant="light">Preprofessionnel</Badge>
                <Badge variant="light">Comportement</Badge>
              </div>
            </BentoCard>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Creneaux de transmission
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BentoCard variant="glass" className="p-5">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-sauge" />
                  <div>
                    <p className="text-white font-medium">Jour</p>
                    <p className="text-sm text-white/50">8h &ndash; 17h</p>
                  </div>
                </div>
              </BentoCard>
              <BentoCard variant="glass" className="p-5">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-terracotta" />
                  <div>
                    <p className="text-white font-medium">
                      Nuit (si internat)
                    </p>
                    <p className="text-sm text-white/50">17h &ndash; 8h</p>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONS ──────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-4">
            Les professionnels concernes
          </h2>
          <p className="text-graphite mb-8 max-w-2xl">
            Marcelle s&apos;adapte au vocabulaire et aux pratiques de chaque
            metier present en IME. L&apos;agent IA reconnait automatiquement la
            profession du redacteur pour contextualiser la transmission.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Educateur specialise",
              "Moniteur-educateur",
              "Enseignant specialise",
              "Orthophoniste",
              "Psychomotricien",
              "Psychologue",
              "Medecin psychiatre",
              "Infirmier(e)",
              "AMP / AES",
              "Chef de service",
            ].map((prof) => (
              <div
                key={prof}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-lin"
              >
                <UsersIcon className="w-4 h-4 text-sauge shrink-0" />
                <span className="text-sm text-encre">{prof}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICES ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-4">
            Les benefices pour votre IME
          </h2>
          <p className="text-graphite mb-10 max-w-2xl">
            Un outil pense pour les specificites de l&apos;accompagnement
            medico-educatif des enfants et adolescents en situation de handicap.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Suivi educatif et pedagogique structure
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Chaque transmission est automatiquement classee par categorie
                &mdash; educatif, pedagogique, reeducation, comportement &mdash;
                pour offrir une lecture claire des progres du jeune. Les
                objectifs du PIA sont traces dans la duree, facilitant les
                bilans d&apos;etape et les syntheses annuelles.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Transmission inter-equipes educatives
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                De l&apos;atelier bois a la salle de classe, du bureau de
                l&apos;orthophoniste au groupe de vie : Marcelle assure la
                continuite de l&apos;information entre tous les professionnels.
                Les releves d&apos;equipe sont preparees automatiquement avec
                les faits marquants de la journee.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Preparation du PIA facilitee
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Marcelle genere des syntheses par axe (educatif, pedagogique,
                therapeutique) directement exploitables pour les reunions de
                projet. Fini les heures de relecture de cahiers : l&apos;IA
                extrait les tendances, les progres et les points de vigilance
                sur la periode souhaitee.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <HeartIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Coordination avec les familles
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Les familles peuvent recevoir des nouvelles regulieres et
                adaptees via WhatsApp, sans que les equipes n&apos;aient a
                rediger de messages supplementaires. Le lien de confiance entre
                l&apos;etablissement et les parents est renforce par une
                communication fluide et transparente.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ── TYPES APPARENTES ─────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-8">
            Etablissements similaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "IEM",
                full: "Institut d'Education Motrice",
                href: "/agent-ia-iem",
              },
              {
                name: "ITEP",
                full: "Institut Therapeutique Educatif et Pedagogique",
                href: "/agent-ia-itep",
              },
              {
                name: "SESSAD",
                full: "Service d'Education Speciale et de Soins a Domicile",
                href: "/agent-ia-sessad",
              },
            ].map((type) => (
              <Link key={type.name} href={type.href}>
                <BentoCard
                  variant="white"
                  className="p-5 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-lg text-encre">
                        {type.name}
                      </p>
                      <p className="text-sm text-graphite mt-1">{type.full}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-graphite group-hover:text-sauge transition-colors" />
                  </div>
                </BentoCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <BentoCard variant="sauge" className="p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Pret a transformer les transmissions de votre IME ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Decouvrez comment Marcelle s&apos;integre dans le quotidien de
              votre Institut Medico-Educatif en moins de 48 heures, sans
              formation complexe.
            </p>
            <DemoTrigger className="group inline-flex items-center gap-2 bg-white text-sauge px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-cream transition-all duration-300 cursor-pointer">
              Demander une demo{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </BentoCard>
        </div>
      </section>

      <EsmsPageFooter />
    </main>
  );
}
