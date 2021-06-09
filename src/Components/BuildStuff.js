import React from "react";
import Django from "../Resources/Graphics/DjangoLogo.svg";
import Vue from "../Resources/Graphics/VueLogo.svg";
import ReactLogo from "../Resources/Graphics/ReactLogo.svg";

const BuildStuff = () => {
  return (
    <div className="flex space-x-3 text-5xl tracking-wider pt-10">
      <div>I Build Stuff With</div>
      <div className="flex space-x-5">
        <img className="w-10" src={ReactLogo}></img>
        <img className="mt-2 w-8" src={Django}></img>
        <img className="w-10" src={Vue}></img>
      </div>
    </div>
  );
};

export default BuildStuff;
