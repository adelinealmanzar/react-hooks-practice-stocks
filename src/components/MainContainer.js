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
    console.log(portfolioStocks)
    const portfolioArrAfterDel = portfolioStocks.filter(portfolio => portfolio.id !== stockToDel.id)
    setPortfolioStocks(portfolioArrAfterDel)
  }

  

  function handleAlphabeticSort(alphChecked) {
    const sortedStocksArr = stocksArr.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1
        }
        return 0
      }
    )
    console.log(sortedStocksArr)
    if (alphChecked === true) {
      setStocksArr(sortedStocksArr)
    } else { // left off: displaying unsoted arr back to the dom if false
      useEffect(() => {
        fetch('http://localhost:3001/stocks')
          .then(r => r.json())
          .then(unsortedArr => setStocksArr(unsortedArr)) 
      })
    }
  }

  console.log(stocksArr)

  return (
    <div>
      <SearchBar handleAlphabeticSort={handleAlphabeticSort}/>
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


/*
Sort alphabetically by ticket name
Sort by ascending price
*/