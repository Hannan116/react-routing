import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <NavLink to="/" className={style["nav-link"]}>Home</NavLink>
      <NavLink to="/blogs" className={style["nav-link"]}>Blogs</NavLink>
      <NavLink to="/contact" className={style["nav-link"]}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;
