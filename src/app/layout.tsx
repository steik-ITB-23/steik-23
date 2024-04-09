import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
