
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
                            <span className="welcome-text" style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontSize: '28px',
                                fontWeight: '800',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '12px',
                                animation: 'shimmer 3s infinite'
                            }}>✨ New Collection 2026</span>
                            <span className="section-subtitle" style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '4px',
                                color: '#999',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '15px'
                            }}>Welcome To</span>
                            <h1>UDUG Perfumes</h1>
                            <p>Discover our exclusive collection of traditional Somali Catars and premium international perfumes. Experience the luxury of authentic scents from Somalia and around the world.</p>
                            <a href="#products" className="btn btn-gold">Shop Now</a>
                        </div>
                        <div className="hero-image">
                            <div className="hero-badge">New Arrival</div>
                            <img src="/images/15.jpeg" alt="Somali Perfume Collection"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                            />
                            <div className="delivery-badge">24-Hour Delivery</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Inspired by Luxury Trust design */}
            <section className="trust-section" id="collections">
                <div className="trust-container">
                    <div className="trust-text-side">
                        <div className="trust-underline"></div>
                        <h2>15,000+ Fragrance <span>Lovers built on Trust</span></h2>
                        <p className="trust-description">
                            Trusted by thousands across Somalia and beyond, UDUG Perfumes delivers unmatched authenticity and premium quality. Our collection blends traditional heritage with modern luxury to define your signature scent.
                        </p>
                        <a href="#products" className="btn btn-gold btn-large">Discover our scents</a>
                    </div>

                    <div className="trust-stats-side">
                        <div className="stat-card">
                            <span className="stat-number">25k+</span>
                            <span className="stat-label">Happy customers <br />worldwide</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Luxury perfumes <br />completed</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Expert scent <br />support team</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">99%</span>
                            <span className="stat-label">Satisfaction <br />client rating</span>
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
                        <div className="brand-card"><h4>Asad</h4></div>
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

                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-text">
                                "The traditional Somali Catar I purchased was absolutely authentic! The scent lasts all day and brings back memories of home. Fast delivery to Garowe!"
                            </div>
                            <div className="testimonial-author">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" />
                                <div className="author-info">
                                    <h4>Fatima Ahmed</h4>
                                    <p>Garowe, Somalia</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-text">
                                "I was impressed by the quick delivery to Hargeisa. The 9PM perfume is original and the packaging was very premium. Will definitely order again!"
                            </div>
                            <div className="testimonial-author">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" />
                                <div className="author-info">
                                    <h4>Mustafa Barre</h4>
                                    <p>Hargeisa, Somalia</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-text">
                                "Udug Perfumes has the best collection of Oud in the city. Their customer service is top-notch and they really know their scents. Highly recommended!"
                            </div>
                            <div className="testimonial-author">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Customer" />
                                <div className="author-info">
                                    <h4>Zahra Yusuf</h4>
                                    <p>Mogadishu, Somalia</p>
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
