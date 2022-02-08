import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, deleteClickedStockAndSet }) {


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(portfolioStock => {
        return (
          <Stock
            key={`${portfolioStock.id} p`}
            stock={portfolioStock}
            action='delete'
            deleteClickedStockAndSet={deleteClickedStockAndSet}
          />
        )
      })}
    </div>
  );
}

export default PortfolioContainer;
