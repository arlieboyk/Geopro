"use client";
import Link from "next/link";
import {
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
  sideBar: boolean;
  IsSidebarHidden: boolean;
  toggleSideBar: () => void;
  hideSideBar: () => void;
};

function SideBar({
  sideBar,
  toggleSideBar,
  hideSideBar,
  IsSidebarHidden,
}: Props) {
  // const [sideBar, setSideBar] = useState(sidebar);

  console.log(`inside sidebar:${sideBar ? "true" : "false"}`);

  return (
    <>
      <div
        className={`absolute top-0 h-screen  w-2/4 min-w-min max-w-[12rem] bg-slate-800 px-1 py-5 text-gray-200 transition-all md:w-1/4 lg:w-1/6
     ${sideBar ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="relative hidden h-12 w-full md:block">
          <p
            className={`absolute right-0 top-0 bottom-0  m-auto flex h-8 w-8  items-center justify-center rounded-full bg-gray-700 hover:bg-gray-900 hover:text-white`}
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
            <Link
              onClick={() => {
                toggleSideBar;
                hideSideBar;
              }}
              href={"/"}
              className="menus"
            >
              <HomeIcon className="h-5 w-5 " /> Home
            </Link>
          ) : (
            <Link href={"/"}>
              <div className="group relative">
                <ToolTip text="Home" />
                <HomeIcon className="menus-icon" />
              </div>
            </Link>
          )}

          {sideBar ? (
            <Link href={"/services"} className="menus">
              <WrenchIcon className="h-5 w-5 " /> Services
            </Link>
          ) : (
            <Link href={"/services"}>
              <div className="group relative">
                <ToolTip text="Services" />

                <WrenchIcon className="menus-icon" />
              </div>
            </Link>
          )}

          {sideBar ? (
            <Link className="menus" href={"/employee"}>
              <UserGroupIcon className="h-5 w-5 " /> Employee
            </Link>
          ) : (
            <Link href={"/employee"}>
              <div className="group relative">
                <UserGroupIcon className="menus-icon" />
                <ToolTip text="Employee" />
              </div>
            </Link>
          )}

          {sideBar ? (
            <Link className="menus" href={"/contacts"}>
              <PhoneArrowDownLeftIcon className="h-5 w-5 " /> Contact Us
            </Link>
          ) : (
            <Link href={"/contacts"}>
              <div className="group relative">
                <PhoneArrowDownLeftIcon className="menus-icon" />
                <ToolTip text="Cotnact Us" />
              </div>
            </Link>
          )}
          {/* services */}
          {sideBar ? (
            <details className="w-full ">
              <summary className="menus list-none rounded-md px-4 py-2 hover:bg-slate-200 hover:font-bold hover:text-slate-600 ">
                <WrenchScrewdriverIcon className="inline h-5 w-5" />
                Services
                <ChevronDownIcon className="inline h-5 w-5 text-lg hover:font-bold  " />
              </summary>
              <div className="mt-2 w-full space-y-3">
                <Link
                  onClick={toggleSideBar}
                  href={"/services/easethetics"}
                  className="menus menus-dropdown-text"
                >
                  Easethetics
                </Link>
                <Link
                  onClick={toggleSideBar}
                  href={"/services/mambu"}
                  className="menus menus-dropdown-text"
                >
                  Mambu
                </Link>

                <Link
                  onClick={toggleSideBar}
                  href={"/services/outsystems"}
                  className="menus menus-dropdown-text"
                >
                  Outsystems
                </Link>

                <Link
                  onClick={toggleSideBar}
                  href={"/services/snappyWire"}
                  className="menus menus-dropdown-text"
                >
                  SnappyWire
                </Link>
              </div>
            </details>
          ) : (
            <Link href={"/services"}>
              <div className="group relative">
                <WrenchScrewdriverIcon className="menus-icon" />
                <ToolTip text="Services" />
              </div>
            </Link>
          )}
        </div>
        {!sideBar && (
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

type ToolTipTypes = {
  text: string;
};

function ToolTip({ text }: ToolTipTypes) {
  return (
    <p className="absolute left-14 top-1 m-auto my-auto  w-auto origin-left  scale-0  rounded bg-[#1b2737] px-2 py-1  text-center text-white transition-all duration-200 group-hover:scale-100">
      {text}
    </p>
  );
}
