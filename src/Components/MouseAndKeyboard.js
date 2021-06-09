import React from "react";
import Keyboard from "../Resources/Graphics/Keyboard.svg";
import Mouse from "../Resources/Graphics/Mouse.svg";

const MouseAndKeyboard = () => {
  return (
    <div className="flex absolute bottom-0 w-full px-0">
      <div className="container flex w-1/4 justify-start">
        <img className="mt-20 " src={Mouse}></img>
      </div>
      <div className="container mx-0 flex justify-end">
        <img src={Keyboard}></img>
      </div>
    </div>
  );
};

export default MouseAndKeyboard;
