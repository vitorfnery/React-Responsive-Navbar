import React from "react";
import Burger from "../Burger";
import Nav from "./elements";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Plundervolt</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
