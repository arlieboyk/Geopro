import React from "react";
import { Carousel } from "flowbite-react";

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
    <section className=" h-screen w-full mt-26 items-center justify-center flex flex-col bg-white">
      <Carousel className="">
        <div className="cards   ">
          <h1 className="text-section text-3xl   ">
            Mobile Application Development
          </h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">Payment Gateway</h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">
            Desktop Software Development
          </h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">
            Web Application Development
          </h1>
        </div>
      </Carousel>
    </section>
  );
}

export default Development;
