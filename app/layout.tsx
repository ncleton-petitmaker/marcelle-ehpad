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
  title:
    "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
  description:
    "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation et maintient le lien avec les familles.",
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
    canonical: "https://marcelle.ai",
    languages: {
      fr: "https://marcelle.ai",
    },
  },
  openGraph: {
    title:
      "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation et maintient le lien avec les familles.",
    url: "https://marcelle.ai",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aide-soignante utilisant le biper Marcelle dans la chambre d'une résidente en EHPAD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marcelle - Agent IA EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'agent IA EHPAD qui simplifie les transmissions soignantes, centralise la formation et maintient le lien avec les familles.",
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
