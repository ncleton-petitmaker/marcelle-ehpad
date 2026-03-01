import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA CATTP | Marcelle - Notes d'atelier therapeutique par la voix",
  description: "Agent IA concu pour les CATTP : notes d'atelier therapeutique structurees par la voix, observations cliniques fines, suivi de l'assiduite et coordination avec le CMP. Intelligence artificielle adaptee aux soins psychiatriques a temps partiel.",
  keywords: [
    "agent IA CATTP",
    "intelligence artificielle CATTP",
    "logiciel CATTP",
    "notes atelier therapeutique",
    "centre accueil therapeutique temps partiel",
    "observations cliniques CATTP",
    "suivi psychiatrie ambulatoire",
    "coordination CMP CATTP",
    "IA psychiatrie",
  ],
  openGraph: {
    title: "Agent IA CATTP | Marcelle",
    description: "Notes d'atelier therapeutique et observations cliniques structurees par la voix pour les CATTP. Suivi de l'evolution et coordination avec le CMP.",
    url: "https://marcelle.ai/agent-ia-cattp",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-cattp" },
};

export default function AgentIaCattp() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA CATTP",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Centres d'Accueil Therapeutique a Temps Partiel. Notes d'atelier par la voix, observations cliniques et coordination avec le CMP.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Atelier" },
    { name: "Observation clinique" },
    { name: "Evolution" },
    { name: "Entretien" },
    { name: "Coordination" },
    { name: "Assiduite" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Infirmier(e) de secteur psychiatrique", desc: "L'infirmier(e) est le pilier de l'observation clinique au CATTP. Pendant les ateliers, il/elle observe les interactions, l'humeur, les comportements de retrait ou d'agitation. Marcelle lui permet de dicter ses observations immediatement apres la seance, quand les details sont encore frais." },
    { title: "Ergotherapeute", desc: "L'ergotherapeute anime des ateliers centres sur les gestes du quotidien et la readaptation fonctionnelle. Marcelle structure ses notes d'atelier en integrant les objectifs therapeutiques, les capacites mobilisees et les progres observes seance apres seance." },
    { title: "Art-therapeute", desc: "L'art-therapeute utilise la creation (peinture, musique, ecriture, theatre) comme mediateur therapeutique. Marcelle capture les observations sur le processus creatif du patient — choix des couleurs, themes recurrents, engagement dans l'activite — qui sont autant d'indicateurs cliniques precieux." },
    { title: "Psychologue", desc: "Le psychologue conduit des entretiens individuels ou de groupe au CATTP. Marcelle lui permet de structurer ses notes en articulant les elements observes en atelier avec les contenus de l'entretien, pour une lecture clinique enrichie du parcours du patient." },
    { title: "Moniteur d'atelier therapeutique", desc: "Le moniteur anime des ateliers a visee rehabilitative (menuiserie, jardinage, cuisine therapeutique). Marcelle valorise ses observations sur la participation, la concentration et les interactions du patient, des donnees souvent sous-exploitees mais cliniquement riches." },
    { title: "Animateur socio-therapeutique", desc: "L'animateur propose des activites de socialisation et de loisirs adaptes. Marcelle structure ses observations sur les dynamiques de groupe, les initiatives du patient et sa capacite a nouer des liens, des marqueurs essentiels de l'evolution en sante mentale." },
    { title: "Cadre de sante", desc: "Le cadre de sante supervise le fonctionnement du CATTP et la qualite du programme therapeutique. Marcelle lui offre des indicateurs de suivi : taux d'assiduite, repartition par atelier, evolution clinique des patients, coordination avec le CMP." },
  ];

  return (
    <main className="min-h-screen bg-cream text-encre font-sans selection:bg-sauge/20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EsmsPageNav />

      {/* Hero */}
      <section className="relative pt-[72px] bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-20">
          <Link href="/#esms" className="inline-flex items-center gap-2 text-sm text-graphite hover:text-sauge mb-8">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Tous les etablissements
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA CATTP</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; HDS</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les CATTP</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            Infirmiers, ergotherapeutes, art-therapeutes : dictez vos notes d&apos;atelier et observations cliniques apres chaque seance. Marcelle capture la richesse therapeutique de vos activites, suit l&apos;evolution de chaque patient et coordonne avec le CMP. Chaque atelier devient une source de donnees cliniques exploitables.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)]">
              Decouvrir Marcelle pour les CATTP <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un CATTP */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le CATTP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un CATTP ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Centre d&apos;Accueil Therapeutique a Temps Partiel (CATTP) est une structure de soins psychiatriques ambulatoires qui propose des activites therapeutiques en groupe sur des demi-journees. Le CATTP fonctionne en complement du CMP : le patient y vient 2 a 3 fois par semaine pour participer a des ateliers encadres par des soignants — peinture, musique, ecriture, cuisine therapeutique, jardinage, activites corporelles.
              </p>
              <p>
                L&apos;objectif du CATTP n&apos;est pas occupationnel : chaque atelier est un acte de soin a part entiere, concu dans le cadre du projet therapeutique du patient. La peinture n&apos;est pas un loisir, c&apos;est un mediateur qui permet au patient de s&apos;exprimer, de se confronter a la creation, d&apos;interagir avec les autres. L&apos;observation du soignant pendant l&apos;atelier est donc fondamentalement clinique.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Le defi documentaire du CATTP est unique : les observations cliniques les plus riches emergent pendant l&apos;atelier, dans l&apos;action, pas dans un bureau de consultation. Le soignant observe un changement de comportement, une interaction spontanee, un moment de repli — mais il ne peut pas s&apos;arreter pour prendre des notes sans rompre la dynamique du groupe. Le resultat : des observations precieuses qui se perdent entre la fin de l&apos;atelier et le moment de la saisie informatique.
              </p>
              <p>
                C&apos;est la que Marcelle intervient. Juste apres la seance, le soignant dicte ses observations a chaud. Marcelle structure la note d&apos;atelier : description de l&apos;activite, comportement du patient, interactions avec le groupe, impression clinique, evolution par rapport aux seances precedentes. Le CMP recoit l&apos;information en temps reel, enrichissant la vision globale du parcours du patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Marcelle s'adapte */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au CATTP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux ateliers therapeutiques
          </h2>

          {/* Example */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de note d&apos;atelier dictee</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Mme Dubois. Atelier peinture, groupe du mardi matin. Presente et ponctuelle. A choisi de travailler sur le theme libre : a peint un paysage avec des couleurs vives, changement par rapport aux tonalites sombres des semaines precedentes. Interactions spontanees avec 2 autres participantes. Moment de repli en milieu de seance, a pu en parler brievement. Impression clinique : evolution positive sur l&apos;ouverture aux autres. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Atelier</Badge>
              <Badge variant="light">Observation clinique</Badge>
              <Badge variant="light">Evolution</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie le type d&apos;atelier, structure les observations comportementales, note l&apos;evolution par rapport aux seances precedentes et qualifie l&apos;impression clinique du soignant.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">7 categories de notes adaptees au CATTP</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par demi-journees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Demi-journee matin</span>
              </div>
              <p className="text-sm text-white/50">9h - 12h, du lundi au vendredi. Ateliers de creation (peinture, ecriture, musique), activites corporelles, groupes de parole. La matinee permet des seances longues propices a l&apos;engagement dans l&apos;activite.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Demi-journee apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 17h, du lundi au vendredi. Ateliers de socialisation (cuisine, jardinage, sorties), entretiens individuels, reunions de synthese. Rythme souvent plus souple, adapte aux patients en reprise progressive.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe pluridisciplinaire</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Marcelle parle le langage de chaque profession du CATTP
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

      {/* Benefices */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><HeartIcon className="w-3.5 h-3.5" /> Benefices concrets</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Ce qui change concretement pour votre CATTP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Notes d&apos;atelier therapeutique structurees</h3>
              <p className="text-white/80 leading-relaxed">
                Chaque seance devient une source de donnees cliniques exploitables. L&apos;activite realisee, le comportement du patient, ses interactions, son niveau d&apos;engagement — tout est capture par la voix juste apres l&apos;atelier et structure automatiquement. Les mediateurs therapeutiques ne sont plus des angles morts du dossier patient.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Observation clinique fine</h3>
              <p className="text-graphite leading-relaxed">
                Les ateliers therapeutiques revelent des dimensions cliniques invisibles en consultation : la capacite a interagir en groupe, la tolerance a la frustration, la creativite, l&apos;initiative. Marcelle permet de capturer ces observations subtiles qui enrichissent considerablement la comprehension du parcours du patient.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi de l&apos;assiduite et de l&apos;evolution</h3>
              <p className="text-graphite leading-relaxed">
                Marcelle trace automatiquement les presences, les absences et la regularite de chaque patient. Croisees avec les observations cliniques, ces donnees permettent de reperer les signes d&apos;alerte (absences repetees, desengagement progressif) et de mesurer l&apos;evolution sur plusieurs semaines ou mois d&apos;atelier.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <BuildingIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Coordination avec le CMP</h3>
              <p className="text-white/80 leading-relaxed">
                Le CATTP et le CMP suivent les memes patients mais ne partagent pas toujours les memes observations. Marcelle fait le pont : les notes d&apos;atelier du CATTP enrichissent le dossier du CMP, et le psychiatre dispose d&apos;elements concrets pour ajuster le projet therapeutique lors de la prochaine consultation.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Decouvrez aussi */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mb-8">Decouvrez aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/agent-ia-cmp" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMP</h3>
                <p className="text-sm text-graphite mt-2">Notes cliniques psychiatriques structurees pour les consultations ambulatoires. Le complement naturel du CATTP.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-cmpp" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMPP</h3>
                <p className="text-sm text-graphite mt-2">Bilans et suivis therapeutiques pour les enfants et adolescents en consultation medico-psycho-pedagogique.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-foyer-de-vie" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Foyer de vie</h3>
                <p className="text-sm text-graphite mt-2">Transmissions quotidiennes pour l&apos;accompagnement des adultes handicapes en hebergement et activites de jour.</p>
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
            Pret a valoriser les observations cliniques de votre CATTP ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle transforme chaque atelier therapeutique en source de donnees cliniques exploitables. Vos soignants dictent apres la seance, Marcelle structure et coordonne avec le CMP.
          </p>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)]">
            Demander une demo gratuite <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </DemoTrigger>
        </div>
      </section>

      <EsmsPageFooter />
    </main>
  );
}
