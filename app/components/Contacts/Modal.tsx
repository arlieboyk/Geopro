"use client";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
import { getApiEndpoint } from "../../../lib/dynamicUrl";
interface Props {
  id: number;
  isEditable: () => void;
}

type User = {
  id: number;
  fullName: string;
  email: string;
  message: string;
};

export default function Modal({ id, isEditable }: Props) {
  const propsId = { props: id };
  const jsonId = JSON.stringify(propsId);
  console.log("props.id: ", jsonId);
  const deleteUser = () => {
    fetch(getApiEndpoint("userController"), {
      method: "DELETE",
      body: jsonId,
    });
  };

  return (
    <form
      onSubmit={deleteUser}
      className="relative flex h-20 w-auto flex-col items-center justify-center rounded bg-white px-0.5 text-left shadow-md md:absolute md:top-0 md:-right-[6rem]  md:px-1"
    >
      <div
        onClick={isEditable}
        className="flex w-full items-center rounded p-0.5 hover:bg-indigo-400 hover:text-white"
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
