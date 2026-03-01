import type { Metadata } from "next";
import Link from "next/link";
import { DemoTrigger } from "../DemoButton";
import {
  Badge,
  BentoCard,
  ArrowRight,
  MicIcon,
  CheckIcon,
  ShieldIcon,
  SparklesIcon,
  HeartIcon,
  ClockIcon,
  DocumentIcon,
  UsersIcon,
  ClipboardIcon,
  BuildingIcon,
  EsmsPageNav,
  EsmsPageFooter,
} from "../shared";

/* ------------------------------------------------------------------ */
/*  SEO METADATA                                                       */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Agent IA SESSAD - Marcelle | Comptes-rendus de seances et coordination ambulatoire",
  description:
    "Marcelle est l'agent IA concu pour les SESSAD. Comptes-rendus de seances automatiques, coordination ecole-domicile-locaux et suivi des progres pour les ESS.",
  keywords: [
    "agent IA SESSAD",
    "intelligence artificielle SESSAD",
    "logiciel SESSAD",
    "transmissions SESSAD",
    "IA service ambulatoire handicap",
    "comptes-rendus seances SESSAD",
    "coordination SESSAD ecole",
    "logiciel medico-social ambulatoire",
  ],
  alternates: { canonical: "https://marcelle.ai/agent-ia-sessad" },
  openGraph: {
    title: "Agent IA SESSAD - Marcelle | Comptes-rendus de seances et coordination ambulatoire",
    description:
      "L'agent IA Marcelle simplifie les comptes-rendus de seances en SESSAD : coordination multi-sites, suivi des progres et lien avec les familles.",
    url: "https://marcelle.ai/agent-ia-sessad",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AgentIaSessad() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Agent IA pour SESSAD - Marcelle",
    description:
      "Solution d'intelligence artificielle pour les Services d'Education Speciale et de Soins a Domicile. Comptes-rendus automatises, coordination multi-sites et suivi ambulatoire.",
    url: "https://marcelle.ai/agent-ia-sessad",
    publisher: {
      "@type": "Organization",
      name: "Marcelle",
      url: "https://marcelle.ai",
    },
  };

  const categories = [
    "Seance de reeducation",
    "Observation scolaire",
    "Visite a domicile",
    "Bilan",
    "Coordination (ecole, MDPH, medecin)",
    "Autonomie",
    "Famille",
    "Autre",
  ];

  const professions = [
    { name: "Educateur(trice) specialise(e)", desc: "Accompagnement educatif sur les lieux de vie, soutien a l'inclusion scolaire et sociale, lien avec les partenaires." },
    { name: "Psychomotricien(ne)", desc: "Seances de reeducation psychomotrice, travail sur le schema corporel, la coordination et la regulation tonique." },
    { name: "Orthophoniste", desc: "Reeducation du langage oral et ecrit, travail sur la communication, seances en individuel ou en groupe." },
    { name: "Psychologue", desc: "Bilans psychologiques, soutien therapeutique, guidance parentale et participation aux syntheses." },
    { name: "Ergotherapeute", desc: "Evaluation et adaptation de l'environnement (ecole, domicile), preconisation d'aides techniques, seances de reeducation." },
    { name: "Chef de service", desc: "Coordination de l'equipe, pilotage des projets personnalises, lien avec les familles et les institutions." },
    { name: "Enseignant(e) specialise(e) referent(e)", desc: "Articulation avec l'Education nationale, participation aux ESS, adaptation des supports pedagogiques." },
    { name: "Assistant(e) social(e)", desc: "Accompagnement des familles dans les demarches administratives, lien avec la MDPH, orientation et acces aux droits." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EsmsPageNav />

      {/* ── Hero ── */}
      <section className="bg-cream pt-[72px]">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Link href="/#esms" className="inline-flex items-center gap-1.5 text-sm text-sauge hover:text-sauge-deep transition-colors mb-8">
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            Tous les ESMS
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="sauge">SESSAD</Badge>
            <Badge variant="terracotta">Ambulatoire</Badge>
            <Badge variant="sauge">0-20 ans</Badge>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-encre leading-[1.1] mb-6">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les SESSAD</span>
          </h1>

          <p className="text-lg md:text-xl text-graphite max-w-2xl mb-8 leading-relaxed">
            Dans les Services d&apos;Education Speciale et de Soins a Domicile, les professionnels interviennent
            sur plusieurs sites — ecole, domicile, locaux du service. Marcelle transforme vos comptes-rendus
            de seances vocaux en documents structures, partageables et exploitables pour les ESS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <DemoTrigger className="group inline-flex items-center justify-center gap-2 bg-sauge text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300">
              Demander une demo
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </DemoTrigger>
            <Link href="#adaptation" className="inline-flex items-center justify-center gap-2 border border-lin text-encre px-6 py-3 rounded-xl text-sm font-medium hover:bg-white transition-all duration-300">
              Voir les categories
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qu'est-ce qu'un SESSAD ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="terracotta">Comprendre</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-6">Qu&apos;est-ce qu&apos;un SESSAD ?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-graphite leading-relaxed">
            <div>
              <p className="mb-4">
                Un Service d&apos;Education Speciale et de Soins a Domicile (SESSAD) accompagne des enfants et
                adolescents de 0 a 20 ans en situation de handicap, directement dans leurs lieux de vie : a l&apos;ecole,
                au domicile ou dans les locaux du service. Contrairement aux etablissements medico-sociaux classiques,
                le SESSAD fonctionne en ambulatoire — les professionnels se deplacent la ou se trouve l&apos;enfant.
              </p>
              <p>
                Chaque enfant beneficie d&apos;un Projet Personnalise d&apos;Accompagnement (PPA) ou d&apos;un Projet
                Individualise d&apos;Accompagnement (PIA) qui coordonne les interventions de reeducation, d&apos;education
                specialisee et de soutien a la scolarisation. Le SESSAD joue un role central dans l&apos;inclusion
                scolaire en milieu ordinaire, en lien etroit avec les enseignants et les AVS.
              </p>
            </div>
            <div>
              <p className="mb-4">
                La particularite du SESSAD reside dans l&apos;eclatement geographique des interventions. Un orthophoniste
                peut enchainer une seance dans les locaux du service a 9h, une observation en classe a 11h et une visite
                a domicile a 15h. Les comptes-rendus doivent etre rediges entre chaque intervention, souvent dans la
                voiture ou dans un couloir d&apos;ecole.
              </p>
              <p>
                Marcelle repond a cette contrainte : les professionnels dictent leur compte-rendu de seance par la voix,
                et l&apos;IA le structure automatiquement avec les categories du SESSAD. Les informations sont
                immediatement disponibles pour le chef de service, les collegues et la preparation des ESS (Equipes de
                Suivi de Scolarisation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment Marcelle s'adapte ── */}
      <section id="adaptation" className="bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="light">Adaptation</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-10">Comment Marcelle s&apos;adapte aux SESSAD</h2>

          {/* Categories */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">8 categories de comptes-rendus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            {categories.map((cat) => (
              <div key={cat} className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2.5 text-sm text-white/80 text-center">
                {cat}
              </div>
            ))}
          </div>

          {/* Exemple vocal */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Exemple de transmission vocale</h3>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sauge/20 flex items-center justify-center">
                <MicIcon className="w-4 h-4 text-sauge" />
              </div>
              <p className="text-white/90 leading-relaxed italic">
                &laquo; Noa, CE2 ecole Jules Ferry. Seance d&apos;orthophonie ce matin dans les locaux du SESSAD :
                travail sur la conscience phonologique, progres sur les sons complexes. Observation en classe a 14h :
                bonne integration dans le groupe, l&apos;AVS a pu se mettre en retrait sur les activites de maths.
                Echange avec l&apos;enseignante : Noa gagne en confiance. &raquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="light">seance_reeducation</Badge>
              <Badge variant="light">observation_scolaire</Badge>
              <Badge variant="light">coordination</Badge>
            </div>
          </div>

          {/* Horaires */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Horaires en SESSAD</h3>
          <div className="grid sm:grid-cols-1 max-w-md gap-3">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
              <ClockIcon className="w-5 h-5 mx-auto mb-2 text-amber-400" />
              <p className="text-white font-medium">Jour</p>
              <p className="text-white/50 text-sm">8h30 – 17h30, lundi au vendredi</p>
            </div>
          </div>
          <p className="text-white/40 text-sm mt-3">Interventions ambulatoires sur les lieux de vie de l&apos;enfant.</p>
        </div>
      </section>

      {/* ── Professions ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="sauge">Equipe</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-4">Les professions en SESSAD</h2>
          <p className="text-graphite mb-10 max-w-2xl">
            L&apos;equipe d&apos;un SESSAD est pluridisciplinaire et mobile. Chaque professionnel intervient sur
            differents sites et a besoin d&apos;un outil qui le suit dans ses deplacements pour consigner ses
            observations et comptes-rendus sans attendre le retour au bureau.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {professions.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-lin p-5">
                <div className="flex items-center gap-2 mb-2">
                  <UsersIcon className="w-4 h-4 text-sauge" />
                  <h3 className="font-medium text-encre">{p.name}</h3>
                </div>
                <p className="text-sm text-graphite leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefices ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="terracotta">Benefices</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-10">Ce que Marcelle apporte aux SESSAD</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BentoCard className="p-6 md:p-8">
              <DocumentIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">CR de seances structures automatiquement</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Plus besoin de rediger entre deux interventions. Le professionnel dicte son compte-rendu de seance
                en sortant de l&apos;ecole ou du domicile, et Marcelle le structure : objectifs travailles, progres
                observes, points de vigilance. Le document est pret a integrer le dossier de l&apos;enfant.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <BuildingIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Coordination multi-sites</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Ecole, domicile, locaux du service : les interventions sont eclatees geographiquement.
                Marcelle centralise toutes les observations au meme endroit, quel que soit le lieu d&apos;intervention.
                Le chef de service a une vision globale de l&apos;accompagnement de chaque enfant en temps reel.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <ClipboardIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Suivi des progres pour les ESS</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Les Equipes de Suivi de Scolarisation necessitent des bilans precis. Grace a l&apos;historique
                structure des comptes-rendus, le SESSAD peut documenter l&apos;evolution de l&apos;enfant avec des
                donnees concretes : progres en reeducation, observations en classe, niveau d&apos;autonomie.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Lien avec les parents facilite</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Les familles sont au coeur de l&apos;accompagnement en SESSAD. Marcelle permet de tracer les echanges
                lors des visites a domicile, les guidances parentales et les retours d&apos;observation. Les parents
                restent informes et impliques dans le projet de leur enfant.
              </p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ── Decouvrez aussi ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <h2 className="font-serif text-3xl md:text-4xl text-encre mb-8">Decouvrez aussi</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/agent-ia-camsp", label: "CAMSP", desc: "Centres d'Action Medico-Sociale Precoce" },
              { href: "/agent-ia-cmpp", label: "CMPP", desc: "Centres Medico-Psycho-Pedagogiques" },
              { href: "/agent-ia-ime", label: "IME", desc: "Instituts Medico-Educatifs" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group bg-white rounded-2xl border border-lin p-5 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                <Badge variant="sauge">{item.label}</Badge>
                <p className="mt-3 font-medium text-encre group-hover:text-sauge transition-colors">{item.desc}</p>
                <span className="inline-flex items-center gap-1 mt-2 text-sm text-sauge">
                  Decouvrir <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Pret a simplifier vos comptes-rendus en SESSAD ?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Decouvrez comment Marcelle accompagne les equipes ambulatoires dans la redaction de leurs
            comptes-rendus de seances, la coordination multi-sites et le suivi des progres.
          </p>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300">
            Demander une demo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </section>

      <EsmsPageFooter />
    </>
  );
}
