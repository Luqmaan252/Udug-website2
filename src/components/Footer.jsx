import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <h3>UDUD PERFUMES</h3>
                        <p>Your premier destination for authentic Somali Catars and luxury international perfumes. We bring the finest scents from Somalia and around the world.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="/#collections">Catars</a></li>
                            <li><a href="/#brands">Brands</a></li>
                            <li><a href="/#products">Perfumes</a></li>
                            <li><a href="/#story">Our Story</a></li>
                            <li><a href="/#testimonials">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Return Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Perfume Street, Mogadishu, Somalia</li>
                            <li><i className="fas fa-phone"></i> +252 61 700 0305</li>
                            <li><i className="fas fa-envelope"></i> udug@gmail.com</li>
                            <li><i className="fas fa-clock"></i> Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</li>
                        </ul>
                        <div className="fast-delivery-notice" style={{ marginTop: '15px', backgroundColor: 'rgba(212, 175, 55, 0.2)', color: '#fff', fontSize: '12px' }}>
                            <i className="fas fa-shipping-fast"></i> 24-Hour Delivery Available!
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 UDUD PERFUMES. All rights reserved. | Premium Somali Perfumes & Catars</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
