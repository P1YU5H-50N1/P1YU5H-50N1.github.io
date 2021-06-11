import React from "react";
import AtheneumSS from "../Resources/ProjectScreenshots/Atheneum.png";
import Django from "../Resources/Graphics/DjangoLogo.svg";
import ReactLogo from "../Resources/Graphics/ReactLogo.svg";

const Creations = () => {
  return (
    <div className="container h-4/5 grid gap-3 grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3  mx-auto">
      <div
        style={{ backgroundImage: `url(${AtheneumSS})` }}
        className=" bg-contain bg-center mx-2 bg-no-repeat lg:col-span-2"
      ></div>

      <div className="flex flex-col row-span-2 mx-2 text-center lg:text-left  ">
        <div
          style={{ fontFamily: "Puritan" }}
          className="mt-4 mb-2 lg:mt-16 text-5xl font-bold"
        >
          {/* title */}
          Atheneum
        </div>
        <div className="mb-16">
          {/* Description */}
          Book Recommendation Platform
          {/* <br /> And <br />
          Discussion Forum */}
        </div>
        <div className="flex lg:flex-col px-10 lg:px-0 text-2xl space-x-2 lg:space-x-0 lg:space-y-4 w-full justify-around lg:justify-start">
          {/* CTAs */}
          <div className="hidden lg:invisible">
            {/* <button className="bg-white focus:outline-none text-center shadow-md hover:shadow-xl  hover:bg-black text-black hover:text-white px-10 border border-black hover:border-transparent rounded-lg">
              Live
            </button> */}
          </div>
          <div>
            <a href="https://github.com/P1YU5H-50N1/Atheneum" target="_blank" rel="noreferrer">
              <button className="bg-white focus:outline-none text-center shadow-md hover:shadow-xl   hover:bg-black text-black hover:text-white px-10 border border-black hover:border-transparent rounded-lg">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="flex w-full mt-8 mx-auto lg:mx-0 justify-center lg:justify-start">
          {/* Stack icons */}
          <div className=" h-12">
            <img className=" h-12 w-12 " src={ReactLogo}></img>
          </div>

          <div className="w-12 h-12">
            <img className="h-12 mr-4 w-12" src={Django}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creations;
