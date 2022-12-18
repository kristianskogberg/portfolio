import React from "react";
import FeaturedProject from "../FeaturedProject";
import PageTitle from "../PageTitle";
import projects from "../../utils/projects.json";

export default function Work() {
  return (
    <div
      name="projects"
      className="w-full h-full bg-[black] text-gray-300 pt-[80px] pb-[10rem]"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col justify-start w-full h-full">
        <PageTitle title={"Projects"} />
        <p className="py-6">Some of my recent projects:</p>
        <div>
          {projects.map((project) => (
            <FeaturedProject
              image={project.image}
              imageOnRight={true}
              name={project.name}
              description={project.description}
              demoUrl={project.demo}
              codeUrl={project.code}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
