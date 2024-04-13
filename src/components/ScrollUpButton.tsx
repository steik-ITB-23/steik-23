"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      className="fixed bottom-12 sm:bottom-8 lg:bottom-[120px] right-10 rounded-full border-[1px] aspect-square border-slate-600 bg-slate-200 ease-in duration-150 hover:scale-105 z-[200]"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}>
      <AiOutlineArrowUp size={40} />
    </button>
  );
};

export default ScrollUpButton;
