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
  title: "Marcelle - L'agent IA pour les hôtels d'exception",
  description:
    "Un agent, deux missions. Concierge virtuel pour vos guests et assistant de procédures pour vos équipes, directement sur WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Marcelle - L'agent IA pour les hôtels d'exception",
    description:
      "Un agent, deux missions. Concierge virtuel pour vos guests et assistant de procédures pour vos équipes, directement sur WhatsApp.",
    locale: "fr_FR",
    type: "website",
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
