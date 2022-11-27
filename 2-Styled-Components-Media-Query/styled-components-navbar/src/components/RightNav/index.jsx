import React from "react";
import Ul from "./elements";

const RightNav = () => {
  return (
    <Ul open={open}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
      <li>
        <a href="#">Sign Up</a>
      </li>
    </Ul>
  );
};

export default RightNav;
