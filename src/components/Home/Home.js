import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const navigator = () => {
    navigate("/coins");
  };
  return (
    <div className="h-screen bg-blue-400 flex flex-col justify-center items-center">
      <div className="heading">
        <h1 className="text-6xl">Welcome to my Vangachora Crypto</h1>
      </div>
      <div className="button">
        <button
          onClick={navigator}
          className="bg-blue-900 py-2 my-5 rounded-lg px-2"
        >
          Explore Coins
        </button>
      </div>
    </div>
  );
};

export default Home;
