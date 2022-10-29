import React from "react";
import h1_tag from "../utils/h1_tag";

export default function PageTitle(props) {
  return (
    <>
      <p className="text-2xl font-fira text-gray-500">{h1_tag.start}</p>
      <p className="text-4xl font-fira font-bold py-1">{props.title}</p>
      <p className="text-2xl font-fira text-gray-500 ml-8">{h1_tag.end}</p>
    </>
  );
}
