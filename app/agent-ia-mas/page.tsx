import type { Metadata } from "next";
import Link from "next/link";
import { Badge, BentoCard, ArrowRight, MicIcon, CheckIcon, ShieldIcon, SparklesIcon, HeartIcon, ClockIcon, DocumentIcon, UsersIcon, ClipboardIcon, BuildingIcon, EsmsPageNav, EsmsPageFooter } from "../shared";
import { DemoTrigger } from "../DemoButton";

export const metadata: Metadata = {
  title: "Agent IA MAS | Marcelle - Transmissions vocales pour les Maisons d'Accueil Specialisees",
  description: "Agent IA specialise pour les MAS : transmissions nursing detaillees, suivi pluridisciplinaire H24, 12 categories cliniques adaptees au polyhandicap. Dictee vocale au chevet du resident.",
  keywords: [
    "agent IA MAS",
    "intelligence artificielle MAS",
    "logiciel MAS",
    "transmissions MAS",
    "maison accueil specialisee",
    "polyhandicap transmissions",
    "DAR clinique MAS",
    "suivi pluridisciplinaire handicap",
    "soins continus MAS",
    "IA medico-social",
  ],
  openGraph: {
    title: "Agent IA MAS | Marcelle",
    description: "Transmissions cliniques DAR structurees par la voix pour les MAS. Suivi du polyhandicap severe en continu, 24h/24, 365 jours par an.",
    url: "https://marcelle.ai/agent-ia-mas",
    type: "website",
  },
  alternates: { canonical: "https://marcelle.ai/agent-ia-mas" },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle - Agent IA MAS",
    applicationCategory: "HealthApplication",
    description: "Agent IA pour les Maisons d'Accueil Specialisees. Transmissions cliniques DAR, suivi du positionnement, de l'alimentation et du comportement, coordination soins-education H24.",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", description: "Demo gratuite" },
  };

  const categories = [
    { name: "Soins" },
    { name: "Comportement" },
    { name: "Alimentation" },
    { name: "Elimination" },
    { name: "Hygiene" },
    { name: "Activites" },
    { name: "Vie sociale" },
    { name: "Communication" },
    { name: "Nuit" },
    { name: "Positionnement" },
    { name: "Douleur" },
    { name: "Autre" },
  ];

  const professions = [
    { title: "Aide medico-psychologique (AMP/AES)", desc: "Coeur de l'accompagnement au quotidien : toilettes, habillage, repas, activites. Les AMP sont les premiers observateurs du comportement et du bien-etre des residents. Marcelle capture chaque detail de leurs observations, meme en situation de soins." },
    { title: "Aide-soignant(e)", desc: "Soins d'hygiene, surveillance de l'etat cutane, positionnement, alimentation assistee. Les transmissions nursing detaillees sont essentielles dans une MAS ou les residents ne peuvent pas exprimer verbalement leurs besoins." },
    { title: "Infirmier(e)", desc: "Administration des traitements, surveillance clinique, evaluation de la douleur, coordination avec les medecins. L'IA categorise les observations infirmieres et alerte sur les situations a risque — fausses routes, escarres, episodes douloureux." },
    { title: "Medecin generaliste / Psychiatre", desc: "Suivi medical regulier, adaptation des traitements, gestion des comorbidites. Marcelle fournit une synthese clinique actualisee avant chaque visite, evitant la perte d'information entre les passages medicaux." },
    { title: "Kinesitherapeute", desc: "Mobilisation, prevention des retractions, entretien des amplitudes articulaires. Les transmissions kine sont croisees avec les observations de positionnement des AMP pour un suivi coherent de la motricite." },
    { title: "Ergotherapeute", desc: "Adaptations techniques, fauteuils coques, aides au repas, amenagement de l'environnement. Chaque essai d'appareillage et ses resultats sont traces dans les transmissions pour optimiser le confort du resident." },
    { title: "Psychomotricien(ne)", desc: "Stimulations sensorielles, travail sur le tonus, la relation au corps et a l'espace. Les seances de psychomotricite revelent des capacites parfois insoupconnees — Marcelle en garde la trace pour enrichir le PPA." },
    { title: "Educateur(trice) specialise(e)", desc: "Projet educatif, activites adaptees, sorties, communication alternative. Les observations educatives completent les transmissions soignantes pour une vision globale de la personne, au-dela de sa pathologie." },
    { title: "Psychologue", desc: "Soutien psychologique des residents et des familles, evaluation du bien-etre, accompagnement des equipes. Les transmissions comportementales alimentent l'analyse psychologique et le reperage des situations de souffrance." },
    { title: "Animateur/Animatrice", desc: "Activites de stimulation, ateliers sensoriels, musique, sorties adaptees. Les retours sur la participation et les reactions des residents sont des indicateurs precieux du bien-etre, souvent sous-documentes." },
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
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA MAS</Badge>
            <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
          </div>
          <h1 className="font-serif text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.05] text-encre">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les MAS</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl leading-relaxed">
            En Maison d&apos;Accueil Specialisee, chaque geste de soin merite d&apos;etre documente. Marcelle transforme les observations vocales de vos equipes en transmissions DAR cliniques couvrant 12 categories adaptees au polyhandicap severe, du positionnement a l&apos;alimentation en passant par la douleur. 24 heures sur 24, 365 jours par an.
          </p>
          <div className="mt-8">
            <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
              Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </DemoTrigger>
          </div>
        </div>
      </section>

      {/* QU'EST-CE QU'UNE MAS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="sauge"><BuildingIcon className="w-3.5 h-3.5" /> Comprendre la MAS</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-encre mt-4 mb-6">
            Qu&apos;est-ce qu&apos;une MAS et pourquoi les transmissions y sont vitales ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                Une Maison d&apos;Accueil Specialisee accueille des adultes en situation de polyhandicap severe ou de handicap lourd necessitant une aide humaine et technique pour la plupart des actes de la vie quotidienne, ainsi qu&apos;une surveillance medicale constante. Les residents d&apos;une MAS sont souvent non-verbaux ou disposent de moyens de communication tres limites, ce qui rend l&apos;observation attentive des professionnels encore plus cruciale.
              </p>
              <p>
                Le fonctionnement d&apos;une MAS est residentiel, 24 heures sur 24, 365 jours par an. Les equipes se relaient en trois postes — matin, apres-midi, nuit — et la qualite de la transmission inter-equipes conditionne directement la continuite de l&apos;accompagnement. Un protocole de positionnement non respecte peut provoquer une escarre en quelques heures. Une texture alimentaire inadaptee peut causer une fausse route. Un changement de comportement non signale peut masquer une douleur.
              </p>
            </div>
            <div className="space-y-4 text-graphite leading-relaxed">
              <p>
                La complexite des profils accueillis en MAS exige une documentation rigoureuse : chaque toilette, chaque repas, chaque changement de position, chaque signe de douleur ou de bien-etre doit etre trace. Le Projet Personnalise d&apos;Accompagnement (PPA) de chaque resident repose sur ces observations croisees entre AMP, aides-soignants, infirmiers, kinesitherapeutes, educateurs et psychologues.
              </p>
              <p>
                Marcelle comprend cette realite. L&apos;agent IA permet aux professionnels de dicter leurs observations au chevet du resident, pendant ou juste apres le soin, sans avoir a rejoindre un poste informatique. L&apos;IA structure chaque transmission au format DAR clinique, la classe parmi les 12 categories specifiques a la MAS et la rend disponible instantanement pour l&apos;ensemble de l&apos;equipe, y compris l&apos;equipe de nuit qui prend son poste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT MARCELLE S'ADAPTE */}
      <section className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <Badge variant="light"><ClipboardIcon className="w-3.5 h-3.5" /> Adapte a la MAS</Badge>
          <h2 className="font-serif text-[1.5rem] md:text-[2rem] text-white mt-4 mb-10">
            Comment Marcelle s&apos;adapte aux specificites de la MAS
          </h2>

          {/* Example transmission */}
          <BentoCard variant="glass" className="p-6 md:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <MicIcon className="w-5 h-5 text-terracotta" />
              <span className="text-sm font-medium text-white/60">Exemple de transmission vocale</span>
            </div>
            <p className="text-white/90 text-lg leading-relaxed italic">
              &laquo; Karim, unite Soleil. Toilette et habillage avec aide complete. Comportement apaise ce matin, sourires lors de l&apos;installation au fauteuil coque. Alimentation mixee au dejeuner : a pris 90% du repas, pas de fausse route. Seance de psychomotricite a 14h : travail sur le toucher, bonne reactivite aux stimulations tactiles. Installation au lit a 16h30 avec changement de position toutes les 3h selon protocole anti-escarres. &raquo;
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="light">Hygiene</Badge>
              <Badge variant="light">Comportement</Badge>
              <Badge variant="light">Alimentation</Badge>
              <Badge variant="light">Activites</Badge>
              <Badge variant="light">Positionnement</Badge>
            </div>
            <p className="mt-4 text-sm text-white/40">
              Marcelle identifie automatiquement 5 categories et structure la transmission au format DAR clinique : Donnees (observations factuelles), Actions (soins et accompagnements realises), Resultats (reactions et evolution constatees).
            </p>
          </BentoCard>

          {/* Categories */}
          <h3 className="font-serif text-lg text-white mb-4">12 categories cliniques reconnues</h3>
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
              <p className="text-sm text-white/50">6h30 - 14h30. Toilettes avec aide complete, habillage, installation au fauteuil, traitements, petit-dejeuner et dejeuner assistes. Poste le plus dense en soins nursing et transmissions cliniques.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-terracotta" />
                <span className="font-medium text-white">Apres-midi</span>
              </div>
              <p className="text-sm text-white/50">14h - 21h30. Seances de kinesitherapie, psychomotricite, activites educatives et sensorielles, gouter, diner, coucher. Transmissions sur les activites, le comportement et le positionnement.</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <ClockIcon className="w-4 h-4 text-white/40" />
                <span className="font-medium text-white">Nuit</span>
              </div>
              <p className="text-sm text-white/50">21h - 7h. Rondes de surveillance, changements de position, gestion de l&apos;agitation nocturne, elimination. Transmissions essentielles pour la continuite avec l&apos;equipe du matin.</p>
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
            Ce qui change concretement pour votre MAS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BentoCard variant="sauge" className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Transmissions nursing detaillees</h3>
              <p className="text-white/80 leading-relaxed">
                Positionnement, alimentation, comportement, douleur — chaque dimension du soin est documentee avec la precision que le polyhandicap severe exige. Les protocoles anti-escarres, les textures alimentaires et les changements de position sont traces en temps reel, sans quitter le chevet du resident.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-sauge mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Suivi pluridisciplinaire quotidien</h3>
              <p className="text-graphite leading-relaxed">
                AMP, aides-soignants, infirmiers, kinesitherapeutes, educateurs, psychologues : chaque professionnel contribue au dossier du resident par la voix. L&apos;IA relie les observations pour reveler des correlations — un changement de comportement lie a une modification de traitement, une amelioration motrice qui suit un ajustement de fauteuil.
              </p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif text-xl text-encre mb-2">Continuite H24, 365 jours</h3>
              <p className="text-graphite leading-relaxed">
                Trois postes, sept jours sur sept, toute l&apos;annee : la MAS ne s&apos;arrete jamais. Marcelle assure la continuite entre chaque equipe. L&apos;aide-soignant de nuit sait exactement comment le resident a ete installe a 16h30, et l&apos;equipe du matin retrouve les observations de la nuit avant meme d&apos;entrer dans la chambre.
              </p>
            </BentoCard>
            <BentoCard variant="terracotta" className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 mb-3" />
              <h3 className="font-serif text-xl mb-2">Coordination soins et education</h3>
              <p className="text-white/80 leading-relaxed">
                En MAS, l&apos;accompagnement ne se limite pas au soin : les activites educatives, les stimulations sensorielles, les sorties adaptees font partie integrante du PPA. Marcelle unifie les transmissions soignantes et educatives pour que chaque professionnel dispose d&apos;une vision complete de la journee du resident.
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
                <p className="text-sm text-graphite mt-2">Foyers d&apos;Accueil Medicalises pour adultes handicapes. Double volet soins et education avec suivi de l&apos;autonomie.</p>
                <span className="inline-flex items-center gap-1 text-sm text-sauge mt-3">Decouvrir <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" /></span>
              </BentoCard>
            </Link>
            <Link href="/#esms" className="group">
              <BentoCard variant="white" className="p-5 h-full">
                <h3 className="font-medium text-encre group-hover:text-sauge transition-colors">EEAP</h3>
                <p className="text-sm text-graphite mt-2">Etablissements pour Enfants et Adolescents Polyhandicapes. Accompagnement global des plus jeunes en situation de polyhandicap.</p>
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
            Pret a transformer les transmissions de votre MAS ?
          </h2>
          <p className="text-graphite max-w-xl mx-auto mb-8 leading-relaxed">
            Decouvrez comment Marcelle s&apos;integre au quotidien de vos equipes en moins de 48 heures. Du matin a la nuit, vos professionnels dictent au chevet du resident — Marcelle structure, classe et partage.
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
