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
    "Agent IA ITEP - Intelligence artificielle pour Instituts Therapeutiques Educatifs et Pedagogiques | Marcelle",
  description:
    "Marcelle est l'agent IA concu pour les ITEP (Instituts Therapeutiques Educatifs et Pedagogiques). Suivi comportemental precis, coordination des 3 axes therapeutique/educatif/pedagogique, reporting DITEP modulaire. Conforme RGPD et IA Act.",
  keywords: [
    "agent IA ITEP",
    "intelligence artificielle ITEP",
    "logiciel ITEP",
    "transmissions ITEP",
    "IA institut therapeutique educatif pedagogique",
    "logiciel institut therapeutique educatif pedagogique",
    "DITEP",
    "dispositif ITEP",
    "troubles du comportement",
    "agent IA medico-social enfant",
  ],
  openGraph: {
    title:
      "Agent IA ITEP - Intelligence artificielle pour Instituts Therapeutiques Educatifs et Pedagogiques | Marcelle",
    description:
      "Marcelle est l'agent IA concu pour les ITEP. Suivi comportemental, coordination 3 axes, reporting DITEP modulaire et securisation des transmissions sensibles.",
    url: "https://marcelle.ai/agent-ia-itep",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelle - Agent IA pour Instituts Therapeutiques Educatifs et Pedagogiques (ITEP)",
      },
    ],
  },
  alternates: {
    canonical: "https://marcelle.ai/agent-ia-itep",
  },
};

