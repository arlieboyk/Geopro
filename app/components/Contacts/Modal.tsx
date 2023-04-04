"use client";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";
interface Props {
  id: number;
}

type User = {
  id: number;
  fullName: string;
  email: string;
  message: string;
};

export default function Modal({ id }: Props) {
  const deleteUser = () => {
    const propsId = { id: id };
    const jsonId = JSON.stringify(propsId);
    console.log("props.id: ", jsonId);
    fetch(`http://localhost:3000/api/deleteUser`, {
      method: "DELETE",
      body: jsonId,
    });
  };

  // if (deletedUser == null) {
  //   alert(deletedUser.fullName);
  // }
  // function redirect() {
  //   router.push("/contacts");
  // }

  return (
    <form
      onSubmit={deleteUser}
      className="relative flex h-20 w-auto flex-col items-center justify-center rounded bg-white px-0.5 text-left shadow-md md:absolute md:top-0 md:-right-[6rem]  md:px-1"
    >
      <div className="flex w-full items-center rounded p-0.5 hover:bg-indigo-400 hover:text-white">
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
