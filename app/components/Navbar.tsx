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
  const [sideBar, setSideBar] = useState(true);
  const [hideSideBar, setHideSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <header className="sticky  top-0 z-10  bg-opacity-50  backdrop-blur-lg backdrop-filter">
      {search ? (
        <div className={` ${search ? "block" : "hidden"}  w-screen `}>
          <Search toggleSearch={() => setSearch(!search)} />
        </div>
      ) : (
        <nav
          className={`flex items-center justify-between py-3 px-4 text-gray-600  `}
        >
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>
          <div className="flex flex-col items-end justify-center  ">
            <div className=" flex items-center  justify-center space-x-4 ">
              <PhoneIcon className="h-4 w-4 hover:text-black" />
              <p className="text-xs hover:scale-105 hover:text-black">
                (045) 499-8151
              </p>

              <MagnifyingGlassIcon
                className="h-4 w-4 cursor-pointer hover:scale-105 hover:text-black"
                onClick={() => setSearch(!search)}
              />
            </div>
            {/* icons */}
            <div className="mt-3 flex items-center justify-center space-x-4">
              <a href="https://www.facebook.com/geoproglobalPH" target="_blank">
                <AiFillFacebook className="h-6 w-6  hover:scale-105" />
              </a>
              <a
                href="https://www.linkedin.com/company/geopro-global-solutions-inc"
                target="_blank"
              >
                <AiFillLinkedin className="h-6 w-6 hover:scale-105" />
              </a>
              {/* hamburger */}
              <button
                className=" space-y-1 hover:scale-105"
                onClick={() => {
                  setHideSideBar(!sideBar);
                  setSideBar(!sideBar), console.log("toggle");
                }}
              >
                <p className="h-0.5 w-6  bg-gray-600"></p>
                <p className="h-0.5 w-6  bg-gray-600"></p>
                <p className="h-0.5 w-6  bg-gray-600"></p>
              </button>
            </div>
          </div>
        </nav>
      )}

      {hideSideBar && (
        <SideBar
          ousideClick={() => setSideBar(false)}
          toggleSideBar={handleSideBar}
          sidebar={sideBar}
          hideSideBar={() => setHideSideBar(false)}
        />
      )}
      {/* <SideBar
        ousideClick={() => setSideBar(false)}
        toggleSideBar={handleSideBar}
        sidebar={sideBar}
        hideSideBar={() => setHideSideBar(false)}
      /> */}
    </header>
  );
}

export default Navbar;
