import React from "react";
import { useParams } from "react-router-dom";
import singleCoinDetail from "../../utility/singleCoinDetail";

const CoinDetail = () => {
  let params = useParams();
  const { coinID } = params;
  const [coin, setCoin] = singleCoinDetail(coinID);
  return (
    <div className="flex items-center flex-wrap justify-evenly">
      <div className="text">
        <h1>General info: </h1>
        <p>Coin Name: {coin?.name}</p>
        <p>Market Rank: {coin?.market_cap_rank} </p>
      </div>
      <div className="image my-5">
        <img src={coin.image?.large} alt="" />
      </div>
    </div>
  );
};

export default CoinDetail;
