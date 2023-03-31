"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "../loading";

interface User {
  id: number;
  name: string;
  email: string;
}

function Contacts() {
  const [data, setData] = useState<User[] | null>(null);
  // const [data, setData] = useState([]);
  const [user, setUser] = useState<User[]>([]);

  /* client side rendering wihout api endpiont */
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     res.json().then((res) => setData(res));
  //   });
  // }, []);

  /* api endpiont */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getData", {
        method: "POST",
      });
      const data = await res.json();
      // console.log("data ", data);
      setData(data);
    };

    fetchData();
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
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </table>
      </section>
    </>
  );
}

export default Contacts;
