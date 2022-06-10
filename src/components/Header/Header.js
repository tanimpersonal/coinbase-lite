import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeakerIcon, MenuIcon, XIcon } from "@heroicons/react/solid";
const Header = () => {
  const [icon, setIcon] = useState(true);
  return (
    <div className="flex justify-center md:justify-between mx-auto bg-slate-300 sticky top-0 py-10">
      <Link to="/">
        <div className="logo px-5">
          <h1 className="text-2xl text-lime-900">Crypto Currency</h1>
        </div>
      </Link>
      <div onClick={() => setIcon(!icon)} className="w-10 md:hidden">
        {icon ? <MenuIcon></MenuIcon> : <XIcon></XIcon>}
      </div>
      <div
        className={`md:block md:static absolute px-5 duration-500 ease-in-out ${
          icon ? "top-[-130px]" : "top-10 my-10"
        }`}
      >
        <nav>
          <Link className="mx-2 text-xl" to="/">
            Home
          </Link>
          <Link className="mx-2 text-xl" to="/coins">
            Coins
          </Link>
          <Link className="mx-2 text-xl" to="/contact">
            Contact
          </Link>
          <Link className="mx-2 text-xl" to="/about">
            About
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
