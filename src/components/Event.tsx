import React from "react";

const Event = () => {
  return (
    <div className="flex gap-4 border-[1px] drop-shadow-xl hover:drop-shadow-2xl border-[#666] p-4 rounded-2xl mx-4 my-2 bg-[#F1F2F8]">
      <div className="flex flex-col gap-1 p-2 bg-[#101351] text-[#F1F2F8] rounded-xl items-center justify-center aspect-square w-auto h-14 lg:h-20 shrink-0 grow-0">
        <p className="font-bold text-lg md:text-xl">Mar</p>
        <p className="font-light text-lg md:text-xl">23</p>
      </div>
      <div className="flex flex-col gap-1 items-start justify-center shrink-0 grow-0">
        <p className="text-[#101351] text-lg font-bold">UTS MATEMATIKA IIA</p>
        <p className="font-light">Sabtu, 23 Maret 2024</p>
      </div>
    </div>
  );
};

export default Event;
