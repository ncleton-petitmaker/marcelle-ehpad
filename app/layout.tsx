import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcelle.ai"),
  title:
    "Marcelle - Agent IA hôtel | Concierge IA WhatsApp pour hôtels d'exception",
  description:
    "Marcelle est l'agent IA hôtel qui transforme l'expérience client et la gestion d'équipe. Concierge IA WhatsApp disponible 24h/24, multilingue, conforme RGPD. Chatbot hôtel WhatsApp conçu pour l'hôtellerie de luxe.",
  keywords: [
    "agent IA hôtel",
    "agent IA hôtellerie",
    "concierge IA WhatsApp",
    "intelligence artificielle hôtel",
    "chatbot hôtel WhatsApp",
    "concierge virtuel hôtel",
    "IA hôtellerie de luxe",
    "assistant IA hôtel",
    "WhatsApp hôtel",
    "chatbot hôtelier",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "https://marcelle.ai",
  },
  openGraph: {
    title:
      "Marcelle - Agent IA hôtel | Concierge IA WhatsApp pour hôtels d'exception",
    description:
      "Marcelle est l'agent IA hôtel qui transforme l'expérience client et la gestion d'équipe. Concierge IA WhatsApp disponible 24h/24, multilingue, conforme RGPD.",
    url: "https://marcelle.ai",
    siteName: "Marcelle",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marcelle - Agent IA hôtel | Concierge IA WhatsApp pour hôtels d'exception",
    description:
      "Marcelle est l'agent IA hôtel qui transforme l'expérience client et la gestion d'équipe. Concierge IA WhatsApp disponible 24h/24, multilingue, conforme RGPD.",
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
        className={`${inter.variable} ${playfair.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
