"use client";
import React from "react";

const Error = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1>{error.message}</h1>

      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
