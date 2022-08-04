import { createSelector } from "reselect";

const cartSelectorReducer = (state) => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelectorReducer],
  (cart) => cart.cartItems
);

export const cartIsOpenSelector = createSelector(
  [cartSelectorReducer],
  (cart) => cart.isCartOpen
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    )
);
export const cartCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);
