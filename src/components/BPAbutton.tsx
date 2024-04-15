import React from "react";
import Link from "next/link";
import { bpaType } from "./BPAinfo";
import { getSlug } from "@/lib/utils/stringManipulation";

const BPAbutton = ({ data }: { data: bpaType }) => {
  return (
    <Link
      href={`/tentang-bpa/#${getSlug(data.name)}`}
      className="border-[1px] rounded-full border-[#101351] md:border-slate-200 h-fit px-2 py-[2px] hover:bg-slate-50/50 ease-in duration-75">
      <p className="button">
        <span className="text-[#101351] md:text-white text-[16px]">{data.name}</span>{" "}
        {data.members.length > 1 && <span className="font-bold text-[#79B5EE]">{data.members.length}</span>}
      </p>
    </Link>
  );
};

export default BPAbutton;
