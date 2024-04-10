"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import Image from "next/image";
import FeedbackForm from "./FeedbackForm";

const Footer = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const onSubmit = async (feedback: string, isAnonymous: boolean, senderName?: string) => {
    try {
      console.log(feedback, isAnonymous, senderName);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`fixed left-0 w-screen h-screen bg-black/10 flex items-center justify-center ease-in duration-200 z-[300] ${
          showFeedback ? "top-0" : "-top-[100vh]"
        }`}
        onClick={() => {
          console.log("hahsh");
          setShowFeedback(false);
        }}>
        <div className="bg-[#e8eaf0] w-fit rounded-[24px]">
          <FeedbackForm onSubmit={onSubmit} />
        </div>
      </div>
      <footer className="w-full h-fit px-4 lg:px-8 bg-[#151655] text-white z-[100]">
        <div className="w-full h-full grow-0 flex flex-col mx-auto py-2">
          <div className="border-b-2 border-white flex flex-col lg:flex-row justify-between py-2">
            <div className="flex flex-col lg:flex-row justify-between grow">
              <div className="flex gap-2 items-center grow">
                <div className="w-14 h-14 rounded-full">
                  <Image
                    src="https://utfs.io/f/268119f9-7747-4839-b494-9ae24a759506-x5d2zz.png"
                    className={`w-full h-full cursor-pointer object-contain`}
                    height={300}
                    width={300}
                    alt="Logo STEI-K 23"
                    blurDataURL="https://utfs.io/f/268119f9-7747-4839-b494-9ae24a759506-x5d2zz.png"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center font-outfit">
                  <p className="uppercase font-bold text-2xl leading-4">Syntax</p>
                  <p>code, create, connect</p>
                </div>
              </div>
              <div className="flex pl-2 py-4 lg:py-0 flex-col sm:flex-row justify-evenly items-start lg:items-center font-light grow">
                <Link href="/">About Us</Link>
                <Link href="/">Support Us</Link>
                <Link href="/">Contact Us</Link>
                <Link href="/">Media Kit</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center pb-2 lg:pb-0 items-start lg:items-end grow max-w-[23%]">
              <p>Like What You&apos;re Seeing?</p>
              <p>Give us feedback!</p>
              <div className="flex cursor-pointer" onClick={() => setShowFeedback(true)}>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-4">
            <div className="py-2">
              <p>&copy; 2024 BPA Academics STEI-K 2023. All rights reserved.</p>
            </div>
            <div className="py-2 gap-4 flex flex-row items-center">
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
              <FaXTwitter />
              <SiLinktree />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
