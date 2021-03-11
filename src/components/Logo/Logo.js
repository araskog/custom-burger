import React from "react";
import burgerLogo from "../../asssets/images/logo.jpeg";
import classes from "./Logo.module.css";

const logo = (props) => (
  <img className={classes.Logo} src={burgerLogo} alt="Custom Burger" />
);

export default logo;
