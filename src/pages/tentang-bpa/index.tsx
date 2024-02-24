import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <div className="h-fit">
        <Navbar />
      </div>
      <div className="flex-grow flex items-center">
        <ComingSoon />
      </div>
    </>
  );
};

export default index;
