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
    "Agent IA IEM - Intelligence artificielle pour Instituts d'Education Motrice | Marcelle",
  description:
    "Marcelle est l'agent IA concu pour les IEM (Instituts d'Education Motrice). Suivi pluridisciplinaire kine/ergo/ortho, tracabilite appareillage, bilans de reeducation et coordination medico-educative. Conforme RGPD et IA Act.",
  keywords: [
    "agent IA IEM",
    "intelligence artificielle IEM",
    "logiciel IEM",
    "transmissions IEM",
    "IA institut education motrice",
    "logiciel institut education motrice",
    "transmissions reeducation IEM",
    "PPA IEM",
    "projet personnalise accompagnement",
    "agent IA handicap moteur enfant",
  ],
  openGraph: {
    title:
      "Agent IA IEM - Intelligence artificielle pour Instituts d'Education Motrice | Marcelle",
    description:
      "Marcelle est l'agent IA concu pour les IEM. Suivi pluridisciplinaire, tracabilite appareillage, bilans de reeducation et coordination medico-educative.",
    url: "https://marcelle.ai/agent-ia-iem",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelle - Agent IA pour Instituts d'Education Motrice (IEM)",
      },
    ],
  },
  alternates: {
    canonical: "https://marcelle.ai/agent-ia-iem",
  },
};

export default function AgentIaIemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle",
    applicationCategory: "HealthApplication",
    description:
      "Agent IA pour les Instituts d'Education Motrice (IEM) : suivi pluridisciplinaire, tracabilite appareillage, bilans de reeducation structures.",
    url: "https://marcelle.ai/agent-ia-iem",
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
              <SparklesIcon className="w-3.5 h-3.5" /> Agent IA IEM
            </Badge>
            <Badge variant="terracotta">
              <ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act
            </Badge>
          </div>

          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour
            <br />
            <span className="text-sauge">
              les Instituts d&apos;Education Motrice (IEM)
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            L&apos;accompagnement en IEM mobilise une chaine de soins et
            d&apos;education d&apos;une complexite unique : kinesitherapie,
            ergotherapie, appareillage, scolarite adaptee et vie en groupe.
            Marcelle centralise toutes ces informations pour que chaque
            professionnel accede instantanement au suivi complet du jeune.
          </p>

          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN IEM ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-6">
            Qu&apos;est-ce qu&apos;un Institut d&apos;Education Motrice ?
          </h2>
          <div className="prose max-w-none text-graphite leading-relaxed space-y-4">
            <p>
              L&apos;Institut d&apos;Education Motrice (IEM) accueille des
              enfants et adolescents de 3 a 20 ans presentant un handicap
              moteur, avec ou sans troubles associes (cognitifs, sensoriels,
              troubles du langage). L&apos;objectif est de conjuguer soins de
              reeducation, education adaptee et socialisation pour favoriser
              l&apos;autonomie maximale de chaque jeune.
            </p>
            <p>
              L&apos;IEM se distingue par son plateau technique de reeducation :
              salles de kinesitherapie, d&apos;ergotherapie, de psychomotricite,
              espace d&apos;appareillage et de bilan. Les seances de
              reeducation rythment la journee des jeunes, en alternance avec
              les temps scolaires assures par des enseignants specialises et les
              activites educatives proposees par les educateurs.
            </p>
            <p>
              Chaque jeune beneficie d&apos;un Projet Personnalise
              d&apos;Accompagnement (PPA) qui integre l&apos;ensemble des
              dimensions : motrice, cognitive, scolaire, sociale et affective.
              La coordination entre le medecin de Medecine Physique et de
              Readaptation (MPR), les therapeutes, les educateurs et les
              enseignants est le pilier central du fonctionnement de
              l&apos;etablissement.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMENT MARCELLE S'ADAPTE ────────────────────────────────── */}
      <section className="bg-ardoise py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Comment Marcelle s&apos;adapte a l&apos;IEM
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            Le vocabulaire de la reeducation motrice, le suivi
            d&apos;appareillage, les bilans fonctionnels : Marcelle maitrise
            les specificites de l&apos;IEM pour structurer chaque transmission
            avec precision.
          </p>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Categories de transmissions
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Reeducation",
                "Appareillage",
                "Motricite",
                "Educatif",
                "Pedagogique",
                "Sante",
                "Communication",
                "Autonomie",
                "Social",
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
                &laquo;&nbsp;Emma, groupe Azur. Seance de kinesitherapie a
                10h : travail sur la station debout avec le verticalisateur,
                bonne tolerance pendant 20 minutes. L&apos;orthese de main
                droite a ete ajustee par l&apos;ergotherapeute. En classe,
                utilisation du logiciel de communication alternative avec
                support, 3 phrases construites. Bonne journee
                globalement.&nbsp;&raquo;
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="light">Reeducation</Badge>
                <Badge variant="light">Appareillage</Badge>
                <Badge variant="light">Communication</Badge>
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
            En IEM, la chaine de soins et d&apos;education est etroitement
            interconnectee. Marcelle reconnait chaque profession et adapte le
            format de transmission en consequence : bilan fonctionnel pour le
            kine, note d&apos;appareillage pour l&apos;ergo, observation
            educative pour l&apos;educateur.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Kinesitherapeute",
              "Ergotherapeute",
              "Orthophoniste",
              "Psychomotricien",
              "Educateur specialise",
              "Enseignant specialise",
              "Medecin MPR",
              "Orthoprothesiste",
              "Infirmier(e)",
              "Psychologue",
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
            Les benefices pour votre IEM
          </h2>
          <p className="text-graphite mb-10 max-w-2xl">
            Un agent IA qui comprend les enjeux specifiques de la reeducation
            motrice et de l&apos;accompagnement des jeunes en situation de
            handicap moteur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Suivi pluridisciplinaire (kine/ergo/ortho)
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Chaque seance de reeducation est tracee avec le vocabulaire
                adapte : amplitudes articulaires, tolerance a
                l&apos;appareillage, objectifs moteurs. Le medecin MPR dispose
                d&apos;une vue consolidee de l&apos;evolution fonctionnelle du
                jeune sans avoir a compiler manuellement les comptes-rendus de
                chaque therapeute.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <ShieldIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Tracabilite appareillage
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Ortheses, verticalisateurs, fauteuils, aides techniques :
                Marcelle enregistre chaque ajustement, chaque changement de
                materiel et chaque observation de tolerance. L&apos;historique
                d&apos;appareillage est accessible en un clic pour preparer les
                consultations avec l&apos;orthoprothesiste.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Bilans de reeducation structures
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Marcelle genere automatiquement des syntheses de reeducation par
                periode, exploitables pour les bilans semestriels, les reunions
                de PPA et les courriers au medecin traitant. Les progres
                fonctionnels sont mis en evidence, les plateaux identifies et
                les ajustements recommandes.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <HeartIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Coordination medico-educative
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Le plateau technique et les groupes de vie partagent le meme
                outil. L&apos;educateur sait que la seance de kine a ete
                fatigante, le kine sait que le jeune a eu une journee agitee en
                groupe. Cette circulation fluide de l&apos;information ameliore
                la qualite de l&apos;accompagnement au quotidien.
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
                name: "IME",
                full: "Institut Medico-Educatif",
                href: "/agent-ia-ime",
              },
              {
                name: "EEAP",
                full: "Etablissement pour Enfants et Adolescents Polyhandicapes",
                href: "/agent-ia-eeap",
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
              Pret a transformer les transmissions de votre IEM ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Decouvrez comment Marcelle simplifie la coordination entre le
              plateau technique et les equipes educatives de votre Institut
              d&apos;Education Motrice.
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
