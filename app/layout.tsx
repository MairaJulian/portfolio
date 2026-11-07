import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const url = "https://mairajulian.netlify.app";
const title = `${site.nombre} | ${site.rol}`;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description: site.descripcion,
  openGraph: {
    type: "website",
    url,
    siteName: site.nombre,
    locale: "es_AR",
    title,
    description: site.descripcion,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.descripcion,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
