"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import getAllData from "../../lib/getAllData";
import GetData from "../components/Contacts/GetData";
import { CLIENT_RENEG_LIMIT } from "tls";
interface Data {
  id: number;
  uid: string;
  name: string;
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
  const [user, setUser] = useState<Data[]>([]);

  /* client side rendering wihout api endpiont */
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     res.json().then((res) => setData(res));
  //   });
  // }, []);

  /* api endpiont */
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => {
        res.json().then((res) => setUser(res));
      })
      .catch((err) => {
        console.log(err, " error fetchingz");
      });
  }, []);

  useEffect(() => {
    console.log(data);

    console.log("users ", user);
  }, []);

  return (
    <>
      <section className="w-full h-full overflow-x-hidden grid grid-cols-2">
        {user.map((el) => (
          <div key={el.id} className="min-w-full bg-white  ">
            <Link href={`contacts/${el.id}`}>
              <p className=" min-w-[6rem] text-black font-semibold">
                {el.name}
              </p>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default Contacts;
