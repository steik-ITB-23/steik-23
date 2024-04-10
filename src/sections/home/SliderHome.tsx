"use client";
import React, { useEffect, useState } from "react";

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
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

type SliderData = {
  imgUrl: string;
  topic: string;
  lable: string;
};

const SliderHome = () => {
  const [data, setData] = useState<SliderData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await getData();
      setData(pageData);
    };
    fetchData();
  }, []);

  return (
    <section className="h-0 min-h-screen max-h-screen w-full select-none" data-aos="fade-up">
      <Swiper
        slidesPerView={1}
        speed={900}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        {data?.map((slide, i) => (
          <SwiperSlide key={slide.imgUrl + i}>
            <div className="relative h-full w-full max-h-full max-w-full">
              <div className="absolute h-[100vh] w-[100vw] left-0 p-4 text-white font-outfit flex flex-col-reverse">
                <p className="text-white font-bold" style={{ fontSize: "30px" }}>
                  {slide.topic}
                </p>
                <p className="text-white font-bold" style={{ fontSize: "40px" }}>
                  {slide.lable}
                </p>
              </div>
              <Image
                src={slide.imgUrl}
                alt={slide.topic + slide.lable}
                width={1200}
                height={900}
                className="h-screen min-h-screen max-h-screen w-full object-cover select-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderHome;
