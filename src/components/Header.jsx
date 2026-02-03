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
                    <Link to="/" className="logo">UDUG <span>PERFUMES</span>
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
                            <li><Link to="/our-story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link></li>
                            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="header-icons">
                        <button className="nav-icon-btn search-trigger" onClick={toggleSearch}>
                            <i className="fas fa-search"></i>
                        </button>

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

            {/* Premium Search Overlay */}
            {isSearchOpen && (
                <div className="search-overlay active">
                    <div className="search-modal">
                        <div className="search-header">
                            <i className="fas fa-search search-main-icon"></i>
                            <input
                                type="text"
                                placeholder="Search for perfumes, catars, brands..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                autoFocus
                            />
                            <button className="close-search" onClick={toggleSearch}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="search-results-container">
                            {searchResults.length > 0 ? (
                                <div className="search-results-list">
                                    <p className="results-label">Top Results</p>
                                    {searchResults.map(product => (
                                        <div key={product.id} className="search-result-item" onClick={() => handleProductClick(product.id)}>
                                            <div className="result-img">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                            <div className="result-info">
                                                <h4>{product.name}</h4>
                                                <p>{product.brand}</p>
                                            </div>
                                            <div className="result-price">
                                                ${product.price.toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : searchQuery.length > 1 ? (
                                <div className="no-results">
                                    <i className="fas fa-search"></i>
                                    <p>No products found for "{searchQuery}"</p>
                                </div>
                            ) : (
                                <div className="search-suggestions">
                                    <p className="results-label">Popular Searches</p>
                                    <div className="suggestion-tags">
                                        <span onClick={() => { setSearchQuery('Catar'); handleSearchChange({ target: { value: 'Catar' } }) }}>Catar</span>
                                        <span onClick={() => { setSearchQuery('Dior'); handleSearchChange({ target: { value: 'Dior' } }) }}>Dior</span>
                                        <span onClick={() => { setSearchQuery('Chanel'); handleSearchChange({ target: { value: 'Chanel' } }) }}>Chanel</span>
                                        <span onClick={() => { setSearchQuery('Uunsi'); handleSearchChange({ target: { value: 'Uunsi' } }) }}>Uunsi</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
