import React, { Fragment } from "react";
import Django from "../Resources/Graphics/DjangoLogo.svg";
import Vue from "../Resources/Graphics/VueLogo.svg";
import ReactLogo from "../Resources/Graphics/ReactLogo.svg";

const BuildStuff = () => {
  return (
    <div className="grid lg:grid-cols-10  pt-10">
      <div className="text-4xl lg:text-5xl lg:col-span-7  lg:mx-0 mx-auto">
        I Build Stuff With
      </div>
      <div className="lg:mx-0 mx-auto lg:col-span-3 flex space-x-5">
        {" "}
        <img className="w-10" src={ReactLogo}></img>
        <img className="mt-2 w-8" src={Django}></img>
        <img className="w-10" src={Vue}></img>
      </div>
    </div>
  );
};

export default BuildStuff;
