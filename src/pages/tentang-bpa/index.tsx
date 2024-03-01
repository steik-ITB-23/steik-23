import BPACard from "@/components/BPACard";
import BPAInfo from "@/components/BPAinfo";
import BPAbutton from "@/components/BPAbutton";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

type member = {
  name: string;
  imgUrl: string;
};
type bpaType = {
  name: string;
  jobDesc: string;
  members: member[];
};

const index = () => {
  return (
    <>
      <Head>
        <title>BPA | STEI-K 23</title>
      </Head>
      <Navbar />
      <section className="flex-grow flex flex-row items-center justify-center w-full overflow-x-clip max-w-[100vw] overflow-hidden relative h-0 min-h-fit max-h-full">
        {/* nav */}
        <section className="h-full w-fit flex flex-col  items-start justify-start gap-2 px-4 self-stretch">
          <div className="h-fit w-auto pt-2 flex flex-row items-center justify-center">
            <h1 className="font-bold text-xl text-left">Syntax | STEI-K 23</h1>
          </div>
          <div className="w-full flex flex-col h-fit">
            <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2">
              {bpaListGeneral.map((bpa) => (
                <BPAbutton key={bpa.name} data={bpa} />
              ))}
            </div>
            <div>
              <h2 className="pt-4 border-b border-slate-500">External</h2>
              <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2 pt-2">
                {bpaListExternal.map((bpa) => (
                  <BPAbutton key={bpa.name} data={bpa} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="pt-4 border-b border-slate-500">Internal</h2>
              <div className="w-full md:w-[200px] h-fit flex flex-row flex-wrap justify-start items-start gap-2">
                {bpaListInternal.map((bpa) => (
                  <BPAbutton key={bpa.name} data={bpa} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Info BPA */}
        <section className="h-full w-0 flex-grow overflow-y-scroll" id="right">
          <div className="bg-slate-100">
            <br></br>
          </div>
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

export default index;

const bpaListGeneral: bpaType[] = [
  {
    name: "Ketua Angkatan",
    jobDesc:
      "Memiliki tugas utama memimpin organisasi dan bertanggung jawab atas keputusan di dalamnya. Menjadi perwakilan STEI-K 2023 di ranah antarfakultas TPB dan kegiatan lain di ITB. Mengkoordinasikan seluruh bidang dan divisi dalam BPA STEI-K 2023. Mengawasi kinerja BPA dan memonitoring keberjalanan program kerja yang dilaksanakan. Mengkoordinasikan program kerja serta timeline-nya.",
    members: [
      {
        name: "Surya Suharna",
        imgUrl: "",
      },
    ],
  },
  {
    name: "Wakil Ketua Angkatan",
    jobDesc: "",
    members: [
      {
        name: "Persada Ramiiza Abyudaya",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM 1 External",
    jobDesc: "",
    members: [
      {
        name: "Wisa Ahmaduta Dinutama",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM 2 External",
    jobDesc: "",
    members: [
      {
        name: "Najwa Kahani Fatima",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM 1 Internal",
    jobDesc: "",
    members: [
      {
        name: "Qodri Azkarayan",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM 2 Internal",
    jobDesc: "",
    members: [
      {
        name: "Farrel Athalla Putra",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM of Finance",
    jobDesc: "",
    members: [
      {
        name: "Muhammad Azizdzaki Khrisnanurmuflih",
        imgUrl: "",
      },
    ],
  },
  {
    name: "GM of HRD",
    jobDesc: "",
    members: [
      {
        name: "Muhamad Hasbullah",
        imgUrl: "",
      },
    ],
  },
];

const bpaListExternal: bpaType[] = [
  {
    name: "Akademik",
    jobDesc: "",
    members: [
      { name: "Zulfaqqar Nayaka Athadiansyah", imgUrl: "" },
      { name: "Mochammad Fariz Rifqi Rizqulloh", imgUrl: "" },
      { name: "Muhammad Fathur Rizky", imgUrl: "" },
      { name: "Darrel Adinarya Sunanda", imgUrl: "" },
      { name: "Azfa Radhiyya Hakim", imgUrl: "" },
      { name: "Razi Rachman Widyadhana", imgUrl: "" },
    ],
  },
  {
    name: "IT",
    jobDesc: "",
    members: [
      { name: "Yonatan Edward Njoto", imgUrl: "" },
      { name: "Michael Ballard Isaiah Silaen", imgUrl: "" },
      { name: "Dave Daniell Yanni", imgUrl: "" },
      { name: "Alvin Christopher Santausa", imgUrl: "" },
    ],
  },
  {
    name: "Punakawan",
    jobDesc: "",
    members: [
      { name: "Ahsan Malik Al Farisi", imgUrl: "" },
      { name: "Naura Ayurachmani", imgUrl: "" },
      { name: "Mayla Yaffa Ludmilla", imgUrl: "" },
      { name: "Gabriela Jennifer Sandy", imgUrl: "" },
      { name: "Raka Daffa Iftikhaar", imgUrl: "" },
      { name: "Muhammad Adha Ridwan", imgUrl: "" },
      { name: "Jessica Allen", imgUrl: "" },
    ],
  },
];
const bpaListInternal: bpaType[] = [
  {
    name: "Publikasi",
    jobDesc: "",
    members: [
      { name: "Princessfa Azzahra Alvin", imgUrl: "" },
      { name: "Nazwan Siddqi Muttaqin", imgUrl: "" },
      { name: "Haegen Quinston Sutomo", imgUrl: "" },
      { name: "Stanislaus Ardy Bramantyo", imgUrl: "" },
    ],
  },
  {
    name: "Creative Event",
    jobDesc: "",
    members: [
      { name: "Desati Dinda Saraswati", imgUrl: "" },
      { name: "Muhammad Timur Kanigara", imgUrl: "" },
      { name: "Adam Joaquin Girsang", imgUrl: "" },
      { name: "Alma Felicia Vielrizki", imgUrl: "" },
      { name: "Hasri Fayadh Muqaffa", imgUrl: "" },
    ],
  },
  {
    name: "Desain",
    jobDesc: "",
    members: [
      { name: "Leticia Aldina Trulykinanti", imgUrl: "" },
      { name: "Aulia Azka Azzahra", imgUrl: "" },
      { name: "Naila Selvira Budiana", imgUrl: "" },
      { name: "Frederiko Eldad Mugiyono", imgUrl: "" },
    ],
  },
  {
    name: "Public Relation",
    jobDesc: "",
    members: [
      { name: "Kevin Azra", imgUrl: "" },
      { name: "Muhammad Faiz Alfikrona", imgUrl: "" },
      { name: "Muhammad Aymar Barkhaya", imgUrl: "" },
      { name: "Kefas Kurnia Jonathan", imgUrl: "" },
      { name: "Aliya Harta Ary Utama", imgUrl: "" },
      { name: "Adinda Putri", imgUrl: "" },
      { name: "Henrycus Hugatama Risaldy", imgUrl: "" },
    ],
  },
  {
    name: "Project",
    jobDesc: "",
    members: [
      { name: "Allodya Qonnita Arofa", imgUrl: "" },
      { name: "Wijaksara Aptaluhung", imgUrl: "" },
      { name: "Brian Albar Hadian", imgUrl: "" },
    ],
  },
  {
    name: "HRD",
    jobDesc: "",
    members: [
      { name: "Barru Adi Utomo", imgUrl: "" },
      { name: "Arqila Surya Putra", imgUrl: "" },
      { name: "Naomi Risaka Sitorus", imgUrl: "" },
      { name: "Lidya Marthadilla", imgUrl: "" },
      { name: "Dita Maheswari", imgUrl: "" },
      { name: "Sendi Putra Alicia", imgUrl: "" },
      { name: "Aldoy Fauzan Avanza", imgUrl: "" },
      { name: "Ni Made Sekar Jelita Parameswari", imgUrl: "" },
      { name: "Anella Utari Gunadi", imgUrl: "" },
      { name: "Rayhan Hidayatul Fikri", imgUrl: "" },
      { name: "Muhammad Fithra Rizki", imgUrl: "" },
    ],
  },
  {
    name: "Finance",
    jobDesc: "",
    members: [
      { name: "Nawaf Amjad Rizqi Aldaha Ismail", imgUrl: "" },
      { name: "Nurul Na'im Natifah", imgUrl: "" },
      { name: "Sabilul Huda", imgUrl: "" },
      { name: "Muhammad Raihaan Perdana", imgUrl: "" },
      { name: "Nakeisha Valya Shakila", imgUrl: "" },
    ],
  },
];
