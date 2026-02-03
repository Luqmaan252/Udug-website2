
import React, { useEffect } from 'react';

const OurStoryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="our-story-page" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
            {/* Hero Section */}
            <section className="story-hero" style={{
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '320px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                borderRadius: '40px',
                margin: '0 auto 30px',
                width: '95%',
                maxWidth: '1300px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
                <div className="container-narrow">
                    <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '14px', fontWeight: '700', color: '#D4AF37' }}>Preserving Heritage</span>
                    <h1 style={{ fontSize: '48px', marginTop: '10px' }}>Our Story</h1>
                </div>
            </section>

            <div className="container-narrow story-content-wrapper">
                <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div className="story-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ position: 'relative', width: '85%' }}>
                            <img
                                src="/images/2.jpeg"
                                alt="Traditional Somali Fragrance"
                                style={{
                                    width: '100%',
                                    maxHeight: '450px',
                                    objectFit: 'cover',
                                    borderRadius: '25px',
                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                                    display: 'block'
                                }}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                            />
                        </div>
                    </div>
                    <div className="story-text-content">
                        <span className="section-subtitle">Since 2010</span>
                        <h2 style={{ fontSize: '36px', marginBottom: '25px' }}>The Essence of Somalia</h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                            Founded in 2010, UDUD PERFUMES began with a single mission: to bring the ancient, aromatic traditions of Somalia to the modern world. For centuries, Somali "Catars" and "Uunsi" have been more than just scents—they are symbols of hospitality, culture, and identity.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                            We started as a small boutique in Mogadishu, working with local artisans who mastered the art of blending frankincense from the mountains of Sanaag with exotic spices and oils. Today, we are proud to be the bridge between traditional heritage and international luxury.
                        </p>
                    </div>
                </div>

                <div className="values-section" style={{ marginTop: '60px', backgroundColor: '#fdfbf7', padding: '40px 30px', borderRadius: '30px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span className="section-subtitle" style={{ fontSize: '12px' }}>Why We Are Special</span>
                        <h2 style={{ fontSize: '28px' }}>Our Core Values</h2>
                    </div>
                    <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
                        <div className="value-item" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '32px', color: '#D4AF37', marginBottom: '15px' }}><i className="fas fa-gem"></i></div>
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Quality Ingredients</h3>
                            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>We use find raw materials, from pure Somali resins to premium international oils.</p>
                        </div>
                        <div className="value-item" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '32px', color: '#D4AF37', marginBottom: '15px' }}><i className="fas fa-handshake"></i></div>
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Fair Trade</h3>
                            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>We work with local communities to ensure sustainable harvesting and fair wages.</p>
                        </div>
                        <div className="value-item" style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '32px', color: '#D4AF37', marginBottom: '15px' }}><i className="fas fa-heart"></i></div>
                            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Authenticity</h3>
                            <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>Every bottle is made using methods passed down through generations.</p>
                        </div>
                    </div>
                </div>

                <div className="mission-content" style={{ marginTop: '70px', textAlign: 'center', maxWidth: '700px', margin: '70px auto 0' }}>
                    <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Our Mission</h2>
                    <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#444', lineHeight: '1.7' }}>
                        "To celebrate the rich olfactory heritage of the Somali people by delivering exceptional, authentic fragrances that evoke memories and inspire elegance."
                    </p>
                    <div style={{ width: '80px', height: '2px', background: '#D4AF37', margin: '30px auto' }}></div>
                </div>
            </div>
        </div>
    );
};

export default OurStoryPage;
