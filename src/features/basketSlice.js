import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addItemsToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemsToBasket: (state, action) => {
      let newBasket = [...state.items];
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        alert("WOAH! this item isn't in the basket yet");
      }
    },
  },
});

export const { addItemsToBasket, removeItemsToBasket } = basketSlice.actions;
//selectors
export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;

export const selectBasketTotalAmount = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
