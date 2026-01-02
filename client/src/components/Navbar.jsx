import React from "react";
import { Link } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const { openSignIn } = useClerk();

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
      </Link>

      <button
        onClick={() => openSignIn()}
        className="group relative overflow-hidden bg-zinc-900 text-white flex items-center gap-3 px-5 py-2.5 sm:px-8 sm:py-3 text-sm rounded-full cursor-pointer transition-all duration-500 ease-out hover:scale-105 shadow-lg hover:shadow-fuchsia-500/40"
      >
        {/* MAGIC LIGHT EFFECT */}
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-fuchsia-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

        {/* TEXT */}
        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
          Get Started
        </span>

        {/* ARROW */}
        <img
          src={assets.arrow_icon}
          alt="arrow-icon"
          className="relative z-10 w-3 sm:w-4 opacity-0 translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </button>
    </div>
  );
};

export default Navbar;
