import React, { useState } from "react";

function SearchBar({ handleAlphabeticSort }) {
  const [alphChecked, setAlphChecked] = useState(false)
  const [priceChecked, setPriceChecked] = useState(false)

  function handleAlphChecked() {
    setAlphChecked(alphChecked => !alphChecked)
  }
  console.log(alphChecked)

  function handlePriceChecked() {
    setPriceChecked(priceChecked => !priceChecked)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphChecked}
          onClick={handleAlphChecked}
          onChange={handleAlphabeticSort(alphChecked)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handlePriceChecked}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
