import React from "react";

export default function Button(props) {
  return (
    <>
      {props.disable ? (
        <button
          className="text-gray-500 font-fira border-2 border-gray-500 cursor-default px-6 py-3 my-2 gap-2 flex items-center "
          alt="button disabled"
        >
          {props.icon ? props.icon : null}
          {props.text}
        </button>
      ) : (
        <a href={props.url} target="_blank" rel="noreferrer">
          <button
            className="text-white font-fira border-2 px-6 py-3 my-2 gap-2 flex items-center hover:bg-dark hover:border-dark duration-200"
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
