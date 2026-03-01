import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA SSIAD | Marcelle - Transmissions soins a domicile par la voix",
  description: "Agent IA concu pour les SSIAD : comptes-rendus de visite structures par la voix, coordination des tournees, liaison avec le medecin traitant et les aidants. Intelligence artificielle adaptee aux soins infirmiers a domicile.",
  keywords: [
    "agent IA SSIAD",
    "intelligence artificielle SSIAD",
    "logiciel SSIAD",
    "transmissions soins domicile",
    "compte rendu visite domicile",
    "cahier de liaison SSIAD",
    "soins infirmiers domicile",
    "coordination tournees SSIAD",
    "IA soins a domicile",
  ],
  openGraph: {
    title: "Agent IA SSIAD | Marcelle",
    description: "Comptes-rendus de visite structures par la voix pour les SSIAD. Coordination des tournees et liaison avec les aidants en temps reel.",
    url: "https://marcelle.ai/agent-ia-ssiad",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-ssiad" },
};

export default function AgentIaSsiad() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA SSIAD",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Services de Soins Infirmiers a Domicile. Comptes-rendus de visite par la voix, coordination des tournees et liaison aidants.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Soins & hygiene" },
    { name: "Etat cutane" },
    { name: "Alimentation" },
    { name: "Elimination" },
    { name: "Etat general" },
    { name: "Constantes" },
    { name: "Coordination" },
    { name: "Domicile" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Aide-soignant(e)", desc: "En premiere ligne lors des tournees, l'aide-soignant(e) realise toilettes, soins de nursing et observations quotidiennes. Marcelle lui permet de dicter son compte-rendu de visite directement depuis le domicile du beneficiaire, entre deux passages." },
    { title: "Infirmier(e) coordinateur (IDEC)", desc: "L'IDEC supervise l'ensemble des tournees et coordonne les plans de soins. Marcelle centralise toutes les transmissions en temps reel, offrant une vision globale des beneficiaires sans attendre le retour de l'equipe au bureau." },
    { title: "Infirmier(e)", desc: "L'infirmier(e) assure les soins techniques a domicile : pansements, injections, surveillance des constantes. Marcelle structure automatiquement les donnees cliniques et facilite la transmission au medecin traitant." },
    { title: "Ergotherapeute", desc: "L'ergotherapeute evalue l'environnement du domicile et preconise des adaptations. Marcelle capture ses observations sur la securite du logement et les aides techniques installees, pour un suivi longitudinal." },
    { title: "Psychologue (vacation)", desc: "Intervenant en vacation, le psychologue realise des entretiens a domicile aupres des beneficiaires isoles. Marcelle lui permet de structurer ses notes cliniques tout en preservant la confidentialite requise." },
    { title: "Responsable de secteur", desc: "Le responsable de secteur organise les tournees et gere les plannings. Marcelle lui fournit un tableau de bord des transmissions par secteur geographique et par beneficiaire." },
    { title: "Secretaire", desc: "La secretaire assure le lien administratif entre le SSIAD, les familles et les professionnels liberaux. Marcelle facilite l'acces aux informations de suivi pour les demandes des aidants." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA SSIAD</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; HDS</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les SSIAD</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            Vos aide-soignant(e)s dictent leurs comptes-rendus de visite depuis le domicile du beneficiaire. Marcelle structure chaque observation, coordonne les tournees et transmet instantanement au SSIAD. Fini les notes griffonnees dans la voiture entre deux passages.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)]">
              Decouvrir Marcelle pour les SSIAD <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un SSIAD */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le SSIAD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un SSIAD ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Service de Soins Infirmiers a Domicile (SSIAD) intervient au domicile de personnes agees de plus de 60 ans, ou de personnes en situation de handicap, pour assurer des soins d&apos;hygiene et de confort prescrits par le medecin traitant. L&apos;objectif : maintenir l&apos;autonomie de la personne chez elle le plus longtemps possible, en evitant ou en retardant l&apos;entree en etablissement.
              </p>
              <p>
                Contrairement a un EHPAD ou l&apos;equipe est sur place en permanence, le SSIAD fonctionne par tournees : les soignants se deplacent de domicile en domicile, souvent seuls, avec un temps limite par beneficiaire. Cette organisation rend la continuite des soins particulierement complexe. Le cahier de liaison au domicile et le dossier informatise au bureau sont les deux piliers de la transmission — mais entre les deux, l&apos;information se perd.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Les equipes font face a un defi specifique : transmettre des informations cliniques de qualite alors qu&apos;elles n&apos;ont pas acces au logiciel metier depuis le domicile. Les notes sont prises sur papier, sur le telephone, ou simplement memorisees — puis retranscrites au bureau en fin de tournee, quand les details se sont deja estompes.
              </p>
              <p>
                C&apos;est ce probleme que Marcelle resout. L&apos;aide-soignant(e) dicte son compte-rendu de visite directement au domicile du beneficiaire, entre la fin du soin et le trajet vers le prochain passage. L&apos;IA structure l&apos;observation en categories (soins, etat cutane, constantes, coordination...), genere un cahier de liaison numerique et rend le tout accessible en temps reel a l&apos;IDEC et au reste de l&apos;equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Marcelle s'adapte */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au SSIAD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux soins a domicile
          </h2>

          {/* Example */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de compte-rendu de visite dicte</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Mme Garnier, 14 rue des Lilas. Toilette au lit realisee, bonne cooperation. Pansement talon droit : bourgeonnement en cours, bon aspect. TA 145/85, a signaler au medecin traitant. Etat general : un peu fatiguee, dit avoir mal dormi. Le fils a installe la barre d&apos;appui dans la salle de bain comme prevu. Prochain passage demain matin. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Soins &amp; hygiene</Badge>
              <Badge variant="light">Etat cutane</Badge>
              <Badge variant="light">Constantes</Badge>
              <Badge variant="light">Etat general</Badge>
              <Badge variant="light">Domicile</Badge>
              <Badge variant="light">Coordination</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 6 categories, structure le CR de visite et alerte l&apos;IDEC sur la TA elevee.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">9 categories de transmission adaptees au domicile</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation par tournees</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Tournee matin</span>
              </div>
              <p className="text-sm text-white/50">7h - 12h30. Toilettes, soins de nursing, pansements, prises de constantes. Le coeur de l&apos;activite du SSIAD, avec le plus grand volume de transmissions cliniques.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Tournee soir</span>
              </div>
              <p className="text-sm text-white/50">16h30 - 20h. Aide au coucher, verification du traitement du soir, observations sur l&apos;etat general. Transmission essentielle pour la tournee du lendemain matin.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe pluridisciplinaire</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Marcelle parle le langage de chaque profession du SSIAD
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
            Ce qui change concretement pour votre SSIAD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <MicIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">CR de visite depuis le domicile</h3>
              <p className="text-white/80 leading-relaxed">
                L&apos;aide-soignant(e) dicte son compte-rendu directement chez le beneficiaire, entre la fin du soin et le trajet vers le prochain passage. Plus besoin d&apos;attendre le retour au bureau pour saisir les transmissions. La qualite de l&apos;information est preservee a chaud.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination equipe tournante</h3>
              <p className="text-graphite leading-relaxed">
                Dans un SSIAD, les aide-soignant(e)s ne passent pas toujours chez les memes beneficiaires. Marcelle garantit que chaque intervenant(e) dispose de l&apos;historique complet avant sa tournee, meme si c&apos;est un(e) remplacant(e) qui n&apos;est jamais venu(e) chez ce beneficiaire.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Transmission instantanee au SSIAD</h3>
              <p className="text-graphite leading-relaxed">
                Des que le CR est dicte, l&apos;IDEC le recoit en temps reel. Les alertes (constantes anormales, chute, degradation de l&apos;etat general) remontent immediatement, sans attendre la reunion d&apos;equipe ou le retour au bureau. Le temps de reaction passe de plusieurs heures a quelques minutes.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Liaison aidants et medecin traitant</h3>
              <p className="text-white/80 leading-relaxed">
                Le cahier de liaison numerique permet aux aidants familiaux de suivre l&apos;evolution de leur proche. Le medecin traitant recoit les informations cliniques pertinentes de maniere structuree. La coordination ville-domicile devient fluide et tracee.
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
            <Link href="/agent-ia-residence-autonomie" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">Residence autonomie</h3>
                <p className="text-sm text-graphite mt-2">Transmissions adaptees au suivi leger des residents autonomes en logement-foyer.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-ehpad" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">EHPAD</h3>
                <p className="text-sm text-graphite mt-2">Transmissions ciblees en format DAR pour le suivi quotidien des residents en etablissement.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-cmp" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMP</h3>
                <p className="text-sm text-graphite mt-2">Notes cliniques psychiatriques structurees pour les consultations ambulatoires en sante mentale.</p>
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
            Pret a transformer les transmissions de votre SSIAD ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos tournees en moins de 48 heures. Aucune installation, aucune formation complexe — vos equipes dictent, Marcelle structure.
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
