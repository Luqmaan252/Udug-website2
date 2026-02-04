import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Header = ({ onLoginClick, onCartClick }) => {
    const { currentUser, logout } = useAuth();
    const { cartCount } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleUserDropdown = (e) => {
        e.stopPropagation();
        setIsUserDropdownOpen(!isUserDropdownOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery('');
            setSearchResults([]);
        }
    };

    // Close dropdown when clicking outside and handle scroll
    useEffect(() => {
        const closeDropdown = () => {
            setIsUserDropdownOpen(false);
        };
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        document.addEventListener('click', closeDropdown);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', closeDropdown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim().length > 0) {
            const lowerQuery = query.toLowerCase();
            const filtered = products.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.brand.toLowerCase().includes(lowerQuery)
            ).sort((a, b) => {
                // Prioritize items that start with the query
                const aStarts = a.name.toLowerCase().startsWith(lowerQuery);
                const bStarts = b.name.toLowerCase().startsWith(lowerQuery);
                if (aStarts && !bStarts) return -1;
                if (!aStarts && bStarts) return 1;
                return 0;
            }).slice(0, 8);
            setSearchResults(filtered);
        } else {
            setSearchResults([]);
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        setIsUserDropdownOpen(false);
        navigate('/');
    };

    return (
        <>
            <header className={isScrolled ? 'scrolled' : ''}>
                <div className="container header-container">
                    <Link to="/" className="logo">UDUG
                    </Link>

                    <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </div>

                    <nav className={isMobileMenuOpen ? 'active' : ''}>
                        <ul>
                            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                            <li><a href="/#brands" onClick={() => setIsMobileMenuOpen(false)}>Brands</a></li>
                            <li><a href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Perfumes</a></li>
                            <li><a href="/#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a></li>
                            <li><Link to="/our-story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header-search-bar">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search perfumes, catars..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        {searchResults.length > 0 && searchQuery.length > 0 && (
                            <div className="search-dropdown-results">
                                {searchResults.map(product => (
                                    <div key={product.id} className="search-dropdown-item" onClick={() => handleProductClick(product.id)}>
                                        <img src={product.image} alt={product.name} />
                                        <div className="result-detail">
                                            <span className="result-name">{product.name}</span>
                                            <span className="result-brand">{product.brand}</span>
                                        </div>
                                        <span className="result-price">${product.price.toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="header-icons">

                        <button className="nav-icon-btn cart-trigger" onClick={onCartClick}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="cart-count">{cartCount}</span>
                        </button>

                        {currentUser ? (
                            <div className={`user-nav-item ${isUserDropdownOpen ? 'active' : ''}`} onClick={toggleUserDropdown}>
                                <div className="user-avatar-mini">
                                    {currentUser.avatarUrl ? (
                                        <img
                                            src={currentUser.avatarUrl}
                                            alt="Avatar"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerText = currentUser.name.charAt(0).toUpperCase();
                                            }}
                                        />
                                    ) : (
                                        currentUser.name.charAt(0).toUpperCase()
                                    )}
                                </div>
                                <div className={`user-nav-dropdown ${isUserDropdownOpen ? 'show' : ''}`}>
                                    <div className="dropdown-header">
                                        <p className="user-email">{currentUser.email}</p>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <Link to="/profile"><i className="fas fa-user-circle"></i> My Profile</Link>
                                    <Link to="/orders"><i className="fas fa-box"></i> My Orders</Link>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" onClick={handleLogout} className="logout-link"><i className="fas fa-sign-out-alt"></i> Logout</a>
                                </div>
                            </div>
                        ) : (
                            <div className="auth-action-group">
                                <button className="btn-auth-signin" onClick={onLoginClick}>Log In</button>
                                <button className="btn-auth-signup" onClick={onLoginClick}>Sign Up</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
