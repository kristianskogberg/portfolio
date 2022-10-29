import React from "react";
import NFTGraph from "../../assets/work-screenshots/nftgraph.png";
import PokeType from "../../assets/work-screenshots/poketype.png";
import Portfolio from "../../assets/work-screenshots/portfolio.png";
import GGM from "../../assets/work-screenshots/ggm.png";
import FeaturedProject from "../FeaturedProject";
import PageTitle from "../PageTitle";

const pokeTypeUrl =
  "https://play.google.com/store/apps/details?id=com.pgkrsk.pokemontypecalculator&hl=en&gl=US";

export default function Work() {
  return (
    <div
      name="projects"
      className="w-full h-full bg-[black] text-gray-300 pt-[80px] pb-[10rem]"
    >
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-start w-full h-full">
        <PageTitle title={"03.Projects"} />
        <p className="py-6">Some of my recent projects:</p>
        <div>
          <FeaturedProject
            image={NFTGraph}
            imageOnRight={true}
            name={"NFTGraph"}
            description={
              "An NFT Analytics web application where users can search for any NFT collection from OpenSea and the application will fetch data for chosen collection and display the data as graphs and tables. It will also display NFT sales in real-time and update the UI and graphs automatically."
            }
            skills={[
              "React",
              "Chart.js",
              "REST APIs",
              "GraphQL",
              "UI/UX Design",
            ]}
          />
          <div className="w-full h-[2px] bg-gray-500 my-4"></div>
          <FeaturedProject
            image={PokeType}
            imageOnRight={false}
            name={"PokeType"}
            description={
              "A Mobile App where users can search for any Pokémon and it will display and calculate useful information about that Pokémon based on its type. PokeType can be found on the "
            }
            url={pokeTypeUrl}
            urlText="Google Play Store"
            skills={["React Native", "REST API", "UI/UX Design", "Deployment"]}
          />
          <div className="w-full h-[2px] bg-gray-500 my-4"></div>
          <FeaturedProject
            image={GGM}
            imageOnRight={true}
            name={"Gas Monitoring Software"}
            description={
              "A desktop application where users are able to select some greenhouse gases from a specific time frame and the application will fetch selected data and draw graphs based on the returned data. I created this software with two other students during a Software Design course."
            }
            skills={["C++", "MVC", "Qt Creator", "Rest APIs", "Teamwork"]}
          />
          <div className="w-full h-[2px] bg-gray-500 my-4"></div>
          <FeaturedProject
            image={Portfolio}
            imageOnRight={true}
            name={"This Portfolio!"}
            description={
              "I wanted to create myself a good-looking portfolio with React. You are looking at it right now!"
            }
            skills={["React", "Tailwind CSS", "Framer Motion"]}
          />
        </div>
      </div>
    </div>
  );
}
