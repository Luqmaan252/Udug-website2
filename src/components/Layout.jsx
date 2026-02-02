import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartModal from './CartModal';
import LoginModal from './LoginModal';

const Layout = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // Handlers to open modals from Header
    const handleCartClick = () => setIsCartOpen(true);
    const handleLoginClick = () => setIsLoginOpen(true);

    // Handlers to close modals
    const closeCart = () => setIsCartOpen(false);
    const closeLogin = () => setIsLoginOpen(false);

    return (
        <>
            <Header onLoginClick={handleLoginClick} onCartClick={handleCartClick} />

            <main>
                {children}
            </main>

            <Footer />

            <CartModal isOpen={isCartOpen} onClose={closeCart} />
            <LoginModal isOpen={isLoginOpen} onClose={closeLogin} />

            {/* Overlay for modals */}
            <div className={`overlay ${(isCartOpen || isLoginOpen) ? 'active' : ''}`} onClick={() => {
                closeCart();
                closeLogin();
            }}></div>
        </>
    );
};

export default Layout;
