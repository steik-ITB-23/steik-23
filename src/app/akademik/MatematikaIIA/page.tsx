"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import AkademikCard from "@/components/AkademikCard";
import AkademikCard2 from "@/components/AkademikCard2";

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState<string[]>([]);

  useEffect(() => {
    setSelectedOption("Materi");
  }, []);

  // Filter content based on search term and selected option
  useEffect(() => {
    if (selectedOption === "Materi") {
      // Example data
      const materiContent = [
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
        "Catatan Bab 7 Persamaan DIfferensial Orde 1",
      ];
      const filtered = materiContent.filter((heading) =>
        heading.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContent(filtered);
    } else {
      // Handle other options similarly if needed
      setFilteredContent([]);
    }
  }, [searchTerm, selectedOption]);

  return (
    <>
      <Navbar />
      <section className="flex-grow flex flex-col items-center bg-white justify-center w-full max-w-full max-h-full overflow-x-hidden relative py-24">
        {/* Section 1 */}
        <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10">
          <div className="flex flex-row items-center justify-center w-full max-w-full mb-24">
            <Link href="../akademik/">
              <div className="mr-4 md:mr-8 hover:scale-[1.05] transition-transform duration-300">
                <Image
                  src="/akademik/Back.svg"
                  alt="Back"
                  width={20}
                  height={20}
                  objectFit="contain"
                />
              </div>
            </Link>
            <h1 className="font-Outfit font-extrabold text-[40px] sm:text-[100px] xl:text-[140px] tracking-normal text-[#101351] text-center lg:text-center leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              Matematika IIA
            </h1>
          </div>
          {/* Search Bar */}
          <div className="relative w-full sm:w-[75%] lg:w-[60%] mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="border bg-[#EDECEC] px-3 py-2 rounded-[32px] pl-10 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image
                src="/Akademik/Search.svg"
                alt="My SVG"
                width={20}
                height={20}
              />
            </div>
          </div>
          {/* Selection */}
          <div className="flex w-full sm:w-[75%] lg:w-[60%] h-16 items-center justify-center flex-row mb-8">
            <button
              className={`w-full h-full ${
                selectedOption === "Materi"
                  ? "text-black border-b-4 border-black"
                  : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("Materi")}
            >
              MATERI
            </button>
            <button
              className={`w-full h-full ${
                selectedOption === "Bank Soal"
                  ? "text-black border-b-4 border-black"
                  : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("Bank Soal")}
            >
              BANK SOAL
            </button>
            <button
              className={`w-full h-full ${
                selectedOption === "Tutorial"
                  ? "text-black border-b-4 border-black"
                  : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("Tutorial")}
            >
              TUTORIAL
            </button>
          </div>
          {/* Display Text Based on Selection */}
          {selectedOption && (
            <div className="w-full mt-8">
              {selectedOption === "Materi" && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-3 justify-items-center">
                  {filteredContent.map((heading, index) => (
                    <>
                      <div className="w-full" key={index}>
                        <AkademikCard2
                          className="bg-[#101351]"
                          heading={heading}
                        />
                      </div>
                    </>
                  ))}
                </div>
              )}
              {selectedOption === "Bank Soal" && <p>HALO2</p>}
              {selectedOption === "Tutorial" && <p>HALO3</p>}
            </div>
          )}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Home;
