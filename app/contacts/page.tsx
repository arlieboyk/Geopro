"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import getAllData from "../../lib/getAllData";
import GetData from "../components/Contacts/GetData";
interface Data {
  id: number;
  uid: string;
  fname: string;
  lname: string;
  number: number;
  eaddress: string;
  birthday: string;
  username: string;
  password: string;
  confirmpassword: string;
}

function Contacts() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((res) => setData(res));
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <section className="w-full h-full grid grid-flow-col">
        {data.map((el) => (
          <div key={el.id} className="">
            <p className=" min-w-[5rem] text-white font-semibold">{el.name}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Contacts;
