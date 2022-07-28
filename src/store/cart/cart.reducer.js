import CART_ACTION_TYPES from "./cart.typs";

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log(action)

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
