import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import coinLoad from "../../utility/coinLoad";

const Coins = () => {
  let [loading, setLoading] = useState(true);
  let [coins, setCoins] = coinLoad();
  useEffect(() => {
    setLoading(false);
  }, [coins]);
  let navigate = useNavigate();
  const navigator = (coin) => {
    navigate(`/coins/${coin.id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 mx-10 gap-5">
      {loading ? (
        <SpinnerDotted className="flex justify-center items-center" />
      ) : (
        coins.map((coin) => (
          <div
            onClick={() => navigator(coin)}
            className="grid grid-cols-2 justify-between my-5 py-5 px-5 items-center rounded-2xl shadow-2xl"
            key={coin.id}
          >
            <div className="image">
              <img src={coin.image.small} alt="" />
            </div>
            <div className="text text-right">
              <h1>{coin.name}</h1>
              <p>{coin.symbol}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Coins;
