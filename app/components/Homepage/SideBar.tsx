"use client";
import Link from "next/link";
import {
  PhoneIcon,
  ChevronDownIcon,
  ChevronDoubleRightIcon,
  WrenchIcon,
  HomeIcon,
  UserGroupIcon,
  PhoneArrowDownLeftIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { useState, useRef, useEffect } from "react";
type Props = {
  sidebar: boolean;
  toggleSideBar: () => void;
  hideSideBar: () => void;
  ousideClick: () => void;
};

function SideBar({ sidebar, toggleSideBar, hideSideBar, ousideClick }: Props) {
  const [sideBar, setSideBar] = useState(sidebar);

  if (typeof window !== "undefined") {
    const content = [document.getElementById("content")];
    console.log("inside sidebar: ", sideBar);

    useEffect(() => {
      setSideBar(sidebar);
    }, [sidebar]);

    useEffect(() => {
      for (let element of content) {
        if (sideBar) {
          element?.classList.add("pointer-events-none");
        } else {
          element?.classList.remove("pointer-events-none");
        }
      }
    }, [sideBar]);
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
        className={`absolute top-0 left-0 flex  h-screen w-auto -translate-x-full flex-col  bg-slate-800  bg-opacity-90 py-2 
        px-2 text-white transition-all ease-linear md:translate-x-0 ${
          sideBar
            ? " w-2/4 translate-x-0 sm:w-1/3 md:w-1/4 lg:w-1/6   "
            : "-translate-x-full"
        } `}
      >
        <div className="relative h-12 w-full">
          <p
            className={` absolute right-0   flex items-center  justify-center ${
              sideBar ? "" : "left-0"
            } top-0 bottom-0 m-auto    h-8 w-8 rounded-full bg-gray-700 hover:bg-gray-900 hover:text-white`}
            onClick={toggleSideBar}
          >
            <ChevronDoubleRightIcon
              className={` h-5transition-transform w-5 ${
                sideBar ? " -rotate-180" : "-rotate-360"
              }`}
            />
          </p>
        </div>

        {/* menu */}
        <div className="my-2 flex w-full flex-col items-center justify-center space-y-3 ">
          {sideBar ? (
            <Link href={"/"} className="menus">
              <HomeIcon className="h-5 w-5 " /> Home
            </Link>
          ) : (
            <Link href={"/"}>
              <HomeIcon className="menus-icon" />
            </Link>
          )}

          {sideBar ? (
            <Link href={"/services"} className="menus">
              <WrenchIcon className="h-5 w-5 " /> Services
            </Link>
          ) : (
            <Link href={"/services"}>
              <WrenchIcon className="menus-icon" />
            </Link>
          )}

          {sideBar ? (
            <Link className="menus" href={"/employee"}>
              <UserGroupIcon className="h-5 w-5 " /> Employee
            </Link>
          ) : (
            <Link href={"/employee"}>
              <UserGroupIcon className="menus-icon" />
            </Link>
          )}

          {sideBar ? (
            <Link className="menus" href={"/contacts"}>
              <PhoneArrowDownLeftIcon className="h-5 w-5 " /> Contacts
            </Link>
          ) : (
            <Link href={"/contacts"}>
              <PhoneArrowDownLeftIcon className="menus-icon" />
            </Link>
          )}
          {/* services */}
          {sideBar ? (
            <details className="w-full ">
              <summary className="menus list-none rounded-md px-4 py-2 hover:bg-slate-200 hover:font-bold hover:text-slate-600 ">
                <WrenchScrewdriverIcon className="inline h-5 w-5" />
                Services
                <ChevronDownIcon className="inline h-4 w-4 text-lg hover:font-bold  " />
              </summary>
              <div className="mt-2 w-full space-y-3">
                <Link
                  href={"/services/easethetics"}
                  className="menus menus-dropdown-text"
                >
                  Easethetics
                </Link>
                <Link
                  href={"/services/mambu"}
                  className="menus menus-dropdown-text"
                >
                  Mambu
                </Link>

                <Link
                  href={"/services/outsystems"}
                  className="menus menus-dropdown-text"
                >
                  Outsystems
                </Link>

                <Link
                  href={"/services/snappyWire"}
                  className="menus menus-dropdown-text"
                >
                  SnappyWire
                </Link>
              </div>
            </details>
          ) : (
            <WrenchScrewdriverIcon className="menus-icon" />
          )}
        </div>

        {sideBar ? (
          <></>
        ) : (
          <button
            onClick={hideSideBar}
            className="hover:text absolute bottom-8 left-0 right-0 mx-auto h-10 w-10  rounded-full text-center hover:bg-slate-900"
          >
            X
          </button>
        )}
      </div>
    </>
  );
}

export default SideBar;
