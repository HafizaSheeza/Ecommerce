import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("Cart");
    // if (localCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parseData = JSON.parse(localCartData);
    if (!Array.isArray(parseData)) return [];
    return parseData;

};
const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }
    const setDecrement = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("Cart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrement, setDecrement }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };         