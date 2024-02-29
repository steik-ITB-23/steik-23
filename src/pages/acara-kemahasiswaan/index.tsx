import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <section className="flex-grow flex flex-col items-center justify-center w-full max-w-full overflow-x-clip">
        <section className="flex-grow flex items-center bg-slate-50 justify-center w-full px-4">
          <ComingSoon />
        </section>
      </section>
    </>
  );
};

export default index;
