
import React, { useState } from 'react';
import { databases, APPWRITE_CONFIG } from '../lib/appwrite';
import { ID } from 'appwrite';

const ContactPage = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await databases.createDocument(
                APPWRITE_CONFIG.DATABASE_ID,
                APPWRITE_CONFIG.COLLECTION_ID_MESSAGES,
                ID.unique(),
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    createdAt: new Date().toISOString()
                }
            );

            setStatus({ type: 'success', message: 'Your message has been sent successfully! We will get back to you soon.' });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page" style={{
            paddingTop: '110px',
            paddingBottom: '40px',
            background: '#f8f9fa',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '20px',
            paddingRight: '20px'
        }}>
            <style>
                {`
                @media (min-height: 800px) and (min-width: 1024px) {
                    .contact-page { height: 100vh; overflow: hidden; padding-top: 80px !important; }
                    .contact-wrapper { height: 80vh; max-height: 700px; }
                    .contact-form-side { overflow-y: auto; }
                }
                @media (max-width: 991px) {
                    .contact-info { flex: 1 1 100% !important; order: 2; padding: 40px !important; }
                    .contact-form-side { flex: 1 1 100% !important; order: 1; padding: 40px !important; }
                }
                @media (max-width: 768px) {
                    .contact-page { padding-top: 100px !important; height: auto !important; display: block !important; }
                    .contact-wrapper { border-radius: 20px !important; }
                    .field-half { width: 100% !important; }
                }
                `}
            </style>
            <div className="container" style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
                <div className="contact-wrapper" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundColor: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    width: '100%'
                }}>
                    {/* Left Side: Information Panel */}
                    <div className="contact-info" style={{
                        flex: '1',
                        backgroundColor: '#1a365d',
                        color: '#fff',
                        padding: '60px 50px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <span style={{ color: '#D4AF37', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>Get In Touch</span>
                        <h2 style={{ fontSize: '32px', lineHeight: '1.3', fontWeight: '700', marginBottom: '20px' }}>Don't hesitate to contact us for more information.</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', marginBottom: '45px' }}>
                            Experience the essence of UDUG. We are here to assist you with any inquiries about our traditional Somali scents and international collections.
                        </p>

                        <div className="info-blocks" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '8px', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="fas fa-map-marker-alt" style={{ fontSize: '20px', color: '#fff' }}></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Headquarters</h4>
                                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Mogadishu, Somalia</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '8px', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="fas fa-envelope" style={{ fontSize: '20px', color: '#fff' }}></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Email Us</h4>
                                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>udug@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '8px', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className="fas fa-phone-alt" style={{ fontSize: '20px', color: '#fff' }}></i>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Call Us</h4>
                                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>+252 61 700 0305</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form Panel */}
                    <div className="contact-form-side" style={{ flex: '1.2', padding: '60px 50px', backgroundColor: '#fff' }}>
                        <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1a365d', marginBottom: '10px' }}>Send us a message</h3>
                        <p style={{ color: '#777', fontSize: '14px', marginBottom: '35px' }}>Fill out the form below and our team will get back to you shortly.</p>

                        {status.message && (
                            <div style={{
                                padding: '15px 20px',
                                borderRadius: '10px',
                                marginBottom: '25px',
                                backgroundColor: status.type === 'success' ? '#eefdf5' : '#fff5f5',
                                color: status.type === 'success' ? '#1d7044' : '#c53030',
                                border: `1px solid ${status.type === 'success' ? '#cdf7df' : '#feb2b2'}`,
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <i className={`fas ${status.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                            <div className="field-half">
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '8px' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e1e1e1', backgroundColor: '#f9f9f9', outline: 'none', transition: 'all 0.3s' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.backgroundColor = '#fff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e1e1e1'; e.target.style.backgroundColor = '#f9f9f9'; }}
                                />
                            </div>
                            <div className="field-half">
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '8px' }}>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                    required
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e1e1e1', backgroundColor: '#f9f9f9', outline: 'none', transition: 'all 0.3s' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.backgroundColor = '#fff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e1e1e1'; e.target.style.backgroundColor = '#f9f9f9'; }}
                                />
                            </div>
                            <div className="field-half">
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '8px' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    required
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e1e1e1', backgroundColor: '#f9f9f9', outline: 'none', transition: 'all 0.3s' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.backgroundColor = '#fff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e1e1e1'; e.target.style.backgroundColor = '#f9f9f9'; }}
                                />
                            </div>
                            <div className="field-half">
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '8px' }}>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #e1e1e1', backgroundColor: '#f9f9f9', outline: 'none', transition: 'all 0.3s' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.backgroundColor = '#fff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e1e1e1'; e.target.style.backgroundColor = '#f9f9f9'; }}
                                />
                            </div>
                            <div style={{ width: '100%' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#444', marginBottom: '8px' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Enter your message"
                                    required
                                    style={{ width: '100%', padding: '14px 18px', borderRadius: '8px', border: '1px solid #e1e1e1', backgroundColor: '#f9f9f9', outline: 'none', transition: 'all 0.3s', resize: 'none' }}
                                    onFocus={(e) => { e.target.style.borderColor = '#D4AF37'; e.target.style.backgroundColor = '#fff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#e1e1e1'; e.target.style.backgroundColor = '#f9f9f9'; }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    marginTop: '10px',
                                    borderRadius: '12px',
                                    backgroundColor: 'var(--accent-gold)',
                                    color: 'var(--primary-color)',
                                    fontSize: '15px',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 10px 20px rgba(212, 175, 55, 0.15)'
                                }}
                                onMouseOver={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.25)'; } }}
                                onMouseOut={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.15)'; } }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
