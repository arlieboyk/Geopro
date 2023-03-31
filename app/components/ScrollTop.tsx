"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import ScrollToTop from "react-scroll-up";

function ScrollTop() {
  return (
    <ScrollToTop showUnder={160}>
      <span>
        <ChevronDoubleUpIcon className="h-12 w-12 rounded-full p-3 text-gray-400 hover:bg-[#0088cc] hover:text-white" />
      </span>
    </ScrollToTop>
  );
}

export default ScrollTop;
