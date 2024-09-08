import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex gap-8 font-poppins font-bold text-gray-500">
        <img src={logo} alt="" />
        <div>Features</div>
        <div>Pricing</div>
        <div>Resources</div>
      </div>
      <div className="gap-8 flex">
        <button className="font-bold text-gray-500 ">Login</button>
        <button className="font-bold text-white border rounded-full pl-[14px] p-[4px] pr-[14px]  bg-cyan ">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
