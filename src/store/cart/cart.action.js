import { newReducer } from "../../utils/reducer/reducer.utilis";
import CART_ACTION_TYPES from "./cart.typs";

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

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return newReducer(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemToCart = (cartItems, removeToCartItem) => {
  const newCartItems = removeCartItem(cartItems, removeToCartItem);
  return newReducer(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemToCart = (cartItems, deleteToCartItem) => {
  const newCartItems = deleteCartItem(cartItems, deleteToCartItem);
  return newReducer(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (bool) => {
  return newReducer(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};
