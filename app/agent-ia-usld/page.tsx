import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA USLD | Marcelle - Transmissions medico-techniques",
  description: "Agent IA pour les USLD : transmissions DAR hospitalieres, suivi des constantes et soins techniques, coordination pluridisciplinaire 24h/24 pour patients lourds.",
  keywords: [
    "agent IA USLD",
    "intelligence artificielle USLD",
    "transmissions USLD",
    "logiciel USLD",
    "unite soins longue duree",
    "DAR hospitalier",
    "suivi constantes patients",
    "soins longue duree logiciel",
    "transmissions medicales",
    "IA soins hospitaliers",
  ],
  openGraph: {
    title: "Agent IA USLD | Marcelle",
    description: "Transmissions medico-techniques vocales pour les unites de soins de longue duree. Suivi des constantes, soins lourds et coordination H24.",
    url: "https://marcelle.ai/agent-ia-usld",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-usld" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA USLD",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les transmissions et le suivi medico-technique en USLD. Dictee vocale, format DAR hospitalier, suivi des constantes et coordination pluridisciplinaire.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Douleur", desc: "Evaluation, localisation, echelle, traitements antalgiques" },
    { name: "Alimentation", desc: "Textures, quantites, hydratation, nutrition enterale" },
    { name: "Elimination", desc: "Transit, diurese, dispositifs urinaires, surveillance" },
    { name: "Mobilite", desc: "Transferts, positionnements, prevention escarres" },
    { name: "Etat cutane", desc: "Escarres, plaies chroniques, pansements, protocoles" },
    { name: "Respiration", desc: "SpO2, oxygenotherapie, aspirations, encombrement" },
    { name: "Neurologique", desc: "Conscience, orientation, agitation, convulsions" },
    { name: "Soins techniques", desc: "Perfusions, sondes, stomies, voies centrales" },
    { name: "Constantes", desc: "TA, FC, temperature, SpO2, glycemie, dextros" },
    { name: "Etat psychologique", desc: "Humeur, anxiete, douleur morale, fin de vie" },
    { name: "Coordination", desc: "Echanges medecin, pharmacie, famille, transferts" },
    { name: "Autre", desc: "Observations hors categories standards" },
  ];

  const professions = [
    { title: "Infirmier(e) (IDE)", desc: "Colonne vertebrale de l'USLD. Soins techniques lourds, surveillance des constantes, administration des traitements, gestion des urgences. Marcelle capture la densite des soins infirmiers sans ralentir l'activite au chevet du patient." },
    { title: "Aide-soignant(e)", desc: "Soins d'hygiene et de confort, surveillance cutanee, aide a l'alimentation, positionnement. En USLD, les aides-soignants realisent des soins plus techniques qu'en EHPAD — les transmissions doivent refleter cette complexite." },
    { title: "Medecin geriatre", desc: "Prescriptions, evaluations cliniques, decisions therapeutiques, entretiens familles. Marcelle fournit un resume structure de l'evolution du patient entre deux visites medicales, facilitant la prise de decision." },
    { title: "Kinesitherapeute", desc: "Mobilisation passive et active, prevention des complications de decubitus, reeducation respiratoire. Les transmissions kine en USLD sont directement liees a la prevention des escarres et des complications pulmonaires." },
    { title: "Ergotherapeute", desc: "Positionnement au fauteuil, adaptation des aides techniques, prevention des attitudes vicieuses. Chaque intervention est documentee pour assurer la continuite du positionnement entre les equipes." },
    { title: "Psychologue", desc: "Accompagnement des patients et des familles, soins palliatifs, soutien aux equipes. En USLD, la dimension psychologique est indissociable du soin — Marcelle permet de la documenter sans la reduire a des cases a cocher." },
    { title: "Dieteticien(ne)", desc: "Evaluation nutritionnelle, adaptation des textures, supplementation, surveillance du poids. La denutrition est un risque majeur en USLD — le croisement des transmissions alimentation avec les pesees regulieres est essentiel." },
    { title: "Cadre de sante", desc: "Organisation des equipes, suivi des protocoles, indicateurs qualite, relations avec les familles. Marcelle offre des tableaux de bord en temps reel sur le volume et la qualite des transmissions par unite." },
    { title: "Pharmacien(ne)", desc: "Conciliation medicamenteuse, interactions, iatrogenie. Les transmissions sur les effets secondaires et les reactions aux traitements sont immediatement accessibles pour l'analyse pharmaceutique." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA USLD</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les Unites de Soins de Longue Duree</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En USLD, les soins sont lourds, techniques et continus. Marcelle transforme les observations des soignants en transmissions DAR hospitalieres structurees, avec un vocabulaire et des categories adaptes aux specificites de la longue duree : aspirations tracheales, pansements d&apos;escarres, suivi des constantes, nutrition enterale.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UNE USLD */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre l&apos;USLD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;une USLD et quels sont les enjeux de documentation ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                L&apos;Unite de Soins de Longue Duree est un service hospitalier qui accueille des patients ages presentant une perte d&apos;autonomie durable et un besoin de surveillance medicale constante. Contrairement a l&apos;EHPAD qui releve du medico-social, l&apos;USLD est un etablissement sanitaire a part entiere, avec un plateau technique, une permanence medicale et une densite de personnel soignant significativement superieure.
              </p>
              <p>
                Les patients d&apos;USLD presentent des polypathologies complexes : maladies neurodegeneratives avancees, insuffisances d&apos;organe chroniques, etats pauci-relationnels, patients tracheotomises ou sous nutrition enterale. Le Pathos Moyen Pondere (PMP) y est eleve, refletant la lourdeur des soins techniques et relationnels requis au quotidien.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Dans ce contexte hospitalier, les transmissions ne sont pas seulement un outil de coordination — elles font partie integrante du dossier patient et ont une valeur medico-legale. Chaque acte technique (aspiration, pansement, pose de perfusion), chaque observation clinique (modification des constantes, etat de conscience, evolution d&apos;une plaie) doit etre documente avec precision et horodatage.
              </p>
              <p>
                La charge documentaire en USLD est considerablement plus lourde qu&apos;en EHPAD. Un IDE peut realiser 20 a 30 actes techniques par poste, chacun necessitant une trace ecrite. Avec Marcelle, cette documentation se fait au fil du soin, par dictee vocale, sans interrompre la chaine des actes. L&apos;IA structure chaque transmission au format DAR hospitalier — plus technique et plus detaille que le DAR medico-social — et la categorise automatiquement parmi les 12 domaines cliniques de l&apos;USLD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte a l&apos;USLD</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte au niveau d&apos;exigence de l&apos;USLD
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Patient Moreau, chambre 8. Aspiration tracheale realisee a 10h, secretions moderees jaune clair. Constantes stables, TA 130/75, FC 78, SpO2 96%. Pansement escarre sacree refait selon protocole. Alimentation texture mixee, 75% du plateau pris. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Respiration</Badge>
              <Badge variant="light">Constantes</Badge>
              <Badge variant="light">Etat cutane</Badge>
              <Badge variant="light">Alimentation</Badge>
              <Badge variant="light">Soins techniques</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie 5 categories cliniques et structure chaque element au format DAR hospitalier. Les constantes sont extraites et integrees au suivi parametrique du patient. La densite d&apos;information d&apos;une seule transmission vocale equivaut a plusieurs saisies manuelles.
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">12 categories medico-techniques</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3">
                <span className="text-sm font-medium text-white/80">{cat.name}</span>
                <p className="text-xs text-white/40 mt-1">{cat.desc}</p>
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
              <p className="text-sm text-white/50">6h30 - 14h30. Soins d&apos;hygiene, prise des constantes, pansements, traitements, visites medicales. Poste le plus charge en actes techniques et en transmissions.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 21h30. Soins de confort, kinesitherapie, entretiens familles, traitements du soir. Transmissions sur l&apos;evolution de l&apos;etat general et les evenements du jour.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Nuit</span>
              </div>
              <p className="text-sm text-white/50">21h - 7h. Surveillance des constantes, aspirations, rondes, gestion des urgences. En USLD, la nuit est un poste actif avec des soins techniques reguliers. Rotation 12h possible.</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* PROFESSIONS */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><UsersIcon className="w-3.5 h-3.5" /> Equipe pluridisciplinaire</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-8">
            Chaque profession de l&apos;USLD dans Marcelle
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
            Ce que Marcelle apporte a votre USLD
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Transmissions medico-techniques structurees</h3>
              <p className="text-white/80 leading-relaxed">
                Le format DAR hospitalier de Marcelle est plus technique que celui de l&apos;EHPAD. Il integre les gestes techniques (aspirations, pansements, perfusions), les parametres vitaux et les protocoles appliques. Chaque transmission a une valeur medico-legale complete.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi des constantes integre</h3>
              <p className="text-graphite leading-relaxed">
                Quand un soignant dicte &laquo; TA 130/75, FC 78, SpO2 96% &raquo;, Marcelle extrait automatiquement ces valeurs et les integre dans la courbe de suivi parametrique du patient. Plus besoin de double saisie entre la feuille de surveillance et le logiciel.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Coordination pluridisciplinaire</h3>
              <p className="text-graphite leading-relaxed">
                En USLD, le nombre d&apos;intervenants autour d&apos;un meme patient est eleve : IDE, AS, medecin, kine, ergo, psy, dieteticien, pharmacien. Marcelle rend chaque observation visible par l&apos;ensemble de l&apos;equipe, filtrable par profession et par domaine clinique.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Continuite des soins H24</h3>
              <p className="text-white/80 leading-relaxed">
                Avec des postes de 8 ou 12 heures et des soins qui ne s&apos;arretent jamais, la releve entre equipes est un moment critique. Marcelle genere automatiquement un resume de poste synthetique pour l&apos;equipe entrante : actes realises, constantes, evenements significatifs, actions a poursuivre.
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
                <p className="text-sm text-graphite mt-2">Transmissions DAR pour le medico-social. 15 categories cliniques, format adapte aux aides-soignants et aux equipes de jour, apres-midi et nuit.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">MAS</h3>
                <p className="text-sm text-graphite mt-2">Maisons d&apos;Accueil Specialisees pour les personnes en situation de polyhandicap. Soins continus et accompagnement quotidien adapte.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">CMP</h3>
                <p className="text-sm text-graphite mt-2">Centres Medico-Psychologiques pour le suivi ambulatoire en sante mentale. Transmissions adaptees aux consultations et aux visites a domicile.</p>
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
            Pret a simplifier la documentation en USLD ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle allege la charge documentaire de vos IDE et aides-soignants tout en augmentant la qualite et la tracabilite des transmissions. Deploiement rapide, compatible avec vos outils existants.
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
