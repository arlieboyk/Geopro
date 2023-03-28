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
  const [data, setData] = useState<Data[]>(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getData", {
        method: "GET",
      });

      const data = await res.json();
      return data;
    };
    setLoading(true);
    // fetchData()
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // const res: any = fetchData();
    // // console.log(res);
    // const entries = Object.entries(res);
    // console.log("data ", entries);
    // setLoading(false);
  }, []);
  //#region
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/getData", {
  //       method: "GET",
  //     });

  //     const data = await res.json();
  //     return data;
  //   };
  //   const res: any = fetchData();
  //   console.log("res", res);
  //   setData(res);
  //   console.log("data ", data);
  // }, []);

  //#endregion

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/getData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div>
      {/* {Array.isArray(data) &&
        data.map((el) => <div key={el.id}>{el.birthday}</div>)} */}
      {/* {data.forEach((el) => (
        <>
        <h1>{el.fname}</h1>
        <h1>{el.lname}</h1>
        </>
      ))} */}
      {/* {data[0].confirmpassword} */}

      {/* <GetData/> */}
    </div>
  );
}

export default Contacts;
