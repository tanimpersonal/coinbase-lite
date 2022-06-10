import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const navigator = (address) => {
    navigate(`/contact/${address}`);
  };
  return (
    <div>
      <div className="flex flex-col items-center h-screen justify-center">
        <div className="text">
          <h1>Contact us below!</h1>
        </div>
        <div className="button">
          <button
            className="bg-blue-400 ml-2 px-5 rounded-full py-2 hover:bg-blue-900"
            onClick={() => navigator("BDAddress")}
          >
            BD Address
          </button>
          <button
            className="bg-blue-400 ml-2 px-5 rounded-full py-2 hover:bg-blue-900"
            onClick={() => navigator("USAddress")}
          >
            US Address
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
