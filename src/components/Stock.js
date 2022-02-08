import React from "react";

function Stock({ stock, getClickedStockAndSet, deleteClickedStockAndSet, action }) {
  // function handlePassClickedStock(stockObj) {
  //   // send clicked stock obj up to most common parent
  //   getClickedStockAndSet(stockObj)
  // }

  // function handlePassStockToDelete(stockObj) {
  //   deleteClickedStockAndSet(stockObj)
  // }
  
  function decideWhichFunction(stock, action) {
    console.log(action)
    // getting that deleteClickedStockAndSet is not a function error but add works
    if (action='delete') {
      return deleteClickedStockAndSet(stock)
    } else if (action='add') {
      return getClickedStockAndSet(stock)
    }
  }

  

  return (
    // might need to add a ternary to handle the click if the clicked item is already in portfolio
    <div>
      <div onClick={() => decideWhichFunction(stock, action)} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
