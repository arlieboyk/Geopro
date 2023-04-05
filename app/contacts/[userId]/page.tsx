"use client";
import Loading from "../loading";
import { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BiArrowBack, BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from "../../components/Contacts/Modal";
import {
  getApiEndpoint,
  getApiEndpointWithParams,
} from "../../../lib/dynamicUrl";
interface User {
  id: number;
  fullName: string;
  email: string;
  message: string;
  createdDate: Date;
}

export default function page({ params }) {
  const [profileUrl, setProfileUrl] = useState("");
  const [user, setUser] = useState<User>();
  const [like, setLike] = useState(5);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditable, setEditable] = useState(true);

  const userId = params.userId;

  // Get the hostname (e.g., localhost or 192.168.0.5)
  // Get the port (e.g., 3000)
  // Get the port (e.g., 3000)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `${getApiEndpointWithParams("userController", userId)}`,
        {
          method: "GET",
          next: { revalidate: 1000 },
        }
      );
      const data = await res.json();
      console.log("data", data);
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

  useEffect(() => {
    if (user?.message) {
      console.log("get message to setMessate state");
      setMessage(user.message);
    }
  }, [user]);

  const handleEdit = async (e: any) => {
    e.preventDefault();
    const data = { message: message, id: userId };
    const messageJSON = JSON.stringify(data);
    const updatedData = await fetch(`${getApiEndpoint("userController")}`, {
      method: "PUT",
      body: messageJSON,
    });

    if (updatedData.ok) {
      console.log(updatedData.json());
    }
  };

  return (
    <section className="my-12 h-full w-full">
      <BiArrowBack className="absolute left-10 top-5 h-5 w-5 text-white" />
      {/* card */}
      <div className="backdrop-flter relative m-auto w-11/12  rounded  py-6 text-center  shadow-sm backdrop-blur-lg md:w-2/3">
        {!user && <Loading />}

        {user && (
          <div
            key={user?.id}
            className="relative mx-auto w-10/12 rounded bg-white p-4 shadow md:w-10/12"
          >
            <img
              src={profileUrl}
              className="absolute -left-11 top-0  mx-0 h-10 w-10 rounded-full hover:scale-105  hover:shadow-2xl"
            />

            <div className="text-left">
              <h2 className="mx-3 inline-block font-semibold">
                {user?.fullName}
              </h2>
              <small>Messages at: {user.createdDate?.toString()}</small>
              <BiDotsHorizontalRounded
                onClick={() => setModal(!modal)}
                className="absolute right-3 inline h-4 w-4 cursor-pointer text-gray-300"
              />
            </div>

            {/* message */}
            <form
              onSubmit={handleEdit}
              className="m-auto w-11/12 overflow-auto rounded py-3 px-1"
            >
              <h2 className=" w-auto rounded-md font-normal leading-snug text-gray-900">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isEditable}
                  rows={10}
                  cols={50}
                  className="block w-full appearance-none rounded-lg border border-gray-300 bg-gray-900/25 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-white focus:text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </h2>
              <button
                type="submit"
                className="mt-2 w-full bg-myBlue/80 px-4 py-2 text-white"
              >
                Save
              </button>
            </form>

            <div className=" relative mt-2  h-5 w-auto  ">
              <div
                className="absolute right-4 flex cursor-pointer items-center  space-x-1"
                onClick={() => setLike((prev) => prev + 1)}
              >
                <FaThumbsUp className="h-4 w-4 text-myBlue hover:scale-105 " />{" "}
                <span className="hover:scale"> {like}</span>
              </div>
            </div>
            {/* modal */}
            {modal && (
              <Modal
                isEditable={() => {
                  setEditable(!isEditable),
                    console.log("editable: ", isEditable);
                }}
                id={user.id}
              />
            )}
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
