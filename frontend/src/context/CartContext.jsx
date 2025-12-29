import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existItem = prevItems.find((item) => item._id === product._id);
            if (existItem) {
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, qty: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
    };

    const updateQty = (id, action) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item._id === id) {
                    let newQty = action === 'inc' ? item.qty + 1 : item.qty - 1;
                    return { ...item, qty: Math.max(1, newQty) };
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((acc, item) => acc + item.qty, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQty,
                clearCart,
                getCartTotal,
                getCartCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
