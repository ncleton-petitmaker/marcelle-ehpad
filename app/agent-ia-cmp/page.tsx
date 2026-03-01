import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA CMP | Marcelle - Notes cliniques psychiatriques par la voix",
  description: "Agent IA concu pour les CMP : notes cliniques psychiatriques structurees par la voix, coordination intra-CMP (psychiatre, infirmier, psychologue), suivi de crise et liaison avec le secteur hospitalier.",
  keywords: [
    "agent IA CMP",
    "intelligence artificielle CMP",
    "logiciel CMP",
    "transmissions psychiatrie",
    "notes cliniques psychiatrie",
    "centre medico-psychologique",
    "suivi ambulatoire psychiatrie",
    "coordination CMP",
    "IA sante mentale",
  ],
  openGraph: {
    title: "Agent IA CMP | Marcelle",
    description: "Notes cliniques psychiatriques structurees par la voix pour les Centres Medico-Psychologiques. Coordination pluridisciplinaire et suivi de crise traces.",
    url: "https://marcelle.ai/agent-ia-cmp",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-cmp" },
};

export default function AgentIaCmp() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA CMP",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Centres Medico-Psychologiques. Notes cliniques psychiatriques par la voix, coordination intra-CMP et suivi de crise.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Consultation psy" },
    { name: "Entretien infirmier" },
    { name: "Entretien psychologue" },
    { name: "Note sociale" },
    { name: "Visite a domicile" },
    { name: "Coordination" },
    { name: "Crise" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Psychiatre", desc: "Le psychiatre pose les diagnostics, prescrit les traitements et assure le suivi medical. Marcelle structure ses notes de consultation en preservant la finesse clinique : semiologie, evolution symptomatique, ajustements therapeutiques. Le gain de temps sur la saisie se traduit par plus de temps pour le patient." },
    { title: "Infirmier(e) de secteur psychiatrique", desc: "L'infirmier(e) de secteur realise les entretiens de suivi, evalue l'observance du traitement et repere les signes de decompensation. Marcelle capture les nuances de l'entretien — humeur, discours, posture — et les structure pour un partage immediat avec le psychiatre." },
    { title: "Psychologue clinicien", desc: "Le psychologue conduit des entretiens therapeutiques et des bilans psychologiques. Marcelle lui permet de dicter ses notes cliniques sans rompre le fil de la pensee, en preservant les elements transferentiels et contre-transferentiels essentiels au suivi." },
    { title: "Assistant(e) social(e)", desc: "L'assistant(e) social(e) accompagne les patients dans leurs demarches (logement, droits, emploi, MDPH). Marcelle structure les notes sociales et les rend accessibles a l'equipe, pour une prise en charge globale qui integre les determinants sociaux." },
    { title: "Secretaire medicale", desc: "La secretaire medicale gere les plannings de consultation, les courriers et la coordination avec les partenaires. Marcelle facilite l'acces aux syntheses pour la preparation des consultations et la redaction des comptes-rendus." },
    { title: "Ergotherapeute", desc: "L'ergotherapeute evalue les capacites fonctionnelles et propose des activites de readaptation. Marcelle lui permet de documenter les evaluations et les progres, en lien avec le projet therapeutique individualise." },
    { title: "Cadre de sante", desc: "Le cadre de sante pilote l'organisation du CMP et supervise la qualite des prises en charge. Marcelle lui offre une vision consolidee de l'activite : volume de consultations, suivis de crise, coordination avec le secteur hospitalier." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA CMP</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; HDS</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les CMP</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            Psychiatres, infirmiers de secteur, psychologues : dictez vos notes cliniques entre deux consultations. Marcelle structure chaque entretien, coordonne l&apos;equipe pluridisciplinaire et trace les episodes de crise. La psychiatrie ambulatoire merite un outil a la hauteur de sa complexite.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)]">
              Decouvrir Marcelle pour les CMP <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* Qu'est-ce qu'un CMP */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre le CMP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;un CMP ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Un Centre Medico-Psychologique (CMP) est la structure pivot de la psychiatrie publique en France. Rattache a un secteur psychiatrique, il assure des consultations ambulatoires gratuites pour les adultes souffrant de troubles psychiques : depression, troubles bipolaires, schizophrenie, troubles anxieux, addictions. Le CMP est souvent le premier lieu de contact entre le patient et la psychiatrie publique.
              </p>
              <p>
                L&apos;equipe du CMP est pluridisciplinaire : psychiatres, infirmiers de secteur, psychologues cliniciens, assistants sociaux. Cette diversite de regards est la force du CMP — mais aussi son defi en matiere de coordination. Chaque professionnel produit des notes cliniques dans son propre cadre de reference, et l&apos;enjeu est de les rendre accessibles et coherentes pour l&apos;ensemble de l&apos;equipe.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Le suivi en CMP est ambulatoire : les patients viennent en consultation, parfois une fois par semaine, parfois une fois par mois. Entre deux rendez-vous, beaucoup de choses peuvent se passer. L&apos;enjeu des notes cliniques est donc de capturer suffisamment de contexte pour que le prochain intervenant (qui n&apos;est pas necessairement le meme) puisse assurer la continuite du suivi.
              </p>
              <p>
                La gestion de crise est une dimension critique du CMP. Quand un patient decompense, l&apos;equipe doit reagir vite, souvent en coordination avec les urgences psychiatriques, le SAMU ou le secteur hospitalier. Marcelle permet de tracer chaque episode de crise en temps reel — appels, decisions, orientations — pour un suivi sans rupture et une traabilite medico-legale complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Marcelle s'adapte */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte au CMP</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte a la psychiatrie ambulatoire
          </h2>

          {/* Example */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de note clinique dictee</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; M. Leblanc. Entretien infirmier de suivi. Traitement bien pris cette semaine, pas d&apos;effets secondaires signales. Humeur stable, meilleur sommeil. Exprime des inquietudes sur sa situation professionnelle : orientation vers l&apos;assistante sociale pour un accompagnement. Pas d&apos;ideation suicidaire. Prochain RDV avec le Dr Roux dans 2 semaines. A rappeler si deterioration avant. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Entretien infirmier</Badge>
              <Badge variant="light">Coordination</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie le type d&apos;entretien, structure les elements cliniques (observance, humeur, sommeil, risque suicidaire) et trace les orientations vers les autres professionnels.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">8 categories de notes cliniques adaptees au CMP</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-white/70 text-center">
                {cat.name}
              </div>
            ))}
          </div>

          {/* Shifts */}
          <h3 className="font-serif text-lg text-white mb-4">Organisation des consultations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-sauge" />
                <span className="font-medium text-white">Consultations matin</span>
              </div>
              <p className="text-sm text-white/50">9h - 12h30, du lundi au vendredi. Consultations psychiatre, entretiens infirmiers de suivi, bilans psychologiques. La matinee concentre la majorite des rendez-vous programmes.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Consultations apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 18h, du lundi au vendredi. Entretiens psychologiques, rendez-vous sociaux, visites a domicile (VAD). Creneaux souvent reserves aux suivis plus longs et aux situations complexes.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Professions */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe pluridisciplinaire</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Marcelle parle le langage de chaque profession du CMP
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
            Ce qui change concretement pour votre CMP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Notes cliniques structurees et securisees</h3>
              <p className="text-white/80 leading-relaxed">
                Chaque entretien est dicte et structure en quelques minutes. La semiologie psychiatrique est preservee : humeur, discours, ideation, observance, risque suicidaire. Les notes sont chiffrees, horodatees et accessibles uniquement aux professionnels habilites, dans le respect du secret medical.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination intra-CMP</h3>
              <p className="text-graphite leading-relaxed">
                Le psychiatre, l&apos;infirmier et le psychologue suivent souvent le meme patient mais ne se voient pas toujours. Marcelle permet a chacun de consulter les notes des autres intervenants avant son prochain rendez-vous, pour une prise en charge coherente sans multiplier les reunions.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ShieldIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi de crise trace</h3>
              <p className="text-graphite leading-relaxed">
                Quand un patient decompense, chaque minute compte. Marcelle permet de dicter les notes de crise en temps reel : appels, evaluations, decisions d&apos;orientation (urgences, hospitalisation, HDT). L&apos;ensemble de l&apos;episode est trace chronologiquement, pour un suivi sans angle mort et une tracabilite medico-legale rigoureuse.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <BuildingIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Liaison avec le secteur hospitalier</h3>
              <p className="text-white/80 leading-relaxed">
                Le CMP est le pivot entre la ville et l&apos;hopital psychiatrique. Marcelle facilite les transmissions lors des hospitalisations et des sorties : le compte-rendu d&apos;hospitalisation est relie au suivi ambulatoire, pour une continuite de parcours sans rupture d&apos;information.
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
            <Link href="/agent-ia-cattp" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CATTP</h3>
                <p className="text-sm text-graphite mt-2">Notes d&apos;atelier therapeutique et observations cliniques pour les soins a temps partiel en complement du CMP.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-cmpp" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMPP</h3>
                <p className="text-sm text-graphite mt-2">Bilans et suivis therapeutiques structures pour les enfants et adolescents en consultation medico-psycho-pedagogique.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/agent-ia-mas" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">MAS</h3>
                <p className="text-sm text-graphite mt-2">Transmissions quotidiennes pour l&apos;accompagnement des personnes en situation de polyhandicap ou handicap severe.</p>
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
            Pret a transformer les notes cliniques de votre CMP ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos consultations en moins de 48 heures. Vos professionnels dictent, Marcelle structure — avec la rigueur clinique que la psychiatrie exige.
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
