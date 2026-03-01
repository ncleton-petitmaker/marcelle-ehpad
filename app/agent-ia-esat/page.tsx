import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA ESAT | Marcelle - Suivi professionnel et notes d'atelier",
  description: "Agent IA specialise pour les ESAT : notes professionnelles vocales, suivi de production, carnet de parcours professionnel automatise, coordination atelier/soutien. Adapte aux 9 categories du travail protege.",
  keywords: [
    "agent IA ESAT",
    "intelligence artificielle ESAT",
    "logiciel ESAT",
    "suivi professionnel ESAT",
    "transmissions ESAT",
    "carnet parcours professionnel",
    "moniteur atelier logiciel",
    "travail protege IA",
    "IA medico-social handicap",
    "bilan CDAPH ESAT",
  ],
  openGraph: {
    title: "Agent IA ESAT | Marcelle",
    description: "Notes professionnelles vocales pour les ESAT. L'IA qui comprend le quotidien des moniteurs d'atelier en milieu protege.",
    url: "https://marcelle.ai/agent-ia-esat",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-esat" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA ESAT",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour le suivi professionnel en ESAT. Dictee vocale, notes de production structurees, carnet de parcours automatise, preparation des bilans CDAPH.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Production", icon: "production" },
    { name: "Competences", icon: "competences" },
    { name: "Comportement au travail", icon: "comportement" },
    { name: "Autonomie professionnelle", icon: "autonomie" },
    { name: "Relations sociales", icon: "social" },
    { name: "Absences", icon: "absences" },
    { name: "Sante au travail", icon: "sante" },
    { name: "Soutien medico-social", icon: "soutien" },
    { name: "Autre", icon: "divers" },
  ];

  const professions = [
    { title: "Moniteur d'atelier", desc: "Encadrement quotidien des travailleurs sur le poste de production. Marcelle capture les observations sur le rythme, la qualite, les difficultes rencontrees et les progres techniques directement depuis l'atelier." },
    { title: "Educateur technique specialise", desc: "Formation aux gestes professionnels, adaptation des postes, evaluation des competences. Les transmissions vocales documentent chaque apprentissage et alimentent le carnet de parcours professionnel." },
    { title: "Educateur specialise (soutien)", desc: "Accompagnement medico-social complementaire a l'activite de production. L'IA relie les observations du soutien aux notes d'atelier pour une vision globale du travailleur." },
    { title: "Chef d'atelier", desc: "Supervision de la production, gestion des commandes, organisation des equipes. Les tableaux de bord Marcelle croisent les indicateurs de production avec le suivi individuel de chaque travailleur." },
    { title: "Psychologue du travail", desc: "Evaluation de l'adaptation au poste, gestion du stress professionnel, accompagnement des transitions. Les transmissions comportement au travail nourrissent l'analyse clinique sur la duree." },
    { title: "Infirmier(e)", desc: "Suivi de la sante au travail, gestion des accidents, adaptation des conditions de travail aux contraintes medicales. L'IA categorise les observations sante et genere des alertes en cas de repetition." },
    { title: "Ergonome", desc: "Amenagement des postes de travail, prevention des TMS, adaptation des outils. Les transmissions production et sante au travail fournissent des donnees concretes pour les preconisations ergonomiques." },
    { title: "Charge d'insertion professionnelle", desc: "Preparation des mises en stage en milieu ordinaire, suivi des detachements, accompagnement vers l'emploi. Le carnet de parcours automatise par Marcelle documente chaque etape du projet professionnel." },
    { title: "Chef de service", desc: "Pilotage de l'activite, preparation des bilans CDAPH, coordination entre ateliers et equipe de soutien. Les syntheses Marcelle fournissent les indicateurs cles pour chaque renouvellement d'orientation." },
    { title: "Directeur", desc: "Vision strategique de l'etablissement, indicateurs de production globaux, taux d'absenteisme, parcours professionnels. Marcelle agrege les donnees pour un pilotage eclaire de l'ESAT." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA ESAT</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les ESAT</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En ESAT, le suivi professionnel des travailleurs handicapes exige une documentation rigoureuse : production, competences, comportement, parcours. Marcelle transforme les observations vocales de vos moniteurs d&apos;atelier en notes professionnelles structurees, couvrant les 9 categories essentielles du travail protege. Le carnet de parcours professionnel se remplit au fil de l&apos;eau, pas la veille du bilan CDAPH.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN ESAT */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre l&apos;ESAT</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un ESAT et pourquoi le suivi professionnel y est determinant ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Etablissement et Service d&apos;Aide par le Travail accueille des adultes handicapes reconnus travailleurs handicapes (RQTH) et orientes par la CDAPH. L&apos;ESAT occupe une place unique dans le paysage medico-social : il est a la fois un lieu de production economique et un dispositif d&apos;accompagnement social. Les travailleurs y exercent une activite professionnelle adaptee tout en beneficiant d&apos;un soutien medico-social et educatif.
              </p>
              <p>
                Les ateliers sont varies : conditionnement, espaces verts, blanchisserie, restauration, sous-traitance industrielle, numerique. Chaque travailleur dispose d&apos;un Projet Personnalise d&apos;Accompagnement (PPA) et d&apos;un carnet de parcours professionnel qui retrace ses competences acquises, ses formations, ses mises en stage et ses souhaits d&apos;evolution. Ce carnet est un document clef lors des renouvellements d&apos;orientation CDAPH.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                La difficulte pour les moniteurs d&apos;atelier est de concilier l&apos;encadrement de la production avec la documentation du parcours de chaque travailleur. Entre la gestion des commandes, l&apos;adaptation des postes et l&apos;accompagnement individuel, le temps consacre a la saisie ecrite est souvent reduit au strict minimum. Les observations du quotidien — un progres technique, un changement de comportement, une difficulte relationnelle — se perdent faute de temps pour les consigner.
              </p>
              <p>
                Marcelle resout cette equation en permettant au moniteur de dicter ses observations directement dans l&apos;atelier, entre deux operations de production. L&apos;IA les transforme en notes professionnelles structurees, les categorise automatiquement et alimente le carnet de parcours en continu. Le jour du bilan CDAPH, la synthese est deja prete : des mois d&apos;observations factuelles, datees et classees, plutot qu&apos;un document redige dans l&apos;urgence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte a l&apos;ESAT</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites de l&apos;ESAT
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de note professionnelle vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Fatima, atelier conditionnement. Production du matin : 120 unites conditionnees, rythme regulier et qualite conforme. Bonne comprehension de la nouvelle procedure d&apos;etiquetage apres demonstration. Pause dejeuner au self en autonomie. Cet apres-midi, legere baisse de concentration a 15h, proposition de pause acceptee. Echange avec le moniteur sur son souhait de decouvrir l&apos;atelier espaces verts. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Production</Badge>
              <Badge variant="light">Competences</Badge>
              <Badge variant="light">Autonomie professionnelle</Badge>
              <Badge variant="light">Comportement au travail</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 4 categories et structure la note en distinguant les donnees de production, les competences mobilisees et les souhaits d&apos;evolution pour alimenter le carnet de parcours professionnel.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">9 categories professionnelles reconnues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par horaires de travail</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Matin</span>
              </div>
              <p className="text-sm text-white/50">8h30 - 12h. Prise de poste, briefing production, activite d&apos;atelier. Les notes du matin portent sur la mise en route, la comprehension des consignes, le rythme de production et les difficultes rencontrees.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Apres-midi</span>
              </div>
              <p className="text-sm text-white/50">13h - 17h. Reprise de l&apos;activite, activites de soutien, bilan de journee. Les notes de l&apos;apres-midi documentent la fatigue, la concentration, les echanges avec les pairs et les souhaits d&apos;evolution professionnelle.</p>
            </BentoCard>
          </div>
          <p className="mt-4 text-sm text-white/30">Horaires du lundi au vendredi. Les observations du soutien medico-social (activites de soutien, rendez-vous, bilans) sont integrees dans le meme flux de transmissions.</p>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe d&apos;encadrement</Badge>
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
            Ce qui change concretement pour votre ESAT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Suivi professionnel structure</h3>
              <p className="text-white/80 leading-relaxed">
                Production, competences, comportement au travail : chaque note vocale alimente les trois axes du suivi professionnel. Les moniteurs documentent la realite de l&apos;atelier sans quitter leur poste d&apos;encadrement, avec une richesse de detail inegalee par la saisie clavier.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Carnet de parcours automatise</h3>
              <p className="text-graphite leading-relaxed">
                Le carnet de parcours professionnel de chaque travailleur s&apos;enrichit au fil des jours, sans effort supplementaire. Competences acquises, formations suivies, mises en stage, souhaits d&apos;evolution : tout est trace et accessible pour les bilans annuels et les renouvellements CDAPH.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination atelier / soutien</h3>
              <p className="text-graphite leading-relaxed">
                Les observations des moniteurs d&apos;atelier et celles de l&apos;equipe de soutien medico-social convergent dans le meme espace. L&apos;educateur specialise voit les notes de production ; le moniteur accede aux observations du soutien. La vision du travailleur est enfin globale.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <SparklesIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Preparation des bilans CDAPH</h3>
              <p className="text-white/80 leading-relaxed">
                Lors du renouvellement d&apos;orientation, Marcelle genere une synthese factuelle du parcours : evolution des competences, volumes de production, comportement au travail, projet professionnel. Des mois de donnees structurees remplacent un document redige a la hate la veille de la commission.
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
            <Link href="/agent-ia-fhth" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">FHTH</h3>
                <p className="text-sm text-graphite mt-2">Foyer d&apos;Hebergement pour Travailleurs Handicapes. Transmissions soir et week-end pour les residents qui travaillent en ESAT la journee.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-foyer-de-vie" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Foyer de Vie</h3>
                <p className="text-sm text-graphite mt-2">Transmissions educatives pour les foyers occupationnels. Suivi de l&apos;autonomie et du Projet d&apos;Accompagnement Personnalise.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-fam" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">FAM</h3>
                <p className="text-sm text-graphite mt-2">Foyer d&apos;Accueil Medicalise pour les personnes handicapees necessitant un suivi medical renforce au quotidien.</p>
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
            Pret a transformer le suivi professionnel de votre ESAT ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos ateliers en moins de 48 heures. Vos moniteurs dictent, Marcelle structure et alimente le carnet de parcours.
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
