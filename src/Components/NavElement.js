import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavElement = (props) => {
  return (
    <Fragment>
      <span
        to={props.to}
        className="no-underline lg:text-2xl md:text-sm mx-3 lg:mx-10 sm:mx-3"
      >
        {props.title}
      </span>
    </Fragment>
  );
};

export default NavElement;
