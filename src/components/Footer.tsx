import Link from "next/link";
import React from "react";
import { IoIosStarOutline } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full h-fit px-4 md:px-8 bg-[#151655] text-white">
      <div className="w-full h-full grow-0 flex flex-col mx-auto py-2">
        <div className="border-b-2 border-white flex flex-col md:flex-row justify-between py-2">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-white rounded-full" />
            <div className="flex flex-col justify-center">
              <p>Syntax</p>
              <p>Code Create Connect</p>
            </div>
          </div>
          <div className="flex gap-1 md:gap-12 pl-2 py-4 md:py-0 flex-col md:flex-row items-start md:items-center">
            <Link href="/">About Us</Link>
            <Link href="/">Support Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Media Kit</Link>
          </div>
          <div className="flex flex-col justify-center pb-2 md:pb-0 items-start md:items-end">
            <p>Like What You&apos;re Seeing?</p>
            <p>Give us feedback!</p>
            <div className="flex">
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
  );
};

export default Footer;