export default function AgentIaItepPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle",
    applicationCategory: "HealthApplication",
    description:
      "Agent IA pour les Instituts Therapeutiques Educatifs et Pedagogiques (ITEP) : suivi comportemental, coordination 3 axes, reporting DITEP modulaire.",
    url: "https://marcelle.ai/agent-ia-itep",
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
              <SparklesIcon className="w-3.5 h-3.5" /> Agent IA ITEP
            </Badge>
            <Badge variant="terracotta">
              <ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act
            </Badge>
          </div>

          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour
            <br />
            <span className="text-sauge">
              les Instituts Therapeutiques Educatifs et Pedagogiques (ITEP)
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En ITEP, chaque journee est imprevisible. Crises, progres, moments
            de reussite et incidents se succedent a un rythme soutenu. Marcelle
            donne aux equipes un outil fiable pour consigner, transmettre et
            analyser les evenements avec rigueur, sans alourdir leur quotidien
            deja dense.
          </p>

          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* ── QU'EST-CE QU'UN ITEP ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-encre mb-6">
            Qu&apos;est-ce qu&apos;un ITEP ?
          </h2>
          <div className="prose max-w-none text-graphite leading-relaxed space-y-4">
            <p>
              L&apos;Institut Therapeutique Educatif et Pedagogique (ITEP)
              accueille des enfants et adolescents de 6 a 20 ans presentant des
              troubles du comportement qui perturbent gravement leur
              socialisation et l&apos;acces aux apprentissages, sans pathologie
              psychiatrique primaire ni deficience intellectuelle.
            </p>
            <p>
              Depuis la reforme du Dispositif ITEP (DITEP), ces etablissements
              fonctionnent en modalite modulaire : un meme jeune peut alterner
              entre internat, semi-internat et accompagnement ambulatoire selon
              l&apos;evolution de sa situation, sans repasser par la MDPH. Cette
              souplesse exige une tracabilite rigoureuse des modalites
              d&apos;accompagnement et des evenements quotidiens.
            </p>
            <p>
              L&apos;ITEP articule son accompagnement autour de trois axes
              indissociables : therapeutique (psychologue clinicien,
              pedopsychiatre), educatif (educateurs specialises, moniteurs-
              educateurs) et pedagogique (enseignants specialises). Le Projet
              Personnalise d&apos;Accompagnement (PPA) formalise les objectifs
              sur chacun de ces axes et constitue la boussole de
              l&apos;intervention de l&apos;equipe.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMMENT MARCELLE S'ADAPTE ────────────────────────────────── */}
      <section className="bg-ardoise py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Comment Marcelle s&apos;adapte a l&apos;ITEP
          </h2>
          <p className="text-white/60 mb-12 max-w-2xl">
            Gestion de crise, notes comportementales, fiches d&apos;incidents,
            suivi des modalites DITEP : Marcelle integre les specificites de
            l&apos;ITEP pour securiser et structurer les transmissions les plus
            sensibles.
          </p>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Categories de transmissions
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Comportement",
                "Educatif",
                "Pedagogique",
                "Therapeutique",
                "Social",
                "Inclusion",
                "Crise",
                "Famille",
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
                &laquo;&nbsp;Lucas, groupe Horizon. Arrivee agitee ce matin
                suite a un conflit familial le week-end. Episode de crise a
                10h30 en classe : renversement de chaise, cris. Intervention de
                l&apos;educateur, retrait en espace apaisement pendant 30
                minutes. Retour au calme progressif. L&apos;apres-midi,
                participation a l&apos;atelier theatre, bonne implication.
                Entretien avec la psychologue prevu demain.&nbsp;&raquo;
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="light">Crise</Badge>
                <Badge variant="light">Comportement</Badge>
                <Badge variant="light">Pedagogique</Badge>
                <Badge variant="light">Therapeutique</Badge>
              </div>
            </BentoCard>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              Creneaux de transmission
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <BentoCard variant="glass" className="p-5">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-sauge" />
                  <div>
                    <p className="text-white font-medium">Jour</p>
                    <p className="text-sm text-white/50">8h &ndash; 18h</p>
                  </div>
                </div>
              </BentoCard>
              <BentoCard variant="glass" className="p-5">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-terracotta" />
                  <div>
                    <p className="text-white font-medium">Soiree</p>
                    <p className="text-sm text-white/50">18h &ndash; 22h</p>
                  </div>
                </div>
              </BentoCard>
              <BentoCard variant="glass" className="p-5">
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-white/60" />
                  <div>
                    <p className="text-white font-medium">Nuit</p>
                    <p className="text-sm text-white/50">22h &ndash; 8h</p>
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
            L&apos;ITEP mobilise des professionnels aux sensibilites tres
            differentes &mdash; educateurs de terrain, psychologues cliniciens,
            enseignants, maitresses de maison. Marcelle s&apos;adapte au langage
            de chacun pour produire des transmissions exploitables par tous.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Educateur specialise",
              "Psychologue clinicien",
              "Psychiatre / Pedopsychiatre",
              "Enseignant specialise",
              "Moniteur-educateur",
              "Infirmier(e)",
              "Maitre(sse) de maison",
              "Chef de service educatif",
              "Assistant(e) social(e)",
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
            Les benefices pour votre ITEP
          </h2>
          <p className="text-graphite mb-10 max-w-2xl">
            Un agent IA pense pour les contextes ou la precision des ecrits est
            a la fois un enjeu clinique, educatif et juridique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Suivi comportemental precis
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Incidents, crises, episodes d&apos;agitation, mais aussi moments
                de reussite et progres : Marcelle categorise chaque evenement
                avec precision. L&apos;equipe dispose d&apos;une chronologie
                fiable qui eclaire les patterns comportementaux, identifie les
                declencheurs recurrents et met en lumiere les strategies
                d&apos;apaisement les plus efficaces.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-8 h-8 text-sauge mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Coordination des 3 axes
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Therapeutique, educatif, pedagogique : les trois axes du PPA
                sont souvent portes par des professionnels differents qui ne se
                croisent pas toujours. Marcelle assure la circulation de
                l&apos;information entre ces trois dimensions, pour que le
                psychologue sache ce qui s&apos;est passe en classe et que
                l&apos;enseignant soit informe de l&apos;avancement du suivi
                therapeutique.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Reporting DITEP modulaire
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Lorsqu&apos;un jeune passe du semi-internat a
                l&apos;ambulatoire, ou revient temporairement en internat,
                Marcelle trace chaque changement de modalite. Les syntheses
                generees integrent automatiquement le contexte du parcours
                DITEP, facilitant les bilans a destination de la MDPH et de
                l&apos;ARS.
              </p>
            </BentoCard>

            <BentoCard variant="white" className="p-6 md:p-8">
              <ShieldIcon className="w-8 h-8 text-terracotta mb-4" />
              <h3 className="font-serif text-lg text-encre mb-2">
                Securisation des transmissions sensibles
              </h3>
              <p className="text-sm text-graphite leading-relaxed">
                Les notes en ITEP contiennent des informations particulierement
                sensibles : contextes familiaux difficiles, faits de violence,
                elements therapeutiques confidentiels. Marcelle garantit un
                controle d&apos;acces par profession et par role, assurant que
                chaque professionnel n&apos;accede qu&apos;aux transmissions
                pertinentes pour sa mission.
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
                name: "SESSAD",
                full: "Service d'Education Speciale et de Soins a Domicile",
                href: "/agent-ia-sessad",
              },
              {
                name: "CMPP",
                full: "Centre Medico-Psycho-Pedagogique",
                href: "/agent-ia-cmpp",
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
              Pret a transformer les transmissions de votre ITEP ?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Decouvrez comment Marcelle securise et structure les ecrits
              professionnels de votre ITEP, en respectant la sensibilite des
              situations accompagnees.
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
