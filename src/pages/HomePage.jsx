
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main-shop-page">
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="welcome-text">New Collection 2026</span>
                            <span className="section-subtitle">Welcome To</span>
                            <h1>UDUG Perfumes</h1>
                            <p>Discover our exclusive collection of traditional Somali Catars and premium international perfumes. Experience the luxury of authentic scents from Somalia and around the world.</p>
                            <a href="#products" className="btn btn-gold">Shop Now</a>
                        </div>
                        <div className="hero-image">
                            <div className="hero-badge">New Arrival</div>
                            <img src="/images/perfume1.jpg" alt="Somali Perfume Collection"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                            />
                            <div className="delivery-badge">24-Hour Delivery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Section - Redesigned for Premium Feel */}
            <section className="collections-elegant" id="collections">
                <div className="container-narrow">
                    <div className="elegant-header">
                        <div className="header-main">
                            <span className="gold-accent-text">Traditional Scents</span>
                            <h2>Somali Catars & Perfumes</h2>
                        </div>
                        <div className="header-desc">
                            <p>Hand-blended by masters using ancient Somali recipes. Our 100% authentic Catars bring the soul of Mogadishu, Hargeisa, and Garowe to your doorstep.</p>
                        </div>
                    </div>

                    <div className="collections-premium-grid">
                        <div className="collection-premium-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1616984748474-21a43973bc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Traditional Somali Catar"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                                />
                                <div className="card-badge">Premium Origin</div>
                            </div>
                            <div className="card-content-elegant">
                                <div className="card-content-top">
                                    <h3>Traditional Catars</h3>
                                    <p>Experience the deep, balsamic notes of natural Somali resins and aged oud. Perfect for heritage and prestige.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#products" className="btn-scent-link">Explore Collection <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="collection-premium-card">
                            <div className="card-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern Perfumes"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                                />
                            </div>
                            <div className="card-content-elegant">
                                <div className="card-content-top">
                                    <h3>Modern Luxury</h3>
                                    <p>International fragrances infused with rare Somali musk and amber for a unique, global appeal.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#products" className="btn-scent-link">Browse Full Range <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands Section - Now a sleek bridge */}
            <section className="brands" id="brands" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container-narrow">

                    <div className="brands-grid">
                        <div className="brand-card"><h4>Uunsi Soomaali</h4></div>
                        <div className="brand-card"><h4>Catar</h4></div>
                        <div className="brand-card"><h4>Chanel</h4></div>
                        <div className="brand-card"><h4>Dior</h4></div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products" id="products">
                <div className="container-narrow">
                    <div className="section-header">
                        <span className="section-subtitle">Premium Selection</span>
                        <h2>Best Selling Perfumes & Catars</h2>
                    </div>

                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Customer Reviews</span>
                        <h2>What Our Customers Say</h2>
                    </div>

                    <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="testimonial-card" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="testimonial-text" style={{ marginBottom: '20px', fontStyle: 'italic', color: '#555' }}>
                                "The traditional Somali Catar I purchased was absolutely authentic! The scent lasts all day and brings back memories of home. Fast delivery to Garowe!"
                            </div>
                            <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }} />
                                <div className="author-info">
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>Fatima Ahmed</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>Garowe, Somalia</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="testimonial-text" style={{ marginBottom: '20px', fontStyle: 'italic', color: '#555' }}>
                                "I was impressed by the quick delivery to Hargeisa. The 9PM perfume is original and the packaging was very premium. Will definitely order again!"
                            </div>
                            <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }} />
                                <div className="author-info">
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>Mustafa Barre</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>Hargeisa, Somalia</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="testimonial-text" style={{ marginBottom: '20px', fontStyle: 'italic', color: '#555' }}>
                                "Udug Perfumes has the best collection of Oud in the city. Their customer service is top-notch and they really know their scents. Highly recommended!"
                            </div>
                            <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', marginRight: '15px' }} />
                                <div className="author-info">
                                    <h4 style={{ margin: 0, fontSize: '16px' }}>Zahra Yusuf</h4>
                                    <p style={{ margin: 0, fontSize: '13px', color: '#999' }}>Mogadishu, Somalia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact CTA Section */}
            <section className="contact-cta">
                <div className="container contact-cta-container">
                    <span className="contact-cta-subtitle">Have Questions?</span>
                    <h2 className="contact-cta-title">We're Here to Help You Find Your Signature Scent</h2>
                    <p className="contact-cta-text">
                        Whether you're looking for a traditional Somali Catar or a modern international fragrance, our experts are ready to assist you.
                    </p>
                    <div className="contact-cta-buttons">
                        <Link to="/contact" className="btn btn-gold btn-large">Send a Message</Link>
                        <a href="https://wa.me/252617000305" className="btn btn-whatsapp btn-large">
                            <i className="fab fa-whatsapp"></i> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
