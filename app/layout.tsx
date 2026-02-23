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
    "Marcelle - IA pour EHPAD | Transmissions, formation et lien familles",
  description:
    "Marcelle est l'assistante IA pour EHPAD qui simplifie les transmissions soignantes, centralise la formation video et maintient le lien avec les familles. Conforme RGPD et IA Act.",
  keywords: [
    "IA EHPAD",
    "intelligence artificielle maison de retraite",
    "transmissions soignantes IA",
    "formation EHPAD",
    "lien familles EHPAD",
    "logiciel EHPAD",
    "assistant IA soignant",
    "transmissions vocales EHPAD",
    "RGPD EHPAD",
    "IA Act sante",
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
      "Marcelle - IA pour EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'assistante IA pour EHPAD qui simplifie les transmissions soignantes, centralise la formation video et maintient le lien avec les familles.",
    url: "https://srv756238.hstgr.cloud",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marcelle - IA pour EHPAD | Transmissions, formation et lien familles",
    description:
      "Marcelle est l'assistante IA pour EHPAD qui simplifie les transmissions soignantes, centralise la formation video et maintient le lien avec les familles.",
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
