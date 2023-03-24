"use client";
import Image from "next/image";
import logo from "../../public/geopro-logo.png";
import { PhoneIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
/* components */
import Search from "./Homepage/Search";
import { useState } from "react";
import SideBar from "./Homepage/SideBar";
import { Sidebar } from "flowbite-react";
function Navbar() {
  const [search, setSearch] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  return (
    <header className="sticky top-0 z-10 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <nav className="flex justify-between items-center  py-3 px-4">
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

        <div className="flex flex-col justify-center items-end  lg:hidden">
          <div className=" flex xl:hidden justify-center  items-center space-x-4 text-gray-600">
            <PhoneIcon className="w-4 h-4 hover:text-black" />
            <p className="hover:text-black hover:scale-105 text-xs">
              (045) 499-8151
            </p>

            <MagnifyingGlassIcon className="w-4 h-4 hover:scale-105 hover:text-black" />
          </div>
          {/* icons */}
          <div className="flex space-x-4 items-center mt-3 justify-center">
            <AiFillFacebook className="w-6 h-6 hover:scale-105" />
            <AiFillLinkedin className="w-6 h-6 hover:scale-105" />
            {/* hamburger */}
            <div
              className="md:hidden space-y-1 hover:scale-105 "
              onClick={() => {
                setSideBar(!Sidebar), console.log("toggle");
              }}
            >
              <p className="w-6 h-0.5  bg-gray-600"></p>
              <p className="w-6 h-0.5  bg-gray-600"></p>
              <p className="w-6 h-0.5  bg-gray-600"></p>
            </div>
          </div>
        </div>
      </nav>
      <SideBar
        closeSideBar={() => {
          setSideBar(!sideBar);
        }}
        isOn={sideBar}
      />
    </header>
  );
}

export default Navbar;
