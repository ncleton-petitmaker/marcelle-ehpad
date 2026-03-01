import type { Metadata } from "next";
import Link from "next/link";
import { DemoTrigger } from "../DemoButton";
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

/* ------------------------------------------------------------------ */
/*  SEO METADATA                                                       */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Agent IA CAMSP - Marcelle | Bilans, consultations et guidance parentale",
  description:
    "Marcelle est l'agent IA concu pour les CAMSP. Bilans structures, comptes-rendus de consultations, guidance parentale tracee et coordination precoce multi-partenaires.",
  keywords: [
    "agent IA CAMSP",
    "intelligence artificielle CAMSP",
    "logiciel CAMSP",
    "transmissions CAMSP",
    "IA depistage precoce",
    "bilans developpement enfant",
    "logiciel medico-social petite enfance",
    "coordination CAMSP PMI",
  ],
  alternates: { canonical: "https://marcelle.ai/agent-ia-camsp" },
  openGraph: {
    title: "Agent IA CAMSP - Marcelle | Bilans, consultations et guidance parentale",
    description:
      "L'agent IA Marcelle simplifie les bilans et comptes-rendus en CAMSP : suivi longitudinal 0-6 ans, coordination precoce et guidance parentale.",
    url: "https://marcelle.ai/agent-ia-camsp",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AgentIaCamsp() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Agent IA pour CAMSP - Marcelle",
    description:
      "Solution d'intelligence artificielle pour les Centres d'Action Medico-Sociale Precoce. Bilans de developpement, comptes-rendus de consultations et guidance parentale structures.",
    url: "https://marcelle.ai/agent-ia-camsp",
    publisher: {
      "@type": "Organization",
      name: "Marcelle",
      url: "https://marcelle.ai",
    },
  };

  const categories = [
    "Consultation",
    "Bilan (initial, d'evolution)",
    "Seance de reeducation",
    "Observation",
    "Guidance parentale",
    "Coordination (PMI, medecin, creche, ecole)",
    "Autre",
  ];

  const professions = [
    { name: "Pediatre / Neuropediatre", desc: "Consultations de depistage et de suivi, prescriptions d'examens complementaires, coordination medicale du projet individualise." },
    { name: "Psychologue", desc: "Bilans psychologiques (cognitifs, affectifs), accompagnement therapeutique de l'enfant et soutien des parents dans l'acceptation du diagnostic." },
    { name: "Psychomotricien(ne)", desc: "Bilans et seances de psychomotricite, evaluation du developpement moteur, travail sur le tonus, l'equilibre et la coordination." },
    { name: "Orthophoniste", desc: "Bilans de langage, reeducation de la communication orale et de l'oralite, guidance parentale sur la stimulation langagiere." },
    { name: "Kinesitherapeute", desc: "Bilans moteurs, reeducation fonctionnelle, accompagnement des retards de developpement moteur (marche, posture)." },
    { name: "Educateur(trice) de jeunes enfants", desc: "Observations en jeu libre, seances de stimulation, lien avec les structures d'accueil (creche, halte-garderie) et soutien a la parentalite." },
    { name: "Assistant(e) social(e)", desc: "Accompagnement administratif des familles, constitution des dossiers MDPH, orientation vers les droits et les dispositifs d'aide." },
    { name: "Ergotherapeute", desc: "Evaluation des capacites fonctionnelles, preconisation d'adaptations pour le domicile et les lieux d'accueil, choix de materiel adapte." },
    { name: "Secretaire medicale", desc: "Gestion des rendez-vous, accueil des familles, tenue du dossier medical, articulation avec les partenaires exterieurs." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EsmsPageNav />

      {/* ── Hero ── */}
      <section className="bg-cream pt-[72px]">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Link href="/#esms" className="inline-flex items-center gap-1.5 text-sm text-sauge hover:text-sauge-deep transition-colors mb-8">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Tous les ESMS
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="sauge">CAMSP</Badge>
            <Badge variant="terracotta">Petite enfance</Badge>
            <Badge variant="sauge">0-6 ans</Badge>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-encre leading-[1.1] mb-6">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les CAMSP</span>
          </h1>

          <p className="text-lg md:text-xl text-graphite max-w-2xl mb-8 leading-relaxed">
            Dans les Centres d&apos;Action Medico-Sociale Precoce, le depistage et l&apos;accompagnement precoce
            exigent une documentation rigoureuse. Marcelle structure vos bilans, comptes-rendus de consultations
            et guidances parentales pour un suivi longitudinal fiable de 0 a 6 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <DemoTrigger className="group inline-flex items-center justify-center gap-2 bg-sauge text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300">
              Demander une demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </DemoTrigger>
            <Link href="#adaptation" className="inline-flex items-center justify-center gap-2 border border-lin text-encre px-6 py-3 rounded-xl text-sm font-medium hover:bg-white transition-all duration-300">
              Voir les categories
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qu'est-ce qu'un CAMSP ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="terracotta">Comprendre</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-6">Qu&apos;est-ce qu&apos;un CAMSP ?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-graphite leading-relaxed">
            <div>
              <p className="mb-4">
                Un Centre d&apos;Action Medico-Sociale Precoce (CAMSP) est un lieu de consultations et de soins
                ambulatoires destine aux enfants de la naissance a 6 ans presentant ou a risque de presenter
                un retard de developpement, un handicap sensoriel, moteur ou psychique. Le CAMSP a une mission
                fondamentale : le depistage et la prise en charge la plus precoce possible, car les premieres
                annees de vie sont determinantes pour le developpement neurologique.
              </p>
              <p>
                Les familles y sont orientees par le pediatre, la PMI (Protection Maternelle et Infantile),
                la maternite ou le medecin traitant. Le CAMSP propose un bilan pluridisciplinaire — medical,
                psychologique, psychomoteur, orthophonique — pour evaluer le developpement de l&apos;enfant et
                poser un diagnostic. Un projet individualise d&apos;accompagnement est ensuite elabore en
                concertation avec les parents.
              </p>
            </div>
            <div>
              <p className="mb-4">
                La particularite du CAMSP tient a la place centrale de la famille. Les parents ne sont pas de
                simples interlocuteurs : ils sont les acteurs principaux de l&apos;accompagnement. La guidance
                parentale — ces echanges ou les professionnels transmettent aux parents des strategies concretes
                pour stimuler leur enfant au quotidien — constitue un pilier de l&apos;intervention. Chaque
                consultation, chaque seance de reeducation est aussi un moment de partage avec la famille.
              </p>
              <p>
                Marcelle repond aux besoins specifiques du CAMSP : structuration des bilans de developpement,
                comptes-rendus de consultations et de seances, suivi de la guidance parentale et coordination
                avec les partenaires exterieurs (PMI, creche, ecole maternelle, medecin). Le tout dans un format
                directement exploitable pour les dossiers MDPH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment Marcelle s'adapte ── */}
      <section id="adaptation" className="bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="light">Adaptation</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-10">Comment Marcelle s&apos;adapte aux CAMSP</h2>

          {/* Categories */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">7 categories de comptes-rendus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            {categories.map((cat) => (
              <div key={cat} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-sm text-white/80 text-center">
                {cat}
              </div>
            ))}
          </div>

          {/* Exemple vocal */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Exemple de transmission vocale</h3>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sauge/20 flex items-center justify-center">
                <MicIcon className="w-4 h-4 text-sauge" />
              </div>
              <p className="text-white/90 leading-relaxed italic">
                &laquo; Mila, 3 ans. Consultation de suivi avec le Dr Martin : bilan de developpement a 2 ans
                et 6 mois. Seance de psychomotricite : exploration motrice en salle, amelioration de l&apos;equilibre.
                Guidance parentale avec la maman sur les strategies de communication au quotidien.
                Coordination avec la creche pour adapter l&apos;accueil. &raquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="light">consultation</Badge>
              <Badge variant="light">bilan</Badge>
              <Badge variant="light">seance_reeducation</Badge>
              <Badge variant="light">guidance_parentale</Badge>
              <Badge variant="light">coordination</Badge>
            </div>
          </div>

          {/* Horaires */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Horaires en CAMSP</h3>
          <div className="grid sm:grid-cols-1 max-w-md gap-3">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
              <ClockIcon className="w-5 h-5 mx-auto mb-2 text-amber-400" />
              <p className="text-white font-medium">Jour</p>
              <p className="text-white/50 text-sm">9h – 17h30, lundi au vendredi</p>
            </div>
          </div>
          <p className="text-white/40 text-sm mt-3">Consultations sur rendez-vous dans les locaux du CAMSP.</p>
        </div>
      </section>

      {/* ── Professions ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="sauge">Equipe</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-4">Les professions en CAMSP</h2>
          <p className="text-graphite mb-10 max-w-2xl">
            L&apos;equipe d&apos;un CAMSP reunit des specialistes du developpement de l&apos;enfant. Chaque professionnel
            contribue au diagnostic et a l&apos;accompagnement, et Marcelle s&apos;adapte au vocabulaire clinique et aux
            besoins documentaires de chacun.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {professions.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-lin p-5">
                <div className="flex items-center gap-2 mb-2">
                  <UsersIcon className="w-4 h-4 text-sauge" />
                  <h3 className="font-medium text-encre">{p.name}</h3>
                </div>
                <p className="text-sm text-graphite leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefices ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="terracotta">Benefices</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-10">Ce que Marcelle apporte aux CAMSP</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BentoCard className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Suivi longitudinal 0-6 ans</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Le CAMSP accompagne un enfant sur plusieurs annees, avec des bilans d&apos;evolution reguliers.
                Marcelle conserve l&apos;historique complet des consultations, seances et bilans, offrant une
                vision chronologique du developpement. Le pediatre peut mesurer les progres d&apos;une annee
                sur l&apos;autre en quelques secondes.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <BuildingIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Coordination precoce multi-partenaires</h3>
              <p className="text-graphite text-sm leading-relaxed">
                PMI, medecin traitant, creche, halte-garderie, ecole maternelle : le CAMSP coordonne de
                nombreux acteurs. Marcelle trace chaque echange avec les partenaires exterieurs et facilite
                la preparation des syntheses pluridisciplinaires. Rien ne se perd entre les intervenants.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Bilans structures pour la MDPH</h3>
              <p className="text-graphite text-sm leading-relaxed">
                La constitution du dossier MDPH requiert des bilans precis et documentes. Marcelle structure
                automatiquement les comptes-rendus de bilan — bilan initial, bilan d&apos;evolution — dans un
                format exploitable. L&apos;equipe gagne un temps considerable dans la redaction des documents
                necessaires a l&apos;orientation de l&apos;enfant.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Guidance parentale tracee</h3>
              <p className="text-graphite text-sm leading-relaxed">
                La guidance parentale est au coeur de la mission du CAMSP. Marcelle permet de consigner
                les conseils donnes aux parents, les strategies recommandees et les retours d&apos;observation.
                D&apos;une consultation a l&apos;autre, le professionnel sait exactement ce qui a ete travaille
                avec la famille et peut mesurer l&apos;evolution.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ── Decouvrez aussi ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <h2 className="font-serif text-3xl md:text-4xl text-encre mb-8">Decouvrez aussi</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/agent-ia-cmpp", label: "CMPP", desc: "Centres Medico-Psycho-Pedagogiques" },
              { href: "/agent-ia-sessad", label: "SESSAD", desc: "Services d'Education Speciale et de Soins a Domicile" },
              { href: "/agent-ia-ime", label: "IME", desc: "Instituts Medico-Educatifs" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-lin p-5 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                <Badge variant="sauge">{item.label}</Badge>
                <p className="mt-3 font-medium text-encre group-hover:text-sauge transition-colors">{item.desc}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-sm text-sauge">
                  Decouvrir <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Pret a structurer vos bilans et consultations en CAMSP ?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Decouvrez comment Marcelle accompagne les equipes de depistage precoce dans la documentation
            des bilans, le suivi longitudinal et la coordination avec les partenaires.
          </p>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300">
            Demander une demo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </section>

      <EsmsPageFooter />
    </>
  );
}
