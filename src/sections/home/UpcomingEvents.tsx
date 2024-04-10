import Event from "@/components/Event";
import React from "react";

const UpcomingEvents = () => {
  return (
    <section className="font-inter w-full" data-aos="fade-up">
      <h1 className="text-center font-bold text-2xl lg:text-4xl xl:text-5xl pt-20">STEI-K 23 | Upcoming Events</h1>
      <div className="w-full max-w-[1200px] flex flex-row flex-wrap px-4 justify-center items-center py-10 mx-auto">
        <Event />
        <Event />
        <Event />
      </div>
    </section>
  );
};

export default UpcomingEvents;
