import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Marcelle | Agent IA hôtel",
  description:
    "Politique de confidentialité de Marcelle. Conformité RGPD et IA Act européen. Découvrez comment nous protégeons vos données personnelles.",
  robots: { index: true, follow: true },
};

/* ------------------------------------------------------------------ */
/*  ICON COMPONENTS                                                    */
/* ------------------------------------------------------------------ */

function ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function ArrowLeft({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
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

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-white/60 text-[15px]">
          <CheckIcon className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6">
      <p className="text-sm font-medium text-[#C8A97E] mb-2">{title}</p>
      <div className="text-sm text-white/60 leading-relaxed">{children}</div>
    </div>
  );
}

function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-2xl border border-white/[0.08]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/[0.08] bg-white/[0.04]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-5 py-3 text-[#C8A97E] font-medium text-xs uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.04] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3 text-white/60">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS                                                  */
/* ------------------------------------------------------------------ */

const sections = [
  { id: "responsable", number: "1", title: "Responsable du traitement" },
  { id: "donnees", number: "2", title: "Données collectées" },
  { id: "finalites", number: "3", title: "Finalités et bases légales" },
  { id: "ia", number: "4", title: "Intelligence artificielle et transparence" },
  { id: "consentement", number: "5", title: "Gestion du consentement" },
  { id: "sous-traitants", number: "6", title: "Sous-traitants et transferts" },
  { id: "conservation", number: "7", title: "Durées de conservation" },
  { id: "droits", number: "8", title: "Vos droits" },
  { id: "securite", number: "9", title: "Sécurité des données" },
  { id: "cookies", number: "10", title: "Cookies" },
  { id: "modifications", number: "11", title: "Modifications de la politique" },
  { id: "contact", number: "12", title: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function ConfidentialitePage() {
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
              <ShieldIcon className="w-3.5 h-3.5" /> RGPD &amp; IA Act
            </span>
          </div>
          <h1 className="font-[var(--font-playfair)] font-bold text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.1] tracking-tight">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
            Marcelle accorde une importance fondamentale à la protection de vos données personnelles. Cette politique détaille nos pratiques en matière de collecte, de traitement et de protection de vos informations, en conformité avec le RGPD et le Règlement européen sur l&apos;IA.
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

        {/* ---- 1. Responsable du traitement ---- */}
        <SectionTitle id="responsable" number="1" title="Responsable du traitement" />
        <Paragraph>
          Le responsable du traitement des données personnelles collectées via le site marcelle.ai et le service Marcelle est :
        </Paragraph>
        <InfoCard title="Identité du responsable">
          <p><strong className="text-white/80">Marcelle</strong></p>
          <p>Site web : marcelle.ai</p>
          <p>Email de contact : contact@marcelle.ai</p>
        </InfoCard>
        <Paragraph>
          En tant que responsable du traitement, nous déterminons les finalités et les moyens du traitement de vos données personnelles, conformément à l&apos;article 4(7) du RGPD (Règlement UE 2016/679).
        </Paragraph>

        {/* ---- 2. Données collectées ---- */}
        <SectionTitle id="donnees" number="2" title="Données collectées" />
        <Paragraph>
          Nous collectons uniquement les données strictement nécessaires au fonctionnement du service, dans le respect du principe de minimisation des données (article 5(1)(c) du RGPD).
        </Paragraph>

        <h3 className="text-white/80 font-medium text-base mb-3 mt-6">2.1 Données des hôtels partenaires</h3>
        <BulletList items={[
          "Informations d'identification : nom de l'établissement, adresse, coordonnées du responsable",
          "Informations de connexion : adresse email, mot de passe chiffré",
          "Base de connaissances : procédures, services et informations transmises par l'hôtel",
          "Données de configuration : paramètres du service, préférences linguistiques",
        ]} />

        <h3 className="text-white/80 font-medium text-base mb-3 mt-6">2.2 Données des guests (clients d&apos;hôtel)</h3>
        <BulletList items={[
          "Numéro de téléphone WhatsApp (nécessaire à la communication)",
          "Prénom et nom (si fournis par l'hôtel ou le guest)",
          "Langue de communication (détectée automatiquement)",
          "Historique des conversations avec l'agent IA",
          "Statut de consentement et preuve de consentement (horodatage, adresse IP, user-agent)",
        ]} />

        <h3 className="text-white/80 font-medium text-base mb-3 mt-6">2.3 Données techniques</h3>
        <BulletList items={[
          "Adresse IP (lors de l'accès au site ou à la page de consentement)",
          "User-agent du navigateur",
          "Données de journalisation (logs) pour la sécurité et le diagnostic",
        ]} />

        <InfoCard title="Principe de minimisation">
          <p>Les données personnelles des guests (numéro de téléphone, email) ne sont <strong className="text-white/80">jamais transmises</strong> aux modèles d&apos;IA. Seul le contenu textuel de la question est envoyé au service d&apos;IA, sans aucune donnée identifiante.</p>
        </InfoCard>

        {/* ---- 3. Finalités et bases légales ---- */}
        <SectionTitle id="finalites" number="3" title="Finalités et bases légales" />
        <Paragraph>
          Conformément à l&apos;article 6 du RGPD, chaque traitement repose sur une base légale spécifique. Nous n&apos;utilisons jamais vos données à des fins non prévues ci-dessous.
        </Paragraph>
        <DataTable
          headers={["Finalité", "Base légale", "Données concernées"]}
          rows={[
            ["Fourniture du service de conciergerie IA", "Exécution du contrat (art. 6(1)(b))", "Conversations, base de connaissances"],
            ["Réponse aux messages des guests", "Intérêt légitime de l'hôtel (art. 6(1)(f))", "Numéro WhatsApp, messages"],
            ["Messages de bienvenue (service)", "Intérêt légitime de l'hôtel (art. 6(1)(f))", "Numéro WhatsApp, prénom"],
            ["Messages marketing / promotionnels", "Consentement explicite (art. 6(1)(a))", "Numéro WhatsApp, consentement"],
            ["Sécurité et prévention des abus", "Intérêt légitime (art. 6(1)(f))", "Logs, adresse IP"],
            ["Conformité légale et réglementaire", "Obligation légale (art. 6(1)(c))", "Logs de consentement"],
            ["Amélioration du service", "Intérêt légitime (art. 6(1)(f))", "Données agrégées et anonymisées"],
          ]}
        />

        {/* ---- 4. IA et transparence ---- */}
        <SectionTitle id="ia" number="4" title="Intelligence artificielle et transparence" />
        <Paragraph>
          Marcelle utilise des modèles d&apos;intelligence artificielle pour générer des réponses contextualisées à partir de la base de connaissances de chaque hôtel. Conformément au Règlement européen sur l&apos;IA (AI Act, Règlement UE 2024/1689), nous appliquons les principes de transparence suivants :
        </Paragraph>

        <InfoCard title="Classification IA Act">
          <p>Marcelle est classé comme système d&apos;IA à <strong className="text-white/80">risque limité</strong> au sens de l&apos;article 50 du Règlement IA. Les obligations de transparence suivantes s&apos;appliquent :</p>
        </InfoCard>

        <BulletList items={[
          "Notification IA : chaque guest est informé dès le premier message qu'il échange avec une intelligence artificielle, et non un humain",
          "Transparence du traitement : les réponses sont générées à partir de la base de connaissances de l'hôtel, enrichie par un modèle de langage (LLM)",
          "Absence de prise de décision automatisée impactante : Marcelle ne prend aucune décision ayant un effet juridique ou significatif sur les personnes concernées",
          "Supervision humaine : l'hôtel conserve à tout moment la capacité de superviser, corriger ou désactiver le service",
          "Non-utilisation pour l'entraînement : les conversations des guests ne sont pas utilisées pour entraîner ou améliorer les modèles d'IA",
          "Journalisation : les interactions sont journalisées conformément aux exigences de traçabilité de l'AI Act",
          "Formation du personnel : les équipes hôtelières utilisant Marcelle bénéficient d'une information sur le fonctionnement de l'IA (littératie IA, article 4 de l'AI Act)",
        ]} />

        <InfoCard title="Sous-traitants IA">
          <p>Les modèles d&apos;IA utilisés sont fournis par des prestataires tiers (voir section 6). Les données envoyées aux modèles sont strictement limitées au contenu textuel des questions, sans donnée personnelle identifiante. Des accords de traitement des données (DPA) sont en place avec chaque fournisseur.</p>
        </InfoCard>

        {/* ---- 5. Consentement ---- */}
        <SectionTitle id="consentement" number="5" title="Gestion du consentement" />
        <Paragraph>
          Le consentement est au c&oelig;ur de notre approche. Conformément aux articles 7 et 8 du RGPD, tout consentement recueilli respecte les critères suivants :
        </Paragraph>
        <BulletList items={[
          "Libre : aucune pré-condition, aucune case pré-cochée, aucune conséquence négative en cas de refus",
          "Spécifique : chaque finalité de traitement est distinctement présentée",
          "Éclairé : une information claire et complète est fournie avant toute demande de consentement",
          "Univoque : le consentement est donné par un acte positif clair (bouton d'acceptation)",
        ]} />

        <h3 className="text-white/80 font-medium text-base mb-3 mt-6">Mécanisme de consentement pour les guests</h3>
        <Paragraph>
          Lorsque l&apos;hôtel active les fonctionnalités nécessitant un consentement (ex. messages marketing), les guests accèdent à une page de consentement dédiée via un lien sécurisé et unique. Cette page présente de manière claire :
        </Paragraph>
        <BulletList items={[
          "La nature des traitements envisagés",
          "Les données concernées",
          "La possibilité d'accepter ou de refuser, avec des boutons distincts et équivalents visuellement",
          "Les droits du guest, y compris le retrait du consentement à tout moment",
        ]} />

        <InfoCard title="Preuve de consentement (accountability)">
          <p>Chaque consentement est enregistré de manière <strong className="text-white/80">immuable</strong> dans un journal d&apos;audit (append-only) comprenant : l&apos;horodatage, l&apos;adresse IP, le user-agent, la version du texte de consentement présenté, et l&apos;action effectuée. Ces enregistrements sont protégés contre toute modification ou suppression par des mécanismes techniques (triggers de base de données).</p>
        </InfoCard>

        <h3 className="text-white/80 font-medium text-base mb-3 mt-6">Retrait du consentement</h3>
        <Paragraph>
          Le retrait du consentement est aussi simple que son octroi. Les guests peuvent à tout moment :
        </Paragraph>
        <BulletList items={[
          "Envoyer le mot-clé STOP (ou ARRÊTER, DÉSABONNER, UNSUBSCRIBE, OPT OUT) par WhatsApp",
          "Utiliser la page de consentement pour modifier leurs préférences",
          "Contacter l'hôtel ou Marcelle directement",
        ]} />

        {/* ---- 6. Sous-traitants ---- */}
        <SectionTitle id="sous-traitants" number="6" title="Sous-traitants et transferts de données" />
        <Paragraph>
          Pour fournir le service Marcelle, nous faisons appel à des sous-traitants techniques. Conformément à l&apos;article 28 du RGPD, un accord de traitement des données (DPA) est conclu avec chaque sous-traitant.
        </Paragraph>
        <DataTable
          headers={["Sous-traitant", "Rôle", "Localisation des données", "Garanties"]}
          rows={[
            ["Supabase", "Hébergement base de données", "UE (Francfort)", "DPA, SOC 2 Type II, chiffrement au repos"],
            ["Meta (WhatsApp Business API)", "Canal de communication", "UE + US", "DPA, clauses contractuelles types (CCT)"],
            ["Anthropic (Claude)", "Modèle d'IA (génération de réponses)", "US", "DPA, pas d'entraînement sur les données"],
            ["Vercel", "Hébergement application web", "UE (via Edge)", "DPA, SOC 2, RGPD-ready"],
            ["Hostinger", "Hébergement serveur", "UE", "DPA, conformité RGPD"],
          ]}
        />

        <InfoCard title="Transferts hors UE">
          <p>Certains sous-traitants opèrent en dehors de l&apos;Espace économique européen (EEE). Ces transferts sont encadrés par des <strong className="text-white/80">clauses contractuelles types</strong> (CCT) adoptées par la Commission européenne (article 46(2)(c) du RGPD), et/ou par le cadre de protection des données UE-US (EU-US Data Privacy Framework) lorsque applicable.</p>
        </InfoCard>

        {/* ---- 7. Conservation ---- */}
        <SectionTitle id="conservation" number="7" title="Durées de conservation" />
        <Paragraph>
          Conformément au principe de limitation de la conservation (article 5(1)(e) du RGPD), les données sont conservées uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
        </Paragraph>
        <DataTable
          headers={["Type de données", "Durée de conservation", "Justification"]}
          rows={[
            ["Données des guests", "3 ans après le dernier séjour", "Gestion de la relation client"],
            ["Conversations WhatsApp", "90 jours après le check-out", "Support et qualité de service"],
            ["Transcriptions audio", "30 jours", "Traitement temporaire"],
            ["Journaux de consentement", "5 ans", "Obligation de preuve (accountability RGPD)"],
            ["Données techniques (logs)", "12 mois", "Sécurité et diagnostic"],
            ["Base de connaissances hôtel", "Durée du contrat + 30 jours", "Exécution du contrat"],
          ]}
        />
        <Paragraph>
          À l&apos;expiration de ces durées, les données sont automatiquement supprimées ou anonymisées de manière irréversible. Des mécanismes de purge automatique sont en place pour garantir le respect de ces délais.
        </Paragraph>

        {/* ---- 8. Droits ---- */}
        <SectionTitle id="droits" number="8" title="Vos droits" />
        <Paragraph>
          Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données personnelles :
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { title: "Droit d'accès", desc: "Obtenir la confirmation que vos données sont traitées et en recevoir une copie (article 15)." },
            { title: "Droit de rectification", desc: "Faire corriger vos données inexactes ou incomplètes (article 16)." },
            { title: "Droit à l'effacement", desc: "Demander la suppression de vos données dans les cas prévus par la loi (article 17, « droit à l'oubli »)." },
            { title: "Droit à la limitation", desc: "Obtenir la limitation du traitement dans certaines circonstances (article 18)." },
            { title: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré et lisible par machine (article 20)." },
            { title: "Droit d'opposition", desc: "Vous opposer au traitement fondé sur l'intérêt légitime (article 21)." },
            { title: "Retrait du consentement", desc: "Retirer votre consentement à tout moment, sans affecter la licéité du traitement antérieur (article 7(3))." },
            { title: "Réclamation auprès de la CNIL", desc: "Introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés." },
          ].map((right, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              <p className="text-sm font-medium text-white/80 mb-1">{right.title}</p>
              <p className="text-sm text-white/50 leading-relaxed">{right.desc}</p>
            </div>
          ))}
        </div>

        <InfoCard title="Comment exercer vos droits ?">
          <p>Pour exercer l&apos;un de ces droits, envoyez votre demande à <strong className="text-white/80">contact@marcelle.ai</strong> en précisant votre identité et le droit que vous souhaitez exercer. Nous nous engageons à répondre dans un délai de <strong className="text-white/80">30 jours</strong> conformément au RGPD. En cas de demande complexe, ce délai peut être prolongé de deux mois, auquel cas vous en serez informé.</p>
        </InfoCard>

        <Paragraph>
          Pour les guests des hôtels partenaires, les demandes d&apos;accès et de suppression peuvent également être traitées automatiquement. L&apos;envoi du mot-clé STOP déclenche la cessation immédiate des communications. Une demande de suppression entraîne l&apos;anonymisation irréversible des données, tout en préservant les journaux de consentement requis par la loi.
        </Paragraph>

        {/* ---- 9. Sécurité ---- */}
        <SectionTitle id="securite" number="9" title="Sécurité des données" />
        <Paragraph>
          Conformément à l&apos;article 32 du RGPD, nous mettons en &oelig;uvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque.
        </Paragraph>
        <BulletList items={[
          "Chiffrement en transit (TLS/HTTPS) et au repos pour toutes les données",
          "Base de données hébergée dans l'UE (Francfort) avec chiffrement au repos",
          "Contrôle d'accès basé sur les rôles (RBAC) avec politiques de sécurité au niveau des lignes (RLS)",
          "Authentification sécurisée avec hachage des mots de passe",
          "Journaux d'audit immuables protégés par des triggers de base de données",
          "Isolation des données : chaque hôtel n'accède qu'à ses propres données",
          "Principe du moindre privilège appliqué à tous les accès système",
          "Surveillance continue et alertes de sécurité",
        ]} />

        {/* ---- 10. Cookies ---- */}
        <SectionTitle id="cookies" number="10" title="Cookies" />
        <Paragraph>
          Le site marcelle.ai utilise un nombre minimal de cookies, limités aux cookies strictement nécessaires au fonctionnement technique du site.
        </Paragraph>
        <DataTable
          headers={["Cookie", "Finalité", "Durée", "Type"]}
          rows={[
            ["Session", "Maintien de la session utilisateur", "Durée de la session", "Strictement nécessaire"],
            ["Préférences", "Mémorisation des choix de l'utilisateur", "12 mois", "Strictement nécessaire"],
          ]}
        />
        <Paragraph>
          Aucun cookie de tracking, publicitaire ou analytique tiers n&apos;est utilisé. Si cette politique devait évoluer, un bandeau de consentement conforme à la directive ePrivacy serait mis en place.
        </Paragraph>

        {/* ---- 11. Modifications ---- */}
        <SectionTitle id="modifications" number="11" title="Modifications de la politique" />
        <Paragraph>
          Nous nous réservons le droit de modifier cette politique de confidentialité afin de refléter les évolutions de nos pratiques ou de la réglementation applicable. En cas de modification substantielle :
        </Paragraph>
        <BulletList items={[
          "La date de mise à jour en haut de cette page sera actualisée",
          "Les hôtels partenaires seront notifiés par email",
          "Si nécessaire, un nouveau consentement sera sollicité pour les traitements concernés",
        ]} />

        {/* ---- 12. Contact ---- */}
        <SectionTitle id="contact" number="12" title="Contact" />
        <Paragraph>
          Pour toute question relative à cette politique de confidentialité ou à la protection de vos données personnelles, vous pouvez nous contacter :
        </Paragraph>
        <InfoCard title="Coordonnées">
          <p>Email : <strong className="text-white/80">contact@marcelle.ai</strong></p>
          <p>Site web : <strong className="text-white/80">marcelle.ai</strong></p>
        </InfoCard>
        <Paragraph>
          Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :
        </Paragraph>
        <InfoCard title="Autorité de contrôle">
          <p>CNIL - Commission Nationale de l&apos;Informatique et des Libertés</p>
          <p>3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07</p>
          <p>Site : cnil.fr</p>
        </InfoCard>

        {/* ---- Disclaimer ---- */}
        <div className="mt-16 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <p className="text-xs text-white/30 leading-relaxed">
            Cette politique de confidentialité est fournie à titre informatif. Elle ne constitue pas un avis juridique. Pour des questions spécifiques relatives à la conformité de vos traitements, nous vous recommandons de consulter un professionnel du droit spécialisé en protection des données personnelles. Conformément au RGPD (Règlement UE 2016/679) et au Règlement sur l&apos;intelligence artificielle (Règlement UE 2024/1689).
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
              <Link href="/confidentialite" className="text-white/70">Confidentialité</Link>
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
