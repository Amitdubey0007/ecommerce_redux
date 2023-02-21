import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const items = useSelector(selectItems);
  console.log(items, "the items are selected");

  const Navigate = useNavigate();
  return (
    <header className="p-4 flex justify-between items-center">
      <div>
        <h1 onClick={() => Navigate("/main")} className="text-5xl">
          Ecommerce App
        </h1>
        <h2>This is no 1 store for react stuff</h2>
      </div>
      <div>
        <h2 onClick={() => Navigate("/checkout")}>
          items in your basket : {items.length}
        </h2>
      </div>
    </header>
  );
}

export default Header;
