"use client";
import Loading from "../loading";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from "../../components/Contacts/Modal";

interface User {
  id: number;
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}
interface photo {
  albumId: number;
  thumbnailUrl: string;
}

export default function page({ params }) {
  const [user, setUser] = useState<User>();
  const [like, setLike] = useState(5);
  const [modal, setModal] = useState(false);

  const [profileUrl, setProfileUrl] = useState("");
  console.log("id ", params.userId);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:3000/api/getUser/${params.userId}`,
        {
          next: { revalidate: 10 },
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(`id:${params.userId} ${user?.fullName}`);
      setUser(data);
    };

    fetchUser();
  }, []);
  // const photo: photo = await res.json();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${params.userId}`).then(
      (res) => {
        res.json().then((res) => {
          setProfileUrl(res.thumbnailUrl), console.log("photo: ", res);
        });
      }
    );
  }, []);

  return (
    <section className="my-12 h-full w-full">
      {/* card */}
      <div className="shadw-sm backdrop-flter relative m-auto  w-11/12  rounded py-6  text-center backdrop-blur-lg md:w-2/3">
        {!user && <Loading />}

        {user && (
          <div
            key={user?.id}
            className="relative mx-auto w-10/12 rounded bg-white p-4 shadow md:w-1/2"
          >
            <img
              src={profileUrl}
              className="absolute -left-11 top-0  mx-0 h-10 w-10 rounded-full hover:scale-105  hover:shadow-2xl"
            />

            <div className="text-left">
              <h2 className="mx-3 inline-block font-semibold">
                {user?.fullName}
              </h2>
              <small>
                Messages at: {new Date(user?.createdAt).toLocaleString()}
              </small>
              <BiDotsHorizontalRounded
                onClick={() => setModal(!modal)}
                className="absolute right-3 inline h-4 w-4 cursor-pointer text-gray-300"
              />
            </div>

            {/* message */}
            <div className="m-auto  w-11/12 rounded bg-gray-900/25 py-3 px-1">
              <h2 className=" w-auto rounded-md font-normal leading-snug text-gray-900">
                Message {user?.message}
              </h2>
            </div>

            <div className="relative  mt-2  h-5 w-auto  text-myBlue">
              <div
                className="absolute right-4 flex cursor-pointer items-center  space-x-1"
                onClick={() => setLike((prev) => prev + 1)}
              >
                <FaThumbsUp className="h-4 w-4 hover:scale-105 " />{" "}
                <span className="hover:scale"> {like}</span>
              </div>
            </div>
            {/* modal */}
            {modal && <Modal id={user.id} />}
          </div>
        )}
      </div>
    </section>
  );
}

// const getUser = async (id: number) => {
//   const res = await fetch(`http://localhost:3000/api/getUser/${id}`);
//   const data = res.json();
//   return await data;
// };
