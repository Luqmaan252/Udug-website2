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
                                                <div className="original-price-detail" style={{ color: '#999', textDecoration: 'line-through', fontSize: '18px' }}>${product.originalPrice.toFixed(2)}</div>
                                                <div className="discount-badge" style={{ backgroundColor: '#ff4444', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', marginLeft: '15px' }}>
                                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="delivery-info-detail">
                                        <i className="fas fa-shipping-fast" style={{ color: '#D4AF37', marginRight: '8px' }}></i>
                                        <span style={{ color: '#1a365d', fontWeight: '600', fontSize: '14px' }}>24-Hour Delivery to Mogadishu, Hargeisa & major cities!</span>
                                    </div>
                                </div>

                                <div className="product-quantity" style={{ display: 'flex', alignItems: 'center', margin: '30px 0' }}>
                                    <div className="quantity-label" style={{ marginRight: '15px', fontWeight: '600' }}>Quantity:</div>
                                    <div className="quantity-selector" style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '5px' }}>
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(-1)} style={{ width: '40px', height: '40px', border: 'none', background: '#f5f5f5', cursor: 'pointer' }}>-</button>
                                        <input type="text" className="quantity-input" value={quantity} readOnly style={{ width: '50px', border: 'none', textAlign: 'center', fontWeight: '600' }} />
                                        <button className="quantity-btn" onClick={() => handleQuantityChange(1)} style={{ width: '40px', height: '40px', border: 'none', background: '#f5f5f5', cursor: 'pointer' }}>+</button>
                                    </div>
                                </div>

                                <div className="product-detail-actions" style={{ display: 'flex', gap: '15px' }}>
                                    <button className="add-to-cart-detail" onClick={handleAddToCart} style={{ flex: 2, padding: '15px', background: '#000', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: '600', cursor: 'pointer' }}>
                                        <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i> Add to Cart
                                    </button>
                                    <button className="buy-now-btn" onClick={handleBuyNow} style={{ flex: 1, padding: '15px', background: '#D4AF37', color: '#000', border: 'none', borderRadius: '5px', fontWeight: '600', cursor: 'pointer' }}>
                                        <i className="fas fa-bolt" style={{ marginRight: '10px' }}></i> Buy Now
                                    </button>
                                </div>

                                <div className="product-specs" style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
                                    <h3>Product Details</h3>
                                    <div className="specs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        {product.specs.map((spec, index) => (
                                            <div className="spec-item" key={index}>
                                                <span className="spec-label" style={{ fontWeight: '600', color: '#666' }}>{spec.label}: </span>
                                                <span className="spec-value" style={{ fontWeight: '500' }}>{spec.value}</span>
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
