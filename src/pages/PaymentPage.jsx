import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const PaymentPage = () => {
    const { cart, subtotal, tax, shipping, total, clearCart } = useCart();
    const { currentUser, addOrder } = useAuth();
    const navigate = useNavigate();

    const [activeMethod, setActiveMethod] = useState('evc');
    const [showSuccess, setShowSuccess] = useState(false);
    const [orderId, setOrderId] = useState('');

    // Setup form states initialized with user profile data if available
    const [evcPhone, setEvcPhone] = useState(currentUser?.profile?.phone || '');
    const [evcName, setEvcName] = useState(currentUser?.name || '');
    const [zaadPhone, setZaadPhone] = useState(currentUser?.profile?.phone || '');
    const [cardNum, setCardNum] = useState('');
    const [cashAddress, setCashAddress] = useState(currentUser?.profile?.address || '');

    useEffect(() => {
        if (currentUser) {
            if (!evcPhone && currentUser.profile?.phone) setEvcPhone(currentUser.profile.phone);
            if (!evcName && currentUser.name) setEvcName(currentUser.name);
            if (!zaadPhone && currentUser.profile?.phone) setZaadPhone(currentUser.profile.phone);
            if (!cashAddress && currentUser.profile?.address) setCashAddress(currentUser.profile.address);
        }
    }, [currentUser]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Redirect if user is not logged in
        if (!currentUser) {
            alert('Please log in to place an order');
            navigate('/');
            return;
        }

        // Redirect if cart is empty and not showing success
        if (cart.length === 0 && !showSuccess) {
            navigate('/');
        }
    }, [cart, showSuccess, navigate, currentUser]);

    const handlePayNow = async () => {
        // Simple validation
        if ((activeMethod === 'evc' && !evcPhone) || (activeMethod === 'cash' && !cashAddress)) {
            alert('Please fill in the required payment details');
            return;
        }

        // Simulate payment processing
        const newOrderId = `UDUD-2026-${Math.floor(10000 + Math.random() * 90000)}`;
        setOrderId(newOrderId);

        // Create order object with customer snapshot
        const order = {
            id: newOrderId,
            date: new Date().toISOString(),
            items: cart,
            total: total,
            method: activeMethod,
            status: 'Paid',
            customerName: evcName || currentUser?.name,
            customerPhone: activeMethod === 'evc' ? evcPhone : (activeMethod === 'zaad' ? zaadPhone : currentUser?.profile?.phone),
            customerAddress: cashAddress || currentUser?.profile?.address
        };

        // Add to user history if logged in
        if (currentUser) {
            await addOrder(order);
        }

        setShowSuccess(true);
        clearCart(); // Clear cart after successful payment simulation
    };

    const getPaymentMethodName = (method) => {
        switch (method) {
            case 'evc': return 'EVC Plus';
            case 'zaad': return 'ZAAD Service';
            case 'card': return 'Credit/Debit Card';
            case 'cash': return 'Cash on Delivery';
            default: return method;
        }
    };

    return (
        <div className="payment-page" style={{ display: 'block' }}>
            <section className="payment-section">
                <div className="container">
                    <Link to="/" className="back-to-shop" id="back-to-cart">
                        <i className="fas fa-arrow-left"></i> Back to Cart
                    </Link>

                    <div className="payment-container">
                        <div className="payment-header">
                            <h1>Secure Payment</h1>
                            <p className="payment-subtitle">Complete Your Purchase</p>
                            <p>Your order will be delivered within 24 hours to your location in Somalia</p>
                        </div>

                        <div className="payment-content">
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <div className="order-items">
                                    {cart.map(item => (
                                        <div className="order-item" key={item.id}>
                                            <div className="order-item-name">{item.name}</div>
                                            <div className="order-item-qty">{item.quantity} x ${item.price.toFixed(2)}</div>
                                            <div className="order-item-price">${(item.quantity * item.price).toFixed(2)}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-total">
                                    <div className="total-row">
                                        <span>Subtotal:</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="total-row">
                                        <span>Tax (5%):</span>
                                        <span>${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="total-row">
                                        <span>Shipping:</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="total-row total-amount">
                                        <span>Total:</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="fast-delivery-notice" style={{ marginTop: '20px' }}>
                                    <i className="fas fa-shipping-fast"></i> Fast 24-Hour Delivery Guaranteed!
                                </div>
                            </div>

                            <div className="payment-methods">
                                <h3>Payment Method</h3>
                                <div className="payment-tabs">
                                    <button className={`payment-tab ${activeMethod === 'evc' ? 'active' : ''}`} onClick={() => setActiveMethod('evc')}>EVC Plus</button>
                                    <button className={`payment-tab ${activeMethod === 'card' ? 'active' : ''}`} onClick={() => setActiveMethod('card')}>Credit/Debit Card</button>
                                    <button className={`payment-tab ${activeMethod === 'zaad' ? 'active' : ''}`} onClick={() => setActiveMethod('zaad')}>ZAAD Service</button>
                                    <button className={`payment-tab ${activeMethod === 'cash' ? 'active' : ''}`} onClick={() => setActiveMethod('cash')}>Cash on Delivery</button>
                                </div>

                                {/* EVC Form */}
                                {activeMethod === 'evc' && (
                                    <div className="payment-form active">
                                        <div className="evc-logo">
                                            <i className="fas fa-mobile-alt"></i>
                                            <span>EVC Plus Payment</span>
                                        </div>
                                        <p>Enter your EVC Plus mobile number to receive a payment request</p>
                                        <div className="form-group-payment">
                                            <label>EVC Plus Phone Number</label>
                                            <input type="tel" value={evcPhone} onChange={e => setEvcPhone(e.target.value)} />
                                        </div>
                                        <div className="form-group-payment">
                                            <label>Full Name</label>
                                            <input type="text" value={evcName} onChange={e => setEvcName(e.target.value)} />
                                        </div>
                                    </div>
                                )}

                                {/* Card Form */}
                                {activeMethod === 'card' && (
                                    <div className="payment-form active">
                                        <div className="card-icons">
                                            <div className="card-icon">MasterCard</div>
                                            <div className="card-icon">VISA</div>
                                        </div>
                                        <div className="form-group-payment">
                                            <label>Card Number</label>
                                            <input type="text" value={cardNum} onChange={e => setCardNum(e.target.value)} />
                                        </div>
                                        {/* Simplified for brevity */}
                                    </div>
                                )}

                                {/* ZAAD Form */}
                                {activeMethod === 'zaad' && (
                                    <div className="payment-form active">
                                        <div className="evc-logo"><i className="fas fa-wallet"></i><span>ZAAD Service</span></div>
                                        <div className="form-group-payment">
                                            <label>ZAAD Phone Number</label>
                                            <input type="tel" value={zaadPhone} onChange={e => setZaadPhone(e.target.value)} />
                                        </div>
                                    </div>
                                )}

                                {/* Cash Form */}
                                {activeMethod === 'cash' && (
                                    <div className="payment-form active">
                                        <div className="evc-logo"><i className="fas fa-money-bill-wave"></i><span>Cash On Delivery</span></div>
                                        <div className="form-group-payment">
                                            <label>Delivery Address</label>
                                            <input type="text" value={cashAddress} onChange={e => setCashAddress(e.target.value)} />
                                        </div>
                                    </div>
                                )}

                                <div className="payment-actions">
                                    <button className="pay-now-btn" onClick={handlePayNow}>
                                        <i className="fas fa-lock"></i> Pay Now
                                    </button>
                                    <button className="cancel-payment-btn" onClick={() => navigate('/')}>
                                        Cancel Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showSuccess && (
                <>
                    <div className="overlay active"></div>
                    <div className="payment-success-modal active">
                        <div className="success-icon"><i className="fas fa-check"></i></div>
                        <h2>Payment Successful!</h2>
                        <p>Thank you for your purchase from UDUD PERFUMES.</p>
                        <div className="order-details">
                            <h4>Order Details</h4>
                            <div className="order-details-row"><span>Order ID:</span><span>{orderId}</span></div>
                            <div className="order-details-row"><span>Payment Method:</span><span>{getPaymentMethodName(activeMethod)}</span></div>
                            <div className="order-details-row"><span>Amount Paid:</span><span>${total.toFixed(2)}</span></div>
                        </div>
                        <button className="continue-shopping-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default PaymentPage;
