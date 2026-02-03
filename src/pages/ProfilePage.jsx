
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { currentUser, updateProfile, loading } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!loading && !currentUser) {
            navigate('/');
        }

        if (currentUser) {
            setFormData({
                name: currentUser.name || '',
                phone: currentUser.profile?.phone || '',
                address: currentUser.profile?.address || ''
            });
        }
    }, [currentUser, loading, navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setStatus({ type: '', message: '' });

        const result = await updateProfile({
            name: formData.name,
            phone: formData.phone,
            address: formData.address
        });

        setSaving(false);
        if (result.success) {
            setStatus({ type: 'success', message: result.message });
            setIsEditing(false);
        } else {
            setStatus({ type: 'error', message: result.message });
        }
    };

    // Parse orders safely from local storage
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (currentUser) {
            loadOrders();
        }
    }, [currentUser]);

    const loadOrders = () => {
        const storageKey = `orders_${currentUser.$id}`;
        const storedOrders = localStorage.getItem(storageKey);
        if (storedOrders) {
            try {
                setOrders(JSON.parse(storedOrders));
            } catch (e) {
                console.error("Failed to parse orders", e);
                setOrders([]);
            }
        }
    };

    const handleDeleteOrder = (orderId) => {
        if (window.confirm("Are you sure you want to delete this order from your history?")) {
            const updatedOrders = orders.filter(order => order.id !== orderId);
            setOrders(updatedOrders);
            const storageKey = `orders_${currentUser.$id}`;
            localStorage.setItem(storageKey, JSON.stringify(updatedOrders));
        }
    };

    if (loading) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading...</div>;
    if (!currentUser) return null; // Will redirect

    return (
        <div className="profile-page" style={{ paddingTop: '120px', paddingBottom: '60px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '40px' }}>
                    <span className="section-subtitle">My Account</span>
                    <h2>User Profile</h2>
                </div>

                <div className="profile-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>

                    {/* Sidebar / User Info Card */}
                    <div className="profile-card" style={{ flex: '1', minWidth: '300px', backgroundColor: '#fff', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', height: 'fit-content' }}>
                        <div className="profile-header" style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <div className="profile-avatar" style={{
                                width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#D4AF37', color: '#fff',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', fontWeight: 'bold', margin: '0 auto 15px'
                            }}>
                                {currentUser.name.charAt(0).toUpperCase()}
                            </div>
                            <h3>{currentUser.name}</h3>
                            <p style={{ color: '#777' }}>{currentUser.email}</p>
                        </div>

                        {!isEditing ? (
                            <div className="profile-details">
                                <div className="detail-item" style={{ marginBottom: '15px' }}>
                                    <strong style={{ display: 'block', color: '#555', marginBottom: '5px' }}>Phone</strong>
                                    <p>{currentUser.profile?.phone || 'Not set'}</p>
                                </div>
                                <div className="detail-item" style={{ marginBottom: '15px' }}>
                                    <strong style={{ display: 'block', color: '#555', marginBottom: '5px' }}>Address</strong>
                                    <p>{currentUser.profile?.address || 'Not set'}</p>
                                </div>
                                <div className="detail-item" style={{ marginBottom: '15px' }}>
                                    <strong style={{ display: 'block', color: '#555', marginBottom: '5px' }}>Member Since</strong>
                                    <p>{new Date(currentUser.$createdAt).toLocaleDateString()}</p>
                                </div>
                                <button
                                    className="btn"
                                    style={{ width: '100%', marginTop: '20px', backgroundColor: '#333', color: '#fff' }}
                                    onClick={() => setIsEditing(true)}
                                >
                                    Edit Profile
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {status.message && (
                                    <div style={{
                                        padding: '10px', marginBottom: '20px', borderRadius: '5px',
                                        backgroundColor: status.type === 'error' ? '#ffebee' : '#e8f5e9',
                                        color: status.type === 'error' ? '#c62828' : '#2e7d32'
                                    }}>
                                        {status.message}
                                    </div>
                                )}

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+252..."
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Delivery Address</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="City, District, Street..."
                                        style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
                                    ></textarea>
                                </div>

                                <div className="form-actions" style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        type="submit"
                                        className="btn btn-gold"
                                        disabled={saving}
                                        style={{ flex: 1 }}
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </button>
                                    <button
                                        type="button"
                                        className="btn"
                                        onClick={() => { setIsEditing(false); setStatus({ type: '', message: '' }); }}
                                        style={{ flex: 1, backgroundColor: '#eee', color: '#333' }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Orders Section */}
                    <div className="orders-section" style={{ flex: '2', minWidth: '300px' }}>
                        <div className="orders-card" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>My Orders</h3>

                            {orders.length === 0 ? (
                                <div className="no-orders" style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
                                    <i className="fas fa-shopping-bag" style={{ fontSize: '40px', marginBottom: '15px', display: 'block' }}></i>
                                    <p>You haven't placed any orders yet.</p>
                                    <button onClick={() => navigate('/')} className="btn btn-outline" style={{ marginTop: '15px' }}>Start Shopping</button>
                                </div>
                            ) : (
                                <div className="orders-list">
                                    {orders.reverse().map((order) => (
                                        <div key={order.id} className="order-item" style={{
                                            position: 'relative',
                                            border: '1px solid #eaeaea',
                                            borderRadius: '16px',
                                            padding: '25px',
                                            marginBottom: '25px',
                                            backgroundColor: '#fff',
                                            transition: 'all 0.3s ease',
                                        }}>
                                            {/* Delete Button */}
                                            <button
                                                onClick={() => handleDeleteOrder(order.id)}
                                                style={{
                                                    position: 'absolute',
                                                    top: '20px',
                                                    right: '20px',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: '#ff6b6b',
                                                    cursor: 'pointer',
                                                    fontSize: '16px',
                                                    padding: '5px',
                                                    opacity: '0.7',
                                                    transition: 'opacity 0.2s',
                                                    zIndex: 10
                                                }}
                                                title="Delete Order History"
                                                onMouseOver={(e) => e.target.style.opacity = '1'}
                                                onMouseOut={(e) => e.target.style.opacity = '0.7'}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>

                                            <div style={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '20px',
                                                marginBottom: '20px'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                    <div style={{
                                                        width: '50px', height: '50px', borderRadius: '12px',
                                                        backgroundColor: '#fff8e1', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        color: '#D4AF37', fontSize: '20px'
                                                    }}>
                                                        <i className="fas fa-box-open"></i>
                                                    </div>
                                                    <div>
                                                        <span style={{ fontSize: '13px', color: '#888', fontWeight: '500' }}>Order #{order.id.slice(-6).toUpperCase()}</span>
                                                        <div style={{ fontSize: '14px', color: '#444', marginTop: '4px' }}>
                                                            {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="status-badge-container">
                                                    <span style={{
                                                        padding: '8px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600',
                                                        backgroundColor: (order.status === 'Paid' || order.status === 'Delivered') ? '#e8f5e9' : '#fff3e0',
                                                        color: (order.status === 'Paid' || order.status === 'Delivered') ? '#2e7d32' : '#f57c00',
                                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                                        border: '1px solid transparent',
                                                        borderColor: (order.status === 'Paid' || order.status === 'Delivered') ? '#c8e6c9' : '#ffe0b2',
                                                    }}>
                                                        <i className={`fas ${order.status === 'Paid' ? 'fa-check' : 'fa-spinner fa-spin'}`} style={{ fontSize: '12px' }}></i>
                                                        {order.status || 'Processing'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="order-products" style={{
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '12px',
                                                padding: '20px',
                                                border: '1px solid #f0f0f0'
                                            }}>
                                                <h4 style={{ fontSize: '13px', color: '#888', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Items</h4>
                                                {order.items.map((item, idx) => (
                                                    <div key={idx} style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        paddingBottom: idx !== order.items.length - 1 ? '12px' : '0',
                                                        marginBottom: idx !== order.items.length - 1 ? '12px' : '0',
                                                        borderBottom: idx !== order.items.length - 1 ? '1px dashed #eee' : 'none',
                                                        fontSize: '15px'
                                                    }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                            <span style={{ color: '#333', fontWeight: '500' }}>{item.name}</span>
                                                            <span style={{
                                                                backgroundColor: '#eee', color: '#666', padding: '2px 8px', borderRadius: '4px', fontSize: '12px'
                                                            }}>x{item.quantity}</span>
                                                        </div>
                                                        <span style={{ fontWeight: '600', color: '#333' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="order-footer" style={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                marginTop: '20px',
                                                paddingTop: '15px',
                                                borderTop: '1px solid #f0f0f0'
                                            }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                    <span style={{ fontSize: '14px', color: '#666' }}>Total Amount</span>
                                                    <strong style={{ fontSize: '22px', color: '#222' }}>${order.total.toFixed(2)}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
