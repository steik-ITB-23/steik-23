"use client";
import Navbar from "@/components/Navbar";
import BPASteik23 from "@/sections/home/BPASteik23";
import ProgramKami from "@/sections/home/ProgramKami";
import SliderHome from "@/sections/home/SliderHome";
import UpcomingEvents from "@/sections/home/UpcomingEvents";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen w-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar mainColor="#F1F2F8" />
      </div>
      <section className="absolute top-0 left-0 flex-grow flex flex-col items-center justify-center w-full overflow-x-clip bg-[#F1F2F8]">
        <SliderHome />

        <div className="px-4 md:px-6 pt-20 pb-10 w-full h-fit font-outfit">
          <div
            className="p-2 text-center space-y-8 py-10 w-full max-w-[1200px] mx-auto rounded-lg drop-shadow-xl bg-[#E9EBF8] hover:drop-shadow-2xl border-[1px] border-slate-400"
            style={{ padding: "20px" }}>
            <p className="text-lg md:text-xl xl:text-2xl">
              Selamat datang di website SYNTAX! Kami menyediakan bebagai tools untuk memudahkan penyaluran informasi dari dan
              kepada massa STEI-K. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p className="text-lg md:text-xl xl:text-2xl">-- TIM WEBSITE STEI-K --</p>
          </div>
        </div>

        <UpcomingEvents />

        <ProgramKami />

        <BPASteik23 />

        <Footer />
      </section>
    </div>
  );
}
