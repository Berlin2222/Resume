import React from "react";
import "../App.css";
import Image from "../assests/image.svg";

const Header = () => {
  return (
    <>
      <div className="contianer">
        <p className="header">
          A <span>Resume</span> That Stand you Out ! Make your own Resume{" "}
          <span>it's free</span>
        </p>
        <div className="Right-sec">
          <img src={Image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
