import React from "react";
import { useDispatch } from "react-redux";
import { addItemsToBasket, removeItemsToBasket } from "../features/basketSlice";
import Currency from "react-currency-formatter";

function Products({ id, title, price }) {
  const dispatch = useDispatch();
  const addItems = () => {
    const product = {
      id,
      title,
      price,
    };
    dispatch(addItemsToBasket(product));
  };
  const removeItem = () => {
    dispatch(removeItemsToBasket({ id }));
  };
  return (
    <div className=" flex justify-between  p-5 border-blue-500 border m-5 cursor-pointer hover:animate-pulse">
      <div className="text-center">
        <h1>{title} </h1>
        <h5>${price}</h5>
      </div>
      <div className="flex flex-col">
        <button
          onClick={addItems}
          className="p-4 bg-red-500 rounded-2xl focus:ring-2 ring-red-800 hover:bg-cyan-200">
          Add product
        </button>

        <button onClick={removeItem}>Remove Product</button>
      </div>
    </div>
  );
}

export default Products;
