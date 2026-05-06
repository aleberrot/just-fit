import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RobotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto-condensed"
})

export const metadata: Metadata = {
  title: "JUST FIT | Tienda de Ropa Deportiva",
  description: "Encuentra el mejor estilo fitness con nuestra colección exclusiva.",
  keywords: ["ropa", "fitness", "gym", "justfit"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${RobotoCondensed.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        <HeroSection />
        
        {children}

        <Footer />   
      </body>
      
    </html>
  );
}
