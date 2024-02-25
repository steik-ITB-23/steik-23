import React, { useEffect, useState } from "react";
import logo from "/public/steik23.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import LoginButton from "./LoginButton";

const NavList = ({ href, routerPathname, lable }: { href: string; routerPathname: string; lable: string }) => (
  <Link href={href} className="hidden md:block h-full">
    <p
      className={
        routerPathname === href
          ? "text-[#0081f9] border-b-2 border-blue-300"
          : "hover:text-[#0081f9] hover:border-b-2 border-blue-300"
      }>
      <span className="text-[16px]">{lable}</span>
    </p>
  </Link>
);

const Navbar = () => {
  const router = useRouter();

  const [scrollDirection, setScrollDirection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [shadow, setShadow] = useState(true);

  useEffect(() => {
    const changeShadow = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setScrollDirection(true);
        setShadow(true);
      } else if (prevScrollPos > currentScrollPos) {
        setScrollDirection(true);
        setShadow(false);
      } else {
        setScrollDirection(false);
        setShadow(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", changeShadow);

    return () => window.removeEventListener("scroll", changeShadow);
  }, [prevScrollPos, scrollDirection]);

  useEffect(() => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      setScrollDirection(true);
    } else {
      setScrollDirection(true);
    }
    setPrevScrollPos(currentScrollPos);
  }, []);
  return (
    <>
      <header
        className={`fixed left-0 top-0 z-10 flex w-full items-center bg-slate-50 px-0 duration-500 ease-in-out ${
          scrollDirection ? "translate-y-0" : "-translate-y-24"
        } ${shadow ? "border-b-2" : "shadow-lg"}`}>
        <div className="w-full px-4">
          <div className="relative flex items-center justify-between">
            <Link href="/" className="w-fit h-[4.5rem] flex items-center gap-2">
              <Image
                src={logo}
                className="cursor-pointer object-contain mix-blend-multiply h-4 min-h-full w-auto py-2"
                height={30}
                width={30}
                alt="Logo STEI-K 23"
                blurDataURL="https://steik23.netlify.app/steik23.svg"
              />
              <h1 className="font-extrabold text-4xl text-blue-900 hover:text-blue-700 duration-100 ease-in ">STEI K 23</h1>
            </Link>
            <div className="flex gap-4 items-center">
              <div className="flex gap-0 py-1 text-[#6B778C] md:gap-4 lg:py-5 xl:gap-6 items-center">
                <NavList href="/" routerPathname={router.pathname} lable="Home" />
                <NavList href="/tentang-bpa" routerPathname={router.pathname} lable="BPA" />
                <NavList href="/akademik" routerPathname={router.pathname} lable="Akademik" />
                <NavList href="/acara-kemahasiswaan" routerPathname={router.pathname} lable="Acara Kemahasiswaan" />
              </div>
              <LoginButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
