import React from "react";
import BPACard, { memberBPA } from "./BPACard";

export type bpaType = {
  name: string;
  jobDesc: string;
  members: memberBPA[];
};

const BPAInfo = ({ data }: { data: bpaType }) => {
  return (
    <div className="w-full pb-8" id={data.name}>
      <h2 className="font-bold border-b-2 w-full">{data.name}</h2>
      <p className="py-2">{data.jobDesc}</p>
      <div className="flex gap-2 flex-wrap w-full">
        {data.members.map((member, idx) => (
          <BPACard key={`${idx}-${member}-${data.name}`} name={member.name} imgUrl={member.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default BPAInfo;
