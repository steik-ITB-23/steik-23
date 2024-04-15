import type { Metadata } from "next";
import { Poppins, Outfit, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ScrollUpButton from "@/components/ScrollUpButton";

import "react-loading-skeleton/dist/skeleton.css";
import "aos/dist/aos.css";
import "./globals.css";
import "@/styles/scrollbar.css";
import "@/styles/swiper.css";
import "@/styles/loading_page.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
});
const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
});
const outfit = Outfit({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "STEI-K 23 | Website STEI-K ITB angkatan 2023",
  description:
    "Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer.",
  keywords: "STEI-K, Kampus, ITB, 2023, 23, Teknik Informatika, Sistem dan Teknologi Informasi",
  authors: [{ name: "BPA IT STEI-K 23" }],
  openGraph: {
    description:
      "Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer.",
    images: ["https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg"],
    url: "https://steik23.netlify.app",
    type: "website",
  },
  twitter: {},
  applicationName: "STEI-K 23 | Website STEI-K ITB angkatan 2023",
  icons: {
    apple: "https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg",
    icon: "https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg",
    origin: "https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className={`transition-all duration-500 bg-white`}>
            <main
              className={`relative flex min-h-screen flex-col items-center justify-center mx-auto overflow-x-clip ${poppins.variable} ${inter.variable} ${outfit.variable}`}>
              {children}
            </main>
          </div>
          <ScrollUpButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
