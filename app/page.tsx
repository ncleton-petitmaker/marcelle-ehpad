import Link from "next/link";
import { VideoPlayer } from "./VideoPlayer";
import { DemoTrigger } from "./DemoButton";

/* ------------------------------------------------------------------ */
/*  ICON COMPONENTS                                                    */
/* ------------------------------------------------------------------ */

function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function MicIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    </svg>
  );
}

function PlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
  );
}

function HeartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function SparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function ChartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function DocumentIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function AcademicCapIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

function ChatBubbleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function CogIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function BuildingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
  );
}

function RefreshIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REUSABLE SUB-COMPONENTS                                            */
/* ------------------------------------------------------------------ */

function Badge({ children, variant = "sauge" }: { children: React.ReactNode; variant?: "sauge" | "terracotta" | "light" | "cream" }) {
  const styles = {
    sauge: "bg-sauge/10 text-sauge",
    terracotta: "bg-terracotta/10 text-terracotta",
    light: "bg-white/[0.08] text-white",
    cream: "bg-cream text-encre",
  };
  return <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>{children}</span>;
}

function BentoCard({ children, className = "", variant = "white" }: { children: React.ReactNode; className?: string; variant?: "white" | "cream" | "glass" | "sauge" | "terracotta" }) {
  const base = "rounded-3xl transition-all duration-300 overflow-hidden";
  const styles = {
    white: "bg-white text-encre border border-lin hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
    cream: "bg-cream text-encre border border-lin hover:-translate-y-0.5",
    glass: "bg-white/[0.04] text-white border border-white/[0.08] backdrop-blur-xl hover:-translate-y-0.5",
    sauge: "bg-sauge text-white hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(91,140,111,0.15)]",
    terracotta: "bg-terracotta text-white hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(193,123,90,0.15)]",
  };
  return <div className={`${base} ${styles[variant]} ${className}`}>{children}</div>;
}

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
      "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation vidéo et maintient le lien avec les familles. Configuration sur mesure, compatible avec tous les logiciels de soins. Conforme RGPD et IA Act.",
    url: "https://srv756238.hstgr.cloud",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Agent IA EHPAD pour transmissions vocales",
      "Formation vidéo avec recherche IA",
      "Lien familles automatisé",
      "Compatible avec tous les logiciels de soins",
      "Configuration sur mesure pour chaque établissement",
      "Conforme RGPD et IA Act",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Marcelle s'intègre-t-elle avec notre logiciel de soins existant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, Marcelle est conçue pour s'adapter à tous les logiciels de soins du marché. La configuration est réalisée sur mesure pour votre établissement, vos process et vos outils existants. Les transmissions vocales remontent automatiquement dans votre logiciel, sans double saisie.",
        },
      },
      {
        "@type": "Question",
        name: "Concrètement, comment une aide-soignante utilise Marcelle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'aide-soignante porte un petit biper. Entre deux soins, elle appuie et parle : « Mme Dupont a bien mangé ce midi, elle a marché 10 minutes dans le couloir, elle était de bonne humeur. » Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier du résident.",
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
        name: "Combien de temps pour déployer Marcelle dans un EHPAD ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le déploiement complet prend 2 à 4 semaines : une semaine de configuration sur mesure (adaptation à vos process, connexion à votre logiciel de soins), une semaine de formation des équipes, puis un accompagnement au démarrage. La formation des soignants dure 45 minutes. Les équipes sont autonomes dès la fin du premier mois.",
        },
      },
      {
        "@type": "Question",
        name: "Et si les soignants ne sont pas à l'aise avec la technologie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est justement la force de Marcelle : un biper, un bouton, on parle. Pas d'écran complexe, pas de formulaire à remplir, pas d'application à télécharger. Si vous savez parler, vous savez utiliser Marcelle. La formation dure 45 minutes et les soignants sont autonomes immédiatement.",
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
    <div className="min-h-screen bg-cream text-encre font-sans selection:bg-sauge/20 selection:text-encre">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ========== 1. NAVIGATION ========== */}
      <nav aria-label="Navigation principale" className="fixed top-0 inset-x-0 z-50 h-[72px] backdrop-blur-xl bg-cream/90 border-b border-lin">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-sauge flex items-center justify-center">
              <span className="font-serif text-white text-lg leading-none mt-[-1px]">M</span>
            </div>
            <span className="font-serif text-xl tracking-tight text-encre">Marcelle</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#piliers" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Les 3 piliers</a>
            <a href="#comment" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Comment ça marche</a>
            <a href="#conformite" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Conformité</a>
            <a href="#faq" className="text-sm text-graphite hover:text-encre transition-colors duration-200">FAQ</a>
          </div>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300 cursor-pointer">
            Demander une démo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </nav>

      {/* ========== 2. HERO (bg-cream) ========== */}
      <section aria-label="Marcelle - Agent IA EHPAD" className="relative pt-[72px] min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sauge/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> Agent IA EHPAD</Badge>
              <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
            </div>
            <h1 className="font-serif font-normal leading-[1.05] tracking-tight text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-encre">
              L&apos;agent IA EHPAD qui prend soin
              <br />
              <span className="text-sauge">de vos équipes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl mx-auto leading-relaxed">
              Marcelle aide les soignants à transmettre et se former. Elle informe les familles selon vos règles. Configurée sur mesure pour votre établissement et vos logiciels.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                Demander une démo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </DemoTrigger>
              <a href="#piliers" className="inline-flex items-center gap-2 border border-lin text-encre px-7 py-3.5 rounded-xl font-medium text-[15px] hover:border-sauge/30 hover:text-sauge transition-all duration-300">
                Découvrir les 3 piliers
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">3x</div>
              <p className="mt-2 text-sm text-graphite">plus de détails dans les transmissions</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-terracotta">45 min</div>
              <p className="mt-2 text-sm text-graphite">retrouvées par soignant, par jour</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">Zéro</div>
              <p className="mt-2 text-sm text-graphite">compétence technique requise</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 3. VIDEO DEMO ========== */}
      <section aria-label="Démonstration vidéo de l'agent IA EHPAD Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-10">
            <Badge variant="sauge"><PlayIcon className="w-3.5 h-3.5" /> Découvrir Marcelle</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Marcelle en 90 secondes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">Découvrez comment cet agent IA EHPAD transforme le quotidien des soignants.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-lin shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <VideoPlayer playbackId="TGgf3vbYq3MrFukxQ8aV00uMYtApobtcKcQPhTo1icB00" />
          </div>
        </div>
      </section>

      {/* ========== 4. LES 3 PILIERS (bg-ardoise) ========== */}
      <section id="piliers" aria-label="Les 3 missions de l'agent IA EHPAD Marcelle" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Les 3 piliers</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Un seul agent IA, trois missions essentielles
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Marcelle accompagne vos équipes du matin au soir, et rassure les familles même la nuit.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Transmissions */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/20 text-sauge shrink-0 mb-5">
                <MicIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Des transmissions complètes, sans paperasse</h3>
              <p className="text-white/50 leading-relaxed mb-6">Un biper, un bouton : les soignants parlent à Marcelle au lieu de remplir des formulaires. L&apos;IA structure, classe et enrichit chaque transmission.</p>
              <div className="space-y-3">
                {[
                  "Parler au lieu d'écrire",
                  "Récap automatique en début de poste",
                  "Transmission inter-équipes sans perte",
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
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">La formation par la vidéo, accessible à tous</h3>
              <p className="text-white/50 leading-relaxed mb-6">Vidéothèque interne de procédures. Marcelle retrouve le passage exact qui répond à la question d&apos;un soignant.</p>
              <div className="space-y-3">
                {[
                  "Vidéothèque interne de procédures",
                  "Retrouver le moment exact en vidéo",
                  "Onboarding accéléré des nouveaux",
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
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Le lien avec les familles, maîtrisé par l&apos;établissement</h3>
              <p className="text-white/50 leading-relaxed mb-6">Vous choisissez ce que les familles voient : activités de la semaine, moments partagés, informations sélectionnées par les soignants. Via WhatsApp ou sur une tablette sur place — c&apos;est vous qui décidez.</p>
              <div className="space-y-3">
                {[
                  "Vous contrôlez les informations partagées",
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

      {/* ========== 5. COMMENT ÇA MARCHE (bg-cream) ========== */}
      <section id="comment" aria-label="Comment fonctionne l'agent IA EHPAD Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><CogIcon className="w-3.5 h-3.5" /> Démarrage simple</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Opérationnel en 4 étapes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">De la première rencontre à l&apos;autonomie complète de vos équipes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", icon: <BuildingIcon className="w-5 h-5" />, title: "On comprend votre établissement", desc: "Visite, échange avec les équipes, analyse de vos process spécifiques et de vos logiciels en place." },
              { step: "2", icon: <CogIcon className="w-5 h-5" />, title: "Configuration sur mesure", desc: "Marcelle s'adapte à vos process, se connecte à votre logiciel de soins existant et intègre vos procédures. Quel que soit votre outil, on s'y adapte." },
              { step: "3", icon: <MicIcon className="w-5 h-5" />, title: "Vos équipes parlent à Marcelle", desc: "Formation des soignants en 45 minutes. Chaque soignant porte un petit biper : il appuie, il parle, c'est transmis. Aucune compétence technique requise." },
              { step: "4", icon: <HeartIcon className="w-5 h-5" />, title: "Les familles reçoivent ce que vous choisissez", desc: "Via WhatsApp ou tablette sur place : activités, moments partagés, infos sélectionnées par vos soignants. Vous gardez le contrôle." },
            ].map((s, i) => (
              <BentoCard key={i} variant="white" className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/10 text-sauge shrink-0 mb-5">
                  {s.icon}
                </div>
                <p className="text-xs font-medium text-sauge uppercase tracking-wider mb-2">Étape {s.step}</p>
                <h3 className="font-serif text-lg font-normal mb-3 text-encre">{s.title}</h3>
                <p className="text-graphite leading-relaxed text-sm">{s.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. PROBLÈMES RÉSOLUS (bg-ardoise, bento grid) ========== */}
      <section aria-label="Problèmes résolus par l'agent IA EHPAD" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Le constat</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Ces situations, vous les connaissez
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Et pour chacune, Marcelle apporte une réponse concrète.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Les transmissions bâclées - col-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:col-span-2">
              <Badge variant="light">Transmissions</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Les transmissions bâclées</h3>
              <p className="mt-3 text-white/50 leading-relaxed">En fin de journée, la fatigue s&apos;accumule. Les transmissions sont rapides, incomplètes, parfois oubliées. L&apos;équipe suivante prend le relais sans toutes les informations.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les soignants parlent en 2 minutes au lieu d&apos;écrire en 15. Marcelle structure tout automatiquement, rien n&apos;est oublié.</p>
              </div>
            </BentoCard>

            {/* Le savoir qui part avec les gens - row-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:row-span-2">
              <Badge variant="light">Savoir</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Le savoir qui part avec les gens</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Quand Marie part à la retraite, 30 ans d&apos;expérience disparaissent avec elle. Les habitudes des résidents, les petites astuces, les préférences de chacun — tout est perdu.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Chaque procédure est filmée et indexée. Le savoir reste dans l&apos;établissement, accessible à tous, pour toujours.</p>
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
              <p className="mt-3 text-white/50 leading-relaxed">Les proches appellent, inquiets. L&apos;équipe est en soin et ne peut pas répondre. Les appels s&apos;accumulent, la frustration aussi.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Au choix : Marcelle communique avec les familles sur WhatsApp, ou reste dans l&apos;établissement sur une borne. C&apos;est vous qui décidez du canal et du contenu.</p>
              </div>
            </BentoCard>

            {/* L'éternel recommencement */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <Badge variant="light">Onboarding</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">L&apos;éternel recommencement</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Chaque nouveau soignant mobilise un collègue senior pendant des semaines. Les mêmes questions reviennent, encore et encore. Le turnover est épuisant.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les nouveaux regardent les vidéos de procédures et posent leurs questions à Marcelle. Autonomes en quelques jours au lieu de plusieurs semaines.</p>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 7. BÉNÉFICES (bg-cream, grille 3x2) ========== */}
      <section aria-label="Les bénéfices de l'agent IA EHPAD Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><ChartIcon className="w-3.5 h-3.5" /> Résultats</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Des résultats concrets, dès le premier mois
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { icon: <ClockIcon className="w-5 h-5" />, title: "2 min au lieu de 15", desc: "Les transmissions orales remplacent 15 minutes de saisie. Le temps retrouvé va aux résidents.", variant: "sauge" as const },
              { icon: <DocumentIcon className="w-5 h-5" />, title: "3x plus de détails", desc: "En parlant naturellement, les soignants livrent bien plus d'informations qu'en cochant des cases.", variant: "white" as const },
              { icon: <RefreshIcon className="w-5 h-5" />, title: "Zéro perte entre équipes", desc: "Le récap de début de poste est automatique. L'équipe de nuit sait tout ce qui s'est passé le jour.", variant: "white" as const },
              { icon: <AcademicCapIcon className="w-5 h-5" />, title: "Formation permanente", desc: "Chaque procédure est accessible en vidéo. Les nouveaux apprennent à leur rythme, sans mobiliser les anciens.", variant: "white" as const },
              { icon: <HeartIcon className="w-5 h-5" />, title: "Familles rassurées, équipes protégées", desc: "Les proches reçoivent les infos que vous choisissez de partager. Moins d'appels, plus de confiance, zéro risque.", variant: "terracotta" as const },
              { icon: <StarIcon className="w-5 h-5" />, title: "Attractivité employeur", desc: "Un EHPAD qui investit dans ses outils attire plus de candidats. Marcelle est un argument de recrutement.", variant: "white" as const },
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

      {/* ========== 8. CONFORMITÉ RGPD & IA ACT ========== */}
      <section id="conformite" aria-label="Conformité RGPD et IA Act" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-ardoise p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
              <div className="flex-1">
                <Badge variant="light"><ShieldIcon className="w-3.5 h-3.5" /> Conformité</Badge>
                <h3 className="mt-4 font-serif text-xl md:text-2xl leading-snug text-white">Conforme RGPD &amp; IA Act européen</h3>
                <p className="mt-3 text-white/50 leading-relaxed max-w-lg">Marcelle est conçu dans le respect total de la réglementation européenne. Données de santé protégées, consentement natif, traitement IA transparent et documenté.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HDS", "Consentement explicite", "Données en Europe", "Droit à l'oubli", "IA transparente", "Conforme IA Act"].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/[0.06] text-white/70">
                    <CheckIcon className="w-3.5 h-3.5 text-sauge" />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 9. TÉMOIGNAGES (placeholders) ========== */}
      <section aria-label="Témoignages" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="terracotta"><ChatBubbleIcon className="w-3.5 h-3.5" /> Témoignages</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Ce qu&apos;en disent les professionnels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* PLACEHOLDER TESTIMONIALS - Replace with real ones */}
            {([
              {
                quote: "Depuis Marcelle, mes aides-soignantes passent 2 minutes sur les transmissions au lieu de 15. Et les informations sont bien plus complètes qu'avant. La configuration s'est adaptée parfaitement à notre logiciel existant.",
                name: "Sophie M.",
                role: "Directrice d'EHPAD",
                location: "Île-de-France",
              },
              {
                quote: "Je retrouve en 10 secondes le passage exact d'une vidéo de procédure. Pour la coordination médicale, c'est un gain de temps énorme. Et la formation des équipes a duré 45 minutes, montre en main.",
                name: "Dr. Laurent P.",
                role: "Médecin coordonnateur",
                location: "Provence",
              },
              {
                quote: "On envoie aux familles les activités de la semaine et quelques nouvelles choisies par les soignants. Les appels anxieux ont diminué de moitié. C'est un soulagement pour tout le monde.",
                name: "Claire D.",
                role: "Cadre de santé",
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

      {/* ========== 10. FAQ (6 questions EHPAD) ========== */}
      <section id="faq" aria-label="Questions fréquentes sur l'agent IA EHPAD" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> FAQ</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">
              Tout ce que vous devez savoir sur l&apos;agent IA EHPAD Marcelle.
            </p>
          </div>
          <div className="space-y-4">
            {([
              {
                question: "Marcelle s'intègre-t-elle avec notre logiciel de soins existant ?",
                answer:
                  "Oui, Marcelle est conçue pour s'adapter à tous les logiciels de soins du marché. La configuration est réalisée sur mesure pour votre établissement : vos process, vos formulaires, vos habitudes. Les transmissions vocales remontent automatiquement dans votre outil existant, sans double saisie.",
              },
              {
                question: "Concrètement, comment une aide-soignante utilise Marcelle ?",
                answer:
                  "L'aide-soignante porte un petit biper. Entre deux soins, elle appuie et parle : « Mme Dupont a bien mangé ce midi, elle a marché 10 minutes dans le couloir, elle était de bonne humeur. » Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier du résident.",
              },
              {
                question: "Les données de santé sont-elles sécurisées ?",
                answer:
                  "Absolument. Marcelle est hébergée sur des serveurs certifiés HDS (Hébergeur de Données de Santé) en Europe. Toutes les données sont chiffrées, le consentement est explicite, et nous sommes conformes RGPD et IA Act.",
              },
              {
                question: "Combien de temps pour déployer Marcelle dans un EHPAD ?",
                answer:
                  "Le déploiement complet prend 2 à 4 semaines : une semaine de configuration sur mesure (adaptation à vos process, connexion à votre logiciel de soins), une semaine de formation des équipes, puis un accompagnement au démarrage. La formation des soignants dure 45 minutes. Les équipes sont autonomes dès la fin du premier mois.",
              },
              {
                question: "Et si les soignants ne sont pas à l'aise avec la technologie ?",
                answer:
                  "C'est justement la force de Marcelle : un biper, un bouton, on parle. Pas d'écran complexe, pas de formulaire à remplir, pas d'application à télécharger. Si vous savez parler, vous savez utiliser Marcelle. La formation dure 45 minutes et les soignants sont autonomes immédiatement.",
              },
              {
                question: "Combien coûte Marcelle ?",
                answer:
                  "Le tarif dépend de la taille de l'établissement et des modules activés. Demandez une démo pour obtenir un devis personnalisé. Le retour sur investissement est généralement visible dès le premier mois grâce au temps gagné sur les transmissions.",
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
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
      <section id="demo" aria-label="Demander une démonstration de l'agent IA EHPAD" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <BentoCard variant="white" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sauge/5 via-transparent to-terracotta/10 pointer-events-none" />
            <div className="relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 text-center">
              <Badge variant="sauge">Passez à l&apos;action</Badge>
              <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] text-encre">
                Simplifiez le quotidien<br className="hidden md:block" /> de vos équipes
              </h2>
              <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto leading-relaxed">Découvrez comment Marcelle peut transformer les transmissions et la formation dans votre établissement — et rassurer les familles, sans risque. Configuration sur mesure, compatible avec tous vos logiciels. Démonstration personnalisée en 30&nbsp;minutes.</p>
              <div className="mt-10">
                <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-8 py-4 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                  Demander une démo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </DemoTrigger>
              </div>
              <p className="mt-6 text-xs text-graphite">Sans engagement — Déploiement en 2 à 4 semaines</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ========== 12. FOOTER (bg-ardoise) ========== */}
      <footer aria-label="Pied de page Marcelle" className="bg-ardoise border-t border-white/[0.06] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-sauge flex items-center justify-center">
                  <span className="font-serif text-white text-lg leading-none mt-[-1px]">M</span>
                </div>
                <span className="font-serif text-lg tracking-tight text-white">Marcelle</span>
              </div>
              <p className="mt-3 text-sm text-white/30 max-w-md">L&apos;agent IA EHPAD configuré sur mesure. Transmissions, formation vidéo et lien familles — le quotidien des soignants, simplifié.</p>
            </div>
            <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-6 text-sm text-white/40">
              <a href="#piliers" className="hover:text-white/70 transition-colors">Les 3 piliers</a>
              <a href="#comment" className="hover:text-white/70 transition-colors">Comment ça marche</a>
              <a href="#conformite" className="hover:text-white/70 transition-colors">Conformité</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
              <a href="#demo" className="hover:text-white/70 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Marcelle. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/confidentialite" className="text-xs text-white/20 hover:text-white/50 transition-colors">Confidentialité</Link>
              <Link href="/cgv" className="text-xs text-white/20 hover:text-white/50 transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
