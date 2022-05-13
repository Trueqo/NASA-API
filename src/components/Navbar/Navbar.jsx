import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={css.navbar}>
      <ul className={css.ul}>
        <Link to={"/"}>
          <li className={css.li}>Home</li>
        </Link>
        <Link to={"/rovers"}>
          <li className={css.li}>Rovers</li>
        </Link>
        <li className={css.li}>Exoplanet</li>
        <Link to={"/apod"}>
          <li className={css.li}>APOD</li>
        </Link>
        <li className={css.li}>EPIC</li>
      </ul>
    </div>
  );
};

export default Navbar;
