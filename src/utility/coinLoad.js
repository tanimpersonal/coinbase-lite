import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";
const coinLoad = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [coins, setCoins] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/")
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  return [coins, setCoins];
};
export default coinLoad;
