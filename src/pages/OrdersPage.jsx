
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const OrdersPage = () => {
    const { currentUser, loading, getUserOrders, deleteOrder } = useAuth();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(true);

    useEffect(() => {
        if (!loading && !currentUser) {
            navigate('/');
        }
        if (currentUser) {
            loadOrders();
        }
    }, [currentUser, loading, navigate]);

    const loadOrders = async () => {
        setOrdersLoading(true);
        const userOrders = await getUserOrders();
        setOrders(userOrders);
        setOrdersLoading(false);
    };

    const handleDeleteOrder = async (orderId) => {
        if (window.confirm("Are you sure you want to delete this order from your history?")) {
            const result = await deleteOrder(orderId);
            if (result.success) {
                setOrders(orders.filter(order => order.id !== orderId));
            } else {
                alert("Failed to delete order: " + result.message);
            }
        }
    };

    if (loading) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading...</div>;
    if (!currentUser) return null;

    return (
        <div className="orders-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
            <div className="container">
                <div className="section-header" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <span className="section-subtitle">My History</span>
                        <h2>My Orders</h2>
                    </div>
                    <Link to="/profile" className="btn btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                        <i className="fas fa-user-circle" style={{ marginRight: '8px' }}></i> View Profile
                    </Link>
                </div>

                <div className="orders-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {ordersLoading ? (
                        <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <i className="fas fa-spinner fa-spin" style={{ fontSize: '40px', color: '#D4AF37' }}></i>
                            <p style={{ marginTop: '20px', color: '#666', fontSize: '16px' }}>Fetching your order history...</p>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="no-orders" style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#fdf8e6', color: '#D4AF37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', margin: '0 auto 20px' }}>
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                            <h3 style={{ marginBottom: '10px' }}>No Orders Found</h3>
                            <p style={{ color: '#777', maxWidth: '400px', margin: '0 auto 20px' }}>You haven't placed any orders yet. Once you make a purchase, your order history will appear here.</p>
                            <button onClick={() => navigate('/')} className="btn btn-gold">Start Shopping</button>
                        </div>
                    ) : (
                        <div className="orders-list">
                            {orders.map((order) => (
                                <div key={order.id} className="order-item" style={{
                                    position: 'relative',
                                    border: 'none',
                                    borderRadius: '20px',
                                    padding: '30px',
                                    marginBottom: '30px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease',
                                }}>
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteOrder(order.id)}
                                        style={{
                                            position: 'absolute',
                                            top: '25px',
                                            right: '25px',
                                            background: '#fff0f0',
                                            border: 'none',
                                            color: '#ff4444',
                                            cursor: 'pointer',
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'all 0.2s',
                                            zIndex: 10
                                        }}
                                        title="Delete Order"
                                        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#ff4444'; e.currentTarget.style.color = '#fff'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#fff0f0'; e.currentTarget.style.color = '#ff4444'; }}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '20px',
                                        marginBottom: '25px',
                                        paddingBottom: '20px',
                                        borderBottom: '1px solid #f0f0f0'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{
                                                width: '55px', height: '55px', borderRadius: '15px',
                                                backgroundColor: '#fdf8e6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#D4AF37', fontSize: '24px'
                                            }}>
                                                <i className="fas fa-receipt"></i>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '13px', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Order ID</span>
                                                <div style={{ fontSize: '18px', color: '#222', fontWeight: '700', marginTop: '2px' }}>
                                                    #{order.id.slice(-8).toUpperCase()}
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '30px' }}>
                                            <div>
                                                <span style={{ fontSize: '12px', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Date</span>
                                                <div style={{ fontSize: '14px', color: '#444', fontWeight: '600', marginTop: '4px' }}>
                                                    {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: '12px', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Status</span>
                                                <div style={{ marginTop: '4px' }}>
                                                    <span style={{
                                                        padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '700',
                                                        backgroundColor: (order.status === 'Paid' || order.status === 'Delivered') ? '#edf7ed' : '#fff4e5',
                                                        color: (order.status === 'Paid' || order.status === 'Delivered') ? '#2e7d32' : '#ed6c02',
                                                        display: 'inline-flex', alignItems: 'center', gap: '6px'
                                                    }}>
                                                        <i className={`fas ${order.status === 'Paid' ? 'fa-check-circle' : 'fa-clock'}`}></i>
                                                        {order.status || 'Processing'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-items-box" style={{
                                        backgroundColor: '#fafbfc',
                                        borderRadius: '15px',
                                        padding: '20px',
                                        marginBottom: '25px'
                                    }}>
                                        <h4 style={{ fontSize: '14px', color: '#555', marginBottom: '15px', fontWeight: '600' }}>Purchased Items</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            {order.items.map((item, idx) => (
                                                <div key={idx} style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    fontSize: '15px'
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#D4AF37' }}></div>
                                                        <span style={{ color: '#333', fontWeight: '500' }}>{item.name}</span>
                                                        <span style={{
                                                            padding: '2px 8px', backgroundColor: '#eee', borderRadius: '5px', fontSize: '11px', color: '#666', fontWeight: '600'
                                                        }}>QTY: {item.quantity}</span>
                                                    </div>
                                                    <span style={{ fontWeight: '700', color: '#222' }}>${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingTop: '20px',
                                        borderTop: '1px dashed #eee'
                                    }}>
                                        <div>
                                            <span style={{ fontSize: '13px', color: '#999' }}>Payment Method:</span>
                                            <span style={{ fontSize: '13px', color: '#444', fontWeight: '600', marginLeft: '8px' }}>{order.paymentMethod || 'EVC Plus'}</span>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span style={{ fontSize: '14px', color: '#777', marginRight: '10px' }}>Total Amount:</span>
                                            <strong style={{ fontSize: '24px', color: '#D4AF37' }}>
                                                ${order.total ? order.total.toFixed(2) : order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
