import React from "react";
import { getApiEndpoint } from "../../../lib/dynamicUrl";
export interface Employee {
  name: string;
  id: number;
  position: string;
  image: string;
}
export default async function page({ params }) {
  const employeeId = params.employeeId;
  const res = await fetch(`/api/employee`);
  const employee: Employee[] = await res.json();

  function getId(employee: Employee) {
    console.log("id", employee.id);
    if (employee.id == employeeId) {
      console.log("got ", employee);

      return employee;
    } else {
      console.log("cant find");
    }
  }

  return (
    <section className="h-full w-full ">
      {employee ? (
        /* card */
        <div className="md:1/3 mx-auto my-12 flex h-auto w-10/12 flex-col items-center justify-center space-y-2 rounded-sm py-12 px-4 text-black backdrop-blur-lg backdrop-filter hover:scale-105 lg:w-1/3">
          <img
            src={employee.find(getId)?.image}
            className="h-24 w-24 rounded-full"
          />
          <p className="text-xl font-bold text-gray-300">
            {employee.find(getId)?.name}
          </p>
          <p className="text-gray-300">{employee.find(getId)?.position}</p>
          <small className="rounded-md bg-black py-2 px-4 text-center text-white opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            voluptate nesciunt eaque, beatae minima culpa voluptas voluptatum
            tenetur omnis, rem laudantium! Provident voluptatem atque eos porro,
            deleniti soluta facere et.
          </small>
        </div>
      ) : (
        <div>
          <h1 className="animate-pulse text-xl font-bold">Loading...</h1>
        </div>
      )}
    </section>
  );
}
