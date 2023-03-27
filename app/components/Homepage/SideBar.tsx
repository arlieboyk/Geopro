"use client";
import Link from "next/link";
import {
  PhoneIcon,
  ChevronDownIcon,
  ChevronDoubleRightIcon,
  WrenchIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
type Props = {
  sidebar: boolean;
  toggleSideBar: () => void;
  hideSideBar: () => void;
  ousideClick: () => void;
};

function SideBar({ sidebar, toggleSideBar, hideSideBar, ousideClick }: Props) {
  //   const [sideBar, setSideBar] = useState(isOn);
  const content = document.getElementsByClassName("content");

  for (let element of content) {
    if (sidebar === true) {
      element.classList.toggle("pointer-events-none");
      element.classList.toggle("overflow-y-hidden");
    } else {
    }
  }

  /* detect outside sidebar */
  // const refOne = useRef(null);
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  // }, []);

  // const handleClickOutside = (e: any) => {
  //   if (e.target !== null) {
  //     if (!refOne.current.contains(e.target)) {
  //       console.log("clickd ousdie sidebat");
  //       ousideClick();
  //     } else {
  //       console.log("clicked inside");
  //     }
  //   }
  // };
  return (
    <>
      <div
        // ref={refOne}
        className={`fixed left-0 py-2 h-screen transition-all ease-linear  -translate-x-full  flex flex-col ${
          sidebar
            ? " translate-x-0 w-2/4 sm:w-1/3 md:w-1/4 lg:w-1/6   "
            : "-translate-x-full"
        } px-2 bg-opacity-90 bg-slate-800 text-white`}
      >
        <div className="w-full relative h-12">
          <p
            className={` flex items-center   justify-center absolute  right-0 ${
              sidebar ? "" : "left-0"
            } top-0 bottom-0 m-auto    w-8 h-8 rounded-full hover:bg-gray-900 bg-gray-700 hover:text-white`}
            onClick={toggleSideBar}
          >
            <ChevronDoubleRightIcon
              className={` w-5 h-5transition-transform ${
                sidebar ? " -rotate-180" : "-rotate-360"
              }`}
            />
          </p>
        </div>

        {/* menu */}
        <div className="my-2 space-y-3 w-full justify-center items-center flex flex-col ">
          {sidebar ? (
            <Link href={"/"} className="menus">
              <HomeIcon className="h-5 w-5 " /> Home
            </Link>
          ) : (
            <Link href={"/"}>
              <HomeIcon className="menus-icon" />
            </Link>
          )}

          {sidebar ? (
            <Link href={"/services"} className="menus">
              <WrenchIcon className="h-5 w-5 " /> Services
            </Link>
          ) : (
            <PhoneIcon className="menus-icon" />
          )}
          {/* services */}
          {sidebar ? (
            <details className="w-full ">
              <summary className="list-none px-4 py-2 hover:bg-slate-200 hover:font-bold rounded-md hover:text-slate-600 ">
                Services
                <ChevronDownIcon className="w-4 h-4 inline text-lg hover:font-bold  " />
              </summary>
              <div className="mt-2 w-full text-center space-y-3">
                <p className="menus">Easethetics</p>
                <p className="menus">Mambu</p>
                <p className="menus">Outsystems</p>
                <p className="menus">SnappyWire</p>
              </div>
            </details>
          ) : (
            <PhoneIcon className="menus-icon" />
          )}
        </div>

        {sidebar ? (
          <></>
        ) : (
          <button
            onClick={hideSideBar}
            className="absolute bottom-8 mx-auto left-0 right-0 text-center hover:bg-slate-900 hover:text  rounded-full h-10 w-10"
          >
            X
          </button>
        )}
      </div>
    </>
  );
}

export default SideBar;
