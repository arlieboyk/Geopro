"use client";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";
export default function CarouselSection() {
  const [isButtonShown, setButton] = useState(false);

  // onmouseover = (event) => {};
  return (
    <section className="relative  ">
      <Carousel className="text-gray- h-screen w-full text-gray-900 backdrop-blur backdrop-filter">
        <div className="flex w-full flex-col items-center justify-center px-2 text-center dark:bg-gray-700 dark:text-white">
          <h2 className="text-3xl font-bold">Geopro Global Solutions</h2>
          <h1 className="text-4xl font-bold">
            Enterprise Resource Planning (ERP)
          </h1>
          <p>
            Our ERP Services are suitable for companies that require
            implementation of modern technologies to run their business
            effectively.
            <br /> We build, customize, and ingrate complex software solutions
            and business applications.
          </p>
        </div>
        <div className="text-cente flex h-full flex-col items-center justify-center bg-opacity-50 px-2 text-center  dark:bg-gray-700 dark:text-white">
          <h2 className="text-3xl">-Mobile-</h2>
          <h1 className="text-7xl font-bold">IOS / ANDROID</h1>
        </div>
        <div className="flex h-full flex-col items-center justify-center  bg-opacity-50 px-2 text-center dark:bg-gray-700 dark:text-white">
          <h2 className="text-3xl font-bold">Geopro Global Solutions</h2>
          <h1 className="text-4xl font-bold">
            Enterprise Resource Planning (ERP)
          </h1>
          <p>
            Our ERP Services are suitable for companies that require
            implementation of modern technologies to run their business
            effectively. We build, customize, and ingrate complex software
            solutions and business applications.
          </p>
        </div>
      </Carousel>
    </section>
  );
}
