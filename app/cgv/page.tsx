import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - Marcelle | Agent IA hôtel",
  description:
    "Conditions générales d'utilisation du service Marcelle. Agent IA hôtel et concierge WhatsApp pour hôtels d'exception.",
  robots: { index: true, follow: true },
};

/* ------------------------------------------------------------------ */
/*  ICON COMPONENTS                                                    */
/* ------------------------------------------------------------------ */

function ArrowLeft({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

function FileIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REUSABLE SUB-COMPONENTS                                            */
/* ------------------------------------------------------------------ */

function SectionTitle({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2 id={id} className="flex items-center gap-3 font-[var(--font-playfair)] font-semibold text-xl md:text-2xl text-white mt-16 mb-6 scroll-mt-24">
      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#C8A97E]/15 text-[#C8A97E] text-sm font-medium font-[var(--font-inter)]">{number}</span>
      {title}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-white/60 leading-relaxed mb-4 text-[15px]">{children}</p>;
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6">
      <p className="text-sm font-medium text-[#C8A97E] mb-2">{title}</p>
      <div className="text-sm text-white/60 leading-relaxed">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS                                                  */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "objet", number: "1", title: "Objet" },
  { id: "definitions", number: "2", title: "Définitions" },
  { id: "acces", number: "3", title: "Accès au service" },
  { id: "description", number: "4", title: "Description du service" },
  { id: "ia", number: "5", title: "Intelligence artificielle" },
  { id: "obligations-client", number: "6", title: "Obligations du client" },
  { id: "obligations-marcelle", number: "7", title: "Obligations de Marcelle" },
  { id: "donnees", number: "8", title: "Données personnelles" },
  { id: "propriete", number: "9", title: "Propriété intellectuelle" },
  { id: "responsabilite", number: "10", title: "Responsabilité" },
  { id: "duree", number: "11", title: "Durée et résiliation" },
  { id: "modifications", number: "12", title: "Modifications des CGU" },
  { id: "droit-applicable", number: "13", title: "Droit applicable" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-[var(--font-inter)] selection:bg-[#C8A97E]/30 selection:text-white">
      {/* ========== NAVBAR ========== */}
      <nav aria-label="Navigation" className="fixed top-0 inset-x-0 z-50 h-[72px] backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          <Link href="/" className="font-[var(--font-playfair)] text-xl font-bold tracking-tight hover:text-[#C8A97E] transition-colors">Marcelle</Link>
          <Link href="/" className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            Retour au site
          </Link>
        </div>
      </nav>

      {/* ========== HEADER ========== */}
      <header className="relative pt-[72px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C8A97E]/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-12 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#C8A97E]/15 text-[#C8A97E]">
              <FileIcon className="w-3.5 h-3.5" /> Mentions légales
            </span>
          </div>
          <h1 className="font-[var(--font-playfair)] font-bold text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight">
            Conditions générales d&apos;utilisation
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
            Les présentes conditions générales d&apos;utilisation régissent l&apos;accès et l&apos;utilisation du service Marcelle. En utilisant notre service, vous acceptez les termes décrits ci-dessous.
          </p>
          <p className="mt-4 text-sm text-white/30">Dernière mise à jour : 15 février 2026</p>
        </div>
      </header>

      {/* ========== CONTENT ========== */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 pb-20">
        {/* Table of contents */}
        <nav aria-label="Sommaire" className="p-6 md:p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl mb-12">
          <p className="text-xs font-medium text-[#C8A97E] uppercase tracking-wider mb-4">Sommaire</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-all duration-200">
                <span className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center text-xs text-[#C8A97E] font-medium shrink-0">{s.number}</span>
                {s.title}
              </a>
            ))}
          </div>
        </nav>

        {/* ---- 1. Objet ---- */}
        <SectionTitle id="objet" number="1" title="Objet" />
        <Paragraph>
          Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») ont pour objet de définir les modalités et conditions d&apos;utilisation du service Marcelle, accessible via le site marcelle.ai et l&apos;intégration WhatsApp.
        </Paragraph>
        <Paragraph>
          L&apos;utilisation du service implique l&apos;acceptation pleine et entière des présentes CGU. Si vous n&apos;acceptez pas ces conditions, vous êtes invité à ne pas utiliser le service.
        </Paragraph>

        {/* ---- 2. Définitions ---- */}
        <SectionTitle id="definitions" number="2" title="Définitions" />
        <div className="space-y-3 mb-6">
          {[
            { term: "« Marcelle »", def: "Désigne le service d'intelligence artificielle de conciergerie et d'assistance hôtelière, édité et opéré par Marcelle." },
            { term: "« Client »", def: "Désigne l'hôtel ou l'établissement hôtelier ayant souscrit au service Marcelle." },
            { term: "« Guest »", def: "Désigne le client de l'hôtel interagissant avec l'agent IA Marcelle via WhatsApp." },
            { term: "« Service »", def: "Désigne l'ensemble des fonctionnalités proposées par Marcelle, incluant le concierge IA pour les guests et l'assistant de procédures pour les équipes." },
            { term: "« Base de connaissances »", def: "Désigne l'ensemble des informations, procédures et recommandations fournies par le Client pour alimenter les réponses de l'agent IA." },
            { term: "« Agent IA »", def: "Désigne le système d'intelligence artificielle qui génère les réponses à partir de la base de connaissances du Client." },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-white/80 font-medium text-sm">{item.term}</span>
              <span className="text-white/50 text-sm"> — {item.def}</span>
            </div>
          ))}
        </div>

        {/* ---- 3. Accès au service ---- */}
        <SectionTitle id="acces" number="3" title="Accès au service" />
        <Paragraph>
          Le service Marcelle est accessible aux établissements hôteliers ayant souscrit un abonnement. L&apos;accès est fourni après signature du contrat de service et configuration de la base de connaissances de l&apos;établissement.
        </Paragraph>
        <Paragraph>
          Le Client s&apos;engage à fournir des informations exactes et à jour lors de son inscription et à maintenir la confidentialité de ses identifiants de connexion. Toute utilisation du service effectuée avec les identifiants du Client est réputée effectuée par le Client lui-même.
        </Paragraph>
        <Paragraph>
          Marcelle se réserve le droit de suspendre ou de restreindre l&apos;accès au service en cas de non-respect des présentes CGU, de manquement aux obligations de paiement, ou pour des raisons de maintenance ou de sécurité.
        </Paragraph>

        {/* ---- 4. Description du service ---- */}
        <SectionTitle id="description" number="4" title="Description du service" />
        <Paragraph>
          Marcelle propose un service d&apos;agent IA intégré à WhatsApp comprenant deux fonctionnalités principales :
        </Paragraph>
        <InfoCard title="Concierge IA pour les guests">
          <p>Un agent conversationnel disponible 24h/24 qui répond aux questions des clients de l&apos;hôtel via WhatsApp : recommandations, informations sur les services, horaires, et demandes courantes. L&apos;agent s&apos;exprime dans plus de 50 langues et s&apos;appuie sur la base de connaissances spécifique de l&apos;établissement.</p>
        </InfoCard>
        <InfoCard title="Assistant de procédures pour les équipes">
          <p>Un assistant qui centralise les procédures, standards de service et connaissances opérationnelles de l&apos;hôtel. Les membres de l&apos;équipe accèdent instantanément à toute information interne via WhatsApp.</p>
        </InfoCard>
        <Paragraph>
          Le service est fourni en mode SaaS (Software as a Service). Marcelle s&apos;engage à mettre en &oelig;uvre les moyens nécessaires pour assurer la disponibilité et la qualité du service, sans toutefois garantir une disponibilité ininterrompue.
        </Paragraph>

        {/* ---- 5. Intelligence artificielle ---- */}
        <SectionTitle id="ia" number="5" title="Intelligence artificielle" />
        <Paragraph>
          Le service utilise des technologies d&apos;intelligence artificielle pour générer des réponses contextualisées. Le Client et les Guests sont informés que :
        </Paragraph>
        <InfoCard title="Nature des réponses IA">
          <ul className="space-y-2">
            <li>Les réponses sont générées automatiquement par un modèle de langage à partir de la base de connaissances du Client.</li>
            <li>L&apos;agent IA ne se substitue pas à un avis professionnel (médical, juridique, financier ou autre).</li>
            <li>Malgré les efforts de précision, les réponses peuvent contenir des inexactitudes. Le Client reste responsable de la vérification du contenu de sa base de connaissances.</li>
            <li>Chaque guest est informé dès le premier message qu&apos;il interagit avec une intelligence artificielle.</li>
            <li>Le service est classé « risque limité » au sens du Règlement européen sur l&apos;IA (UE 2024/1689).</li>
          </ul>
        </InfoCard>
        <Paragraph>
          Le Client conserve à tout moment la capacité de superviser, corriger ou désactiver l&apos;agent IA. Marcelle ne prend aucune décision automatisée ayant un effet juridique ou significatif sur les personnes concernées.
        </Paragraph>

        {/* ---- 6. Obligations du Client ---- */}
        <SectionTitle id="obligations-client" number="6" title="Obligations du Client" />
        <Paragraph>
          Le Client s&apos;engage à :
        </Paragraph>
        <div className="space-y-2 mb-6">
          {[
            "Fournir une base de connaissances exacte, à jour et conforme à la réglementation applicable",
            "Ne pas inclure dans la base de connaissances de contenu illicite, diffamatoire, discriminatoire ou portant atteinte aux droits de tiers",
            "Informer ses guests de l'utilisation d'un agent IA, conformément aux obligations de transparence",
            "Respecter la réglementation applicable en matière de protection des données personnelles (RGPD) pour les données de ses guests",
            "Obtenir le consentement nécessaire avant l'envoi de messages à caractère marketing ou promotionnel via le service",
            "Maintenir la confidentialité de ses identifiants d'accès et informer Marcelle de toute utilisation non autorisée",
            "Utiliser le service conformément à son objet et ne pas tenter d'en détourner le fonctionnement",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/60 text-[15px] pl-2">
              <span className="text-[#C8A97E] shrink-0 mt-0.5">&#8226;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* ---- 7. Obligations de Marcelle ---- */}
        <SectionTitle id="obligations-marcelle" number="7" title="Obligations de Marcelle" />
        <Paragraph>
          Marcelle s&apos;engage à :
        </Paragraph>
        <div className="space-y-2 mb-6">
          {[
            "Fournir le service avec diligence et dans le respect des bonnes pratiques de l'industrie",
            "Assurer la sécurité et la confidentialité des données traitées dans le cadre du service",
            "Mettre en œuvre les mesures techniques et organisationnelles appropriées pour la protection des données personnelles",
            "Informer le Client de toute interruption programmée du service dans un délai raisonnable",
            "Fournir un support technique pour l'utilisation et la configuration du service",
            "Respecter les obligations du Règlement européen sur l'IA (transparence, journalisation, supervision humaine)",
            "Ne pas utiliser les données des Clients ou des Guests pour entraîner ses modèles d'IA",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/60 text-[15px] pl-2">
              <span className="text-[#C8A97E] shrink-0 mt-0.5">&#8226;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* ---- 8. Données personnelles ---- */}
        <SectionTitle id="donnees" number="8" title="Données personnelles" />
        <Paragraph>
          Le traitement des données personnelles dans le cadre du service est régi par notre <Link href="/confidentialite" className="text-[#C8A97E] hover:underline">Politique de confidentialité</Link>, qui fait partie intégrante des présentes CGU.
        </Paragraph>
        <Paragraph>
          En résumé, Marcelle s&apos;engage à :
        </Paragraph>
        <div className="space-y-2 mb-6">
          {[
            "Traiter les données personnelles conformément au RGPD (Règlement UE 2016/679)",
            "Appliquer le principe de minimisation des données : seul le contenu textuel des questions est envoyé aux modèles d'IA, sans donnée personnelle identifiante",
            "Héberger les données au sein de l'Union européenne (Francfort)",
            "Conserver les données uniquement pendant la durée nécessaire aux finalités de traitement",
            "Garantir l'exercice des droits des personnes concernées (accès, rectification, effacement, portabilité, opposition)",
            "Maintenir un journal de consentement immuable constituant preuve au sens du RGPD",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/60 text-[15px] pl-2">
              <span className="text-[#C8A97E] shrink-0 mt-0.5">&#8226;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* ---- 9. Propriété intellectuelle ---- */}
        <SectionTitle id="propriete" number="9" title="Propriété intellectuelle" />
        <Paragraph>
          L&apos;ensemble des éléments du service Marcelle (logiciel, algorithmes, interfaces, design, documentation, marques) sont protégés par les lois relatives à la propriété intellectuelle et restent la propriété exclusive de Marcelle.
        </Paragraph>
        <Paragraph>
          Le Client conserve l&apos;intégralité des droits de propriété intellectuelle sur sa base de connaissances et les contenus qu&apos;il fournit. Le Client accorde à Marcelle une licence limitée, non exclusive et révocable d&apos;utilisation de ces contenus aux seules fins de fourniture du service.
        </Paragraph>
        <Paragraph>
          Les réponses générées par l&apos;agent IA à partir de la base de connaissances du Client ne confèrent aucun droit de propriété intellectuelle supplémentaire à l&apos;une ou l&apos;autre des parties.
        </Paragraph>

        {/* ---- 10. Responsabilité ---- */}
        <SectionTitle id="responsabilite" number="10" title="Responsabilité" />
        <Paragraph>
          Marcelle fournit un service d&apos;agent IA basé sur les informations contenues dans la base de connaissances du Client. En conséquence :
        </Paragraph>
        <InfoCard title="Limitation de responsabilité">
          <ul className="space-y-2">
            <li>Marcelle ne saurait être tenu responsable de l&apos;exactitude, de la pertinence ou de l&apos;exhaustivité des réponses générées par l&apos;agent IA.</li>
            <li>Le Client est seul responsable du contenu de sa base de connaissances et des recommandations qui en découlent.</li>
            <li>Marcelle ne saurait être tenu responsable des dommages indirects, pertes de chiffre d&apos;affaires, pertes de données ou préjudices consécutifs liés à l&apos;utilisation du service.</li>
            <li>La responsabilité totale de Marcelle, toutes causes confondues, est limitée au montant des sommes versées par le Client au cours des 12 derniers mois.</li>
            <li>Marcelle ne saurait être tenu responsable en cas de force majeure ou d&apos;événement échappant à son contrôle raisonnable.</li>
          </ul>
        </InfoCard>

        {/* ---- 11. Durée et résiliation ---- */}
        <SectionTitle id="duree" number="11" title="Durée et résiliation" />
        <Paragraph>
          L&apos;abonnement au service Marcelle est conclu pour la durée définie dans le contrat de service. Sauf stipulation contraire, il est renouvelable tacitement.
        </Paragraph>
        <Paragraph>
          Chaque partie peut résilier le contrat :
        </Paragraph>
        <div className="space-y-2 mb-6">
          {[
            "À l'échéance, moyennant un préavis de 30 jours avant la date de renouvellement",
            "En cas de manquement grave de l'autre partie à ses obligations, non remédié dans un délai de 15 jours suivant une mise en demeure",
            "En cas de procédure de liquidation judiciaire de l'autre partie",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/60 text-[15px] pl-2">
              <span className="text-[#C8A97E] shrink-0 mt-0.5">&#8226;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <Paragraph>
          En cas de résiliation, Marcelle s&apos;engage à restituer au Client ses données (base de connaissances) dans un format exploitable, dans un délai de 30 jours. Passé ce délai, les données seront supprimées de manière irréversible.
        </Paragraph>

        {/* ---- 12. Modifications des CGU ---- */}
        <SectionTitle id="modifications" number="12" title="Modifications des CGU" />
        <Paragraph>
          Marcelle se réserve le droit de modifier les présentes CGU à tout moment. En cas de modification substantielle :
        </Paragraph>
        <div className="space-y-2 mb-6">
          {[
            "Les Clients seront informés par email au moins 30 jours avant l'entrée en vigueur des nouvelles conditions",
            "Les CGU modifiées seront publiées sur cette page avec la date de mise à jour",
            "La poursuite de l'utilisation du service après l'entrée en vigueur des modifications vaut acceptation des nouvelles CGU",
            "En cas de désaccord, le Client pourra résilier le contrat sans pénalité dans le délai de préavis",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/60 text-[15px] pl-2">
              <span className="text-[#C8A97E] shrink-0 mt-0.5">&#8226;</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* ---- 13. Droit applicable ---- */}
        <SectionTitle id="droit-applicable" number="13" title="Droit applicable et juridiction" />
        <Paragraph>
          Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution sera soumis à la compétence exclusive des tribunaux français compétents, sauf disposition d&apos;ordre public contraire.
        </Paragraph>
        <Paragraph>
          En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action judiciaire. À défaut d&apos;accord amiable dans un délai de 30 jours, le litige pourra être porté devant les juridictions compétentes.
        </Paragraph>

        {/* ---- Disclaimer ---- */}
        <div className="mt-16 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <p className="text-xs text-white/30 leading-relaxed">
            Les présentes conditions générales d&apos;utilisation sont fournies à titre informatif et peuvent être complétées par des conditions particulières définies dans le contrat de service. En cas de contradiction, les conditions particulières prévalent. Pour toute question, contactez-nous à contact@marcelle.ai.
          </p>
        </div>
      </main>

      {/* ========== FOOTER ========== */}
      <footer aria-label="Pied de page" className="border-t border-white/[0.06] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Link href="/" className="font-[var(--font-playfair)] text-lg font-bold tracking-tight text-white hover:text-[#C8A97E] transition-colors">Marcelle</Link>
              <p className="mt-2 text-sm text-white/30">Agent IA hôtel et concierge IA WhatsApp pour les hôtels d&apos;exception.</p>
            </div>
            <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-6 text-sm text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
              <Link href="/confidentialite" className="hover:text-white/70 transition-colors">Confidentialité</Link>
              <Link href="/cgv" className="text-white/70">CGU</Link>
            </nav>
          </div>
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Marcelle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
