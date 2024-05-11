"use client";
import Navbar from "@/components/Navbar";
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";
import React, { useState } from "react";
import { AkademikList } from "@/assets/data/akademik";
import AkademikCard from "@/components/AkademikCard";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import Footer from "@/components/Footer";

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("view");
  const params = useParams<{ name: string }>();
  console.log(params);
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full bg-white grow">
        <section className="h-full w-full flex flex-row items-center justify-center pt-10">
          <button>
            <IoIosArrowBack className="text-5xl" color="#101351" />
          </button>
          <h1 className="text-[#101351] uppercase text-6xl items-center text-center p-4 font-bold font-outfit">Matkul</h1>
        </section>
        <section>
          <div className=" relative flex flex-col justify-center items-center w-full">
            <div className="relative w-[80%]">
              <input
                type="search"
                placeholder="   Search..."
                className="w-full p-2 pl-10 rounded-full bg-[#EDECEC] m-4 text-[#838383] font-outfit"
                onChange={(e) => {
                  console.log(e.target.value);
                }}></input>
              <IoIosSearch className="absolute top-1.5 left-4 mt-4 ml-3  text-2xl" color="#838383" />
            </div>
          </div>
        </section>
        <section className=" relative flex flex-row justify-center items-center w-full max-w-[900px] mx-auto shrink-0 px-[20px]">
          <Link
            className="p-4 grow text-gray-400 border-b-[2px] hover:border-black hover:border-b hover:text-black font-outfit text-center"
            href="">
            MATERI
          </Link>
          <Link
            className="p-4 grow text-gray-400 border-b-[2px] hover:border-black hover:border-b hover:text-black font-outfit text-center "
            href="">
            BANK SOAL
          </Link>
          <Link
            className="p-4 grow text-gray-400 border-b-[2px]  hover:border-black hover:border-b hover:text-black font-outfit text-center"
            href="">
            TUTORIAL
          </Link>
        </section>
        <section className="flex flex-col items-center justify-start mt-6 px-2">
          <div className="flex flex-wrap w-fit max-w-full  justify-start ">
            {AkademikList.map((akademik) => (
              <div className="w-full sm:w-[50%] md:w-[33.3%] lg:w-[25%] px-4 py-2" key={akademik.name}>
                <AkademikCard data={akademik} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Page;
