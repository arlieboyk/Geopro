"use client";

import Loading from "../loading";
import { useEffect, useState, useRef } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { BiArrowBack, BiDotsHorizontalRounded } from "react-icons/bi";
import Dropdown from "../../components/Contacts/Dropdown";
import {
  getApiEndpoint,
  getApiEndpointWithParams,
} from "../../../lib/dynamicUrl";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
interface User {
  id: number;
  fullName: string;
  email: string;
  message: string;
  createdDate: Date;
}

export default function page({ params }) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [profileUrl, setProfileUrl] = useState("");
  const [user, setUser] = useState<User>();
  const [like, setLike] = useState(5);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [isEditable, setEditable] = useState(true);
  const [isDeletedOrEdited, setisDeletedOrEdited] = useState(false);

  const userId = params.userId;

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
      setisDeletedOrEdited(true);
      setTimeout(() => {
        setisDeletedOrEdited(false);
      }, 3000);
    }
  };

  /* detects if edit button  is  clicked*/
  useEffect(() => {
    if (!isEditable) {
      if (inputRef.current) {
        (inputRef.current as unknown as HTMLInputElement).focus();
      }
    }
  }, [isEditable]);

  /* make textarea grow based on value */
  function autoGrow() {
    const textArea = inputRef.current;
    if (textArea) {
      textArea.style.height = "3px";
      textArea.style.height = textArea.scrollHeight + "px";
    }
  }

  return (
    <section className="relative my-12 h-full w-full">
      <Link href={"/contacts"}>
        <BiArrowBack className="absolute right-10 -top-8 z-10 h-6 w-6 cursor-pointer text-gray-600" />
      </Link>

      {/* card */}
      <div className="backdrop-flter relative m-auto w-11/12  rounded  py-6 text-center  shadow-sm backdrop-blur-lg md:w-2/3">
        {!user && <Loading />}

        {isDeletedOrEdited ? (
          <VerifyModal isDeleted={isDeletedOrEdited} />
        ) : (
          user && (
            <div
              key={user?.id}
              className="relative mx-auto w-10/12 rounded bg-white p-4 shadow md:w-10/12"
            >
              {/* dropdown */}
              {modal && (
                <Dropdown
                  isEditable={() => setEditable(!isEditable)}
                  id={user.id}
                  isDeleted={() => setisDeletedOrEdited(!isDeletedOrEdited)}
                />
              )}

              <img
                src={profileUrl}
                className="absolute -left-11 top-0  mx-0 h-10 w-10 rounded-full hover:scale-105  hover:shadow-2xl"
              />

              <div className="flex justify-between">
                <h2 className="mx-3 inline-block text-sm font-semibold">
                  {user?.fullName}
                </h2>
                <small>Messages at: {user.createdDate?.toString()}</small>
                <BiDotsHorizontalRounded
                  onClick={() => setModal(!modal)}
                  className="inline h-5 w-5 cursor-pointer text-gray-400"
                />
              </div>

              {/* message */}
              <form
                onSubmit={handleEdit}
                className="m-auto w-11/12 overflow-auto rounded py-3 px-1"
              >
                <div className=" w-auto rounded-md font-normal leading-snug text-gray-900">
                  <textarea
                    // onInput={autoGrow}
                    placeholder="Send message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isEditable}
                    ref={inputRef}
                    rows={20}
                    cols={50}
                    className="block w-full appearance-none rounded-sm border border-gray-200  bg-gray-300/25 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:bg-white focus:text-gray-900 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
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
            </div>
          )
        )}
      </div>
    </section>
  );
}
interface verifyProp {
  isDeleted: boolean;
}
const VerifyModal = ({ isDeleted }: verifyProp) => (
  <>
    {isDeleted ? (
      <div className="mx-auto w-1/2 rounded bg-white py-6">
        <BsFillCheckCircleFill className="mx-auto h-12 w-12 text-green-400" />
      </div>
    ) : (
      <div className="mx-auto w-1/2 rounded bg-white py-6">
        <div className="flex space-x-3">
          <p>Failed deleteing user</p>
          <RxCrossCircled className="mx-auto h-12 w-12 text-green-400" />
        </div>
      </div>
    )}
  </>
);

// const getUser = async (id: number) => {
//   const res = await fetch(`http://localhost:3000/api/getUser/${id}`);
//   const data = res.json();
//   return await data;
// };
