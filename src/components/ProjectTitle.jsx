import React from "react";
import h2_tag from "../utils/h2_tag";

export default function ProjectTitle(props) {
  return (
    <>
      {/*
      <p className="text-1xl font-fira text-gray-500">{h2_tag.start}</p>
  */}
      <p className="text-2xl font-fira font-bold py-1">{props.title}</p>

      {/*
      <p className="text-1xl font-fira text-gray-500 ml-4">{h2_tag.end}</p>
*/}
    </>
  );
}
