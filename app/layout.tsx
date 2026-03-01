import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcelle.ai"),
  title: "Marcelle - Agent IA medico-social | Transmissions, formation et lien familles",
  description: "Marcelle est l'agent IA pour le medico-social qui simplifie les transmissions, centralise la formation et maintient le lien avec les familles. EHPAD, IME, MAS, FAM, ESAT, SESSAD et tous les ESMS.",
  keywords: [
    "agent IA medico-social",
    "agent IA EHPAD",
    "agent IA IME",
    "agent IA MAS",
    "agent IA ESAT",
    "intelligence artificielle medico-social",
    "transmissions IA",
    "logiciel ESMS",
    "assistant IA soignant",
    "transmissions vocales",
    "RGPD medico-social",
    "IA Act sante",
    "agent IA etablissement medico-social",
    "agent IA FAM",
    "agent IA SESSAD",
    "agent IA foyer de vie",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: "https://marcelle.ai",
    languages: {
      fr: "https://marcelle.ai",
    },
  },
  openGraph: {
    title: "Marcelle - Agent IA medico-social | Transmissions, formation et lien familles",
    description: "Marcelle est l'agent IA pour le medico-social qui simplifie les transmissions, centralise la formation et maintient le lien avec les familles. EHPAD, IME, MAS, FAM, ESAT, SESSAD et tous les ESMS.",
    url: "https://marcelle.ai",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professionnelle utilisant le biper Marcelle en etablissement medico-social",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelle - Agent IA medico-social | Transmissions, formation et lien familles",
    description: "Marcelle est l'agent IA pour le medico-social qui simplifie les transmissions, centralise la formation et maintient le lien avec les familles.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${dmSerif.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
