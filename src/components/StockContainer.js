import React from "react";
import Stock from "./Stock";

function StockContainer({ stocksArr, getClickedStockAndSet }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocksArr.map(stock => {
        return (
          <Stock
            key={stock.name}
            stock={stock}
            getClickedStockAndSet={getClickedStockAndSet}
            action='add'
          />
        )
      })}
    </div>
  );
}

export default StockContainer;
