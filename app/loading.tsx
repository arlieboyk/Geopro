import React from "react";

function loading() {
  return (
    <main className="h-screen w-full py-12 ">
      <h1 className="relative inset-0 m-auto animate-pulse text-center text-4xl font-bold text-white">
        Loading...
        <br />
        Please wait.
      </h1>
    </main>
  );
}

export default loading;
