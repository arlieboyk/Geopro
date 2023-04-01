"use client";
import Image from "next/image";
import { Alert, Dropdown } from "flowbite-react";
import { useState } from "react";
import Development from "./components/Homepage/Development";
import Carousel1 from "./components/Homepage/Carousel";
import Avengers from "./components/Homepage/Avengers";
import ScrollToTop from "react-scroll-up";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
export default function Home() {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <Carousel1 />

      <Development />

      <Avengers />

      {/* scroll to top */}
      <ScrollToTop showUnder={160}>
        <span>
          <ChevronDoubleUpIcon className="h-12 w-12 rounded-full p-3 text-gray-400 hover:bg-[#0088cc] hover:text-white" />
        </span>
      </ScrollToTop>
    </>
  );
}
