"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import getAllData from "../../lib/getAllData";
import GetData from "../components/Contacts/GetData";
import { CLIENT_RENEG_LIMIT } from "tls";
interface Data {
  id: number;
  name: string;
  email: string;
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
      <section className="h-full w-full overflow-x-hidden">
        <table className="my-6 mx-auto w-full  overflow-auto backdrop-blur-lg  backdrop-filter  md:w-2/3 ">
          <thead className="mb-6">
            <tr className="flex w-full justify-between p-4 font-bold">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {user ? (
            user.map((el) => (
              <tbody key={el.id}>
                <Link href={`contacts/${el.id}`}>
                  <tr className="flex justify-between py-1  px-4 font-semibold text-black hover:scale-105">
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                  </tr>
                </Link>
              </tbody>
            ))
          ) : (
            <div className="text-center text-3xl font-bold">
              Loading data...
            </div>
          )}
        </table>
      </section>
    </>
  );
}

export default Contacts;
