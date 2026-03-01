import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA EHPAD | Marcelle - Transmissions vocales et suivi clinique",
  description: "Agent IA specialise pour les EHPAD : transmissions vocales en format DAR, suivi des 15 categories cliniques, coordination inter-equipes. 2 min au lieu de 15.",
  keywords: [
    "agent IA EHPAD",
    "intelligence artificielle EHPAD",
    "transmissions EHPAD",
    "logiciel EHPAD",
    "DAR transmissions",
    "suivi clinique EHPAD",
    "soins personnes agees",
    "dossier resident EHPAD",
    "aide-soignant transmissions",
    "IA medico-social",
  ],
  openGraph: {
    title: "Agent IA EHPAD | Marcelle",
    description: "Transmissions vocales structurees en format DAR pour les EHPAD. L'IA qui comprend le quotidien des soignants en etablissement.",
    url: "https://marcelle.ai/agent-ia-ehpad",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-ehpad" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA EHPAD",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les transmissions et le suivi clinique en EHPAD. Dictee vocale, structuration DAR automatique, coordination pluridisciplinaire.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Douleur", icon: "algique" },
    { name: "Chute", icon: "securite" },
    { name: "Comportement", icon: "psycho" },
    { name: "Alimentation", icon: "nutrition" },
    { name: "Elimination", icon: "transit" },
    { name: "Sommeil", icon: "repos" },
    { name: "Hygiene", icon: "soins" },
    { name: "Mobilite", icon: "deplacement" },
    { name: "Communication", icon: "echange" },
    { name: "Traitement", icon: "medication" },
    { name: "Constantes", icon: "vital" },
    { name: "Etat cutane", icon: "peau" },
    { name: "Etat psychologique", icon: "moral" },
    { name: "Vie sociale", icon: "lien" },
    { name: "Autre", icon: "divers" },
  ];

  const professions = [
    { title: "Aide-soignant(e)", desc: "Transmissions quotidiennes sur l'autonomie, l'hygiene, l'alimentation et le comportement des residents. Marcelle structure chaque observation en format DAR." },
    { title: "Infirmier(e) (IDE)", desc: "Suivi des constantes, administration des traitements, evaluation de la douleur. L'IA categorise automatiquement les donnees cliniques et alerte sur les anomalies." },
    { title: "Medecin coordonnateur", desc: "Vision globale des transmissions par resident, suivi des indicateurs de sante, coordination avec les equipes. Tableaux de bord synthetiques par pathologie." },
    { title: "Psychologue", desc: "Suivi de l'etat psychologique, observations comportementales, evolution de l'humeur. Les transmissions capturent les nuances emotionnelles souvent perdues a l'ecrit." },
    { title: "Ergotherapeute", desc: "Evaluation de la mobilite, capacites fonctionnelles, adaptations de l'environnement. Chaque progres ou difficulte est trace dans les transmissions." },
    { title: "Kinesitherapeute", desc: "Suivi des seances, evaluation de la marche, exercices realises. L'IA relie les observations kine aux transmissions des aides-soignants pour une vision complete." },
    { title: "Animateur/Animatrice", desc: "Participation aux activites, interactions sociales, centres d'interet. Les transmissions vie sociale enrichissent le projet personnalise de chaque resident." },
    { title: "ASH", desc: "Observations sur l'environnement du resident, signalements de maintenance, proprete des espaces. Des informations souvent negligees mais essentielles." },
    { title: "Cadre de sante", desc: "Supervision des transmissions, indicateurs qualite, taux de remplissage. Marcelle fournit des statistiques exploitables pour le pilotage de l'etablissement." },
    { title: "Dieteticien(ne)", desc: "Suivi nutritionnel, textures alimentaires, hydratation. Les transmissions alimentation sont croisees avec le poids et les constantes pour detecter les risques de denutrition." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA EHPAD</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les EHPAD</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En EHPAD, chaque minute compte. Marcelle transforme les observations vocales de vos equipes en transmissions DAR structurees, couvrant les 15 categories cliniques essentielles au suivi de vos residents. Fini les 15 minutes par saisie — 2 minutes suffisent.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UN EHPAD */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre l&apos;EHPAD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un EHPAD et pourquoi les transmissions y sont critiques ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Etablissement d&apos;Hebergement pour Personnes Agees Dependantes accueille des residents en perte d&apos;autonomie qui necessitent un accompagnement quotidien et une surveillance medicale continue, 24 heures sur 24. Avec un GMP (GIR Moyen Pondere) souvent superieur a 700, les EHPAD prennent en charge des profils de plus en plus lourds : maladies neurodegeneratives, polymedication, risques de chute, denutrition.
              </p>
              <p>
                Dans ce contexte, les transmissions entre equipes ne sont pas un simple outil administratif — elles sont le fil conducteur de la continuite des soins. Une information non transmise lors d&apos;un changement de poste peut avoir des consequences directes sur la sante d&apos;un resident : un debut d&apos;escarre non signale, un refus alimentaire passe inapercu, une modification comportementale ignoree.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Pourtant, la realite du terrain est implacable : les aides-soignants, qui constituent le coeur de l&apos;equipe, disposent rarement de plus de quelques minutes entre deux accompagnements pour saisir leurs observations. Le ratio moyen de 0,6 ETP soignant par resident laisse peu de place a la documentation ecrite. Les transmissions orales lors des releves se perdent, les cahiers manuscrits sont illisibles, et le logiciel de soins reste souvent un obstacle plutot qu&apos;un outil.
              </p>
              <p>
                C&apos;est precisement ce defi que Marcelle adresse : permettre a chaque professionnel de transmettre ses observations par la voix, dans le couloir, au chevet du resident, sans interrompre le soin. L&apos;IA structure ensuite chaque transmission au format DAR, la categorise parmi les 15 domaines cliniques et la rend immediatement disponible pour l&apos;ensemble de l&apos;equipe pluridisciplinaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte a l&apos;EHPAD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites de l&apos;EHPAD
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Mme Dupont, chambre 12. Elle a bien mange ce midi, un peu de douleur a la hanche droite cotee a 4 sur 10 lors du transfert. Elle a marche 15 minutes dans le couloir avec le deambulateur. Bonne humeur generale. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Alimentation</Badge>
              <Badge variant="light">Douleur</Badge>
              <Badge variant="light">Mobilite</Badge>
              <Badge variant="light">Etat psychologique</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 4 categories et structure la transmission au format DAR : Donnees (observations factuelles), Actions (soins realises), Resultats (evolution constatee).
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">15 categories cliniques reconnues</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
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
              <p className="text-sm text-white/50">6h30 - 14h30. Toilettes, soins du matin, traitements, petit-dejeuner et dejeuner. Poste le plus dense en transmissions cliniques.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 21h30. Animations, visites des familles, gouter, diner, coucher. Transmissions sur la vie sociale, le comportement et l&apos;alimentation.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Nuit</span>
              </div>
              <p className="text-sm text-white/50">21h - 7h. Rondes, sommeil, agitation nocturne, elimination. Transmissions essentielles pour la continuite avec l&apos;equipe du matin.</p>
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
            Ce qui change concretement pour votre EHPAD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">2 min au lieu de 15</h3>
              <p className="text-white/80 leading-relaxed">
                Une transmission vocale prend en moyenne 2 minutes contre 15 pour une saisie clavier dans le logiciel de soins. Sur un poste de 8 heures avec 8 residents a documenter, cela represente plus d&apos;une heure rendue au soin direct.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">3x plus de details cliniques</h3>
              <p className="text-graphite leading-relaxed">
                A l&apos;oral, les soignants decrivent naturellement plus de details que ce qu&apos;ils prendraient le temps d&apos;ecrire. L&apos;IA capture les nuances — l&apos;expression du visage, le ton de la voix du resident, le contexte du soin — qui font la richesse d&apos;une transmission.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Zero perte inter-equipes</h3>
              <p className="text-graphite leading-relaxed">
                Les releves orales entre postes sont le maillon faible de la continuite des soins. Avec Marcelle, chaque information est enregistree, structuree et accessible avant meme le debut du poste suivant. Plus de &laquo; on m&apos;a rien dit &raquo;.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Format DAR automatique</h3>
              <p className="text-white/80 leading-relaxed">
                Chaque transmission est automatiquement structuree selon la methode DAR (Donnees, Actions, Resultats), le standard des transmissions ciblees en EHPAD. Conforme aux exigences de l&apos;evaluation HAS et aux recommandations de bonnes pratiques.
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
            <Link href="/agent-ia-residence-autonomie" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Residence Autonomie</h3>
                <p className="text-sm text-graphite mt-2">Main courante structuree pour les logements-foyers. Suivi leger et respectueux de l&apos;autonomie.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-usld" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">USLD</h3>
                <p className="text-sm text-graphite mt-2">Transmissions medico-techniques pour les unites de soins de longue duree. Suivi des constantes et soins lourds.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">MAS</h3>
                <p className="text-sm text-graphite mt-2">Maisons d&apos;Accueil Specialisees pour les personnes en situation de handicap severe. Transmissions adaptees aux soins continus.</p>
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
            Pret a transformer les transmissions de votre EHPAD ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos equipes en moins de 48 heures. Aucune installation, aucune formation complexe — vos soignants dictent, Marcelle structure.
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
