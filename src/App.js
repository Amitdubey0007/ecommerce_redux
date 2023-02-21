import React from "react";
import Products from "./components/Products";
import { useSelector } from "react-redux";
import { selectItems } from "./features/basketSlice";
import BasketView from "./components/BasketView";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="p-4">
      <Header />
      <Routes>
        <Route exact path="/checkout" element={<BasketView />} />
        {/* <BasketView /> */}
        <Route path="/main" exact element={<Products />} />
      </Routes>
      <Products id="1234" title="Iphone Store 2021" price={5000} />
      <Products id="9999" title="SoftSkill by john smilga" price={1000} />
      <Products id="5678" title="Rubix Cube" price={10} />
    </div>
  );
}

export default App;
