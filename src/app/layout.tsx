import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { TopBanner } from "@/components/layout/top-banner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://civiccreationcircle.org"),
  title: {
    default: "Civic Creation Circle | Discuss. Change. Impact.",
    template: "%s | Civic Creation Circle",
  },
  description:
    "The Civic Creation Circle (CCC) is a student-led civic engagement organization turning civic curiosity into action through political, legal, and journalistic means.",
  openGraph: {
    title: "Civic Creation Circle",
    description:
      "Student-led civic engagement through political, legal, and journalistic means.",
    siteName: "Civic Creation Circle",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        <TopBanner />
        <Nav />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
