import React from "react";

export default function Skill(props) {
  return (
    <div className="shadow-md shadow-[black] ">
      <img
        className="w-20 mx-auto hover:scale-110 duration-[250ms]"
        src={props.image}
        alt={props.name}
      />
      <p className="my-4 font-fira">{props.name}</p>
    </div>
  );
}
