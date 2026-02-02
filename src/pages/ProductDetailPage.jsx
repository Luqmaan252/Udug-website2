import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Find product by ID
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!product) {
        return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading or Product Not Found...</div>;
    }

    const handleQuantityChange = (delta) => {
        const newQty = quantity + delta;
        if (newQty >= 1) {
            setQuantity(newQty);
        }
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <div className="product-detail-page" style={{ display: 'block' }}>
            <section className="product-detail-section">
                <div className="container">
                    <Link to="/" className="back-to-shop" id="back-to-shop">
                        <i className="fas fa-arrow-left"></i> Back to Shop
                    </Link>

                    <div className="product-detail-container">
                        <div className="product-detail-content">
                            <div className="product-detail-images">
                                <div className="main-product-image">
                                    <img id="main-product-image" src={mainImage} alt={product.name}
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                                    />
                                </div>
                                <div className="product-thumbnails" id="product-thumbnails">
                                    {product.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`product-thumbnail ${mainImage === img ? 'active' : ''}`}
                                            onClick={() => setMainImage(img)}
                                        >
                                            <img src={img} alt={`Thumbnail ${index + 1}`}
                                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="product-detail-info">
                                <div className="product-detail-brand">{product.brand}</div>
                                <h1 className="product-detail-name">{product.name}</h1>

                                <div className="product-detail-rating">
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="rating-count">(124 reviews)</div>
                                </div>

                                <p className="product-detail-description">{product.description}</p>

                                <div className="product-detail-price-section">
                                    <div className="price-display">
                                        <div className="current-price" style={{ color: '#D4AF37', fontSize: '32px', fontWeight: '800', marginRight: '15px' }}>
                                            ${product.price.toFixed(2)}
                                        </div>
                                        {product.originalPrice && (
                                            <>
                                                <div className="original-price-detail">${product.originalPrice.toFixed(2)}</div>
                                                <div className="discount-badge">
                                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="delivery-info-detail">
                                        <i className="fas fa-shipping-fast"></i>
                                        <span>24-Hour Delivery to Mogadishu, Hargeisa, Kismayo, Garowe & all major cities!</span>
                                    </div>
                                </div>

                                <div className="product-quantity">
                                    <div className="quantity-label">Quantity:</div>
                                    <div className="quantity-selector">
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(-1)}>-</button>
                                        <input type="text" className="quantity-input" value={quantity} readOnly />
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(1)}>+</button>
                                    </div>
                                </div>

                                <div className="product-detail-actions">
                                    <button className="add-to-cart-detail" onClick={handleAddToCart}>
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </button>
                                    <button className="buy-now-btn" onClick={handleAddToCart}>
                                        <i className="fas fa-bolt"></i> Buy Now
                                    </button>
                                </div>

                                <div className="product-specs">
                                    <h3>Product Details</h3>
                                    <div className="specs-grid">
                                        {product.specs.map((spec, index) => (
                                            <div className="spec-item" key={index}>
                                                <span className="spec-label" style={{ fontWeight: '600' }}>{spec.label}: </span>
                                                <span className="spec-value">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
