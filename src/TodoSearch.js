import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSerachValue }) {
  /* //TodoSearch recibe searchValue, setSerachValue */
  const onSearchValueChenge = (event) => {
    console.log(event.target.value);
    setSerachValue(event.target.value);
  };

  return (
    /* //input consume a searchValue, setSerachValue */
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChenge}
    />
  );
}

export { TodoSearch };
