import Image from "next/image";
import React from "react";

export type memberBPA = {
  name: string;
  imgUrl: string;
};
const BPACard = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className="w-[23%] text-center shadow-md border-2 rounded-xl bg-slate-200">
      <Image
        src={imgUrl || "https://utfs.io/f/7648af4a-e902-454b-b937-b7433ef9aa2b-vbi1vd.svg"}
        alt={name}
        width={300}
        height={700}
        className="object-cover w-full h-auto"
        blurDataURL={imgUrl}
      />
      <p className="border-t-2 border-slate-300 px-2 py-3 font-bold">{name}</p>
    </div>
  );
};

export default BPACard;
