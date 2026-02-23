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
  metadataBase: new URL("https://srv756238.hstgr.cloud"),
  title:
    "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
  description:
    "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation vidéo et maintient le lien avec les familles. Configuration sur mesure, compatible avec tous les logiciels de soins. Conforme RGPD et IA Act.",
  keywords: [
    "agent IA EHPAD",
    "agent IA maison de retraite",
    "intelligence artificielle EHPAD",
    "transmissions soignantes IA",
    "formation EHPAD",
    "lien familles EHPAD",
    "logiciel EHPAD",
    "assistant IA soignant",
    "transmissions vocales EHPAD",
    "RGPD EHPAD",
    "IA Act santé",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "https://srv756238.hstgr.cloud",
  },
  openGraph: {
    title:
      "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation vidéo et maintient le lien avec les familles. Compatible avec tous les logiciels de soins.",
    url: "https://srv756238.hstgr.cloud",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation vidéo et maintient le lien avec les familles. Compatible avec tous les logiciels de soins.",
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
