import React from "react";
import ProjectTitle from "./ProjectTitle";

export default function FeaturedProject(props) {
  return (
    <>
      {props.imageOnRight ? (
        <div className="flex flex-col md:flex-col gap-6 ">
          {/*<div className="w-full md:w-3/5 my-auto ">*/}
          <div className="w-full">
            <ProjectTitle title={props.name} />

            <p className="py-6">{props.description}</p>
            <div className="flex flex-row flex-wrap gap-6">
              {props.skills.map(function (skill) {
                return <p className="font-fira text-gray-500">{skill}</p>;
              })}
            </div>
          </div>
          <div className="w-full my-auto py-8">
            <img src={props.image} alt="project"></img>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 py-10">
          <div className="w-full md:w-2/5">
            <ProjectTitle title={props.name} />

            <p className="py-6">
              {props.description}
              {props.url ? (
                <>
                  <a
                    className="text-blue-600 hover:text-blue-800"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.urlText}
                  </a>
                  .
                </>
              ) : null}
            </p>

            <div className="flex flex-row flex-wrap gap-6">
              {props.skills.map(function (skill) {
                return <p className="font-fira text-gray-500">{skill}</p>;
              })}
            </div>
          </div>
          <div className="w-full md:w-3/5 my-auto">
            <img
              className="max-h-[500px] mx-auto "
              src={props.image}
              alt="project"
            ></img>
          </div>
        </div>
      )}
    </>
  );
}
