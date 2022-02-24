import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Fragment>
      <div
        className="lg:container pl-10 pt-10 lg:mx-auto lg:px-32 lg:pt-16"
        style={{
          fontFamily: "Puritan , Roboto",
          background:
            "radial-gradient(66.86% 88.76% at 18.92% 18.43%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(24.58% 32.47% at 50% 21.44%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0) 41.49%, rgba(255, 255, 255, 0.7) 52.16%, #FFFFFF 53.4%, rgba(255, 255, 255, 0.7) 55.07%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <div className="text-6xl">
          I Explore <br />
          <b>Design, ML And Web Apps</b>
        </div>
        <Link to="/creations">
          <button
            style={{ position: "relative", zIndex: "100" }}
            className="bg-white focus:outline-none mt-10 text-2xl hover:bg-black text-black font-semibold hover:text-white py-2 px-6 border border-black hover:border-transparent rounded-lg"
          >
            My Creations
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Banner;
