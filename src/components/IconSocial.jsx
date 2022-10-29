import React from "react";

export default function IconSocial(props) {
  return (
    <>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img className="w-6 cursor-pointer" src={props.icon} alt={props.alt} />
      </a>
    </>
  );
}
