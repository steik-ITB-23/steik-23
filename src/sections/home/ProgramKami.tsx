"use client";
import React, { useEffect, useState } from "react";

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  return [
    {
      imgUrl: "https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png",
      topic: "TPB Cup 2024",
      lable: "Bola Basket Putra - STEI",
    },
    {
      imgUrl: "https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png",
      topic: "TPB Cup 2024",
      lable: "Bola Basket Putra - STEI",
    },
    {
      imgUrl: "https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png",
      topic: "TPB Cup 2024",
      lable: "Bola Basket Putra - STEI",
    },
  ];
}
type ProgramKami = {
  imgUrl: string;
  topic: string;
  lable: string;
};

const ProgramKami = () => {
  const [data, setData] = useState<ProgramKami[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getData();
      setData(pageData);
    };
    fetchData();
  }, []);

  return (
    <section className="font-inter w-full" data-aos="fade-up">
      <h1 className="text-center font-bold text-2xl lg:text-4xl xl:text-5xl pt-20">Program Kami | STEI-K 23</h1>
      <div className="w-full flex flex-row flex-wrap px-10 justify-center py-10 max-w-[1600px] mx-auto">
        <Swiper
          slidesPerView={1}
          speed={900}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}>
          {data?.map((el, i) => (
            <SwiperSlide key={el.imgUrl + i}>
              <div className="flex flex-col lg:flex-row w-0 min-w-full py-10 px-20 gap-8">
                <Image
                  src="https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png"
                  alt="https://utfs.io/f/b6a7cd72-d4f0-426c-ac8b-b4df3d829b2c-wulzyk.png"
                  width={1200}
                  height={900}
                  className="h-full w-full lg:w-1/2 lg:max-w-[50%] object-cover select-none rounded-xl drop-shadow-md hover:drop-shadow-xl"
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="font-bold" style={{ fontSize: "40px" }}>
                    Tutor Sebaya
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProgramKami;
