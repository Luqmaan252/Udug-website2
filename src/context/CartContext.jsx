import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem('ududPerfumesCart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    const saveCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem('ududPerfumesCart', JSON.stringify(newCart));
    };

    const addToCart = (product, quantity = 1) => {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        let newCart;

        if (existingItemIndex > -1) {
            newCart = [...cart];
            newCart[existingItemIndex].quantity += quantity;
        } else {
            newCart = [...cart, { ...product, quantity }];
        }

        saveCart(newCart);
        setIsCartOpen(true); // Open cart when item added
    };

    const removeFromCart = (productId) => {
        const newCart = cart.filter(item => item.id !== productId);
        saveCart(newCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;

        const newCart = cart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        saveCart(newCart);
    };

    const clearCart = () => {
        saveCart([]);
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const closeCart = () => setIsCartOpen(false);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const shipping = 5.00; // Flat rate
    const total = subtotal + tax + shipping;

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isCartOpen,
            toggleCart,
            closeCart,
            cartCount,
            subtotal,
            tax,
            shipping,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
};
