import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = ({ onLoginClick, onCartClick }) => {
    const { currentUser, logout } = useAuth();
    const { cartCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleUserDropdown = (e) => {
        e.stopPropagation();
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeDropdown = () => setIsUserDropdownOpen(false);
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        setIsUserDropdownOpen(false);
        navigate('/');
    };

    return (
        <header>
            <div className="container header-container">
                <Link to="/" className="logo">UDUG <span>PERFUMES</span>
                    <span className="somali-subtitle">Soomaali Perfumes & Catars</span>
                </Link>

                <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>

                <nav className={isMobileMenuOpen ? 'active' : ''}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><a href="/#collections" onClick={() => setIsMobileMenuOpen(false)}>Catars</a></li>
                        <li><a href="/#brands" onClick={() => setIsMobileMenuOpen(false)}>Brands</a></li>
                        <li><a href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Perfumes</a></li>
                        <li><a href="/#story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a></li>
                        <li><a href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a></li>
                    </ul>
                </nav>

                <div className="header-icons">
                    {currentUser ? (
                        <div className={`user-profile active`} onClick={toggleUserDropdown}>
                            <div className="user-avatar">{currentUser.name.charAt(0).toUpperCase()}</div>
                            <button className="user-name">{currentUser.name}</button>
                            <div className={`user-dropdown ${isUserDropdownOpen ? 'active' : ''}`}>
                                <Link to="/profile">My Profile</Link>
                                <Link to="/profile">My Orders</Link>
                                <a href="#" onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    ) : (
                        <div className="user-icon" onClick={onLoginClick}>
                            <i className="fas fa-user"></i>
                        </div>
                    )}

                    <div className="cart-icon" onClick={onCartClick}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">{cartCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
