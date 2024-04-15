import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import AkademikCard from "@/components/AkademikCard";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/*
      <Head>
        <title>Akademik | STEI-K 23</title>
      </Head>
      <Navbar />
    */}
      <section className="flex-grow flex flex-col items-center bg-[#000141] justify-center w-full max-w-full max-h-full overflow-x-hidden relative">
        {/*
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          
          <div className="absolute top-0 left-0 transform -translate-x-[200px] -translate-y-[100px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#87DFFF] to-transparent blur-[120px]"></div>
          
          <div className="absolute top-0 right-0 transform translate-x-[300px] -translate-y-[200px] w-[888px] h-[888px] rounded-full bg-gradient-to-br from-[#FBC4FD] to-transparent blur-[120px]"></div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            transform: "translate(-[300px], -[300px])",
          }}
        >
          <Image
            src="/Akademik/Book.svg"
            alt="My SVG"
            width={500}
            height={500}
          />
        </div>
        */}
        {/* Section 1 */}
        <section className="h-[82vh] flex flex-col items-start justify-center w-full px-[4%] md:px-[8%] z-10 my-24">
          <div className="font-inter text-[12px] lg:text-[24px] w-full lg:w-[60%] text-white font-normal tracking-[1px] leading-tight text-center lg:text-left mb-24">
            <h1 className="font-Outfit font-extrabold text-[50px] sm:text-[100px] xl:text-[140px] tracking-normal text-white text-center lg:text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              AKADEMIK
            </h1>
            Akses seluruh materi TPB STEI mulai dari rangkuman materi, latihan
            soal, tubay, UTS, UAS, praktikum, tugas besar dan seluruh keperluan
            akademik lainnya!
          </div>
        </section>
        {/* Section 1 */}
        <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10 mb-20">
          <div className="flex flex-row items-center justify-center w-full max-w-full mx-24 mb-8">
            <div className="">
              <Image
                src="/Akademik/left.svg"
                alt="My SVG"
                width={8}
                height={8}
              />
            </div>
            <div className="font-Mo text-[24px] text-white mx-4 font-bold tracking-[1px] leading-tight text-left">
              AKADEMIK
            </div>
            <hr className="border-white border-solid border-t-2 w-full" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="mb-6 font-Outfit font-extrabold text-[55px] sm:text-[80px] lg:text-[125px] tracking-normal text-white text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              SEMESTER 1
            </h1>
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 justify-items-center">
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Mat.svg"
                  heading="Matematika IA"
                  LinkTo="../"
                >
                  MA1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Fis.svg"
                  heading="Fisika Dasar IA"
                  LinkTo="../"
                >
                  FI1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Indo.svg"
                  heading="Tata Karya Tulis Ilmiah"
                  LinkTo="../"
                >
                  KU1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Ing.svg"
                  heading="Bahasa Inggris"
                  LinkTo="../"
                >
                  KU1024
                </AkademikCard>
              </div>
              <div className="w-full col-start-auto 2xl:col-start-2">
                <AkademikCard
                  imageUrl="/Akademik/Prd.svg"
                  heading="Pengantar Rekayasa dan Design"
                  LinkTo="../"
                >
                  KU1202
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Pengkom.svg"
                  heading="Pengenalan Komputasi"
                  LinkTo="../"
                >
                  KU1102
                </AkademikCard>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10 mb-40">
          <div className="w-full border-t-2 flex flex-col justify-center items-center">
            <h1 className="my-6 font-Outfit font-extrabold text-[55px] sm:text-[80px] lg:text-[125px] tracking-normal text-white text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              SEMESTER 2
            </h1>
            <div className="w-full grid grid-cols-2 px-4 md:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 justify-items-center">
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Mat.svg"
                  heading="Matematika IIA"
                  LinkTo="../akademik/MatematikaIIA/"
                >
                  MA1201
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Fis.svg"
                  heading="Fisika Dasar IIA"
                  LinkTo="../"
                >
                  FI1201
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Kim.svg"
                  heading="Kimia Dasar B"
                  LinkTo="../"
                >
                  KU1002
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Indo.svg"
                  heading="Komputasi dan Masyarakat"
                  LinkTo="../"
                >
                  II1101
                </AkademikCard>
              </div>
              <div className="w-full col-start-auto 2xl:col-start-2">
                <AkademikCard
                  imageUrl="/Akademik/Or.svg"
                  heading="Olah Raga"
                  LinkTo="../"
                >
                  KU1001
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Pengkom.svg"
                  heading="Dasar Pemrograman"
                  LinkTo="../"
                >
                  IF1210
                </AkademikCard>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default index;
