import React from "react";
import ProjectTitle from "./ProjectTitle";
import { FaEye, FaCode } from "react-icons/fa";
import Button from "./Button";

export default function FeaturedProject(props) {
  return (
    <>
      {props.imageOnRight ? (
        <div className="flex flex-col lg:flex-row gap-6 pb-[10rem]">
          {/*<div className="w-full md:w-3/5 my-auto ">*/}

          <div className="w-full lg:w-3/5">
            <img className="  mx-auto" src={props.image} alt="project"></img>
          </div>
          <div className="w-full lg:w-2/5 h-full">
            <div className="h-1/">
              <ProjectTitle title={props.name} />
            </div>
            <div className="py-6 flex flex-row justify-left items-center flex-wrap gap-x-6 h-1/6">
              {props.skills.map(function (skill) {
                return <p className="font-fira text-gray-500">{skill}</p>;
              })}
            </div>
            <div className="overflow-auto h-3/6 ">
              <p>{props.description}</p>
            </div>
            <div className="pt-6 h-1/6">
              <div className="flex flex-row flex-wrap gap-6">
                <Button
                  text="Demo Video"
                  icon={<FaEye />}
                  url={props.demoUrl}
                />
                {props.codeUrl == null ? (
                  <Button text="Private" icon={<FaCode />} disable={true} />
                ) : (
                  <Button text="Code" icon={<FaCode />} url={props.codeUrl} />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/*<div className="w-full md:w-3/5 my-auto ">*/}

          <div className="w-full lg:w-3/5 ">
            <img
              className="object-cover h-full mx-auto"
              src={props.image}
              alt="project"
            ></img>
          </div>
          <div className="w-full lg:w-2/5 h-full">
            <div className="h-1/">
              <ProjectTitle title={props.name} />
            </div>
            <div className="py-6 flex flex-row justify-left items-center flex-wrap gap-x-6 h-1/6">
              {props.skills.map(function (skill) {
                return <p className="font-fira text-gray-500">{skill}</p>;
              })}
            </div>
            <div className="overflow-auto h-3/6 ">
              <p>{props.description}</p>
            </div>
            <div className="pt-6 h-1/6">
              <div className="flex flex-row gap-6">
                <Button text="Demo" icon={<FaEye />} url={props.demoUrl} />
                {props.private ? (
                  <Button text="Private" icon={<FaCode />} disable={true} />
                ) : (
                  <Button text="Code" icon={<FaCode />} url={props.codeUrl} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
