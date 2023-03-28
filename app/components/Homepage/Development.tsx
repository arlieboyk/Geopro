import { Enriqueta } from "next/font/google";
import React from "react";

function Development() {
  const target = document.querySelectorAll(".text-section");

  const observer = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        //if entry is intersecting
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    {
      threshold: 1,
    }
  );
  target.forEach((target) => {
    observer.observe(target);
  });

  return (
    <section className=" h-[30rem] w-full  items-center justify-center flex flex-col bg-white">
      <div className="space-y-16 py-6 text-center text-black text-xl font-bold">
        <h1 className="text-section  ">Mobile Application Development</h1>
        <h1 className="text-section">Payment Gateway</h1>
        <h1 className="text-section">Desktop Software Development</h1>
        <h1 className="text-section">Web Application Development</h1>
      </div>
    </section>
  );
}

export default Development;
