"use client";
import Image from "next/image";
import { Alert, Dropdown } from "flowbite-react";
import { useState } from "react";
import Development from "./components/Homepage/Development";
export default function Home() {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <main className="w-full h-screen flefx flex-col px-4">
        {/* {alert && (
        <div
          className="w-10/12 mx-auto my-2 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </div>
      )}

      <button
        type="button"
        className="text-white mx-auto w-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => setAlert(!alert)}
      >
        Alert
      </button> */}
      </main>
      <Development />
    </>
  );
}
