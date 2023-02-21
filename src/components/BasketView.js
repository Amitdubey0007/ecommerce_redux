import React from "react";
import { useSelector } from "react-redux";
import { selectBasketTotalAmount, selectItems } from "../features/basketSlice";
import Products from "./Products";

function BasketView() {
  const items = useSelector(selectItems);
  const totalb = useSelector(selectBasketTotalAmount);
  return (
    <div>
      <div className="flex p-4 justify-between center">
        <h5 className="text-5xl underline">YourBasket</h5>
        <h4>Total Amount: ${totalb} </h4>
      </div>
      {items.map(({ id, title, price }) => (
        <Products id={id} title={title} price={price} />
      ))}
    </div>
  );
}

export default BasketView;
