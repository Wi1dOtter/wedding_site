import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PolaroidBackground } from "@/components/PolaroidBackground";
import { siteConfig } from "@/content/siteConfig";
import "./globals.css";

const serifDisplay = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sansBody = Source_Sans_3({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serifDisplay.variable} ${sansBody.variable} antialiased font-sans`}
      >
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <PolaroidBackground
            photos={siteConfig.polaroidBackground.global.photos}
            className="z-0"
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
