"use client";
import Image from "next/image";
import logo from "../../public/geopro-logo.png";
import { PhoneIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
/* components */
import Search from "./Homepage/Search";
import { useState, useRef } from "react";
import SideBar from "./Homepage/SideBar";
import Link from "next/link";
// import { Sidebar } from "flowbite-react";

function Navbar() {
  const [search, setSearch] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="sticky top-0 z-10 bg-slate-800 bg-opacity-50  backdrop-filter backdrop-blur-lg">
      {search ? (
        <div className={` ${search ? "block" : "hidden"}  w-screen `}>
          <Search toggleSearch={() => setSearch(!search)} />
        </div>
      ) : (
        <nav className={`flex justify-between items-center  py-3 px-4  `}>
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
          <div className="flex flex-col justify-center items-end  ">
            <div className=" flex justify-center  items-center space-x-4 text-gray-300">
              <PhoneIcon className="w-4 h-4 hover:text-black" />
              <p className="hover:text-black hover:scale-105 text-xs">
                (045) 499-8151
              </p>

              <MagnifyingGlassIcon
                className="w-4 h-4 hover:scale-105 cursor-pointer hover:text-black"
                onClick={() => setSearch(!search)}
              />
            </div>
            {/* icons */}
            <div className="flex space-x-4 items-center mt-3 justify-center text-gray-300">
              <a href="https://www.facebook.com/geoproglobalPH" target="_blank">
                <AiFillFacebook className="w-6 h-6  hover:scale-105" />
              </a>
              <a
                href="https://www.linkedin.com/company/geopro-global-solutions-inc"
                target="_blank"
              >
                <AiFillLinkedin className="w-6 h-6 hover:scale-105" />
              </a>
              {/* hamburger */}
              <button
                className=" space-y-1 hover:scale-105"
                onClick={() => {
                  setSideBar(!sideBar), console.log("toggle");
                }}
              >
                <p className="w-6 h-0.5  bg-gray-300"></p>
                <p className="w-6 h-0.5  bg-gray-300"></p>
                <p className="w-6 h-0.5  bg-gray-300"></p>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* {hideSideBar && (
        <SideBar
          toggleSideBar={handleSideBar}
          sidebar={sideBar}
          hideSideBar={() => setHideSideBar(false)}
        />
      )} */}
      <SideBar
        ousideClick={() => setSideBar(false)}
        toggleSideBar={handleSideBar}
        sidebar={sideBar}
        hideSideBar={() => setHideSideBar(false)}
      />
    </header>
  );
}

export default Navbar;
