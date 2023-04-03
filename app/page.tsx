"use client";
import { useState } from "react";
import Development from "./components/Homepage/Development";
import Carousel1 from "./components/Homepage/Carousel";
import Avengers from "./components/Homepage/Avengers";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  return (
    <>
      <Carousel1 />
      <Development />

      <Avengers />

<<<<<<< HEAD
      {/* scroll to top */}
      <ScrollToTop showUnder={160}>
        <span>
          <ChevronDoubleUpIcon className="h-12 w-12 rounded-full p-3 text-gray-400 hover:bg-[#0088cc] hover:text-white" />
        </span>
      </ScrollToTop>
=======
      <ScrollTop></ScrollTop>
>>>>>>> af58a939c786722f9a262c6832d6747c85672426
    </>
  );
}
