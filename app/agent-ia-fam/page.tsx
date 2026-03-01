import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA FAM | Marcelle - Transmissions vocales pour les Foyers d'Accueil Medicalises",
  description: "Agent IA specialise pour les FAM : double volet soins et education, transmissions structurees DAR + notes educatives, suivi de l'autonomie au quotidien. Dictee vocale adaptee au medico-educatif.",
  keywords: [
    "agent IA FAM",
    "intelligence artificielle FAM",
    "logiciel FAM",
    "transmissions FAM",
    "foyer accueil medicalise",
    "transmissions educatives handicap",
    "DAR clinique FAM",
    "suivi autonomie handicap",
    "double volet soins education",
    "IA medico-social",
  ],
  openGraph: {
    title: "Agent IA FAM | Marcelle",
    description: "Transmissions a double volet soins + education pour les FAM. L'IA qui comprend la specificite medico-educative des Foyers d'Accueil Medicalises.",
    url: "https://marcelle.ai/agent-ia-fam",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-fam" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA FAM",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Foyers d'Accueil Medicalises. Double volet soins cliniques et accompagnement educatif, suivi de l'autonomie, coordination avec les tuteurs et familles.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Soins" },
    { name: "Educatif" },
    { name: "Comportement" },
    { name: "Alimentation" },
    { name: "Autonomie" },
    { name: "Activites" },
    { name: "Vie sociale" },
    { name: "Communication" },
    { name: "Nuit" },
    { name: "Sante" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Educateur(trice) specialise(e)", desc: "Pilier de l'accompagnement educatif : ateliers, sorties, projet de vie, soutien a l'autonomie. Les educateurs documentent les progres et les difficultes dans les actes du quotidien — Marcelle structure ces observations pour nourrir le volet educatif du PPA." },
    { title: "Aide medico-psychologique (AMP/AES)", desc: "Accompagnement dans les actes de la vie courante : toilette, habillage, repas, coucher. Les AMP observent au plus pres les capacites et les besoins des residents. Leurs transmissions vocales capturent les nuances que l'ecrit appauvrit." },
    { title: "Aide-soignant(e)", desc: "Soins d'hygiene, surveillance de l'etat de sante, pansements, administration des traitements sous delegation. Les transmissions soignantes du FAM sont croisees avec les observations educatives pour une vision complete du resident." },
    { title: "Infirmier(e)", desc: "Coordination des soins, suivi des traitements, gestion des urgences, lien avec les medecins et les hopitaux. L'IA categorise les observations infirmieres et signale les alertes cliniques en temps reel." },
    { title: "Medecin generaliste / Psychiatre", desc: "Suivi medical et psychiatrique regulier, adaptation des traitements, bilan de sante annuel. Marcelle compile les transmissions soins et comportement pour fournir une synthese actualisee avant chaque consultation medicale." },
    { title: "Psychologue", desc: "Soutien psychologique des residents et des familles, evaluation du bien-etre, supervision des equipes. Les transmissions comportementales et educatives alimentent l'analyse clinique et le reperage des situations de fragilite." },
    { title: "Animateur/Animatrice", desc: "Ateliers creatifs, activites sportives adaptees, sorties culturelles, fetes et evenements. Les retours d'activites documentes par Marcelle enrichissent le volet vie sociale du PPA et valorisent les competences des residents." },
    { title: "Moniteur(trice) d'atelier", desc: "Ateliers a visee professionnelle ou pre-professionnelle : cuisine, jardinage, entretien, conditionnement. Le suivi des competences acquises et des progres est structure pour alimenter les bilans annuels et les projets de reorientation." },
    { title: "Chef de service", desc: "Pilotage de l'unite de vie, animation des reunions d'equipe, suivi des PPA. Marcelle fournit des tableaux de bord synthetiques par resident et par unite, facilitant la prise de decision et le reporting institutionnel." },
    { title: "Kinesitherapeute", desc: "Reeducation fonctionnelle, maintien de la mobilite, prevention des complications orthopediques. Les transmissions kine sont reliees aux observations des educateurs sur l'autonomie dans les deplacements pour un suivi coherent." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA FAM</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les FAM</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En Foyer d&apos;Accueil Medicalise, l&apos;accompagnement est double : soins medicaux et projet educatif avancent en parallele. Marcelle transforme les observations vocales de vos equipes en transmissions structurees a double volet — DAR clinique et notes educatives — pour un suivi global de l&apos;autonomie et de la sante de chaque resident.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN FAM */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le FAM</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un FAM et pourquoi le double volet est un defi quotidien ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Foyer d&apos;Accueil Medicalise accueille des adultes en situation de handicap qui necessitent a la fois une aide pour la plupart des actes essentiels de la vie quotidienne et un suivi medical regulier, sans pour autant relever du niveau de dependance d&apos;une MAS. Les residents d&apos;un FAM conservent des capacites d&apos;autonomie variables — certains participent aux repas, s&apos;habillent partiellement seuls, se deplacent avec aide — et le projet d&apos;accompagnement vise precisement a maintenir et developper ces competences.
              </p>
              <p>
                Cette dualite fait la richesse et la complexite du FAM : l&apos;equipe soignante (infirmiers, aides-soignants, medecin) assure la surveillance de la sante et les soins quotidiens, tandis que l&apos;equipe educative (educateurs specialises, AMP, moniteurs d&apos;atelier, animateurs) porte le projet de vie et d&apos;autonomie. Le Projet Personnalise d&apos;Accompagnement (PPA) articule ces deux dimensions et necessite une communication constante entre les volets.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                En pratique, la circulation de l&apos;information entre soignants et educateurs est souvent le maillon faible. L&apos;educateur qui constate qu&apos;un resident est moins autonome au petit-dejeuner ne sait pas toujours que l&apos;infirmier a ajuste un traitement la veille. L&apos;aide-soignant qui observe une plaie lors de la toilette ignore parfois que l&apos;educateur a note une chute en activite la veille. Les transmissions sont eclatees entre cahiers educatifs et dossiers de soins, sans vision transversale.
              </p>
              <p>
                Marcelle unifie ces deux regards. Chaque professionnel dicte ses observations par la voix, et l&apos;IA les classe automatiquement dans le volet correspondant — soins, educatif, comportement, autonomie, activites — tout en maintenant une vue globale par resident. L&apos;educateur du matin consulte les transmissions soignantes de la nuit. L&apos;infirmier accede aux notes educatives de la veille. Le chef de service dispose d&apos;une vision complete pour piloter le PPA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au FAM</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites du FAM
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Sophie, unite Lavande. Participation a l&apos;atelier cuisine ce matin : a prepare la salade avec aide partielle, bonne autonomie pour le lavage et l&apos;epluchage. Soins : pansement cheville gauche refait, bonne cicatrisation. Comportement : legere anxiete en debut d&apos;apres-midi, retour au calme apres un temps calme dans sa chambre. Activite musique a 15h : apprecie particulierement le djembe. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Autonomie</Badge>
              <Badge variant="light">Soins</Badge>
              <Badge variant="light">Comportement</Badge>
              <Badge variant="light">Activites</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 4 categories couvrant les deux volets — soins et educatif — et structure la transmission dans le dossier du resident, permettant une lecture croisee par l&apos;ensemble de l&apos;equipe.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">11 categories reconnues (soins + educatif)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par postes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Matin</span>
              </div>
              <p className="text-sm text-white/50">6h30 - 14h30. Levers accompagnes, toilettes, habillage (avec evaluation de l&apos;autonomie), petit-dejeuner, soins infirmiers, ateliers educatifs du matin. Poste ou les deux volets se croisent le plus intensement.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 21h30. Activites educatives et de loisirs, ateliers pre-professionnels, sorties, gouter, diner, accompagnement au coucher. Transmissions riches sur l&apos;autonomie, les activites et la vie sociale.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Nuit</span>
              </div>
              <p className="text-sm text-white/50">21h - 7h. Surveillance, gestion des angoisses nocturnes, accompagnement aux toilettes. Transmissions sur le sommeil, le comportement et les evenements de nuit, essentielles pour l&apos;equipe du matin.</p>
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
            Ce qui change concretement pour votre FAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Double regard soins + education</h3>
              <p className="text-white/80 leading-relaxed">
                La specificite du FAM est de conjuguer accompagnement medical et projet educatif. Marcelle structure les transmissions des deux volets dans un dossier unifie, permettant a chaque professionnel de lire les observations de l&apos;autre volet. L&apos;educateur voit les soins, l&apos;infirmier voit les progres en autonomie.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Transmissions structurees sur les 2 volets</h3>
              <p className="text-graphite leading-relaxed">
                Chaque transmission est automatiquement classee dans la categorie appropriee — soins, educatif, comportement, autonomie — avec un format adapte : DAR clinique pour les soins, notes educatives pour l&apos;accompagnement. Le PPA dispose ainsi d&apos;une base documentaire riche et organisee pour les bilans annuels.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <SparklesIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi de l&apos;autonomie au quotidien</h3>
              <p className="text-graphite leading-relaxed">
                L&apos;objectif central du FAM est de maintenir et developper l&apos;autonomie des residents. Marcelle trace chaque observation liee a l&apos;autonomie — habillage, alimentation, deplacements, communication — et permet de visualiser l&apos;evolution dans le temps, un outil precieux pour ajuster le PPA et valoriser les progres.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Coordination avec les tuteurs et familles</h3>
              <p className="text-white/80 leading-relaxed">
                Les residents de FAM sont souvent sous mesure de protection (tutelle, curatelle). Les familles et tuteurs attendent des retours reguliers et structures sur l&apos;accompagnement. Marcelle facilite la production de bilans synthetiques couvrant les deux volets, tout en preservant la confidentialite des donnees medicales.
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
            <Link href="/agent-ia-mas" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">MAS</h3>
                <p className="text-sm text-graphite mt-2">Maisons d&apos;Accueil Specialisees pour adultes polyhandicapes. Transmissions nursing detaillees et suivi H24.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Foyer de vie</h3>
                <p className="text-sm text-graphite mt-2">Foyers d&apos;hebergement pour adultes handicapes avec une autonomie plus importante. Accompagnement educatif et social.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-ehpad" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">EHPAD</h3>
                <p className="text-sm text-graphite mt-2">Etablissements d&apos;Hebergement pour Personnes Agees Dependantes. Transmissions DAR et suivi clinique des residents ages.</p>
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
            Pret a transformer les transmissions de votre FAM ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle unifie les volets soins et education en moins de 48 heures. Aucune installation, aucune formation complexe — vos equipes dictent, Marcelle structure les deux regards.
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
