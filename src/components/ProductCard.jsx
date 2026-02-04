import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart, isCartOpen } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isCartOpen) {
            addToCart(product);
        }
    };

    const displayPrice = product.originalPrice ? (
        <div className="product-price-details">
            <div className="price">${product.price.toFixed(2)}</div>
            <div className="original-price">${product.originalPrice.toFixed(2)}</div>
        </div>
    ) : (
        <div className="price">${product.price.toFixed(2)}</div>
    );

    // Star rating logic
    const rating = product.rating || 4.5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-img">
                    <img
                        src={product.image}
                        alt={product.name}
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                    />
                    <div className="product-tag">{product.tag}</div>
                </div>
                <div className="product-info">
                    <div className="product-brand">{product.brand}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                        {Array(fullStars).fill().map((_, i) => <span key={i} className="star full">★</span>)}
                        {halfStar && <span className="star half">★</span>}
                        {Array(emptyStars).fill().map((_, i) => <span key={i + fullStars + 1} className="star empty">★</span>)}
                        <span className="rating-value">{rating.toFixed(1)}</span>
                    </div>
                    <div className="product-price">
                        {displayPrice}
                        <button className="add-to-cart" onClick={handleAddToCart} disabled={isCartOpen}>
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
