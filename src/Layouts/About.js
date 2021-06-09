import React, { Fragment } from "react";
import AboutPageCTA from "../Components/AboutPageCTA";
import BuildStuff from "../Components/BuildStuff";
import OtherProjectsPane from "../Components/OtherProjectsPane";

const About = () => {
  return (
    <Fragment>
      <div className="container  mx-auto px-20">
          <BuildStuff/>
          <AboutPageCTA/>
          <OtherProjectsPane/>
      </div>
    </Fragment>
  );
};

export default About;
