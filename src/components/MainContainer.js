import React, { useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocksArr, setStocksArr] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  // get fetch of data to work with when page initially loads
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(fetchedStocksArr => setStocksArr(fetchedStocksArr))
  }, [])

  function getClickedStockAndSet(clickedStockObj) {
    const clickedStocksArr = [...portfolioStocks, clickedStockObj]
    setPortfolioStocks(clickedStocksArr)
  }

  function deleteClickedStockAndSet(stockToDel) {
    // const portfolioArrAfterDel = portfolioStocks.filter(portfolio => portfolio.id !== stockToDel.id)
    // console.log(portfolioArrAfterDel)
    console.log(stockToDel)
  }


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocksArr={stocksArr} getClickedStockAndSet={getClickedStockAndSet}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} deleteClickedStockAndSet={deleteClickedStockAndSet}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;