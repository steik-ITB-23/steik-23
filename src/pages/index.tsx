import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-slate-50 ${inter.className}`}>
      <div className="h-fit">
        <Navbar />
      </div>
      <section className="flex-grow flex items-center">
        <ComingSoon showKembali={false} />
      </section>
    </main>
  );
}
