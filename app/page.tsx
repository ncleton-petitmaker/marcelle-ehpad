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
      "Marcelle est l'assistante IA pour EHPAD qui simplifie les transmissions soignantes, centralise la formation video et maintient le lien avec les familles. Conforme RGPD et IA Act.",
    url: "https://srv756238.hstgr.cloud",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Transmissions vocales pour soignants",
      "Formation video avec recherche IA",
      "Lien familles automatise",
      "Conforme RGPD et IA Act",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Marcelle s'integre-t-elle avec notre logiciel de soins existant ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Marcelle se connecte aux principaux logiciels de soins du marche (NetSoins, Titan, Livia, etc.) via API. Les transmissions vocales remontent automatiquement dans votre outil existant, sans double saisie.",
        },
      },
      {
        "@type": "Question",
        name: "Concretement, comment une aide-soignante utilise Marcelle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En fin de tournee, l'aide-soignante parle a Marcelle comme a une collegue : 'Mme Dupont a bien mange ce midi, elle a marche 10 minutes dans le couloir, elle etait de bonne humeur.' Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier du resident.",
        },
      },
      {
        "@type": "Question",
        name: "Les donnees de sante sont-elles securisees ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Marcelle est hebergee sur des serveurs certifies HDS (Hebergeur de Donnees de Sante) en Europe. Toutes les donnees sont chiffrees, le consentement est explicite, et nous sommes conformes RGPD et IA Act.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps pour deployer Marcelle dans un EHPAD ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le deploiement complet prend 2 a 4 semaines : une semaine de configuration, une semaine de formation des equipes, puis un accompagnement au demarrage. Les equipes sont autonomes des la fin du premier mois.",
        },
      },
      {
        "@type": "Question",
        name: "Et si les soignants ne sont pas a l'aise avec la technologie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est justement la force de Marcelle : il suffit de parler. Pas d'ecran complexe, pas de formulaire a remplir, pas d'application a telecharger. Si vous savez parler, vous savez utiliser Marcelle.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coute Marcelle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif depend de la taille de l'etablissement et des modules actives. Demandez une demo pour obtenir un devis personnalise. Le retour sur investissement est generalement visible des le premier mois grace au temps gagne sur les transmissions.",
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
            <a href="#comment" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Comment ca marche</a>
            <a href="#conformite" className="text-sm text-graphite hover:text-encre transition-colors duration-200">Conformite</a>
            <a href="#faq" className="text-sm text-graphite hover:text-encre transition-colors duration-200">FAQ</a>
          </div>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-sauge-deep transition-all duration-300 cursor-pointer">
            Demander une demo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </nav>

      {/* ========== 2. HERO (bg-cream) ========== */}
      <section aria-label="Marcelle - IA pour EHPAD" className="relative pt-[72px] min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sauge/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> IA pour EHPAD</Badge>
              <Badge variant="terracotta"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
            </div>
            <h1 className="font-serif font-normal leading-[1.05] tracking-tight text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] text-encre">
              L&apos;assistante IA qui prend soin
              <br />
              <span className="text-sauge">de vos equipes</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-graphite max-w-2xl mx-auto leading-relaxed">
              Marcelle aide les soignants a transmettre, se former et communiquer avec les familles.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </DemoTrigger>
              <a href="#piliers" className="inline-flex items-center gap-2 border border-lin text-encre px-7 py-3.5 rounded-xl font-medium text-[15px] hover:border-sauge/30 hover:text-sauge transition-all duration-300">
                Decouvrir les 3 piliers
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">3x</div>
              <p className="mt-2 text-sm text-graphite">plus de details dans les transmissions</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-terracotta">-40%</div>
              <p className="mt-2 text-sm text-graphite">de paperasse pour les soignants</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-serif text-sauge">100%</div>
              <p className="mt-2 text-sm text-graphite">des familles informees en continu</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 3. VIDEO DEMO ========== */}
      <section aria-label="Demonstration video de Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-10">
            <Badge variant="sauge"><PlayIcon className="w-3.5 h-3.5" /> Decouvrir Marcelle</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Marcelle en 90 secondes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">Decouvrez comment Marcelle transforme le quotidien en EHPAD.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-lin shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <VideoPlayer playbackId="TGgf3vbYq3MrFukxQ8aV00uMYtApobtcKcQPhTo1icB00" />
          </div>
        </div>
      </section>

      {/* ========== 4. LES 3 PILIERS (bg-ardoise) ========== */}
      <section id="piliers" aria-label="Les 3 missions de Marcelle" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Les 3 piliers</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Une seule IA, trois missions essentielles
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Marcelle accompagne vos equipes du matin au soir, et rassure les familles meme la nuit.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Transmissions */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/20 text-sauge shrink-0 mb-5">
                <MicIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Des transmissions completes, sans paperasse</h3>
              <p className="text-white/50 leading-relaxed mb-6">Les soignants parlent a Marcelle au lieu de remplir des formulaires. L&apos;IA structure, classe et enrichit chaque transmission.</p>
              <div className="space-y-3">
                {[
                  "Parler au lieu d'ecrire",
                  "Recap automatique en debut de poste",
                  "Transmission inter-equipes sans perte",
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
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">La formation par la video, accessible a tous</h3>
              <p className="text-white/50 leading-relaxed mb-6">Videotheque interne de procedures. Marcelle retrouve le passage exact qui repond a la question d&apos;un soignant.</p>
              <div className="space-y-3">
                {[
                  "Videotheque interne de procedures",
                  "Retrouver le moment exact en video",
                  "Onboarding accelere des nouveaux",
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
              <h3 className="font-serif text-xl md:text-2xl leading-snug text-white mb-3">Le lien avec les familles, enfin simple</h3>
              <p className="text-white/50 leading-relaxed mb-6">Les proches interrogent Marcelle pour savoir comment se passe la journee de leur parent. Plus d&apos;inquietude silencieuse.</p>
              <div className="space-y-3">
                {[
                  "Interlocuteur disponible 24h/24",
                  "Partager les beaux moments",
                  "Demandes et incidents traces",
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
      <section id="comment" aria-label="Comment fonctionne Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><CogIcon className="w-3.5 h-3.5" /> Demarrage simple</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Operationnel en 4 etapes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">De la premiere rencontre a l&apos;autonomie complete de vos equipes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", icon: <BuildingIcon className="w-5 h-5" />, title: "On comprend votre etablissement", desc: "Visite, echange avec les equipes, analyse des besoins specifiques de votre EHPAD." },
              { step: "2", icon: <CogIcon className="w-5 h-5" />, title: "On configure Marcelle", desc: "Integration avec votre logiciel de soins, import des procedures, parametrage des acces familles." },
              { step: "3", icon: <MicIcon className="w-5 h-5" />, title: "Vos equipes parlent a Marcelle", desc: "Formation des soignants en une demi-journee. Ils parlent, Marcelle fait le reste." },
              { step: "4", icon: <HeartIcon className="w-5 h-5" />, title: "Les familles sont informees", desc: "Les proches accedent a Marcelle et posent leurs questions en toute serenite." },
            ].map((s, i) => (
              <BentoCard key={i} variant="white" className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sauge/10 text-sauge shrink-0 mb-5">
                  {s.icon}
                </div>
                <p className="text-xs font-medium text-sauge uppercase tracking-wider mb-2">Etape {s.step}</p>
                <h3 className="font-serif text-lg font-normal mb-3 text-encre">{s.title}</h3>
                <p className="text-graphite leading-relaxed text-sm">{s.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6. PROBLEMES RESOLUS (bg-ardoise, bento grid) ========== */}
      <section aria-label="Problemes resolus par Marcelle" className="py-12 md:py-20 lg:py-28 bg-ardoise">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light"><SparklesIcon className="w-3.5 h-3.5" /> Le constat</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-white">
              Ces situations, vous les connaissez
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Et pour chacune, Marcelle apporte une reponse concrete.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Les transmissions baclees - col-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:col-span-2">
              <Badge variant="light">Transmissions</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Les transmissions baclees</h3>
              <p className="mt-3 text-white/50 leading-relaxed">En fin de shift, la fatigue s&apos;accumule. Les transmissions sont rapides, incompletes, parfois oubliees. L&apos;equipe de nuit prend le relais sans toutes les informations.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les soignants parlent en 2 minutes au lieu d&apos;ecrire en 15. Marcelle structure tout automatiquement, rien n&apos;est oublie.</p>
              </div>
            </BentoCard>

            {/* Le savoir qui part avec les gens - row-span-2 */}
            <BentoCard variant="glass" className="p-8 md:p-10 lg:row-span-2">
              <Badge variant="light">Savoir</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Le savoir qui part avec les gens</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Quand Marie part a la retraite, 30 ans d&apos;experience disparaissent avec elle. Les habitudes des residents, les petites astuces, les preferences de chacun -- tout est perdu.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-sauge mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Chaque procedure est filmee et indexee. Le savoir reste dans l&apos;etablissement, accessible a tous, pour toujours.</p>
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
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">Les familles dans le noir</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Les proches appellent, inquiets. L&apos;equipe est en soin et ne peut pas repondre. L&apos;anxiete monte des deux cotes.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les familles interrogent Marcelle a tout moment. Elles savent comment va leur proche, sans deranger les equipes.</p>
              </div>
            </BentoCard>

            {/* L'eternel recommencement */}
            <BentoCard variant="glass" className="p-8 md:p-10">
              <Badge variant="light">Onboarding</Badge>
              <h3 className="mt-5 font-serif text-xl md:text-2xl leading-snug text-white">L&apos;eternel recommencement</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Chaque nouveau soignant mobilise un collegue senior pendant des semaines. Les memes questions reviennent, encore et encore. Le turnover est epuisant.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-terracotta mb-1">Avec Marcelle</p>
                <p className="text-sm text-white/70">Les nouveaux regardent les videos de procedures et posent leurs questions a Marcelle. Autonomes en quelques jours au lieu de plusieurs semaines.</p>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== 7. BENEFICES (bg-cream, grille 3x2) ========== */}
      <section aria-label="Les benefices de Marcelle" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><ChartIcon className="w-3.5 h-3.5" /> Resultats</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Des resultats concrets, des le premier mois
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { icon: <ClockIcon className="w-5 h-5" />, title: "2 min au lieu de 15", desc: "Les transmissions orales remplacent 15 minutes de saisie. Le temps retrouve va aux residents.", variant: "sauge" as const },
              { icon: <DocumentIcon className="w-5 h-5" />, title: "3x plus de details", desc: "En parlant naturellement, les soignants livrent bien plus d'informations qu'en cochant des cases.", variant: "white" as const },
              { icon: <RefreshIcon className="w-5 h-5" />, title: "Zero perte entre equipes", desc: "Le recap de debut de poste est automatique. L'equipe de nuit sait tout ce qui s'est passe le jour.", variant: "white" as const },
              { icon: <AcademicCapIcon className="w-5 h-5" />, title: "Formation permanente", desc: "Chaque procedure est accessible en video. Les nouveaux apprennent a leur rythme, sans mobiliser les anciens.", variant: "white" as const },
              { icon: <HeartIcon className="w-5 h-5" />, title: "Familles rassurees", desc: "Les proches savent comment va leur parent a tout moment. Moins d'appels anxieux, plus de confiance.", variant: "terracotta" as const },
              { icon: <StarIcon className="w-5 h-5" />, title: "Attractivite employeur", desc: "Un EHPAD qui investit dans ses outils attire plus de candidats. Marcelle est un argument de recrutement.", variant: "white" as const },
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

      {/* ========== 8. CONFORMITE RGPD & IA ACT ========== */}
      <section id="conformite" aria-label="Conformite RGPD et IA Act" className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-ardoise p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
              <div className="flex-1">
                <Badge variant="light"><ShieldIcon className="w-3.5 h-3.5" /> Conformite</Badge>
                <h3 className="mt-4 font-serif text-xl md:text-2xl leading-snug text-white">Conforme RGPD &amp; IA Act europeen</h3>
                <p className="mt-3 text-white/50 leading-relaxed max-w-lg">Marcelle est concu dans le respect total de la reglementation europeenne. Donnees de sante protegees, consentement natif, traitement IA transparent et documente.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["HDS", "Consentement explicite", "Donnees en Europe", "Droit a l'oubli", "IA transparente", "Conforme IA Act"].map((item, i) => (
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
      <section aria-label="Temoignages" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="terracotta"><ChatBubbleIcon className="w-3.5 h-3.5" /> Temoignages</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Ce qu&apos;en disent les professionnels
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* PLACEHOLDER TESTIMONIALS - Replace with real ones */}
            {([
              {
                quote: "Depuis Marcelle, mes aides-soignantes passent 2 minutes sur les transmissions au lieu de 15. Et les informations sont bien plus completes qu'avant.",
                name: "Sophie M.",
                role: "Directrice d'EHPAD",
                location: "Ile-de-France",
              },
              {
                quote: "Je retrouve en 10 secondes le passage exact d'une video de procedure. Pour la coordination medicale, c'est un gain de temps enorme.",
                name: "Dr. Laurent P.",
                role: "Medecin coordonnateur",
                location: "Provence",
              },
              {
                quote: "Les familles sont tellement plus sereines depuis qu'elles peuvent interroger Marcelle. Les appels anxieux ont diminue de moitie.",
                name: "Claire D.",
                role: "Cadre de sante",
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
      <section id="faq" aria-label="Questions frequentes" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="sauge"><SparklesIcon className="w-3.5 h-3.5" /> FAQ</Badge>
            <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight text-encre">
              Questions frequentes
            </h2>
            <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto">
              Tout ce que vous devez savoir sur Marcelle en EHPAD.
            </p>
          </div>
          <div className="space-y-4">
            {([
              {
                question: "Marcelle s'integre-t-elle avec notre logiciel de soins existant ?",
                answer:
                  "Oui. Marcelle se connecte aux principaux logiciels de soins du marche (NetSoins, Titan, Livia, etc.) via API. Les transmissions vocales remontent automatiquement dans votre outil existant, sans double saisie.",
              },
              {
                question: "Concretement, comment une aide-soignante utilise Marcelle ?",
                answer:
                  "En fin de tournee, l'aide-soignante parle a Marcelle comme a une collegue : 'Mme Dupont a bien mange ce midi, elle a marche 10 minutes dans le couloir, elle etait de bonne humeur.' Marcelle structure automatiquement cette information en transmission professionnelle et la classe dans le dossier du resident.",
              },
              {
                question: "Les donnees de sante sont-elles securisees ?",
                answer:
                  "Absolument. Marcelle est hebergee sur des serveurs certifies HDS (Hebergeur de Donnees de Sante) en Europe. Toutes les donnees sont chiffrees, le consentement est explicite, et nous sommes conformes RGPD et IA Act.",
              },
              {
                question: "Combien de temps pour deployer Marcelle dans un EHPAD ?",
                answer:
                  "Le deploiement complet prend 2 a 4 semaines : une semaine de configuration, une semaine de formation des equipes, puis un accompagnement au demarrage. Les equipes sont autonomes des la fin du premier mois.",
              },
              {
                question: "Et si les soignants ne sont pas a l'aise avec la technologie ?",
                answer:
                  "C'est justement la force de Marcelle : il suffit de parler. Pas d'ecran complexe, pas de formulaire a remplir, pas d'application a telecharger. Si vous savez parler, vous savez utiliser Marcelle.",
              },
              {
                question: "Combien coute Marcelle ?",
                answer:
                  "Le tarif depend de la taille de l'etablissement et des modules actives. Demandez une demo pour obtenir un devis personnalise. Le retour sur investissement est generalement visible des le premier mois grace au temps gagne sur les transmissions.",
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
      <section id="demo" aria-label="Demander une demonstration" className="py-12 md:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <BentoCard variant="white" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sauge/5 via-transparent to-terracotta/10 pointer-events-none" />
            <div className="relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 text-center">
              <Badge variant="sauge">Passez a l&apos;action</Badge>
              <h2 className="mt-6 font-serif text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] text-encre">
                Simplifiez le quotidien<br className="hidden md:block" /> de vos equipes
              </h2>
              <p className="mt-4 text-base md:text-lg text-graphite max-w-xl mx-auto leading-relaxed">Decouvrez comment Marcelle peut transformer les transmissions, la formation et le lien familles dans votre etablissement. Demonstration personnalisee en 30&nbsp;minutes.</p>
              <div className="mt-10">
                <DemoTrigger className="group inline-flex items-center gap-2 bg-sauge text-white px-8 py-4 rounded-xl font-medium text-[15px] hover:bg-sauge-deep transition-all duration-300 shadow-[0_2px_8px_rgba(91,140,111,0.25)] cursor-pointer">
                  Demander une demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </DemoTrigger>
              </div>
              <p className="mt-6 text-xs text-graphite">Sans engagement — Deploiement en 2 a 4 semaines</p>
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
              <p className="mt-3 text-sm text-white/30 max-w-md">L&apos;assistante IA pour EHPAD. Transmissions, formation video et lien familles -- le quotidien des soignants, simplifie.</p>
            </div>
            <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-6 text-sm text-white/40">
              <a href="#piliers" className="hover:text-white/70 transition-colors">Les 3 piliers</a>
              <a href="#comment" className="hover:text-white/70 transition-colors">Comment ca marche</a>
              <a href="#conformite" className="hover:text-white/70 transition-colors">Conformite</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
              <a href="#demo" className="hover:text-white/70 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Marcelle. Tous droits reserves.</p>
            <div className="flex gap-4">
              <Link href="/confidentialite" className="text-xs text-white/20 hover:text-white/50 transition-colors">Confidentialite</Link>
              <Link href="/cgv" className="text-xs text-white/20 hover:text-white/50 transition-colors">CGU</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
