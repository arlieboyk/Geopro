"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import ScrollToTop from "react-scroll-up";

function ScrollTop() {
  return (
    <ScrollToTop topPosition={1} easing="easeOutSine" showUnder={20}>
      <span>
        <ChevronDoubleUpIcon className="z-[99] h-12 w-12 rounded-full bg-[#0088cc] bg-opacity-50 p-3 text-gray-200 hover:bg-[#0088cc] hover:bg-opacity-100 hover:text-white" />
      </span>
    </ScrollToTop>
  );
}

export default ScrollTop;
