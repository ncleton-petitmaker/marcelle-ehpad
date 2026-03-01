import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA Foyer de Vie | Marcelle - Transmissions educatives et suivi de l'autonomie",
  description: "Agent IA specialise pour les Foyers de Vie (foyers occupationnels) : transmissions educatives vocales, suivi du Projet d'Accompagnement Personnalise, 9 categories adaptees au handicap.",
  keywords: [
    "agent IA foyer de vie",
    "intelligence artificielle foyer de vie",
    "logiciel foyer occupationnel",
    "transmissions foyer de vie",
    "suivi educatif handicap",
    "projet accompagnement personnalise",
    "foyer occupationnel logiciel",
    "IA medico-social handicap",
    "transmissions educatives",
    "agent IA handicap",
  ],
  openGraph: {
    title: "Agent IA Foyer de Vie | Marcelle",
    description: "Transmissions educatives vocales pour les Foyers de Vie. L'IA qui comprend le quotidien des educateurs en foyer occupationnel.",
    url: "https://marcelle.ai/agent-ia-foyer-de-vie",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-foyer-de-vie" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA Foyer de Vie",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les transmissions educatives en Foyer de Vie (foyer occupationnel). Dictee vocale, structuration automatique, suivi du PAP et coordination avec les tuteurs.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Vie quotidienne", icon: "quotidien" },
    { name: "Autonomie", icon: "autonomie" },
    { name: "Activites", icon: "activites" },
    { name: "Comportement", icon: "comportement" },
    { name: "Vie sociale", icon: "social" },
    { name: "Sante", icon: "sante" },
    { name: "Communication", icon: "communication" },
    { name: "Relations familles/tuteurs", icon: "relations" },
    { name: "Autre", icon: "divers" },
  ];

  const professions = [
    { title: "Educateur specialise", desc: "Redaction et suivi du Projet d'Accompagnement Personnalise, observations sur l'evolution des competences et de l'autonomie. Marcelle structure chaque transmission pour alimenter le PAP en continu." },
    { title: "Moniteur-educateur", desc: "Accompagnement au quotidien, encadrement des activites collectives et individuelles. Les transmissions vocales capturent les micro-progres souvent invisibles dans un rapport ecrit classique." },
    { title: "Aide medico-psychologique (AMP/AES)", desc: "Aide aux gestes de la vie quotidienne, toilette, habillage, repas. L'IA repere les evolutions d'autonomie au fil des jours et les relie aux objectifs du PAP." },
    { title: "Animateur/Animatrice", desc: "Organisation des ateliers creatifs, sorties, activites sportives adaptees. Les transmissions activites documentent la participation, les preferences et les acquis de chaque resident." },
    { title: "Maitre(sse) de maison", desc: "Gestion du cadre de vie, repas, entretien des espaces collectifs. Observations privilegiees sur l'humeur, les habitudes alimentaires et les interactions entre residents au quotidien." },
    { title: "Psychologue", desc: "Suivi de l'etat emotionnel, gestion des crises, soutien individuel. Les transmissions comportementales enrichissent l'analyse clinique et facilitent les syntheses pluridisciplinaires." },
    { title: "Infirmier(e) (vacation)", desc: "Suivi des traitements, constantes, bilans de sante ponctuels. Marcelle relie les observations sante aux transmissions educatives pour une vision globale de l'accompagnement." },
    { title: "Chef de service", desc: "Pilotage de l'equipe, suivi des PAP, preparation des syntheses et des bilans annuels. Les tableaux de bord Marcelle offrent une vision immediate de l'activite du foyer." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA Foyer de Vie</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les Foyers de Vie</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En foyer occupationnel, l&apos;accompagnement se construit dans les details du quotidien. Marcelle transforme les observations vocales de vos educateurs en transmissions educatives structurees, couvrant les 9 categories essentielles au suivi de l&apos;autonomie et du Projet d&apos;Accompagnement Personnalise de chaque resident.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN FOYER DE VIE */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le Foyer de Vie</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un Foyer de Vie et pourquoi les transmissions educatives y sont essentielles ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Foyer de Vie, aussi appele foyer occupationnel, accueille des adultes en situation de handicap disposant d&apos;une certaine autonomie mais reconnus inaptes au travail, y compris en milieu protege. Ces residents vivent dans l&apos;etablissement 24h/24 et beneficient d&apos;un accompagnement educatif centre sur le maintien et le developpement de leurs capacites : gestes du quotidien, activites occupationnelles, vie sociale et relationnelle.
              </p>
              <p>
                Contrairement aux structures medicalisees comme les MAS ou les FAM, le foyer de vie place l&apos;accompagnement educatif au coeur de son projet. L&apos;objectif n&apos;est pas le soin mais l&apos;epanouissement : aider chaque resident a progresser a son rythme, valoriser ses acquis, cultiver son autonomie dans un cadre securisant. Le Projet d&apos;Accompagnement Personnalise (PAP) est la boussole de cet accompagnement.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Le defi des equipes educatives est de capturer les micro-progres qui jalonnent le quotidien : un resident qui met la table seul pour la premiere fois, une participation spontanee a un atelier, une gestion autonome d&apos;un conflit avec un colocataire. Ces observations, souvent faites en situation, sont rarement transcrites par manque de temps ou d&apos;outils adaptes. Elles se perdent lors des changements de poste, privant le PAP de sa matiere premiere.
              </p>
              <p>
                Marcelle permet a chaque professionnel de dicter ses observations dans l&apos;instant, entre deux accompagnements. L&apos;IA les structure en transmissions educatives, les categorise selon les 9 domaines du quotidien et les relie au PAP du resident. Chaque progres est trace, chaque difficulte documentee, chaque equipe informee sans delai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au Foyer de Vie</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites du Foyer de Vie
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Antoine, chambre 8. Bonne participation a l&apos;atelier jardinage ce matin : a plante des tomates avec aide legere. A dejeune avec les autres residents, bon appetit. Cet apres-midi, sortie a la mediatheque en petit groupe : a choisi 2 BD. Un peu de fatigue en fin de journee mais bonne humeur. A appele sa maman ce soir, conversation de 15 minutes. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Activites</Badge>
              <Badge variant="light">Vie quotidienne</Badge>
              <Badge variant="light">Autonomie</Badge>
              <Badge variant="light">Vie sociale</Badge>
              <Badge variant="light">Relations familles/tuteurs</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 5 categories et structure la transmission en mettant en valeur les acquis, les niveaux d&apos;aide et les initiatives du resident pour alimenter le PAP.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">9 categories educatives reconnues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par postes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Jour</span>
              </div>
              <p className="text-sm text-white/50">8h - 20h. Lever, toilette, petit-dejeuner, ateliers du matin, dejeuner, activites de l&apos;apres-midi, sorties, gouter, diner, coucher. Poste principal ou se concentrent les observations educatives sur l&apos;autonomie, les activites et la vie sociale.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Veilleur de nuit</span>
              </div>
              <p className="text-sm text-white/50">20h - 8h. Rondes, sommeil, agitation nocturne, accompagnement en cas de reveil. Transmissions essentielles sur le repos et les evenements nocturnes pour la continuite avec l&apos;equipe de jour.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe educative</Badge>
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
            Ce qui change concretement pour votre Foyer de Vie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Suivi educatif centre sur l&apos;autonomie</h3>
              <p className="text-white/80 leading-relaxed">
                Chaque transmission documente les niveaux d&apos;aide (aide totale, aide partielle, supervision, autonomie complete) et les relie aux objectifs du PAP. Les equipes visualisent les progressions sur des semaines et des mois, pas seulement au moment du bilan annuel.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Transmissions vie quotidienne structurees</h3>
              <p className="text-graphite leading-relaxed">
                Repas, toilette, habillage, deplacements, loisirs : les 9 categories du foyer de vie couvrent l&apos;integralite du quotidien. L&apos;IA classe automatiquement les observations et detecte les informations manquantes pour une documentation exhaustive.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination avec les tuteurs facilitee</h3>
              <p className="text-graphite leading-relaxed">
                Les familles et les tuteurs recoivent des syntheses claires et regulieres de l&apos;accompagnement de leur proche. Les transmissions categorie &laquo; relations &raquo; tracent chaque echange et permettent de preparer les reunions de suivi en quelques clics.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <SparklesIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Valorisation des progres</h3>
              <p className="text-white/80 leading-relaxed">
                En foyer de vie, les progres sont souvent discrets : un geste nouveau, une initiative spontanee, un mot prononce pour la premiere fois. Marcelle les capture a l&apos;oral et les trace dans le temps, rendant visible ce que les outils classiques laissent dans l&apos;ombre.
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
            <Link href="/agent-ia-fam" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">FAM</h3>
                <p className="text-sm text-graphite mt-2">Foyer d&apos;Accueil Medicalise pour les personnes handicapees necessitant un suivi medical renforce et un accompagnement educatif au quotidien.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-esat" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">ESAT</h3>
                <p className="text-sm text-graphite mt-2">Etablissement et Service d&apos;Aide par le Travail. Suivi professionnel structure pour les travailleurs handicapes en milieu protege.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-fhth" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">FHTH</h3>
                <p className="text-sm text-graphite mt-2">Foyer d&apos;Hebergement pour Travailleurs Handicapes. Transmissions soir et week-end pour les residents travaillant en ESAT la journee.</p>
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
            Pret a transformer les transmissions de votre Foyer de Vie ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos equipes educatives en moins de 48 heures. Vos educateurs dictent, Marcelle structure et alimente le PAP.
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
