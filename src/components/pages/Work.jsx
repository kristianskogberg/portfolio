import React from "react";
import NFTGraph from "../../assets/work-screenshots/nftgraph.png";
import PokeType from "../../assets/work-screenshots/poketype.png";
import Portfolio from "../../assets/work-screenshots/portfolio.png";
import Pokential from "../../assets/work-screenshots/pokential.png";
import GGM from "../../assets/work-screenshots/ggm.png";
import FeaturedProject from "../FeaturedProject";
import PageTitle from "../PageTitle";
import projects from "../../utils/projects.json";

const pokeTypeDemoUrl =
  "https://play.google.com/store/apps/details?id=com.pgkrsk.pokemontypecalculator&hl=en&gl=US";
const pokeTypeCodeUrl = "https://github.com/kristianskogberg/poketype";
const pokentialCodeUrl = "https://github.com/kristianskogberg/pokential";
const PORTFOLIO_CODE_URL = "https://github.com/kristianskogberg/portfolio";

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
