import React, { Fragment } from "react";
import MouseAndKeyboard from "../Components/MouseAndKeyboard";
import IntroText from "../Components/Banner";
import HomeBg from "../Resources/Graphics/HomeBg.png";

const Home = () => {
  return (
    <Fragment>
      <div
        className=""
        style={{
          backgroundImage: `url(${HomeBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <IntroText />
        <MouseAndKeyboard />
      </div>
    </Fragment>
  );
};

export default Home;
