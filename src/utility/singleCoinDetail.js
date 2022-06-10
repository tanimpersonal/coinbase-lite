import { useEffect, useState } from "react";

const singleCoinDetail = (id) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [coin, setCoin] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, []);
  return [coin, setCoin];
};
export default singleCoinDetail;
