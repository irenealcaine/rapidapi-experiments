import { useEffect, useState } from "react";
import { MarketExampleData } from "../../Utils/MarketExampleData";
import "./Market.scss";
import axios from "axios";
// https://rapidapi.com/apidojo/api/morning-star

const Market = () => {

  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_URL_MARKET, {
          params: {
            performanceIds: '0P0000OQN8,0P000000GY'
          },
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_MARKET_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_TU_RAPIDAPI_KEY,
          },
        });

        setMarketData(response.data);
        console.log(marketData);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="market">
      <h1>Market</h1>
      {console.log(MarketExampleData)}
      {Object.values(MarketExampleData).map((market) => (
        <div
          className={`market-item ${market.percentNetChange.value < 0 && "negative"
            }`}
        >
          <h2 className="name">{market.name.value}</h2>
          <p className="value">
            {market.lastPrice.value} ${" "}
            <span
              className={`percentage ${market.percentNetChange.value < 0 && "negative"
                }`}
            >
              {"("}
              {market.percentNetChange.value > 0 ? "+" : ""}
              {market.percentNetChange.value}
              {"%)"}
            </span>
          </p>
          {/* <p>Date: {market.lastPrice.date.value}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Market;
