import Link from "next/link";
import Image from "next/image";

import { DemoTrigger } from "./DemoButton";
import {
  ArrowRight,
  MicIcon,
  PlayIcon,
  HeartIcon,
  SparklesIcon,
  ClockIcon,
  ShieldIcon,
  ChartIcon,
  DocumentIcon,
  AcademicCapIcon,
  ChatBubbleIcon,
  CheckIcon,
  CogIcon,
  BuildingIcon,
  StarIcon,
  RefreshIcon,
  Badge,
  BentoCard,
} from "./shared";

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Marcelle",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Marcelle est l'agent IA pour le médico-social qui simplifie les transmissions, centralise la formation vidéo et maintient le lien avec les familles. Compatible avec tous types d'ESMS : EHPAD, IME, MAS, FAM, SESSAD, ESAT et plus. Configuration sur mesure, compatible avec tous les logiciels métier. Conforme RGPD et IA Act.",
    url: "https://marcelle.ai",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Agent IA pour les établissements médico-sociaux (ESMS)",
      "Transmissions vocales structurées automatiquement",
      "Formation vidéo avec recherche IA",
      "Lien familles automatisé",
      "Compatible avec tous les logiciels métier",
      "Configuration sur mesure pour chaque établissement",
      "Conforme RGPD et IA Act",
    ],
    publisher: {
      "@type": "Organization",
      name: "Marcelle",
      url: "https://marcelle.ai",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marcelle",
    url: "https://marcelle.ai",
    logo: "https://marcelle.ai/icon.svg",
    description: "Agent IA pour le médico-social — transmissions, formation et lien familles",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["French"],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Marcelle s'intègre-t-elle avec notre logiciel métier existant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Marcelle est conçue pour s'adapter à tous les logiciels métier du marché. La configuration est réalisée sur mesure pour votre établissement, vos process et vos outils existants. Les transmissions vocales remontent automatiquement dans votre logiciel, sans double saisie.",
        },
      },
      {
        "@type": "Question",
        name: "Concrètement, comment un professionnel utilise Marcelle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le professionnel — aide-soignant, éducateur, moniteur — porte un petit biper. Entre deux accompagnements, il appuie et parle : « Mme Dupont a bien mangé ce midi, elle a marché 10 minutes dans le couloir, elle était de bonne humeur. » Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier.",
        },
      },
      {
        "@type": "Question",
        name: "Les données de santé sont-elles sécurisées ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Marcelle est hébergée sur des serveurs certifiés HDS (Hébergeur de Données de Santé) en Europe. Toutes les données sont chiffrées, le consentement est explicite, et nous sommes conformes RGPD et IA Act.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour déployer Marcelle dans un établissement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le déploiement complet prend 2 à 4 semaines : une semaine de configuration sur mesure (adaptation à vos process, connexion à votre logiciel métier), une semaine de formation des équipes, puis un accompagnement au démarrage. La formation des professionnels dure 45 minutes. Les équipes sont autonomes dès la fin du premier mois.",
        },
      },
      {
        "@type": "Question",
        name: "Et si les équipes ne sont pas à l'aise avec la technologie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est justement la force de Marcelle : un biper, un bouton, on parle. Pas d'écran complexe, pas de formulaire à remplir, pas d'application à télécharger. Si vous savez parler, vous savez utiliser Marcelle. La formation dure 45 minutes et les équipes sont autonomes immédiatement.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte Marcelle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif dépend de la taille de l'établissement et des modules activés. Demandez une démo pour obtenir un devis personnalisé. Le retour sur investissement est généralement visible dès le premier mois grâce au temps gagné sur les transmissions.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-cream text-encre font-sans selection:bg-sauge/20 selection:text-encre">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ========== 1. NAVIGATION ========== */}
      <nav aria-label="Navigation principale" className="fixed top-0 inset-x-0 z-50 h-[72px] backdrop-blur-xl bg-cream/90 border-b border-lin">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          <Image src="/logo-marcelle.png" alt="Marcelle AI" width={140} height={39} priority />
          <div className="hidden md:flex items-center gap-8">
            <a href="#piliers" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Les 3 piliers</a>
            <a href="#comment" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Comment &ccedil;a marche</a>
            <a href="#esms" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Tous les ESMS</a>
            <a href="#conformite" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Conformit&eacute;</a>
            <a href="#faq" className="text-sm text-graphite hover:text-encre transition-colors duration-200">FAQ</a>
          </div>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300 cursor-pointer">
            Demander une d&eacute;mo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </nav>

      {/* ========== 2. HERO (bg-cream) ========== */}
      <section aria-label="Marcelle - Agent IA m&eacute;dico-social" className="relative pt-[72px] min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sauge/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA m&eacute;dico-social</Badge>
              <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
            </div>
            <h1 className="font-serif font-normal leading-[1.05] tracking-tight text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-encre">
              L&apos;agent IA qui prend soin
              <br />
              <span className="text-sauge">de vos &eacute;quipes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl mx-auto leading-relaxed">
              Marcelle aide les professionnels &agrave; transmettre et se former. Elle informe les familles selon vos r&egrave;gles. Configur&eacute;e sur mesure pour votre &eacute;tablissement et vos logiciels.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                Demander une d&eacute;mo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </DemoTrigger>
              <a href="#piliers" className="inline-flex items-center gap-2 border border-lin text-encre px-7 py-3.5 rounded-xl font-medium text-[15px] hover:border-sauge/30 hover:text-sauge transition-all duration-300">
                D&eacute;couvrir les 3 piliers
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">3x</div>
              <p className="mt-2 text-sm text-graphite">plus de d&eacute;tails dans les transmissions</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-terracotta">45 min</div>
              <p className="mt-2 text-sm text-graphite">retrouv&eacute;es par professionnel, par jour</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">Z&eacute;ro</div>
              <p className="mt-2 text-sm text-graphite">comp&eacute;tence technique requise</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 3. ILLUSTRATION ========== */}
      <section aria-label="Marcelle en situation" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-10">
            <Badge variant="sauge"><MicIcon className="w-3.5 h-3.5" /> En situation</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Un biper, un bouton, c&apos;est transmis
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">Entre deux soins, l&apos;aide-soignante appuie et parle. Marcelle fait le reste.</p>
          </div>
          <div className="lg:max-w-2xl lg:mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-lin shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="/hero-ehpad.webp"
                alt="Professionnelle utilisant le biper Marcelle en &eacute;tablissement m&eacute;dico-social"
                width={1200}
                height={1200}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4. LES 3 PILIERS (bg-ardoise) ========== */}
      <section id="piliers" aria-label="Les 3 missions de l&apos;agent IA m&eacute;dico-social Marcelle" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Les 3 piliers</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Un seul agent IA, trois missions essentielles
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Marcelle accompagne vos &eacute;quipes du matin au soir, et rassure les familles m&ecirc;me la nuit.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Transmissions */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/20 text-sauge shrink-0 mb-5">
                <MicIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Des transmissions compl&egrave;tes, sans paperasse</h3>
              <p className="text-white/50 leading-relaxed mb-6">Un biper, un bouton : les professionnels parlent &agrave; Marcelle au lieu de remplir des formulaires. L&apos;IA structure, classe et enrichit chaque transmission.</p>
              <div className="space-y-3">
                {[
                  "Parler au lieu d\u2019\u00e9crire",
                  "R\u00e9cap automatique en d\u00e9but de poste",
                  "Transmission inter-\u00e9quipes sans perte",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon className="w-4 h-4 text-sauge shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Formation */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-terracotta/20 text-terracotta shrink-0 mb-5">
                <AcademicCapIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">La formation par la vid&eacute;o, accessible &agrave; tous</h3>
              <p className="text-white/50 leading-relaxed mb-6">Vid&eacute;oth&egrave;que interne de proc&eacute;dures. Marcelle retrouve le passage exact qui r&eacute;pond &agrave; la question d&apos;un professionnel.</p>
              <div className="space-y-3">
                {[
                  "Vid\u00e9oth\u00e8que interne de proc\u00e9dures",
                  "Retrouver le moment exact en vid\u00e9o",
                  "Onboarding acc\u00e9l\u00e9r\u00e9 des nouveaux",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </BentoCard>

            {/* Familles */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/20 text-sauge shrink-0 mb-5">
                <HeartIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Le lien avec les familles, ma&icirc;tris&eacute; par l&apos;&eacute;tablissement</h3>
              <p className="text-white/50 leading-relaxed mb-6">Vous choisissez ce que les familles voient : activit&eacute;s de la semaine, moments partag&eacute;s, informations s&eacute;lectionn&eacute;es par les professionnels. Via WhatsApp ou sur une tablette sur place — c&apos;est vous qui d&eacute;cidez.</p>
              <div className="space-y-3">
                {[
                  "Vous contr\u00f4lez les informations partag\u00e9es",
                  "WhatsApp ou tablette sur place, au choix",
                  "Mise en place simple, sans risque",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckIcon className="w-4 h-4 text-sauge shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 5. COMMENT CA MARCHE (bg-cream) ========== */}
      <section id="comment" aria-label="Comment fonctionne l&apos;agent IA m&eacute;dico-social Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><CogIcon className="w-3.5 h-3.5" /> D&eacute;marrage simple</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Op&eacute;rationnel en 4 &eacute;tapes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">De la premi&egrave;re rencontre &agrave; l&apos;autonomie compl&egrave;te de vos &eacute;quipes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", icon: <BuildingIcon className="w-5 h-5" />, title: "On comprend votre \u00e9tablissement", desc: "Visite, \u00e9change avec les \u00e9quipes, analyse de vos process sp\u00e9cifiques et de vos logiciels en place." },
              { step: "2", icon: <CogIcon className="w-5 h-5" />, title: "Configuration sur mesure", desc: "Marcelle s\u2019adapte \u00e0 vos process, se connecte \u00e0 votre logiciel m\u00e9tier existant et int\u00e8gre vos proc\u00e9dures. Quel que soit votre outil, on s\u2019y adapte." },
              { step: "3", icon: <MicIcon className="w-5 h-5" />, title: "Vos \u00e9quipes parlent \u00e0 Marcelle", desc: "Formation des professionnels en 45 minutes. Chaque professionnel porte un petit biper : il appuie, il parle, c\u2019est transmis. Aucune comp\u00e9tence technique requise." },
              { step: "4", icon: <HeartIcon className="w-5 h-5" />, title: "Les familles re\u00e7oivent ce que vous choisissez", desc: "Via WhatsApp ou tablette sur place : activit\u00e9s, moments partag\u00e9s, infos s\u00e9lectionn\u00e9es par vos professionnels. Vous gardez le contr\u00f4le." },
            ].map((s, i) => (
              <BentoCard key={i} variant="white" className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/10 text-sauge shrink-0 mb-5">
                  {s.icon}
                </div>
                <p className="text-xs font-medium text-sauge uppercase tracking-wider mb-2">&Eacute;tape {s.step}</p>
                <h3 className="font-serif text-lg font-normal mb-3 text-encre">{s.title}</h3>
                <p className="text-graphite leading-relaxed text-sm">{s.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. PROBLEMES RESOLUS (bg-ardoise, bento grid) ========== */}
      <section aria-label="Probl&egrave;mes r&eacute;solus par l&apos;agent IA m&eacute;dico-social" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Le constat</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Ces situations, vous les connaissez
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Et pour chacune, Marcelle apporte une r&eacute;ponse concr&egrave;te.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Les transmissions qui passent a la trappe - col-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:col-span-2">
              <Badge variant="light">Transmissions</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Les transmissions qui passent &agrave; la trappe</h3>
              <p className="mt-3 text-white/50 leading-relaxed">En fin de journ&eacute;e, la fatigue s&apos;accumule. Les transmissions sont rapides, incompl&egrave;tes, parfois oubli&eacute;es. L&apos;&eacute;quipe suivante prend le relais sans toutes les informations.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les professionnels parlent en 2 minutes au lieu d&apos;&eacute;crire en 15. Marcelle structure tout automatiquement, rien n&apos;est oubli&eacute;.</p>
              </div>
            </BentoCard>

            {/* Le savoir qui part avec les gens - row-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:row-span-2">
              <Badge variant="light">Savoir</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Le savoir qui part avec les gens</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Quand Marie part &agrave; la retraite, 30 ans d&apos;exp&eacute;rience disparaissent avec elle. Les habitudes des r&eacute;sidents, les petites astuces, les pr&eacute;f&eacute;rences de chacun — tout est perdu.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Chaque proc&eacute;dure est film&eacute;e et index&eacute;e. Le savoir reste dans l&apos;&eacute;tablissement, accessible &agrave; tous, pour toujours.</p>
              </div>
              <div className="mt-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-sauge" />
                <div className="w-2 h-2 rounded-full bg-sauge/50" />
                <div className="w-2 h-2 rounded-full bg-sauge/25" />
              </div>
            </BentoCard>

            {/* Les familles dans le noir */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <Badge variant="light">Familles</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Les familles qui appellent sans cesse</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Les proches appellent, inquiets. L&apos;&eacute;quipe est en soin et ne peut pas r&eacute;pondre. Les appels s&apos;accumulent, la frustration aussi.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Au choix : Marcelle communique avec les familles sur WhatsApp, ou reste dans l&apos;&eacute;tablissement sur une borne. C&apos;est vous qui d&eacute;cidez du canal et du contenu.</p>
              </div>
            </BentoCard>

            {/* L'eternel recommencement */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <Badge variant="light">Onboarding</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">L&apos;&eacute;ternel recommencement</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Chaque nouveau professionnel mobilise un coll&egrave;gue senior pendant des semaines. Les m&ecirc;mes questions reviennent, encore et encore. Le turnover est &eacute;puisant.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les nouveaux regardent les vid&eacute;os de proc&eacute;dures et posent leurs questions &agrave; Marcelle. Autonomes en quelques jours au lieu de plusieurs semaines.</p>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 7. BENEFICES (bg-cream, grille 3x2) ========== */}
      <section aria-label="Les b&eacute;n&eacute;fices de l&apos;agent IA m&eacute;dico-social Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><ChartIcon className="w-3.5 h-3.5" /> R&eacute;sultats</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Des r&eacute;sultats concrets, d&egrave;s le premier mois
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { icon: <ClockIcon className="w-5 h-5" />, title: "2 min au lieu de 15", desc: "Les transmissions orales remplacent 15 minutes de saisie. Le temps retrouv\u00e9 va aux r\u00e9sidents.", variant: "sauge" as const },
              { icon: <DocumentIcon className="w-5 h-5" />, title: "3x plus de d\u00e9tails", desc: "En parlant naturellement, les professionnels livrent bien plus d\u2019informations qu\u2019en cochant des cases.", variant: "white" as const },
              { icon: <RefreshIcon className="w-5 h-5" />, title: "Z\u00e9ro perte entre \u00e9quipes", desc: "Le r\u00e9cap de d\u00e9but de poste est automatique. L\u2019\u00e9quipe de nuit sait tout ce qui s\u2019est pass\u00e9 le jour.", variant: "white" as const },
              { icon: <AcademicCapIcon className="w-5 h-5" />, title: "Formation permanente", desc: "Chaque proc\u00e9dure est accessible en vid\u00e9o. Les nouveaux apprennent \u00e0 leur rythme, sans mobiliser les anciens.", variant: "white" as const },
              { icon: <HeartIcon className="w-5 h-5" />, title: "Familles rassur\u00e9es, \u00e9quipes prot\u00e9g\u00e9es", desc: "Les proches re\u00e7oivent les infos que vous choisissez de partager. Moins d\u2019appels, plus de confiance, z\u00e9ro risque.", variant: "terracotta" as const },
              { icon: <StarIcon className="w-5 h-5" />, title: "Attractivit\u00e9 employeur", desc: "Un \u00e9tablissement qui investit dans ses outils attire plus de candidats. Marcelle est un argument de recrutement.", variant: "white" as const },
            ]).map((b, i) => (
              <BentoCard key={i} variant={b.variant} className="p-6 md:p-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                  b.variant === "sauge" ? "bg-white/20 text-white" :
                  b.variant === "terracotta" ? "bg-white/20 text-white" :
                  "bg-sauge/10 text-sauge"
                }`}>{b.icon}</div>
                <h3 className={`font-serif text-lg leading-snug ${
                  b.variant === "sauge" || b.variant === "terracotta" ? "text-white" : "text-encre"
                }`}>{b.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${
                  b.variant === "sauge" || b.variant === "terracotta" ? "text-white/80" : "text-graphite"
                }`}>{b.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TOUS LES ESMS ========== */}
      <section id="esms" aria-label="Marcelle pour tous les types d&apos;&eacute;tablissements m&eacute;dico-sociaux" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><BuildingIcon className="w-3.5 h-3.5" /> Tous les ESMS</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Un agent IA pour chaque type d&apos;&eacute;tablissement
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-2xl mx-auto">Marcelle s&apos;adapte aux sp&eacute;cificit&eacute;s de chaque structure m&eacute;dico-sociale : terminologie, cat&eacute;gories de transmission, professions et rythmes d&apos;&eacute;quipe.</p>
          </div>

          {/* Group: Personnes agees */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Personnes &acirc;g&eacute;es</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {([
                { slug: "agent-ia-ehpad", acronym: "EHPAD", label: "\u00c9tablissement d\u2019h\u00e9bergement pour personnes \u00e2g\u00e9es d\u00e9pendantes", desc: "Transmissions DAR cliniques, 15 cat\u00e9gories de suivi, \u00e9quipes matin/apr\u00e8s-midi/nuit." },
                { slug: "agent-ia-residence-autonomie", acronym: "R\u00e9sidence autonomie", label: "R\u00e9sidence pour personnes \u00e2g\u00e9es autonomes", desc: "Main courante, 8 cat\u00e9gories centr\u00e9es sur l\u2019autonomie et la vie sociale." },
                { slug: "agent-ia-usld", acronym: "USLD", label: "Unit\u00e9 de soins de longue dur\u00e9e", desc: "DAR hospitalier, 12 cat\u00e9gories m\u00e9dico-techniques, \u00e9quipes en rotation 12h." },
              ]).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <BentoCard variant="glass" className="p-6 h-full hover:border-sauge/30">
                    <p className="text-sm font-medium text-sauge mb-1">{item.acronym}</p>
                    <p className="text-xs text-white/40 mb-3">{item.label}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-sauge">
                      D&eacute;couvrir <ArrowRight className="w-3 h-3" />
                    </div>
                  </BentoCard>
                </Link>
              ))}
            </div>
          </div>

          {/* Group: Enfants et adolescents en situation de handicap */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Enfants et adolescents en situation de handicap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {([
                { slug: "agent-ia-ime", acronym: "IME", label: "Institut m\u00e9dico-\u00e9ducatif", desc: "Notes \u00e9ducatives et p\u00e9dagogiques, suivi des apprentissages." },
                { slug: "agent-ia-iem", acronym: "IEM", label: "Institut d\u2019\u00e9ducation motrice", desc: "Bilans de r\u00e9\u00e9ducation, suivi appareillage et motricit\u00e9." },
                { slug: "agent-ia-itep", acronym: "ITEP", label: "Institut th\u00e9rapeutique \u00e9ducatif et p\u00e9dagogique", desc: "Notes comportementales, gestion de crise, 3 axes." },
                { slug: "agent-ia-eeap", acronym: "EEAP", label: "\u00c9tablissement pour enfants polyhandicap\u00e9s", desc: "Soins nursing intensifs, suivi \u00e9pilepsie, stimulation." },
                { slug: "agent-ia-sessad", acronym: "SESSAD", label: "Service d\u2019\u00e9ducation sp\u00e9ciale \u00e0 domicile", desc: "CR de s\u00e9ances, observations scolaires, ambulatoire." },
                { slug: "agent-ia-camsp", acronym: "CAMSP", label: "Centre d\u2019action m\u00e9dico-sociale pr\u00e9coce", desc: "Bilans, guidance parentale, enfants 0-6 ans." },
                { slug: "agent-ia-cmpp", acronym: "CMPP", label: "Centre m\u00e9dico-psycho-p\u00e9dagogique", desc: "Consultations psy, r\u00e9\u00e9ducation orthophonique." },
              ]).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <BentoCard variant="glass" className="p-6 h-full hover:border-sauge/30">
                    <p className="text-sm font-medium text-terracotta mb-1">{item.acronym}</p>
                    <p className="text-xs text-white/40 mb-3">{item.label}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-terracotta">
                      D&eacute;couvrir <ArrowRight className="w-3 h-3" />
                    </div>
                  </BentoCard>
                </Link>
              ))}
            </div>
          </div>

          {/* Group: Adultes en situation de handicap */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Adultes en situation de handicap</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {([
                { slug: "agent-ia-mas", acronym: "MAS", label: "Maison d\u2019accueil sp\u00e9cialis\u00e9e", desc: "DAR clinique, 12 cat\u00e9gories, suivi 24/7 polyhandicap s\u00e9v\u00e8re." },
                { slug: "agent-ia-fam", acronym: "FAM", label: "Foyer d\u2019accueil m\u00e9dicalis\u00e9", desc: "DAR clinique et \u00e9ducatif, double accompagnement soins/\u00e9ducation." },
                { slug: "agent-ia-foyer-de-vie", acronym: "Foyer de vie", label: "Foyer occupationnel", desc: "Transmissions \u00e9ducatives, autonomie, activit\u00e9s et vie sociale." },
                { slug: "agent-ia-esat", acronym: "ESAT", label: "\u00c9tablissement d\u2019aide par le travail", desc: "Notes professionnelles, suivi comp\u00e9tences et production." },
                { slug: "agent-ia-fhth", acronym: "FHTH", label: "Foyer d\u2019h\u00e9bergement pour travailleurs handicap\u00e9s", desc: "Vie quotidienne, coordination ESAT, autonomie." },
              ]).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <BentoCard variant="glass" className="p-6 h-full hover:border-sauge/30">
                    <p className="text-sm font-medium text-sauge mb-1">{item.acronym}</p>
                    <p className="text-xs text-white/40 mb-3">{item.label}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-sauge">
                      D&eacute;couvrir <ArrowRight className="w-3 h-3" />
                    </div>
                  </BentoCard>
                </Link>
              ))}
            </div>
          </div>

          {/* Group: Domicile et sante mentale */}
          <div>
            <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">Domicile et sant&eacute; mentale</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {([
                { slug: "agent-ia-ssiad", acronym: "SSIAD", label: "Service de soins infirmiers \u00e0 domicile", desc: "CR de visite, cahier de liaison, tourn\u00e9es matin/soir." },
                { slug: "agent-ia-cmp", acronym: "CMP", label: "Centre m\u00e9dico-psychologique", desc: "Notes cliniques psychiatriques, consultations ambulatoires." },
                { slug: "agent-ia-cattp", acronym: "CATTP", label: "Centre d\u2019accueil th\u00e9rapeutique \u00e0 temps partiel", desc: "Notes d\u2019atelier, observations cliniques, temps partiel." },
              ]).map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}>
                  <BentoCard variant="glass" className="p-6 h-full hover:border-sauge/30">
                    <p className="text-sm font-medium text-terracotta mb-1">{item.acronym}</p>
                    <p className="text-xs text-white/40 mb-3">{item.label}</p>
                    <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-terracotta">
                      D&eacute;couvrir <ArrowRight className="w-3 h-3" />
                    </div>
                  </BentoCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== 8. CONFORMITE RGPD & IA ACT ========== */}
      <section id="conformite" aria-label="Conformit&eacute; RGPD et IA Act" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-ardoise p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
              <div className="flex-1">
                <Badge variant="light"><ShieldIcon className="w-3.5 h-3.5" /> Conformit&eacute;</Badge>
                <h2 className="mt-4 font-serif text-xl md:text-2xl leading-snug text-white">Conforme RGPD &amp; IA Act europ&eacute;en</h2>
                <p className="mt-3 text-white/50 leading-relaxed max-w-lg">Marcelle est con&ccedil;u dans le respect total de la r&eacute;glementation europ&eacute;enne. Donn&eacute;es de sant&eacute; prot&eacute;g&eacute;es, consentement natif, traitement IA transparent et document&eacute;.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HDS", "Consentement explicite", "Donn\u00e9es en Europe", "Droit \u00e0 l\u2019oubli", "IA transparente", "Conforme IA Act"].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/[0.06] text-white/70">
                    <CheckIcon className="w-3.5 h-3.5 text-sauge" />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. TEMOIGNAGES (placeholders) ========== */}
      <section aria-label="T&eacute;moignages" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="terracotta"><ChatBubbleIcon className="w-3.5 h-3.5" /> T&eacute;moignages</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Ce qu&apos;en disent les professionnels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* PLACEHOLDER TESTIMONIALS - Replace with real ones */}
            {([
              {
                quote: "Depuis Marcelle, mes aides-soignantes passent 2 minutes sur les transmissions au lieu de 15. Et les informations sont bien plus compl\u00e8tes qu\u2019avant. La configuration s\u2019est adapt\u00e9e parfaitement \u00e0 notre logiciel existant.",
                name: "Sophie M.",
                role: "Directrice d\u2019\u00e9tablissement",
                location: "\u00cele-de-France",
              },
              {
                quote: "Je retrouve en 10 secondes le passage exact d\u2019une vid\u00e9o de proc\u00e9dure. Pour la coordination m\u00e9dicale, c\u2019est un gain de temps \u00e9norme. Et la formation des \u00e9quipes a dur\u00e9 45 minutes, montre en main.",
                name: "Dr. Laurent P.",
                role: "M\u00e9decin coordonnateur",
                location: "Provence",
              },
              {
                quote: "On envoie aux familles les activit\u00e9s de la semaine et quelques nouvelles choisies par les soignants. Les appels anxieux ont diminu\u00e9 de moiti\u00e9. C\u2019est un soulagement pour tout le monde.",
                name: "Claire D.",
                role: "Cadre de sant\u00e9",
                location: "Normandie",
              },
            ]).map((t, i) => (
              <BentoCard key={i} variant="white" className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4 text-terracotta fill-terracotta" />
                  ))}
                </div>
                <p className="text-graphite leading-relaxed text-sm italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-medium text-encre">{t.name}</p>
                  <p className="text-xs text-graphite">{t.role} &middot; {t.location}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 10. FAQ ========== */}
      <section id="faq" aria-label="Questions fr&eacute;quentes sur l&apos;agent IA m&eacute;dico-social" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> FAQ</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Questions fr&eacute;quentes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">
              Tout ce que vous devez savoir sur Marcelle.
            </p>
          </div>
          <div className="space-y-4">
            {([
              {
                question: "Marcelle s\u2019int\u00e8gre-t-elle avec notre logiciel m\u00e9tier existant ?",
                answer:
                  "Oui, Marcelle est con\u00e7ue pour s\u2019adapter \u00e0 tous les logiciels m\u00e9tier du march\u00e9. La configuration est r\u00e9alis\u00e9e sur mesure pour votre \u00e9tablissement : vos process, vos formulaires, vos habitudes. Les transmissions vocales remontent automatiquement dans votre outil existant, sans double saisie.",
              },
              {
                question: "Concr\u00e8tement, comment un professionnel utilise Marcelle ?",
                answer:
                  "Le professionnel \u2014 aide-soignant, \u00e9ducateur, moniteur \u2014 porte un petit biper. Entre deux accompagnements, il appuie et parle : \u00ab Mme Dupont a bien mang\u00e9 ce midi, elle a march\u00e9 10 minutes dans le couloir, elle \u00e9tait de bonne humeur. \u00bb Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier.",
              },
              {
                question: "Les donn\u00e9es de sant\u00e9 sont-elles s\u00e9curis\u00e9es ?",
                answer:
                  "Absolument. Marcelle est h\u00e9berg\u00e9e sur des serveurs certifi\u00e9s HDS (H\u00e9bergeur de Donn\u00e9es de Sant\u00e9) en Europe. Toutes les donn\u00e9es sont chiffr\u00e9es, le consentement est explicite, et nous sommes conformes RGPD et IA Act.",
              },
              {
                question: "Combien de temps pour d\u00e9ployer Marcelle dans un \u00e9tablissement ?",
                answer:
                  "Le d\u00e9ploiement complet prend 2 \u00e0 4 semaines : une semaine de configuration sur mesure (adaptation \u00e0 vos process, connexion \u00e0 votre logiciel m\u00e9tier), une semaine de formation des \u00e9quipes, puis un accompagnement au d\u00e9marrage. La formation des professionnels dure 45 minutes. Les \u00e9quipes sont autonomes d\u00e8s la fin du premier mois.",
              },
              {
                question: "Et si les \u00e9quipes ne sont pas \u00e0 l\u2019aise avec la technologie ?",
                answer:
                  "C\u2019est justement la force de Marcelle : un biper, un bouton, on parle. Pas d\u2019\u00e9cran complexe, pas de formulaire \u00e0 remplir, pas d\u2019application \u00e0 t\u00e9l\u00e9charger. Si vous savez parler, vous savez utiliser Marcelle. La formation dure 45 minutes et les \u00e9quipes sont autonomes imm\u00e9diatement.",
              },
              {
                question: "Combien co\u00fbte Marcelle ?",
                answer:
                  "Le tarif d\u00e9pend de la taille de l\u2019\u00e9tablissement et des modules activ\u00e9s. Demandez une d\u00e9mo pour obtenir un devis personnalis\u00e9. Le retour sur investissement est g\u00e9n\u00e9ralement visible d\u00e8s le premier mois gr\u00e2ce au temps gagn\u00e9 sur les transmissions.",
              },
            ]).map((item, i) => (
              <details
                key={i}
                className="group border border-lin rounded-2xl overflow-hidden transition-all duration-300 hover:border-sauge/30 bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 text-left">
                  <h3 className="font-serif text-base md:text-lg leading-snug pr-4 text-encre">
                    {item.question}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-sauge/10 flex items-center justify-center text-sauge transition-transform duration-300 group-open:rotate-45">
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
                  <p className="text-graphite leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 11. CTA FINAL ========== */}
      <section id="demo" aria-label="Demander une d&eacute;monstration de l&apos;agent IA m&eacute;dico-social" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <BentoCard variant="white" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sauge/5 via-transparent to-terracotta/10 pointer-events-none" />
            <div className="relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 text-center">
              <Badge variant="sauge">Passez &agrave; l&apos;action</Badge>
              <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] text-encre">
                Simplifiez le quotidien<br className="hidden md:block" /> de vos &eacute;quipes
              </h2>
              <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto leading-relaxed">D&eacute;couvrez comment Marcelle peut transformer les transmissions et la formation dans votre &eacute;tablissement — et rassurer les familles, sans risque. Configuration sur mesure, compatible avec tous vos logiciels. D&eacute;monstration personnalis&eacute;e en 30&nbsp;minutes.</p>
              <div className="mt-10">
                <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-8 py-4 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                  Demander une d&eacute;mo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </DemoTrigger>
              </div>
              <p className="mt-6 text-xs text-graphite">Sans engagement — D&eacute;ploiement en 2 &agrave; 4 semaines</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ========== 12. FOOTER (bg-ardoise) ========== */}
      <footer aria-label="Pied de page Marcelle" className="bg-ardoise border-t border-white/[0.06] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Image src="/logo-marcelle-white.png" alt="Marcelle AI" width={140} height={39} />
              <p className="mt-3 text-sm text-white/30 max-w-md">L&apos;agent IA m&eacute;dico-social configur&eacute; sur mesure. Transmissions, formation vid&eacute;o et lien familles — le quotidien des professionnels, simplifi&eacute;.</p>
            </div>
            <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-6 text-sm text-white/40">
              <a href="#piliers" className="hover:text-white/70 transition-colors">Les 3 piliers</a>
              <a href="#comment" className="hover:text-white/70 transition-colors">Comment &ccedil;a marche</a>
              <a href="#esms" className="hover:text-white/70 transition-colors">Tous les ESMS</a>
              <a href="#conformite" className="hover:text-white/70 transition-colors">Conformit&eacute;</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
              <a href="#demo" className="hover:text-white/70 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Marcelle. Tous droits r&eacute;serv&eacute;s.</p>
            <div className="flex gap-4">
              <Link href="/confidentialite" className="text-xs text-white/20 hover:text-white/50 transition-colors">Confidentialit&eacute;</Link>
              <Link href="/cgv" className="text-xs text-white/20 hover:text-white/50 transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
