import Navbar from "@/components/Navbar";
import React from "react";
import LoadingCube from "@/components/LoadingCube";

const loading = () => {
  return (
    <div className="h-screen w-screen flex flex-col font-outfit">
      <Navbar />
      <div className="h-0 w-full grow flex flex-col items-center justify-center">
        <LoadingCube />
        <p className="animate-pulse text-2xl py-20">Syntax loading...</p>
      </div>
    </div>
  );
};

export default loading;
