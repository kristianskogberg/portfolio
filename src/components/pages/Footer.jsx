import React from "react";
import GitHubIcon from "../../assets/icons/github.png";
import LinkedinIcon from "../../assets/icons/linkedin.png";
import myLinks from "../../utils/social-links";
import IconSocial from "../IconSocial";

export default function Footer() {
  return (
    <div className="w-full h-full bg-[black] text-gray-300 py-10">
      <div className="max-w-[1000px] mx-auto font-fira  flex flex-row justify-between items-end w-full h-full">
        <p>Copyright {"\u00A9"} Kristian Skogberg</p>
        <div className="flex flex-row items-right gap-4">
          <IconSocial url={myLinks.github} icon={GitHubIcon} alt="my github" />
          <IconSocial
            url={myLinks.linkedin}
            icon={LinkedinIcon}
            alt="my linkedin"
          />
        </div>
      </div>
    </div>
  );
}
