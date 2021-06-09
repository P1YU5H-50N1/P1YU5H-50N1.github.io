import React from "react";
import LinkedInIcon from "../Resources/Graphics/LinkedInIcon.svg";
import GitHubIcon from "../Resources/Graphics/GithubIcon.svg";

const OtherProjectsPane = () => {
  return (
    <div className="flex container justify-between space-x-5 pt-32">
      <div className="flex space-x-5">
        <div className="border-r-2 border-black text-gray-400 text-right pr-3">
          Peek Into
          <br />
          Other <br />
          Projects
          <br />
        </div>
        <div>
          <div className="font-semibold tracking-wide">
            Creative Commons(open-source)
          </div>
          <div>
            Implemented results of vimeo search to into their vue application
            <br />
            <a className="underline">GitHub Contribution</a>
          </div>
        </div>
      </div>
      <div>
        Find Me On
        <div className="flex space-x-3 pt-2">
          <img src={LinkedInIcon} />
          <img src={GitHubIcon} />
        </div>
      </div>
    </div>
  );
};

export default OtherProjectsPane;
