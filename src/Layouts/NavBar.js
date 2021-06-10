import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Emblem from "../Components/Emblem";
import NavElement from "../Components/NavElement";

const NavBar = () => {
  return (
    <Fragment>
      <header className="border-b border-solid border-black">
        <div className="container mx-auto lg:px-10 flex justify-between ">
          <nav className="flex">
            <NavLink to="/" exact>
              <Emblem></Emblem>
            </NavLink>
          </nav>
          <div className="mt-7 ">
            <NavLink to="/contact" className="">
              <NavElement title="Reach Out" />
            </NavLink>

            <NavLink to="/about">
              <NavElement title="About Me" />
            </NavLink>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default NavBar;
