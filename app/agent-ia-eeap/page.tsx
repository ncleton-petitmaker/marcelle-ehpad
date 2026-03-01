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
  title: "Agent IA EEAP - Marcelle | Transmissions polyhandicap et suivi nursing",
  description:
    "Marcelle est l'agent IA concu pour les EEAP. Transmissions vocales DAR, suivi epilepsie, alimentation adaptee, seances Snoezelen et coordination pluridisciplinaire 365 jours par an.",
  keywords: [
    "agent IA EEAP",
    "intelligence artificielle EEAP",
    "logiciel EEAP",
    "transmissions polyhandicap",
    "IA etablissement polyhandicap",
    "suivi epilepsie enfant",
    "transmissions nursing enfant",
    "logiciel medico-social polyhandicap",
  ],
  alternates: { canonical: "https://marcelle.ai/agent-ia-eeap" },
  openGraph: {
    title: "Agent IA EEAP - Marcelle | Transmissions polyhandicap et suivi nursing",
    description:
      "L'agent IA Marcelle simplifie les transmissions DAR en EEAP : suivi nursing intensif, epilepsie, alimentation et stimulation sensorielle.",
    url: "https://marcelle.ai/agent-ia-eeap",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function AgentIaEeap() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Agent IA pour EEAP - Marcelle",
    description:
      "Solution d'intelligence artificielle pour les Etablissements pour Enfants et Adolescents Polyhandicapes. Transmissions vocales, suivi epilepsie et coordination pluridisciplinaire.",
    url: "https://marcelle.ai/agent-ia-eeap",
    publisher: {
      "@type": "Organization",
      name: "Marcelle",
      url: "https://marcelle.ai",
    },
  };

  const categories = [
    "Soins nursing",
    "Epilepsie",
    "Alimentation (textures, gavage)",
    "Positionnement (installation au fauteuil)",
    "Etat cutane",
    "Communication (pictogrammes, regard)",
    "Stimulation (sensorielle, Snoezelen)",
    "Reeducation",
    "Comportement",
    "Autre",
  ];

  const professions = [
    { name: "Aide-soignant(e)", desc: "Soins de nursing quotidiens, toilettes, changes, prevention d'escarres et surveillance de l'etat cutane." },
    { name: "Aide medico-psychologique (AMP/AES)", desc: "Accompagnement dans les gestes du quotidien, stimulations sensorielles et relationnelles, activites de bien-etre." },
    { name: "Infirmier(e)", desc: "Administration des traitements, surveillance epileptique, soins techniques, lien avec le medecin." },
    { name: "Kinesitherapeute", desc: "Mobilisations passives et actives, prevention orthopedique, travail respiratoire." },
    { name: "Ergotherapeute", desc: "Adaptation du fauteuil et des installations, choix des aides techniques, evaluation fonctionnelle." },
    { name: "Psychomotricien(ne)", desc: "Seances de mediation corporelle, approche Snoezelen, detente et regulation tonique." },
    { name: "Orthophoniste", desc: "Mise en place de la Communication Alternative et Augmentee (CAA), travail de l'oralite et de la deglutition." },
    { name: "Educateur(trice) specialise(e)", desc: "Projets d'activite, liens avec les familles, coordination des projets personnalises d'accompagnement." },
    { name: "Medecin pediatre / neuropediatre", desc: "Supervision medicale, ajustement des traitements antiepileptiques, consultations specialisees." },
    { name: "Psychologue", desc: "Soutien aux familles, observations cliniques, participation a l'elaboration du PPA." },
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
            <Badge variant="sauge">EEAP</Badge>
            <Badge variant="terracotta">Polyhandicap</Badge>
            <Badge variant="sauge">Internat 365j/an</Badge>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-encre leading-[1.1] mb-6">
            L&apos;agent IA pour<br />
            <span className="text-sauge">les EEAP</span>
          </h1>

          <p className="text-lg md:text-xl text-graphite max-w-2xl mb-8 leading-relaxed">
            Dans les Etablissements pour Enfants et Adolescents Polyhandicapes, chaque detail compte.
            Marcelle structure vos transmissions DAR nursing en temps reel : crises d&apos;epilepsie,
            alimentation adaptee, stimulations sensorielles et positionnement au fauteuil.
            Dictez, Marcelle organise — 365 jours par an.
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

      {/* ── Qu'est-ce qu'un EEAP ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="terracotta">Comprendre</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-6">Qu&apos;est-ce qu&apos;un EEAP ?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-graphite leading-relaxed">
            <div>
              <p className="mb-4">
                Un Etablissement pour Enfants et Adolescents Polyhandicapes (EEAP) accueille des jeunes de 0 a 20 ans
                presentant un polyhandicap, c&apos;est-a-dire une association de deficiences motrices et mentales severes,
                entrainant une restriction extreme de l&apos;autonomie. Ces etablissements fonctionnent en internat complet,
                365 jours par an, pour offrir un accompagnement continu et securisant.
              </p>
              <p>
                Les enfants y beneficient d&apos;un projet personnalise d&apos;accompagnement (PPA) qui articule soins nursing
                intensifs, reeducation, stimulation sensorielle et maintien du lien familial. L&apos;equipe pluridisciplinaire
                — soignants, reeducateurs, educateurs — intervient dans les unites de vie et en salle Snoezelen pour
                favoriser le bien-etre et le developpement de chaque enfant.
              </p>
            </div>
            <div>
              <p className="mb-4">
                La complexite du polyhandicap rend les transmissions particulierement exigeantes : chaque crise d&apos;epilepsie,
                chaque changement de texture alimentaire, chaque reaction lors d&apos;une seance sensorielle doit etre consigne
                avec precision. Les equipes fonctionnent en trois roulements — matin, apres-midi et nuit — et la continuite
                de l&apos;information entre les equipes conditionne la qualite de l&apos;accompagnement.
              </p>
              <p>
                Marcelle s&apos;adapte a cette realite : transmissions au format DAR soins nursing intensifs, categories
                specifiques au polyhandicap, et un fonctionnement continu qui ne s&apos;interrompt jamais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comment Marcelle s'adapte ── */}
      <section id="adaptation" className="bg-ardoise">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="light">Adaptation</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-4 mb-10">Comment Marcelle s&apos;adapte aux EEAP</h2>

          {/* Categories */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">10 categories de transmissions</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-12">
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
                &laquo; Lea, unite Papillon. Toilette et changes du matin sans opposition. Crise d&apos;epilepsie a 9h15,
                type absence de 30 secondes, protocole d&apos;urgence non necessaire. Alimentation mixee lisse au dejeuner,
                a pris 80% du repas avec cuillere adaptee. Seance Snoezelen cet apres-midi : bonne reactivite aux stimuli
                lumineux, sourires. Installation au corset-siege verifiee a 16h. &raquo;
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="light">soins_nursing</Badge>
              <Badge variant="light">epilepsie</Badge>
              <Badge variant="light">alimentation</Badge>
              <Badge variant="light">stimulation</Badge>
              <Badge variant="light">positionnement</Badge>
            </div>
          </div>

          {/* Roulements */}
          <h3 className="text-white/60 text-sm font-medium uppercase tracking-wider mb-4">Roulements en EEAP</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: "Matin", hours: "6h30 – 14h30", icon: "text-amber-400" },
              { label: "Apres-midi", hours: "14h – 21h30", icon: "text-orange-400" },
              { label: "Nuit", hours: "21h – 7h", icon: "text-indigo-400" },
            ].map((shift) => (
              <div key={shift.label} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                <ClockIcon className={`w-5 h-5 mx-auto mb-2 ${shift.icon}`} />
                <p className="text-white font-medium">{shift.label}</p>
                <p className="text-white/50 text-sm">{shift.hours}</p>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm text-center mt-3">Fonctionnement 365 jours par an, week-ends et jours feries inclus.</p>
        </div>
      </section>

      {/* ── Professions ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-28">
          <Badge variant="sauge">Equipe</Badge>
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-4">Les professions en EEAP</h2>
          <p className="text-graphite mb-10 max-w-2xl">
            L&apos;equipe d&apos;un EEAP est composee de profils tres specialises. Marcelle s&apos;adapte au vocabulaire et
            aux besoins de chacun pour structurer les transmissions de facon pertinente.
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
          <h2 className="font-serif text-3xl md:text-4xl text-encre mt-4 mb-10">Ce que Marcelle apporte aux EEAP</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <BentoCard className="p-6 md:p-8">
              <HeartIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Suivi nursing ultra-detaille</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Positionnement au fauteuil, prevention d&apos;escarres, toilettes, changes : chaque geste de nursing est
                trace dans la transmission. L&apos;IA identifie automatiquement le type de soin et le rattache a la
                categorie adaptee pour une lecture immediate par l&apos;equipe suivante.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <ShieldIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Tracabilite epilepsie</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Type de crise, duree, heure, necessite ou non du protocole d&apos;urgence : Marcelle extrait
                automatiquement ces informations de la transmission vocale et les structure pour le suivi medical.
                Le neuropediatre dispose d&apos;un historique fiable pour ajuster les traitements.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <ClockIcon className="w-6 h-6 text-sauge mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Coordination continue 365 jours</h3>
              <p className="text-graphite text-sm leading-relaxed">
                En internat permanent, la releve entre equipes est un enjeu vital. Marcelle garantit que chaque
                information — meme transmise a 3h du matin un jour ferie — est structuree, classee et
                immediatement accessible a l&apos;equipe qui prend le relais.
              </p>
            </BentoCard>
            <BentoCard className="p-6 md:p-8">
              <UsersIcon className="w-6 h-6 text-terracotta mb-4" />
              <h3 className="font-medium text-lg text-encre mb-2">Soutien aux familles</h3>
              <p className="text-graphite text-sm leading-relaxed">
                Les parents d&apos;enfants polyhandicapes ont besoin de nouvelles regulieres et rassurantes.
                Grace aux transmissions structurees, l&apos;equipe peut facilement partager les avancees :
                progres en seance Snoezelen, evolution de l&apos;alimentation, moments de bien-etre.
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
              { href: "/agent-ia-ime", label: "IME", desc: "Instituts Medico-Educatifs" },
              { href: "/agent-ia-iem", label: "IEM", desc: "Instituts d'Education Motrice" },
              { href: "/agent-ia-mas", label: "MAS", desc: "Maisons d'Accueil Specialisees" },
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
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Pret a simplifier vos transmissions en EEAP ?</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Decouvrez comment Marcelle s&apos;adapte au polyhandicap et accompagne vos equipes
            dans le suivi nursing, l&apos;epilepsie et la stimulation sensorielle.
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
