import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA CMPP | Marcelle - Transmissions vocales pour les Centres Medico-Psycho-Pedagogiques",
  description: "Agent IA specialise pour les CMPP : dossiers de soins psychologiques structures, coordination entre therapeutes, suivi longitudinal des enfants. Transmissions vocales adaptees a l'ambulatoire.",
  keywords: [
    "agent IA CMPP",
    "intelligence artificielle CMPP",
    "logiciel CMPP",
    "transmissions CMPP",
    "centre medico-psycho-pedagogique",
    "suivi psychologique enfant",
    "dossier de soins CMPP",
    "coordination therapeutes CMPP",
    "orthophonie transmissions",
    "IA medico-social",
  ],
  openGraph: {
    title: "Agent IA CMPP | Marcelle",
    description: "Dossiers de soins psychologiques structures par la voix pour les CMPP. L'IA qui comprend les parcours de soins des enfants.",
    url: "https://marcelle.ai/agent-ia-cmpp",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-cmpp" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA CMPP",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Centres Medico-Psycho-Pedagogiques. Dossiers de soins psychologiques structures, coordination pluridisciplinaire, suivi longitudinal des enfants de 3 a 18 ans.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Consultation psy" },
    { name: "Orthophonie" },
    { name: "Psychomotricite" },
    { name: "Bilan" },
    { name: "Therapie familiale" },
    { name: "Coordination" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Pedopsychiatre", desc: "Consultations diagnostiques et de suivi, prescriptions medicamenteuses si necessaire, coordination du projet de soins global. Marcelle structure chaque compte-rendu de consultation pour un suivi longitudinal sans faille." },
    { title: "Psychologue", desc: "Bilans psychologiques, suivis therapeutiques individuels ou en groupe, evaluations cognitives et affectives. L'IA capture les observations cliniques fines — progres, resistances, dynamiques relationnelles — souvent perdues entre deux seances." },
    { title: "Orthophoniste", desc: "Bilans de langage, reeducation de la lecture, de l'ecriture, de la fluence verbale. Les transmissions tracent l'evolution des competences langagieres seance apres seance, facilitant le lien avec l'ecole." },
    { title: "Psychomotricien(ne)", desc: "Bilans psychomoteurs, travail sur le schema corporel, la coordination, la regulation tonique. Marcelle relie les observations psychomotrices aux donnees des autres therapeutes pour une vision globale du developpement." },
    { title: "Assistant(e) social(e)", desc: "Evaluation de la situation familiale, accompagnement administratif, liaison avec les institutions (ecole, ASE, MDPH). Les transmissions sociales enrichissent le projet de soins d'une dimension contextuelle essentielle." },
    { title: "Secretaire medicale", desc: "Gestion des rendez-vous, accueil des familles, coordination des plannings. Marcelle fournit une vue synthetique du parcours de chaque enfant pour fluidifier l'organisation du centre." },
    { title: "Chef de service", desc: "Supervision clinique des dossiers, animation des reunions de synthese, pilotage de l'activite. Les tableaux de bord Marcelle offrent une vision en temps reel de la file active et des indicateurs de suivi." },
  ];

  return (
    <main className="min-h-screen bg-cream text-encre font-sans selection:bg-sauge/20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EsmsPageNav />

      {/* HERO */}
      <section className="relative pt-[72px] bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-20">
          <Link href="/#esms" className="inline-flex items-center gap-2 text-sm text-graphite hover:text-sauge mb-8">
            &larr; Tous les etablissements
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA CMPP</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les CMPP</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En CMPP, le suivi therapeutique d&apos;un enfant repose sur la coordination fine entre pedopsychiatre, psychologue, orthophoniste et psychomotricien. Marcelle transforme les observations vocales de chaque professionnel en dossiers de soins psychologiques structures, assurant une continuite du parcours de soin seance apres seance.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN CMPP */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le CMPP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un CMPP et pourquoi la coordination y est essentielle ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Centre Medico-Psycho-Pedagogique accueille en ambulatoire des enfants et adolescents de 3 a 18 ans presentant des difficultes psychologiques, des troubles de l&apos;apprentissage, des troubles du langage ou du comportement. Structures de proximite essentielles du maillage medico-social francais, les CMPP fonctionnent sur rendez-vous, y compris le samedi matin, pour s&apos;adapter aux contraintes des familles et de l&apos;ecole.
              </p>
              <p>
                La particularite du CMPP reside dans son approche pluridisciplinaire : chaque enfant beneficie d&apos;un projet de soins qui mobilise simultanement plusieurs therapeutes — pedopsychiatre, psychologue, orthophoniste, psychomotricien — dont les interventions doivent se completer sans se contredire. Cette coordination est le coeur de l&apos;efficacite clinique du dispositif.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Or, dans la realite quotidienne, chaque therapeute exerce dans son cabinet de consultation, a des horaires differents, et ne croise pas toujours ses collegues. Les reunions de synthese, espacees de plusieurs semaines, ne suffisent pas a assurer un suivi continu. Les comptes-rendus de seance, quand ils existent, restent souvent dans le dossier papier du therapeute, inaccessibles aux autres intervenants.
              </p>
              <p>
                Marcelle resout ce defi de coordination en permettant a chaque professionnel de dicter ses observations en fin de seance, directement depuis son cabinet. L&apos;IA structure le compte-rendu selon la categorie de soin (consultation psy, orthophonie, psychomotricite, bilan, therapie familiale), le relie au dossier de l&apos;enfant et le rend immediatement disponible pour l&apos;ensemble de l&apos;equipe. Avant sa prochaine seance, l&apos;orthophoniste sait ce que le psychologue a observe la veille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au CMPP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites du CMPP
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Theo, 8 ans. Consultation avec le Dr Fabre : suivi pour troubles anxieux, amelioration depuis la mise en place de la therapie comportementale. Seance d&apos;orthophonie : travail sur la fluence verbale, exercices de lecture a voix haute, bons progres. Point avec l&apos;assistante sociale sur la situation familiale : les parents ont debute une mediation. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Consultation psy</Badge>
              <Badge variant="light">Orthophonie</Badge>
              <Badge variant="light">Coordination</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 3 categories et structure la transmission dans le dossier de soins psychologiques de l&apos;enfant, reliant les observations de chaque therapeute pour une vision integree du parcours.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">7 categories de soins reconnues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par plage horaire</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Jour</span>
              </div>
              <p className="text-sm text-white/50">9h - 18h, du lundi au vendredi + samedi matin. Consultations sur rendez-vous, seances de reeducation, bilans, reunions de synthese. Les transmissions s&apos;effectuent en fin de seance depuis le cabinet du therapeute, sans interrompre le rythme des consultations.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe pluridisciplinaire</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Marcelle parle le langage de chaque profession
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professions.map((p) => (
              <BentoCard key={p.title} variant="white" className="p-5">
                <h3 className="font-medium text-encre mb-2">{p.title}</h3>
                <p className="text-sm text-graphite leading-relaxed">{p.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICES */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><HeartIcon className="w-3.5 h-3.5" /> Benefices mesurables</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Ce qui change concretement pour votre CMPP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Dossier de soins psy structure</h3>
              <p className="text-white/80 leading-relaxed">
                Chaque observation est automatiquement rattachee au dossier de l&apos;enfant, classee par type de soin et datee. Le pedopsychiatre dispose d&apos;une vision chronologique complete avant chaque reunion de synthese, sans avoir a compiler manuellement les notes de chaque therapeute.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination entre therapeutes</h3>
              <p className="text-graphite leading-relaxed">
                L&apos;orthophoniste sait que le psychologue a travaille l&apos;estime de soi en seance precedente. Le psychomotricien connait les progres en lecture. Cette circulation fluide de l&apos;information entre professionnels qui ne se croisent pas physiquement transforme la qualite de l&apos;accompagnement.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi longitudinal des enfants</h3>
              <p className="text-graphite leading-relaxed">
                Un enfant suivi en CMPP l&apos;est souvent pendant plusieurs annees. Marcelle construit un fil continu d&apos;observations qui retrace l&apos;evolution de l&apos;enfant dans toutes ses dimensions — langagiere, psychomotrice, affective, sociale — un outil precieux pour evaluer l&apos;efficacite du projet de soins.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Liaison avec l&apos;Education nationale</h3>
              <p className="text-white/80 leading-relaxed">
                Les CMPP travaillent en lien etroit avec les etablissements scolaires — PAP, PPS, equipes educatives. Marcelle facilite la production de bilans de synthese structures, exploitables par les enseignants referents et les MDPH, tout en preservant le secret medical.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* RELATED ESMS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mb-8">Decouvrez aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CAMSP</h3>
                <p className="text-sm text-graphite mt-2">Centres d&apos;Action Medico-Sociale Precoce pour le depistage et l&apos;accompagnement des tout-petits de 0 a 6 ans.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">SESSAD</h3>
                <p className="text-sm text-graphite mt-2">Services d&apos;Education Speciale et de Soins a Domicile. Accompagnement en milieu ordinaire pour enfants en situation de handicap.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMP</h3>
                <p className="text-sm text-graphite mt-2">Centres Medico-Psychologiques pour adultes et enfants. Consultations psychiatriques et suivi ambulatoire de proximite.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mb-4">
            Pret a transformer le suivi therapeutique de votre CMPP ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle fluidifie la coordination de vos equipes en moins de 48 heures. Aucune installation, aucune formation complexe — vos therapeutes dictent, Marcelle structure et partage.
          </p>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
            Demander une demo gratuite <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </DemoTrigger>
        </div>
      </section>

      <EsmsPageFooter />
    </main>
  );
}
