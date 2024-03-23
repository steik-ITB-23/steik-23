import BPAInfo from "@/components/BPAinfo";
import BPAbutton from "@/components/BPAbutton";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { bpaListExternal, bpaListGeneral, bpaListInternal } from "@/assets/data/bpaList";
import { IoMdPerson } from "react-icons/io";
import Image from "next/image";
import { getSlug } from "@/lib/utils/stringManipulation";

const TentangBpa = () => {
  return (
    <>
      <Head>
        <title>BPA | STEI-K 23</title>
      </Head>
      <Navbar />
      <section className="flex-grow flex flex-col md:flex-row items-center justify-center w-full overflow-x-clip relative h-fit">
        {/* nav */}
        <section className="h-full w-full flex flex-col items-start justify-start gap-2 px-0 md:px-4 self-stretch border-r-2 md:w-[210px]">
          <div className="block md:fixed top-0 left-0 px-4 md:h-[100svh] md:shadow-lg overflow-y-auto bg-white md:bg-[#101351]">
            <div className="w-fit h-[4.5rem] hidden md:flex items-center gap-2">
              <div className={`h-4 min-h-full py-2 transition-all duration-300`}>
                <Image
                  src="https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg"
                  className={`w-full h-full cursor-pointer object-contain`}
                  height={30}
                  width={30}
                  alt="Logo STEI-K 23"
                  blurDataURL="https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg"
                  priority
                />
              </div>
              <h1 className={`font-extrabold text-4xl duration-100 ease-in tracking-wider text-[#101351] md:text-white `}>
                Syntax
              </h1>
            </div>
            <div className="h-fit w-auto pt-2 flex flex-col">
              <h1 className="text-sm text-left text[#101351] md:text-white">Syntax | STEI-K 23</h1>
              <h2 className="text-[#101351] md:text-white text-4xl py-1 font-bold">BPA &apos;23</h2>
            </div>
            <div className="w-full flex flex-col h-fit">
              <div className="w-full md:w-[200px] h-fit space-y-1 hidden md:block">
                <h2 className="text-sm font-light uppercase tracking-wider md:pt-4 text-white">Petinggi</h2>
                {bpaListGeneral.map((bpa) => (
                  <Link href={`/tentang-bpa/#${getSlug(bpa.name)}`} key={bpa.name} className="text-lg flex gap-2 items-center">
                    <IoMdPerson color="white" />
                    <p className="text-[16px] text-white hover:brightness-95 rounded-md w-full py-1">{bpa.name}</p>
                  </Link>
                ))}
              </div>
              <div className="block md:hidden">
                <h2 className="pt-4 border-b border-[#101351] text-[#101351]">Petinggi</h2>
                <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2 pt-2">
                  {bpaListGeneral.map((bpa) => (
                    <BPAbutton key={bpa.name} data={bpa} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="pt-4 border-b border-[#101351] md:border-white text-[#101351] md:text-white">External</h2>
                <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2 pt-2">
                  {bpaListExternal.map((bpa) => (
                    <BPAbutton key={bpa.name} data={bpa} />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="pt-4 border-b border-[#101351] md:border-white text-[#101351] md:text-white">Internal</h2>
                <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2 pt-2">
                  {bpaListInternal.map((bpa) => (
                    <BPAbutton key={bpa.name} data={bpa} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info BPA */}
        <section className="h-fit w-full md:w-0 flex-grow pt-10 sm:pt-0 px-4 md:px-20 bg-white" id="right">
          {bpaListGeneral.map((bpa) => (
            <BPAInfo key={bpa.name} data={bpa} />
          ))}
          {bpaListExternal.map((bpa) => (
            <BPAInfo key={bpa.name} data={bpa} />
          ))}
          {bpaListInternal.map((bpa) => (
            <BPAInfo key={bpa.name} data={bpa} />
          ))}
        </section>
      </section>
    </>
  );
};

export default TentangBpa;
