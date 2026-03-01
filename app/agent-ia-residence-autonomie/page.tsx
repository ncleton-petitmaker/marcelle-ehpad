import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA Residence Autonomie | Marcelle - Main courante et suivi",
  description: "Agent IA pour les residences autonomie : main courante vocale structuree, suivi de l'autonomie et de la vie sociale des residents. Coordination avec les prestataires.",
  keywords: [
    "agent IA residence autonomie",
    "intelligence artificielle residence autonomie",
    "logiciel residence autonomie",
    "main courante residence autonomie",
    "logement foyer personnes agees",
    "suivi autonomie personnes agees",
    "residence seniors logiciel",
    "transmissions residence autonomie",
    "IA medico-social",
    "gestion residence seniors",
  ],
  openGraph: {
    title: "Agent IA Residence Autonomie | Marcelle",
    description: "Main courante vocale structuree pour les residences autonomie. Un suivi leger et respectueux de l'independance de vos residents.",
    url: "https://marcelle.ai/agent-ia-residence-autonomie",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-residence-autonomie" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA Residence Autonomie",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour la main courante et le suivi en residence autonomie. Dictee vocale, coordination prestataires, lien familles.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Vie sociale", desc: "Participation aux activites, interactions entre residents" },
    { name: "Securite", desc: "Incidents, chutes, alertes, fonctionnement des equipements" },
    { name: "Autonomie", desc: "Evolution des capacites, besoin d'aide, signaux de fragilite" },
    { name: "Maintenance", desc: "Demandes de reparation, etat des logements, espaces communs" },
    { name: "Evenement", desc: "Sorties, animations, visites institutionnelles, celebrations" },
    { name: "Relations", desc: "Liens familiaux, conflits de voisinage, isolement social" },
    { name: "Sante", desc: "Observations generales, coordination avec les professionnels de sante liberaux" },
    { name: "Autre", desc: "Toute observation ne rentrant pas dans les categories precedentes" },
  ];

  const professions = [
    { title: "Responsable de residence", desc: "Pilotage global de la residence, suivi des residents, gestion des prestataires. Marcelle offre une vision consolidee de toutes les observations sans avoir a compiler manuellement les cahiers de transmission." },
    { title: "Agent d'accueil", desc: "Premier point de contact avec les residents et les familles. Enregistrement des demandes, signalements, messages. Chaque echange est consigne vocalement et retrouvable instantanement." },
    { title: "Gardien(ne)", desc: "Veille nocturne, rondes de securite, gestion des incidents. Les transmissions de nuit sont souvent les plus difficiles a documenter — Marcelle rend la saisie aussi simple qu'une note vocale." },
    { title: "Animateur/Animatrice", desc: "Organisation des activites collectives, suivi de la participation, detection de l'isolement. Les transmissions vie sociale alimentent le projet de vie individualise de chaque resident." },
    { title: "Aide a domicile", desc: "Interventions ponctuelles dans les logements, aide aux repas, au menage, aux courses. Les observations des aides a domicile completent la vision de l'equipe de residence." },
    { title: "Infirmier(e) liberal(e)", desc: "Vacations ponctuelles pour les soins infirmiers. Marcelle facilite la coordination entre les liberaux et l'equipe de residence, sans multiplier les cahiers de liaison." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA Residence Autonomie</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les Residences Autonomie</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En residence autonomie, le suivi se fait avec discretion. Marcelle transforme les observations quotidiennes en main courante structuree, sans alourdir la relation avec vos residents-locataires. Un suivi respectueux de l&apos;autonomie, qui detecte les signaux faibles avant qu&apos;ils ne deviennent des urgences.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UNE RESIDENCE AUTONOMIE */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre la Residence Autonomie</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;une Residence Autonomie et en quoi le suivi y est different ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Anciennement appelee logement-foyer, la residence autonomie accueille des personnes agees autonomes ou en legere perte d&apos;autonomie (GIR 5-6, parfois GIR 4). Les residents y sont locataires de leur logement et beneficient de services collectifs : restauration, animation, securite, lien social. Ce n&apos;est ni un lieu de soins, ni un simple immeuble — c&apos;est un cadre de vie qui combine independance et securite.
              </p>
              <p>
                La particularite fondamentale de la residence autonomie tient dans cette dualite : les residents sont chez eux, avec un bail, une liberte de mouvement et des choix de vie personnels. Mais l&apos;equipe de residence doit neanmoins assurer un suivi attentif pour detecter les evolutions de l&apos;autonomie, prevenir les situations de fragilite et maintenir un environnement securisant.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Le format de documentation traditionnel en residence autonomie est la main courante : un registre chronologique qui consigne les evenements, observations et demandes. Contrairement aux transmissions ciblees de l&apos;EHPAD, la main courante est plus legere, moins clinique, mais tout aussi importante. Elle retrace la vie de la residence et constitue un outil precieux pour reperer les glissements progressifs : un resident qui ne descend plus au restaurant, un logement dont les volets restent fermes, une participation aux activites qui diminue.
              </p>
              <p>
                Marcelle s&apos;adapte a cette logique de suivi discret en proposant une saisie vocale rapide et une structuration automatique en 8 categories pensees pour la residence autonomie. L&apos;outil respecte le cadre domiciliaire — pas de jargon medical, pas de codification clinique complexe — tout en fournissant au responsable de residence les indicateurs necessaires pour agir au bon moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte a la Residence Autonomie</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte a la vie en residence autonomie
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; M. Bernard, logement 24. Participation active a l&apos;atelier memoire ce matin. A signale que sa serrure est difficile a tourner, demande de maintenance. Bonne autonomie dans les deplacements. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Vie sociale</Badge>
              <Badge variant="light">Maintenance</Badge>
              <Badge variant="light">Autonomie</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie 3 categories et insere l&apos;observation dans la main courante numerique. La demande de maintenance est automatiquement signalee au responsable de residence.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">8 categories adaptees a la residence autonomie</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-white/80">{cat.name}</span>
                <p className="text-xs text-white/40 mt-1">{cat.desc}</p>
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
              <p className="text-sm text-white/50">8h - 20h. Accueil, animations, restauration, visites, gestion des demandes. L&apos;essentiel de la vie de la residence et des interactions avec les locataires.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Veille nuit</span>
              </div>
              <p className="text-sm text-white/50">20h - 8h. Rondes de securite, appels d&apos;urgence, vigilance sur les logements. Les observations nocturnes sont souvent les premiers indicateurs d&apos;une perte d&apos;autonomie.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe de residence</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Un outil pour chaque profil de l&apos;equipe
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
          <Badge variant="sauge"><HeartIcon className="w-3.5 h-3.5" /> Benefices concrets</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Ce qui change pour votre residence autonomie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Suivi leger et respectueux</h3>
              <p className="text-white/80 leading-relaxed">
                En residence autonomie, le suivi ne doit jamais ressembler a une surveillance. Marcelle permet de consigner des observations sans interrompre la relation de confiance avec vos locataires. Une note vocale dans le couloir apres un echange, et l&apos;information est preservee.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Main courante structuree</h3>
              <p className="text-graphite leading-relaxed">
                Fini le cahier manuscrit feuillete a la hate en debut de poste. La main courante numerique de Marcelle est filtrable par resident, par categorie, par date. Retrouvez en un instant l&apos;historique complet d&apos;un logement ou d&apos;une demande de maintenance.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination prestataires</h3>
              <p className="text-graphite leading-relaxed">
                Aides a domicile, infirmiers liberaux, kinesitherapeutes, services de portage de repas — la residence autonomie coordonne de nombreux intervenants exterieurs. Marcelle centralise les observations de chacun pour eviter les doublons et les oublis.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <CheckIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Familles informees</h3>
              <p className="text-white/80 leading-relaxed">
                Les familles des residents en residence autonomie souhaitent etre rassures sans etre intrusifs. Marcelle permet de partager avec elles un resume regulier de la vie sociale et du bien-etre de leur proche, renfor&ccedil;ant la confiance dans l&apos;etablissement.
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
            <Link href="/agent-ia-ehpad" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">EHPAD</h3>
                <p className="text-sm text-graphite mt-2">Transmissions DAR structurees pour les etablissements d&apos;hebergement. 15 categories cliniques, equipe pluridisciplinaire complete.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">SSIAD</h3>
                <p className="text-sm text-graphite mt-2">Services de soins infirmiers a domicile. Transmissions adaptees aux tournees et a la coordination des interventions.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Foyer de vie</h3>
                <p className="text-sm text-graphite mt-2">Hebergement pour personnes en situation de handicap. Transmissions centrees sur l&apos;accompagnement et le projet de vie.</p>
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
            Pret a moderniser le suivi de votre residence autonomie ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle remplace le cahier de main courante par un outil vocal, simple et structure. Deploiement en 48 heures, prise en main immediate.
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
