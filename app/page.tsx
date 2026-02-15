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

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MessageIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

function UsersIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
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

function GlobeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function SendIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
  );
}

function BotIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
    </svg>
  );
}

function SmileIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
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

/* ------------------------------------------------------------------ */
/*  REUSABLE SUB-COMPONENTS                                            */
/* ------------------------------------------------------------------ */

function Badge({ children, variant = "light" }: { children: React.ReactNode; variant?: "light" | "solid" | "accent" | "whatsapp" }) {
  const styles = { light: "bg-white/[0.08] text-white", solid: "bg-[#F0F0F0] text-[#333333]", accent: "bg-[#C8A97E]/15 text-[#C8A97E]", whatsapp: "bg-[#25D366]/12 text-[#25D366]" };
  return <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>{children}</span>;
}

function BentoCard({ children, className = "", variant = "white" }: { children: React.ReactNode; className?: string; variant?: "white" | "dark" | "glass" | "accent" }) {
  const base = "rounded-3xl transition-all duration-300 overflow-hidden";
  const styles = { white: "bg-white text-[#0A0A0A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]", dark: "bg-[#1A1A1A] text-white border border-white/[0.06] hover:-translate-y-0.5", glass: "bg-white/[0.04] text-white border border-white/[0.08] backdrop-blur-xl hover:-translate-y-0.5", accent: "bg-[#C8A97E] text-[#0A0A0A] hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(200,169,126,0.15)]" };
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
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, WhatsApp",
    description:
      "Agent IA hôtel et concierge IA WhatsApp pour les hôtels d'exception. Marcelle gère les conversations clients et centralise les connaissances d'équipe, directement sur WhatsApp.",
    url: "https://marcelle.ai",
    offers: {
      "@type": "Offer",
      category: "SaaS",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "30",
    },
    featureList: [
      "Concierge IA WhatsApp 24h/24",
      "Agent IA hôtellerie multilingue (50+ langues)",
      "Assistant de procédures pour équipes hôtelières",
      "Chatbot hôtel WhatsApp conforme RGPD & IA Act",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment fonctionne un agent IA dans un hôtel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un agent IA hôtel comme Marcelle se connecte à WhatsApp et gère automatiquement les conversations avec vos clients. Il envoie un message de bienvenue personnalisé, répond aux questions sur les services, horaires et recommandations, dans plus de 50 langues et 24h/24. L'agent IA s'appuie sur la base de connaissances spécifique de votre hôtel pour fournir des réponses précises et contextualisées.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le meilleur chatbot WhatsApp pour hôtel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Marcelle se distingue comme le chatbot WhatsApp conçu spécifiquement pour l'hôtellerie de luxe. Contrairement aux chatbots génériques, Marcelle combine deux fonctions en un seul agent IA : concierge pour les clients et assistant de procédures pour les équipes. Il est multilingue, disponible 24h/24, conforme RGPD et IA Act, et s'intègre directement sur WhatsApp sans application supplémentaire.",
        },
      },
      {
        "@type": "Question",
        name: "L'intelligence artificielle peut-elle remplacer un concierge d'hôtel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'IA ne remplace pas le concierge humain, elle le complète. Un agent IA hôtellerie comme Marcelle prend en charge les demandes courantes (horaires, recommandations, informations pratiques) pour que votre équipe se concentre sur l'accueil humain et les situations complexes. Le résultat : 30 minutes gagnées par shift à la réception et une satisfaction client en hausse grâce à des réponses instantanées, même à 3h du matin.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps faut-il pour mettre en place un agent IA dans un hôtel ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La mise en place de Marcelle se fait en quelques jours seulement. L'équipe configure votre base de connaissances (procédures, services, recommandations), connecte WhatsApp, et l'agent IA est opérationnel. Aucune installation technique complexe n'est requise. Vos équipes et vos clients peuvent commencer à interagir avec Marcelle immédiatement.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-[var(--font-inter)] selection:bg-[#C8A97E]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ========== NAVBAR ========== */}
      <nav aria-label="Navigation principale" className="fixed top-0 inset-x-0 z-50 h-[72px] backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          <span className="font-[var(--font-playfair)] text-xl font-bold tracking-tight">Marcelle</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#comment" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Comment ça marche</a>
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Concierge &amp; Équipe</a>
            <a href="#solutions" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Problèmes résolus</a>
            <a href="#avantages" className="text-sm text-white/60 hover:text-white transition-colors duration-200">Avantages</a>
          </div>
          <DemoTrigger className="group inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer">
            Demander une démo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </DemoTrigger>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section aria-label="Agent IA hôtel - Présentation de Marcelle" className="relative pt-[72px] min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#C8A97E]/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 pt-16 md:pt-24 lg:pt-32 pb-12 flex-1 flex flex-col relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="whatsapp"><WhatsAppIcon className="w-3.5 h-3.5" /> Sur WhatsApp</Badge>
              <Badge variant="accent"><ShieldIcon className="w-3.5 h-3.5" /> Conforme RGPD &amp; IA Act</Badge>
            </div>
            <h1 className="font-[var(--font-playfair)] font-bold leading-[1.05] tracking-tight text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]">
              L&apos;agent IA hôtel
              <br />
              <span className="text-[#C8A97E]">qui transforme votre établissement.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
              Marcelle est le concierge IA WhatsApp qui répond à vos guests et accompagne vos équipes, 24h/24. Une seule intelligence artificielle au service de deux excellences&nbsp;: l&apos;expérience client et la performance opérationnelle de votre hôtel.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <DemoTrigger className="group inline-flex items-center gap-2 bg-white text-[#0A0A0A] px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-gray-100 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.12)] cursor-pointer">
                Demander une démo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </DemoTrigger>
              <a href="#comment" className="inline-flex items-center gap-2 border border-white/15 text-white px-7 py-3.5 rounded-xl font-medium text-[15px] hover:border-white/30 transition-all duration-300">
                Découvrir le fonctionnement
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
            <BentoCard variant="glass" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-[#C8A97E]">24/7</div>
              <p className="mt-2 text-sm text-white/50">Disponibilité sans interruption pour vos guests</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">50+</div>
              <p className="mt-2 text-sm text-white/50">Langues maîtrisées automatiquement</p>
            </BentoCard>
            <BentoCard variant="glass" className="p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-white">30 min</div>
              <p className="mt-2 text-sm text-white/50">Gagnées par shift à la réception</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== VIDEO DEMO ========== */}
      <section aria-label="Démonstration vidéo de l'agent IA hôtel Marcelle" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-10">
            <Badge variant="accent"><SparklesIcon className="w-3.5 h-3.5" /> Découvrir Marcelle</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">
              Marcelle en action
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">65 secondes pour comprendre comment Marcelle transforme votre hôtel.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <VideoPlayer playbackId="TGgf3vbYq3MrFukxQ8aV00uMYtApobtcKcQPhTo1icB00" />
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="comment" aria-label="Comment fonctionne l'agent IA hôtellerie" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="accent"><SparklesIcon className="w-3.5 h-3.5" /> Simple &amp; efficace</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">
              Un agent IA hôtellerie 100% automatisé,<br className="hidden md:block" /> du premier message au dernier
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Notre concierge IA WhatsApp envoie automatiquement un message de bienvenue à chaque guest et gère l&apos;intégralité de la conversation. Vous n&apos;avez rien à faire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: <SendIcon className="w-5 h-5" />, bg: "bg-[#0A0A0A]", step: "Étape 1", title: "Marcelle envoie le premier message", desc: "Un message de bienvenue personnalisé est envoyé automatiquement à chaque client avant ou pendant son séjour, directement sur WhatsApp." },
              { icon: <BotIcon className="w-5 h-5" />, bg: "bg-[#25D366]", step: "Étape 2", title: "La conversation se poursuit", desc: "Dès que le client répond, Marcelle engage la conversation naturellement. Recommandations, horaires, services — tout y est." },
              { icon: <SmileIcon className="w-5 h-5" />, bg: "bg-[#C8A97E]", step: "Étape 3", title: "Vos guests sont enchantés", desc: "Chaque client bénéficie d'un concierge disponible 24h/24, dans sa langue, avec les connaissances spécifiques de votre hôtel." },
            ].map((s, i) => (
              <BentoCard key={i} variant="white" className="p-8 md:p-10">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${s.bg} text-white shrink-0 mb-5`}>{s.icon}</div>
                <p className="text-xs font-medium text-[#999] uppercase tracking-wider mb-2">{s.step}</p>
                <h3 className="font-[var(--font-playfair)] text-xl font-semibold mb-3 text-[#0A0A0A]">{s.title}</h3>
                <p className="text-[#666] leading-relaxed text-sm">{s.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DUAL PRODUCT SECTION ========== */}
      <section id="features" aria-label="Fonctionnalités du concierge IA et assistant d'équipe" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light">Deux missions, un seul agent</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">
              L&apos;intelligence artificielle de votre hôtel<br className="hidden md:block" /> au service de tous
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Marcelle intègre vos connaissances et les redistribue à vos guests comme à vos équipes, via le chatbot WhatsApp qu&apos;ils utilisent déjà.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Guest concierge */}
            <BentoCard variant="white" className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] shrink-0"><WhatsAppIcon className="w-6 h-6" /></div>
                <div>
                  <Badge variant="whatsapp">Pour vos guests</Badge>
                  <h3 className="mt-3 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug text-[#0A0A0A]">Un concierge IA WhatsApp qui ne dort jamais</h3>
                </div>
              </div>
              <p className="text-[#333] leading-relaxed mb-8">Vos clients posent des questions à toute heure, dans toutes les langues. Ce chatbot hôtel WhatsApp leur répond instantanément avec la précision d&apos;un concierge senior&nbsp;: recommandations, horaires, services, informations pratiques.</p>
              <div className="space-y-4">
                {[
                  { icon: <MessageIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Réponse instantanée, 24h/24", desc: "Plus aucune demande client ne reste sans réponse, même à 3h du matin." },
                  { icon: <GlobeIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Multilingue natif", desc: "Marcelle échange dans la langue de chaque guest, sans effort de votre côté." },
                  { icon: <ClockIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Recommandations sur-mesure", desc: "Restaurants, activités, transports : des suggestions alignées avec votre hôtel." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
                    <div><p className="text-sm font-medium text-[#0A0A0A]">{f.title}</p><p className="text-sm text-[#666]">{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </BentoCard>
            {/* Team assistant */}
            <BentoCard variant="white" className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#C8A97E]/10 text-[#C8A97E] shrink-0"><UsersIcon className="w-6 h-6" /></div>
                <div>
                  <Badge variant="accent">Pour vos équipes</Badge>
                  <h3 className="mt-3 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug text-[#0A0A0A]">La mémoire vivante de votre établissement</h3>
                </div>
              </div>
              <p className="text-[#333] leading-relaxed mb-8">Procédures d&apos;accueil, protocoles de sécurité, standards de service&nbsp;: tout est dans Marcelle. Vos équipes retrouvent n&apos;importe quelle information en quelques secondes sur WhatsApp.</p>
              <div className="space-y-4">
                {[
                  { icon: <SparklesIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Onboarding accéléré", desc: "Les nouveaux collaborateurs sont autonomes dès leur première semaine." },
                  { icon: <ChartIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Zéro perte d'information", desc: "Les procédures sont centralisées, à jour, et accessibles à tout moment." },
                  { icon: <ShieldIcon className="w-4 h-4 text-[#0A0A0A]" />, title: "Équipes plus sereines", desc: "Moins de doutes, moins d'interruptions, plus de confiance dans l'exécution." },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] flex items-center justify-center shrink-0 mt-0.5">{f.icon}</div>
                    <div><p className="text-sm font-medium text-[#0A0A0A]">{f.title}</p><p className="text-sm text-[#666]">{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== PROBLEMS / SOLUTIONS BENTO ========== */}
      <section id="solutions" aria-label="Problèmes résolus par l'agent IA hôtel" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light">Le constat</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">Ces situations, vous les connaissez</h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">Et pour chacune, Marcelle apporte une réponse concrète.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <BentoCard variant="dark" className="p-8 md:p-10 lg:col-span-2">
              <Badge variant="accent">Réception</Badge>
              <h3 className="mt-5 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug">La réception débordée</h3>
              <p className="mt-3 text-white/50 leading-relaxed">À 23h, trois clients attendent une réponse pendant que le téléphone sonne et qu&apos;un email urgent reste sans suite.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-[#C8A97E] mb-1">La réception respire</p>
                <p className="text-sm text-white/70">Marcelle prend en charge les demandes courantes sur WhatsApp. Votre équipe se concentre sur l&apos;accueil humain.</p>
              </div>
            </BentoCard>
            <BentoCard variant="dark" className="p-8 md:p-10 lg:row-span-2">
              <Badge variant="accent">Organisation</Badge>
              <h3 className="mt-5 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug">Les procédures introuvables</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Le protocole incendie est dans un classeur, la fiche petit-déjeuner dans un drive, et le standard check-in dans la tête de Marie qui est en congé.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-[#C8A97E] mb-1">Toute la connaissance, un seul endroit</p>
                <p className="text-sm text-white/70">Chaque procédure, chaque standard est accessible en une question sur WhatsApp. Toujours à jour.</p>
              </div>
              <div className="mt-8 flex gap-2"><div className="w-2 h-2 rounded-full bg-[#C8A97E]" /><div className="w-2 h-2 rounded-full bg-[#C8A97E]/50" /><div className="w-2 h-2 rounded-full bg-[#C8A97E]/25" /></div>
            </BentoCard>
            <BentoCard variant="dark" className="p-8 md:p-10">
              <Badge variant="accent">Formation</Badge>
              <h3 className="mt-5 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug">L&apos;onboarding interminable</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Chaque nouvel employé mobilise un collègue senior pendant des jours. Les mêmes questions reviennent, encore et encore.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-[#C8A97E] mb-1">Des équipes autonomes dès le premier jour</p>
                <p className="text-sm text-white/70">Les nouveaux interrogent Marcelle comme un collègue expérimenté. La montée en compétence est immédiate.</p>
              </div>
            </BentoCard>
            <BentoCard variant="dark" className="p-8 md:p-10">
              <Badge variant="accent">Communication</Badge>
              <h3 className="mt-5 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug">La barrière de la langue</h3>
              <p className="mt-3 text-white/50 leading-relaxed">Un client japonais a une demande urgente. L&apos;équipe de nuit ne parle que français et anglais.</p>
              <div className="mt-6 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <p className="text-sm font-medium text-[#C8A97E] mb-1">Chaque guest compris dans sa langue</p>
                <p className="text-sm text-white/70">Marcelle répond naturellement en français, anglais, espagnol, japonais, arabe, et des dizaines d&apos;autres langues.</p>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section id="avantages" aria-label="Avantages de l'agent IA pour hôtellerie" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="light">Pourquoi Marcelle</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">Six raisons de choisir cet agent IA pour votre hôtel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { icon: <ClockIcon className="w-5 h-5" />, title: "Disponible 24h/24, 7j/7", desc: "Vos clients obtiennent une réponse à chaque instant, week-ends et jours fériés compris.", variant: "dark" as const, iconBg: "bg-[#C8A97E]/10 text-[#C8A97E]" },
              { icon: <GlobeIcon className="w-5 h-5" />, title: "Multilingue automatique", desc: "Plus de 50 langues maîtrisées. Marcelle détecte la langue du guest et répond dans la même.", variant: "dark" as const, iconBg: "bg-[#25D366]/10 text-[#25D366]" },
              { icon: <SparklesIcon className="w-5 h-5" />, title: "Onboarding divisé par trois", desc: "Vos nouveaux collaborateurs trouvent chaque réponse en quelques secondes.", variant: "accent" as const, iconBg: "bg-[#0A0A0A] text-[#C8A97E]" },
              { icon: <SmileIcon className="w-5 h-5" />, title: "Satisfaction client en hausse", desc: "Des réponses rapides, précises et personnalisées. Chaque interaction renforce votre image.", variant: "dark" as const, iconBg: "bg-[#C8A97E]/10 text-[#C8A97E]" },
              { icon: <ChartIcon className="w-5 h-5" />, title: "30 min gagnées par shift", desc: "Moins de questions répétitives, moins d'appels internes. Plus de temps pour l'accueil humain.", variant: "accent" as const, iconBg: "bg-[#0A0A0A] text-[#C8A97E]" },
              { icon: <ChartIcon className="w-5 h-5" />, title: "Connaissance centralisée", desc: "Toute l'expertise de votre hôtel réunie en un seul endroit, accessible par tous.", variant: "dark" as const, iconBg: "bg-[#C8A97E]/10 text-[#C8A97E]" },
            ]).map((b, i) => (
              <BentoCard key={i} variant={b.variant} className="p-6 md:p-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${b.iconBg}`}>{b.icon}</div>
                <h3 className={`font-[var(--font-playfair)] text-lg font-semibold leading-snug ${b.variant === "accent" ? "text-[#0A0A0A]" : ""}`}>{b.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${b.variant === "accent" ? "text-[#0A0A0A]/70" : "text-white/50"}`}>{b.desc}</p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RGPD & IA ACT ========== */}
      <section aria-label="Conformité RGPD et IA Act de l'agent IA hôtel" className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <BentoCard variant="glass" className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
              <div className="flex-1">
                <Badge variant="whatsapp"><ShieldIcon className="w-3.5 h-3.5" /> Conformité</Badge>
                <h3 className="mt-4 font-[var(--font-playfair)] text-xl md:text-2xl font-semibold leading-snug">Conforme RGPD &amp; IA Act européen</h3>
                <p className="mt-3 text-white/50 leading-relaxed max-w-lg">Marcelle est conçu dans le respect total de la réglementation européenne. Données protégées, consentement natif, traitement IA transparent et documenté.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Consentement explicite", "Données en Europe", "Droit à l'oubli", "IA transparente"].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/[0.06] text-white/70">
                    <CheckIcon className="w-3.5 h-3.5 text-[#25D366]" />{item}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" aria-label="Questions fréquentes sur l'agent IA hôtel" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="accent"><SparklesIcon className="w-3.5 h-3.5" /> FAQ</Badge>
            <h2 className="mt-6 font-[var(--font-playfair)] font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] leading-tight">
              Questions fréquentes sur l&apos;agent IA hôtel
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/50 max-w-xl mx-auto">
              Tout ce que vous devez savoir sur l&apos;intelligence artificielle appliquée à l&apos;hôtellerie.
            </p>
          </div>
          <div className="space-y-4">
            {([
              {
                question: "Comment fonctionne un agent IA dans un hôtel ?",
                answer:
                  "Un agent IA hôtel comme Marcelle se connecte à WhatsApp et gère automatiquement les conversations avec vos clients. Il envoie un message de bienvenue personnalisé, répond aux questions sur les services, horaires et recommandations, dans plus de 50 langues et 24h/24. L'agent IA s'appuie sur la base de connaissances spécifique de votre hôtel pour fournir des réponses précises et contextualisées.",
              },
              {
                question: "Quel est le meilleur chatbot WhatsApp pour hôtel ?",
                answer:
                  "Marcelle se distingue comme le chatbot WhatsApp conçu spécifiquement pour l'hôtellerie de luxe. Contrairement aux chatbots génériques, Marcelle combine deux fonctions en un seul agent IA : concierge pour les clients et assistant de procédures pour les équipes. Il est multilingue, disponible 24h/24, conforme RGPD et IA Act, et s'intègre directement sur WhatsApp sans application supplémentaire.",
              },
              {
                question: "L'intelligence artificielle peut-elle remplacer un concierge d'hôtel ?",
                answer:
                  "L'IA ne remplace pas le concierge humain, elle le complète. Un agent IA hôtellerie comme Marcelle prend en charge les demandes courantes (horaires, recommandations, informations pratiques) pour que votre équipe se concentre sur l'accueil humain et les situations complexes. Le résultat : 30 minutes gagnées par shift à la réception et une satisfaction client en hausse grâce à des réponses instantanées, même à 3h du matin.",
              },
              {
                question: "Combien de temps faut-il pour mettre en place un agent IA dans un hôtel ?",
                answer:
                  "La mise en place de Marcelle se fait en quelques jours seulement. L'équipe configure votre base de connaissances (procédures, services, recommandations), connecte WhatsApp, et l'agent IA est opérationnel. Aucune installation technique complexe n'est requise. Vos équipes et vos clients peuvent commencer à interagir avec Marcelle immédiatement.",
              },
            ]).map((item, i) => (
              <details
                key={i}
                className="group border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C8A97E]/30"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 text-left">
                  <h3 className="font-[var(--font-playfair)] text-base md:text-lg font-semibold leading-snug pr-4">
                    {item.question}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-[#C8A97E] transition-transform duration-300 group-open:rotate-45">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
                  <p className="text-white/50 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section id="demo" aria-label="Demander une démonstration de l'agent IA hôtel" className="py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <BentoCard variant="white" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/5 via-transparent to-[#C8A97E]/10 pointer-events-none" />
            <div className="relative z-10 py-16 md:py-20 lg:py-24 px-8 md:px-16 text-center">
              <Badge variant="solid">Passez à l&apos;action</Badge>
              <h2 className="mt-6 font-[var(--font-playfair)] font-bold text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] text-[#0A0A0A]">
                Offrez à votre hôtel<br className="hidden md:block" /> l&apos;agent IA qu&apos;il mérite
              </h2>
              <p className="mt-4 text-base md:text-lg text-[#666] max-w-xl mx-auto leading-relaxed">Découvrez comment notre intelligence artificielle peut transformer l&apos;expérience de vos guests et le quotidien de vos équipes. Démonstration personnalisée en 30&nbsp;minutes.</p>
              <div className="mt-10">
                <DemoTrigger className="group inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-8 py-4 rounded-xl font-medium text-[15px] hover:bg-[#1A1A1A] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] cursor-pointer">
                  Demander une démo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </DemoTrigger>
              </div>
              <p className="mt-6 text-xs text-[#999]">Sans engagement — Mise en place en quelques jours</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer aria-label="Pied de page Marcelle" className="border-t border-white/[0.06] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="font-[var(--font-playfair)] text-lg font-bold tracking-tight text-white">Marcelle</span>
              <p className="mt-2 text-sm text-white/30">Agent IA hôtel et concierge IA WhatsApp pour les hôtels d&apos;exception. Assistant d&apos;équipe et chatbot hôtelier, réunis sur WhatsApp.</p>
            </div>
            <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-6 text-sm text-white/40">
              <a href="#comment" className="hover:text-white/70 transition-colors">Comment ça marche</a>
              <a href="#features" className="hover:text-white/70 transition-colors">Fonctionnalités</a>
              <a href="#avantages" className="hover:text-white/70 transition-colors">Avantages</a>
              <a href="#faq" className="hover:text-white/70 transition-colors">FAQ</a>
              <a href="#demo" className="hover:text-white/70 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Marcelle. Tous droits réservés.</p>
            <Link href="/confidentialite" className="text-xs text-white/20 hover:text-white/50 transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
