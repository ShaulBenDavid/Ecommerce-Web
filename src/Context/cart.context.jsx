import { createContext, useState, useEffect } from "react";

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
        return cartItems.filter((cartItem) => 
            cartItem.id !== removeToCartItem.id  
        )
    }

    return cartItems.map((cartItem) =>
    cartItem.id === removeToCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );

};

const deleteCartItem = (cartItems, deleteToCartItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== deleteToCartItem.id )
};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => false,
    cartItems: [],
    addItemToCart: () => { },
    removeItemToCart: () => { },
    deleteItemToCart: () => { },
    countItems: 0,
    cartTotal: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCountItems = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
        setCountItems(newCountItems);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, currentItem) => total + currentItem.quantity * currentItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };

    const removeItemToCart = (removeToCartItem) => {
        setCartItems(removeCartItem(cartItems, removeToCartItem));
    };

    const deleteItemToCart = (deleteToCartItem) => {
        setCartItems(deleteCartItem(cartItems, deleteToCartItem));
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

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}