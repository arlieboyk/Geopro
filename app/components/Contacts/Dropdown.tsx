"use client";
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { getApiEndpoint } from "../../../lib/dynamicUrl";
interface Props {
  id: number;
  isEditable: () => void;
  isDeleted: () => void;
}

export default function Dropdown({ id, isEditable, isDeleted }: Props) {
  const data = { id: id };
  const jsonId = JSON.stringify(data);
  console.log("props.id: ", jsonId);

  const deleteUser = async (e: any) => {
    e.preventDefault();

    const response = await fetch(getApiEndpoint("userController"), {
      method: "DELETE",
      body: jsonId,
    });
    if (response.ok) {
      isDeleted();
    }
  };

  return (
    <form
      onSubmit={deleteUser}
      className="relative flex h-20 w-auto flex-col items-center justify-center rounded bg-white px-0.5 text-left shadow-md md:absolute md:top-0 md:-right-[6rem]  md:px-1"
    >
      <div
        onClick={isEditable}
        className="flex w-full cursor-pointer items-center rounded p-0.5 hover:bg-indigo-400 hover:text-white"
      >
        <p className="mx-2 inline-block">Edit</p>
        <AiOutlineEdit className="inline-block  h-4 w-4" />
      </div>
      <button
        type="submit"
        className="flex w-full items-center rounded p-0.5 hover:bg-indigo-400 hover:text-white"
      >
        <p className="mx-2 inline-block">Delete</p>
        <AiOutlineDelete className="my-auto inline-block h-4 w-4" />
      </button>
    </form>
  );
}
