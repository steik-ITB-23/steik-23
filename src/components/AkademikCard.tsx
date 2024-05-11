import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export type AkademikType = {
  name: string;
};

const AkademikCard = ({ data }: { data: AkademikType }) => {
  return (
    <div className="bg-[#101351] w-full h-fit min-h-full lg:h-[9rem] md:h-[8rem] sm:h-[7rem] grow-0 shrink-0 rounded-lg flex flex-col relative">
      <div className="absolute h-full w-full bg-gradient-to-b from-[rgba(255,255,255,0.35)] via-white/0 to-white/0" />
      <div className="w-[80%] mb-auto pt-2 px-2">
        <p className="text-white font-bold sm:text-[17px] text-[26px] line-clamp-3 font-outfit">{data.name}</p>
      </div>

      <div className="w-full h-[2rem] mt-4 pb-2 flex justify-end">
        <button className="flex flex-row items-center hover:scale-95 z-20">
          <div className="p-2">
            <p className="text-white font-outfit ">See Content</p>
          </div>
          <div className="p-2">
            <IoIosArrowForward className="top-3.5 right-0" color="white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default AkademikCard;
