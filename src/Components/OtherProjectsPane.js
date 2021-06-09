import React from "react";
import LinkedInIcon from "../Resources/Graphics/LinkedInIcon.svg";
import GitHubIcon from "../Resources/Graphics/GithubIcon.svg";

const OtherProjectsPane = () => {
  return (
    <div className="grid gap-3 pt-8 grid-cols-4 lg:grid-cols-10">
      <div className=" text-right pr-4 text-gray-500 border-r-2 border-black">
        Peek Into <br />
        Other <br />
        Projects
      </div>
      <div className=" col-span-3 lg:col-span-7">
        <div className="font-semibold tracking-wide">
          Creative Commons(open-source)
        </div>
        <div>
          Implemented results of vimeo search to into their vue application
          <br />
          <a className="underline">GitHub Contribution</a>
        </div>
      </div>
      <div className=" col-span-4 pt-2 md:pt-0 justify-self-center lg:col-span-2">
        Find Me On
        <div className="flex space-x-3">
          <img src={LinkedInIcon} />
          <img src={GitHubIcon} />
        </div>
      </div>
    </div>
  );
};

export default OtherProjectsPane;
