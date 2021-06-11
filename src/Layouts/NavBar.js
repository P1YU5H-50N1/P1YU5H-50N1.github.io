import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Emblem from "../Components/Emblem";
import NavElement from "../Components/NavElement";

const NavBar = () => {
  let location = useLocation();
  console.log(location.pathname);
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
            {!["/", "/creations"].includes(location.pathname) ? (
              <NavLink to="/creations">
                <NavElement title="Creations"></NavElement>
              </NavLink>
            ) : (
              ""
            )}
            {!["/contact"].includes(location.pathname) ? (
              <NavLink to="/contact" className="">
                <NavElement title="Reach Out" />
              </NavLink>
            ) : (
              ""
            )}
            {!["/about"].includes(location.pathname) ? (
              <NavLink to="/about">
                <NavElement title="About Me" />
              </NavLink>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default NavBar;
