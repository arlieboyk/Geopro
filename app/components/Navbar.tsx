"use client";
import Image from "next/image";
import logo from "../../public/geopro-logo.png";
import { PhoneIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Search from "./Homepage/Search";
import { useState } from "react";
import SideBar from "./Homepage/SideBar";
import { Sidebar } from "flowbite-react";
function Navbar() {
  const [search, setSearch] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg py-3 px-4">
        <Image src={logo} alt="logo" width={80} height={80} />

        <div className="hidden xl:block">
          <Search />
        </div>
        {/* <div className="hidden md:block">
        <div className=" flex xl:hidden flex-row-reverse items-center space-x-2 text-gray-400">
          <PhoneIcon className="w-4 h-4" />
          <p className="hover:text-black hover:scale-105">(045) 499-8151</p>

          <MagnifyingGlassIcon className="w-6 h-6 hover:scale-105 hover:text-black" />
        </div>

        <div className="md:hidden space-y-1 hover:scale-105 ">
          <p className="w-6 h-0.5 bg-blue-500"></p>
          <p className="w-6 h-0.5 bg-blue-500"></p>
          <p className="w-6 h-0.5 bg-blue-500"></p>
        </div>
      </div> */}

        <div className="flex flex-col items-end space-y-3 lg:hidden">
          <div className=" flex xl:hidden  items-center space-x-4 text-gray-600">
            <PhoneIcon className="w-4 h-4 hover:text-black" />
            <p className="hover:text-black hover:scale-105 text-xs">
              (045) 499-8151
            </p>

            <MagnifyingGlassIcon className="w-4 h-4 hover:scale-105 hover:text-black" />
          </div>
          {/* hamburger */}
          <div
            className="md:hidden space-y-1  hover:scale-105 "
            onClick={() => setSideBar(!Sidebar)}
          >
            <p className="w-6 h-0.5 rounded-xl bg-gray-600"></p>
            <p className="w-6 h-0.5 rounded-xl bg-gray-600"></p>
            <p className="w-6 h-0.5 rounded-xl bg-gray-600"></p>
          </div>
        </div>
      </nav>
      <SideBar closeSideBar={() => setSideBar(!sideBar)} isOn={sideBar} />
    </>
  );
}

export default Navbar;
