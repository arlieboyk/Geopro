"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "../loading";
import Form from "../components/Contacts/Form";
import axios from "axios";
interface User {
  id: number;
  fullName: string;
  email: string;
}

function Contacts() {
  const [user, setUser] = useState<User[]>();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("http://localhost:3000/api/getUser", {
        method: "GET",
      });
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    console.log("user: ", user);
    console.log();
  }, [user]);

  return (
    <div className="py-12">
      <Form />

      <section className="m-auto h-full w-11/12 overflow-x-hidden p-4 md:w-full">
        <table className="my-6 mx-auto w-full  overflow-auto backdrop-blur-lg  backdrop-filter  md:w-2/3 ">
          <thead className="mb-6">
            <tr className="flex w-full justify-between p-4 font-bold  text-white/70">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {user &&
            user.map((user) => (
              <tbody key={user.id}>
                <Link href={`contacts/${user.id}`}>
                  <tr className="flex justify-between py-1  px-4 font-semibold text-white/70 hover:scale-105">
                    <td className="flex-1">{user.id}</td>
                    <td className="flex-1">{user.fullName}</td>
                    <td className="flex-1">{user.email}</td>
                  </tr>
                </Link>
              </tbody>
            ))}

          {!user && <Loading />}
        </table>
      </section>
    </div>
  );
}

export default Contacts;

/* client side fetching wihout api endpiont */
// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
//     res.json().then((res) => setData(res));
//   });
// }, []);

/* api endpiont */

// const fetchData = async () => {
//   const res = await fetch("/api/getData", {
//     method: "POST",
//   });
//   const data = await res.json();
//   // console.log("data ", data);
//   setData(data);
// };

// fetchData();
