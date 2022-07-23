import { createContext, useReducer } from "react";
import { newReducer } from "../utils/reducer/reducer.utilis";

const addCartItem = (cartItems, productToAdd) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, removeToCartItem) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === removeToCartItem.id
  );

  if (existingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeToCartItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeToCartItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, deleteToCartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== deleteToCartItem.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => false,
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
  countItems: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};
const INITIAL_STATE = {
  countItems: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unable to handle ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, countItems, cartTotal, isCartOpen }, dispacth] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCountItems = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );

    dispacth(
      newReducer("SET_CART_ITEMS", {
        cartItems: newCartItems,
        countItems: newCountItems,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (removeToCartItem) => {
    const newCartItems = removeCartItem(cartItems, removeToCartItem);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemToCart = (deleteToCartItem) => {
    const newCartItems = deleteCartItem(cartItems, deleteToCartItem);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispacth(newReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    deleteItemToCart,
    cartItems,
    countItems,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
