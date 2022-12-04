import React from "react";

export default function Button(props) {
  return (
    <>
      {props.disable ? (
        <button
          className="cursor-default rounded-lg text-black font-bold font-fira bg-gray-500 gap-3 px-5 py-3 my-2 flex items-center "
          alt="button disabled"
        >
          {props.icon ? props.icon : null}
          {props.text}
        </button>
      ) : (
        <a href={props.url} target="_blank" rel="noreferrer">
          <button
            className="cursor-pointer rounded-lg text-black font-bold font-fira bg-gray-300 gap-3 px-5 py-3 my-2 flex items-center hover:bg-gray-400 duration-200"
            alt={props.text}
          >
            {props.icon ? props.icon : null}
            {props.text}
          </button>
        </a>
      )}
    </>
  );
}
