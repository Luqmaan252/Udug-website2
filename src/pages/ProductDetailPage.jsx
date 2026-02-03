import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Find product by ID
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setMainImage(foundProduct.image);

            // Get related products (same brand or tag, excluding current)
            const related = products
                .filter(p => p.id !== foundProduct.id && (p.brand === foundProduct.brand || p.tag === foundProduct.tag))
                .slice(0, 4);
            setRelatedProducts(related);

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

    const handleBuyNow = () => {
        addToCart(product, quantity);
        navigate('/payment');
    };

    return (
        <div className="product-detail-page" style={{ display: 'block' }}>
            <section className="product-detail-section">
                <div className="container">
                    <Link to="/" className="back-to-shop" id="back-to-shop">
                        <i className="fas fa-arrow-left"></i> Back to Shop
                    </Link>

                    <div className="product-detail-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div className="product-detail-content" style={{ display: 'flex', gap: '40px', padding: '30px 0' }}>
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

                            <div className="product-detail-info" style={{ flex: '1' }}>
                                <div className="product-detail-brand" style={{ color: '#999', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>{product.brand}</div>
                                <h1 className="product-detail-name" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '15px', lineHeight: '1.2' }}>{product.name}</h1>

                                <div className="product-detail-rating" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                                    <div className="stars" style={{ color: '#D4AF37', fontSize: '14px' }}>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="rating-count" style={{ fontSize: '13px', color: '#777' }}>(124 reviews)</div>
                                </div>

                                <p className="product-detail-description" style={{ fontSize: '14px', lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>{product.description}</p>

                                <div className="product-detail-price-section" style={{ marginBottom: '25px' }}>
                                    <div className="price-display" style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                                        <div className="current-price" style={{ color: '#D4AF37', fontSize: '28px', fontWeight: '800', marginRight: '12px' }}>
                                            ${product.price.toFixed(2)}
                                        </div>
                                        {product.originalPrice && (
                                            <>
                                                <div className="original-price-detail" style={{ color: '#999', textDecoration: 'line-through', fontSize: '16px' }}>${product.originalPrice.toFixed(2)}</div>
                                                <div className="discount-badge" style={{ backgroundColor: '#ff4444', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '700', marginLeft: '10px' }}>
                                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="delivery-info-detail" style={{ backgroundColor: '#f9f9f9', padding: '10px 15px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                                        <i className="fas fa-shipping-fast" style={{ color: '#D4AF37', marginRight: '8px', fontSize: '14px' }}></i>
                                        <span style={{ color: '#1a365d', fontWeight: '600', fontSize: '13px' }}>24-Hour Delivery to major cities!</span>
                                    </div>
                                </div>

                                <div className="product-quantity" style={{ marginBottom: '20px' }}>
                                    <div className="quantity-label" style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', color: '#333' }}>Quantity:</div>
                                    <div className="quantity-selector" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(-1)} style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: '700' }}>-</button>
                                        <input type="text" className="quantity-input" value={quantity} readOnly style={{ width: '50px', height: '40px', textAlign: 'center', border: '1px solid #ddd', borderLeft: 'none', borderRight: 'none', fontSize: '14px', fontWeight: '700' }} />
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(1)} style={{ width: '40px', height: '40px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: '700' }}>+</button>
                                    </div>
                                </div>

                                <div className="product-detail-actions" style={{ display: 'flex', gap: '12px', marginBottom: '25px' }}>
                                    <button className="add-to-cart-detail" onClick={handleAddToCart} style={{ flex: '1', padding: '14px 24px', background: 'var(--primary-color)', color: '#fff', border: 'none', fontSize: '14px', fontWeight: '700', cursor: 'pointer', borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s' }}>
                                        <i className="fas fa-shopping-cart" style={{ marginRight: '8px' }}></i> Add to Cart
                                    </button>
                                    <button className="buy-now-btn" onClick={handleBuyNow} style={{ flex: '1', padding: '14px 24px', background: 'var(--accent-gold)', color: 'var(--primary-color)', border: 'none', fontSize: '14px', fontWeight: '700', cursor: 'pointer', borderRadius: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', transition: 'all 0.3s' }}>
                                        <i className="fas fa-bolt" style={{ marginRight: '8px' }}></i> Buy Now
                                    </button>
                                </div>

                                <div className="product-specs" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
                                    <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '15px', color: 'var(--primary-color)' }}>Product Details</h3>
                                    <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                                        {product.specs.map((spec, index) => (
                                            <div className="spec-item" key={index} style={{ fontSize: '13px', lineHeight: '1.6' }}>
                                                <span className="spec-label" style={{ fontWeight: '600', color: '#555' }}>{spec.label}: </span>
                                                <span className="spec-value" style={{ color: '#777' }}>{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    {relatedProducts.length > 0 && (
                        <div className="related-products" style={{ marginTop: '80px' }}>
                            <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <span className="section-subtitle">Customers Also Viewed</span>
                                <h2>Related Products</h2>
                            </div>
                            <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
                                {relatedProducts.map(p => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
