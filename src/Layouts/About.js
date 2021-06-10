import React, { Fragment } from "react";
import AboutPageCTA from "../Components/AboutPageCTA";
import BuildStuff from "../Components/BuildStuff";
import OtherProjectsPane from "../Components/OtherProjectsPane";

const About = () => {
  return (
    <Fragment>
      <div className="container lg:h-5/6 mx-auto px-4 lg:px-12 ">
        <div className="grid lg:grid-cols-2 h-4/6 lg:h-3/4 ">
          <div className="">
            <BuildStuff />
            <AboutPageCTA />
          </div>
          <div className="hidden lg:block">{/*TODO: icon cloud */}</div>
        </div>
        <OtherProjectsPane />
      </div>
    </Fragment>
  );
};

export default About;
