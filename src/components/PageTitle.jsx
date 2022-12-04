import React from "react";
import h1_tag from "../utils/h1_tag";

export default function PageTitle(props) {
  return (
    <>
      <p className="text-4xl font-fira font-bold py-2 border-b-[1px] border-gray-500">
        {props.title}
      </p>
    </>
  );
}
