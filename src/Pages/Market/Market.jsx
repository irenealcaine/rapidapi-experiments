import { MarketExampleData } from "../../Utils/MarketExampleData";
import "./Market.scss";

const Market = () => {
  return (
    <div className="market">
      <h1>Market</h1>
      {console.log(MarketExampleData)}
      {Object.values(MarketExampleData).map((market) => (
        <div
          className={`market-item ${
            market.percentNetChange.value < 0 && "negative"
          }`}
        >
          <h2 className="name">{market.name.value}</h2>
          <p className="value">
            {market.lastPrice.value} ${" "}
            <span
              className={`percentage ${
                market.percentNetChange.value < 0 && "negative"
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
