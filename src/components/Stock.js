import React from "react";

function Stock({ stock, getClickedStockAndSet, deleteClickedStockAndSet, action }) {
  
  function decideWhichFunction(stock, action) {
    if (action === 'add') {
      return getClickedStockAndSet(stock)
    } else if (action === 'delete') {
      return deleteClickedStockAndSet(stock)
    }
  }


  return (
    // might need to add a ternary to handle the click if the clicked item is already in portfolio
    <div>
      <div onClick={() => decideWhichFunction(stock, action)} className="card">
      {/* <div onClick={}className='card'> */}
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
