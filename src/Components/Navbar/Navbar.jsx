import React from "react";
import navLogo from "../../assets/images/logo.png";
import dollarImg from "../../assets/images/DoubleDollar.png";
const Navbar = () => {
  return (
    <div className="flex w-11/12 mx-auto justify-between items-center ">
      <img src={navLogo} alt="logo" />
      <ul className="flex gap-2">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
      <button className="flex items-center justify-center gap-1">
        <span>0</span>
        <span className="flex items-center gap-1">
          Coin <img src={dollarImg} />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
