import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <main className={"flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50"}>
      <div className="h-fit">
        <Navbar />
      </div>
      <div className="flex-grow flex items-center">
        <ComingSoon />
      </div>
    </main>
  );
};

export default index;
