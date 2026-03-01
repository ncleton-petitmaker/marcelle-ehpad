import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA FHTH | Marcelle - Transmissions soir et week-end pour foyers d'hebergement",
  description: "Agent IA specialise pour les Foyers d'Hebergement pour Travailleurs Handicapes (FHTH) : transmissions soir et week-end, coordination ESAT/foyer, suivi de l'autonomie quotidienne.",
  keywords: [
    "agent IA foyer hebergement travailleurs handicapes",
    "logiciel FHTH",
    "agent IA FHTH",
    "transmissions foyer hebergement",
    "coordination ESAT foyer",
    "suivi autonomie handicap",
    "logiciel foyer hebergement",
    "IA medico-social handicap",
    "transmissions vie quotidienne",
    "foyer hebergement logiciel",
  ],
  openGraph: {
    title: "Agent IA FHTH | Marcelle",
    description: "Transmissions soir et week-end pour les Foyers d'Hebergement pour Travailleurs Handicapes. L'IA qui fait le lien entre l'ESAT et le foyer.",
    url: "https://marcelle.ai/agent-ia-fhth",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-fhth" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA FHTH",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les transmissions en Foyer d'Hebergement pour Travailleurs Handicapes. Dictee vocale, coordination ESAT/foyer, suivi de l'autonomie au quotidien.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Vie quotidienne", icon: "quotidien" },
    { name: "Autonomie", icon: "autonomie" },
    { name: "Sante", icon: "sante" },
    { name: "Comportement", icon: "comportement" },
    { name: "Relations", icon: "relations" },
    { name: "Week-end", icon: "weekend" },
    { name: "Coordination ESAT", icon: "coordination" },
    { name: "Autre", icon: "divers" },
  ];

  const professions = [
    { title: "Educateur specialise", desc: "Pilotage du Projet Personnalise d'Accompagnement, coordination des actions educatives entre le foyer et l'ESAT. Marcelle alimente le PPA avec les observations du soir et du week-end sans effort supplementaire." },
    { title: "Moniteur-educateur", desc: "Accompagnement du quotidien en soiree et le week-end : repas, loisirs, gestion du budget, sorties. Les transmissions vocales capturent les initiatives, les progres d'autonomie et les difficultes rencontrees." },
    { title: "Aide medico-psychologique (AMP/AES)", desc: "Aide aux gestes de la vie quotidienne pour les residents les moins autonomes. L'IA trace les niveaux d'aide et repere les evolutions au fil des semaines pour adapter l'accompagnement." },
    { title: "Maitre(sse) de maison", desc: "Gestion du cadre de vie, preparation des repas avec les residents, entretien des espaces. Observations privilegiees sur les habitudes alimentaires, l'hygiene et les interactions entre colocataires." },
    { title: "Veilleur de nuit", desc: "Surveillance nocturne, rondes, accompagnement en cas de reveil ou d'angoisse. Les transmissions de nuit sont essentielles pour la continuite avec l'equipe du soir et le retour a l'ESAT le lendemain." },
    { title: "Psychologue (vacation)", desc: "Soutien psychologique individuel, gestion des conflits, accompagnement des transitions de vie. Les transmissions comportement et relations nourrissent le suivi clinique entre deux vacations." },
    { title: "Infirmier(e) (vacation)", desc: "Gestion des traitements du soir et du week-end, suivi des pathologies chroniques. L'IA relie les observations sante du foyer a celles de l'ESAT pour une vision medicale complete." },
    { title: "Chef de service", desc: "Coordination des equipes, lien avec les moniteurs d'atelier de l'ESAT, preparation des syntheses. Les tableaux de bord Marcelle offrent une vue croisee foyer/ESAT sur chaque resident." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA FHTH</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour les<br />
            <span className="text-sauge">Foyers d&apos;Hebergement</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            Le FHTH est le lieu de vie des travailleurs d&apos;ESAT une fois la journee de travail terminee. Marcelle structure les transmissions du soir et du week-end, assure la coordination avec l&apos;ESAT et documente le parcours d&apos;autonomie de chaque resident — le tout par la voix, en quelques secondes.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN FHTH */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le FHTH</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un FHTH et pourquoi la coordination ESAT/foyer est un enjeu majeur ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Le Foyer d&apos;Hebergement pour Travailleurs Handicapes accueille des adultes en situation de handicap qui travaillent en ESAT la journee. Le foyer est leur domicile : ils y rentrent le soir apres le travail, y passent leurs week-ends et leurs conges. L&apos;accompagnement porte sur la vie quotidienne — repas, hygiene, gestion du budget, loisirs — et vise le developpement de l&apos;autonomie dans la perspective, pour certains, d&apos;acceder a un logement en milieu ordinaire.
              </p>
              <p>
                La specificite du FHTH tient a cette dualite : le resident vit entre deux structures distinctes, l&apos;ESAT et le foyer, avec des equipes differentes qui ne se croisent pas physiquement. Ce que le moniteur d&apos;atelier observe en journee (fatigue, conflit avec un collegue, progres professionnel) a un impact direct sur la soiree au foyer. Et inversement : une mauvaise nuit, un probleme de sante, un conflit entre colocataires se repercute sur la journee de travail.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Historiquement, cette coordination repose sur un cahier de liaison papier, des appels telephoniques ponctuels ou des reunions mensuelles entre les deux equipes. L&apos;information circule mal, arrive en retard ou se perd dans la chaine. Un educateur du foyer decouvre parfois des semaines plus tard qu&apos;un travailleur a change de poste a l&apos;ESAT. Un moniteur d&apos;atelier ignore qu&apos;un resident n&apos;a pas dormi de la nuit.
              </p>
              <p>
                Marcelle cree un flux d&apos;information continu entre les deux structures. Les transmissions du soir au foyer sont accessibles a l&apos;equipe de l&apos;ESAT le lendemain matin. Les notes de l&apos;atelier remontent au foyer en fin de journee. La categorie &laquo; Coordination ESAT &raquo; est dediee a ces echanges inter-structures : signalements, bilans de semaine, evenements importants. L&apos;IA assure la continuite que la geographie rend difficile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au FHTH</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites du FHTH
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Marc, chambre 12. Retour de l&apos;ESAT a 17h30 : bonne humeur, raconte sa journee a l&apos;atelier. Douche en autonomie. Diner : a cuisine des pates avec aide pour la cuisson. Soiree : regarde la tele avec les colocataires. Couche a 22h. Note de coordination ESAT : le moniteur d&apos;atelier signale une bonne semaine, progres sur le poste de tri. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Vie quotidienne</Badge>
              <Badge variant="light">Autonomie</Badge>
              <Badge variant="light">Relations</Badge>
              <Badge variant="light">Coordination ESAT</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 4 categories et structure la transmission en distinguant les observations du foyer et les elements de coordination avec l&apos;ESAT pour une vision complete de la journee du resident.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">8 categories de vie quotidienne reconnues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par creneaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Soiree</span>
              </div>
              <p className="text-sm text-white/50">17h - 22h. Retour de l&apos;ESAT, gouter, douche, diner, activites du soir, coucher. Creneau principal de transmissions : observations sur l&apos;humeur au retour du travail, l&apos;autonomie aux repas et l&apos;ambiance entre residents.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Nuit</span>
              </div>
              <p className="text-sm text-white/50">22h - 7h30. Rondes, sommeil, levers nocturnes, angoisses. Les transmissions de nuit sont cruciales : un mauvais sommeil impacte directement la journee de travail a l&apos;ESAT le lendemain.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Week-end</span>
              </div>
              <p className="text-sm text-white/50">Journee entiere sam-dim. Sorties, activites, vie collective, gestion du linge, courses, cuisine. Le week-end est le moment ou l&apos;autonomie quotidienne se travaille le plus intensement.</p>
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
            Ce qui change concretement pour votre FHTH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <BuildingIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Coordination fluide ESAT / foyer</h3>
              <p className="text-white/80 leading-relaxed">
                Les notes de l&apos;ESAT remontent au foyer en fin de journee ; les transmissions du soir sont accessibles aux moniteurs d&apos;atelier le lendemain matin. La categorie &laquo; Coordination ESAT &raquo; cree un canal dedie entre les deux equipes, sans cahier de liaison ni appel telephonique.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Transmissions soir et week-end structurees</h3>
              <p className="text-graphite leading-relaxed">
                Les creneaux du foyer sont courts et denses : entre le retour de l&apos;ESAT et le coucher, il y a a peine 5 heures. Marcelle permet de dicter les transmissions en temps reel, sans attendre la fin du service. Chaque observation est classee et accessible immediatement pour l&apos;equipe suivante.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi de l&apos;autonomie quotidienne</h3>
              <p className="text-graphite leading-relaxed">
                Cuisine, menage, gestion du budget, deplacements, hygiene : chaque geste du quotidien est documente avec le niveau d&apos;aide apporte. Les progres sont traces sur la duree pour alimenter le PPA et preparer les projets de vie en milieu ordinaire ou en logement accompagne.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <SparklesIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Preparation du projet de vie</h3>
              <p className="text-white/80 leading-relaxed">
                Pour les residents dont le projet vise un logement en milieu ordinaire, Marcelle constitue un dossier factuel de l&apos;evolution de l&apos;autonomie : quels actes sont realises seul, lesquels necessitent encore un accompagnement, quelles competences progressent. Des donnees concretes pour etayer les demandes aupres de la MDPH.
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
            <Link href="/agent-ia-esat" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">ESAT</h3>
                <p className="text-sm text-graphite mt-2">Etablissement et Service d&apos;Aide par le Travail. Suivi professionnel structure, carnet de parcours automatise et coordination avec le foyer d&apos;hebergement.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-foyer-de-vie" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Foyer de Vie</h3>
                <p className="text-sm text-graphite mt-2">Transmissions educatives pour les foyers occupationnels. Suivi de l&apos;autonomie et du Projet d&apos;Accompagnement Personnalise 24h/24.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-fam" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">FAM</h3>
                <p className="text-sm text-graphite mt-2">Foyer d&apos;Accueil Medicalise pour les personnes handicapees necessitant un accompagnement educatif et un suivi medical renforce.</p>
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
            Pret a fluidifier la coordination ESAT/foyer ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle connecte vos equipes du soir et vos moniteurs d&apos;atelier en moins de 48 heures. Vos educateurs dictent, Marcelle fait le lien.
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
