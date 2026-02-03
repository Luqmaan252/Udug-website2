import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ isOpen, onClose, onLoginClick }) => {
    const {
        cart,
        updateQuantity,
        removeFromCart,
        subtotal,
        tax,
        shipping,
        total,
        isCartOpen, // Context also manages open state if triggered from adding item
        closeCart: contextCloseCart
    } = useCart();

    const { currentUser } = useAuth();
    const navigate = useNavigate();

    // Combine parent control and context control
    // If context knows it's open (e.g. from Add to Cart), use that.
    // But purely props based is cleaner for Layout control.
    // Actually, Layout passes isOpen, but AddToCart sets context state.
    // I should probably rely on Context for openness or sync them.
    // In this implementation plan, I am using Layout to control, but `addToCart` in context sets `isCartOpen`.
    // So I should use the context state primarily, or sync.
    // Let's rely on Props passed from Layout which controls the overall state if we lift state up, 
    // BUT `addToCart` needs to open it.
    // Better: Layout listens to Context? Or simple: CartModal checks both?
    // Let's use the prop `isOpen` effectively, but if `useCart().isCartOpen` is true, we should show it.
    // Actually, let's keep it simple: The Layout manages the "click icon" state. 
    // The Context manages "just added item" state.
    // Layout should perhaps subscribe to context?

    // Refined: The `Layout` component is creating the modal. It passes `isOpen`. 
    // But `addToCart` triggers `setIsCartOpen(true)` in context.
    // I need to make them work together.
    // The clean React way: The Modal should be rendered by Layout, and its open state should be (isCartOpenFromContext || isCartOpenFromProps).
    // Or better: Move the open state entirely to Context. Layout just toggles Context state.
    // Yes, moving `isCartOpen` entirely to Context is cleaner. I did that in `CartContext`.
    // So `Layout` can just read `isCartOpen` from context and pass it, or `CartModal` uses context directly.
    // `CartModal` is inside `Layout`.

    const { isCartOpen: contextIsOpen, closeCart } = useCart();

    const effectiveIsOpen = isOpen || contextIsOpen;

    const handleClose = () => {
        onClose(); // Close local state in Layout
        closeCart(); // Close context state
    };

    const handleCheckout = () => {
        // Check if user is logged in
        if (!currentUser) {
            handleClose();
            alert('Please log in or create an account to place an order');
            if (onLoginClick) {
                onLoginClick();
            }
            return;
        }

        handleClose();
        navigate('/payment');
    };

    return (
        <div className={`cart-modal ${effectiveIsOpen ? 'active' : ''}`}>
            <div className="cart-header">
                <h3>Your Shopping Cart</h3>
                <div className="close-cart" onClick={handleClose}>
                    <i className="fas fa-times"></i>
                </div>
            </div>

            <div className="cart-items">
                {cart.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '20px', color: '#999' }}>Your cart is empty.</p>
                ) : (
                    cart.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-img"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                            />
                            <div className="cart-item-info">
                                <div className="cart-item-title">{item.name}</div>
                                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                                <div className="cart-item-controls">
                                    <div className="qty-control">
                                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span className="qty-display">{item.quantity}</span>
                                        <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className="remove-item" onClick={() => removeFromCart(item.id)}>
                                        <i className="fas fa-trash"></i> Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <div className="cart-summary">
                    <div className="cart-summary-row">
                        <span>Subtotal:</span>
                        <span className="subtotal-price">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-row">
                        <span>Tax (5%):</span>
                        <span className="tax-amount">${tax.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-row">
                        <span>Shipping:</span>
                        <span className="shipping-amount">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="cart-total">
                        <span>Total:</span>
                        <span className="total-price">${total.toFixed(2)}</span>
                    </div>
                    <div className="fast-delivery-notice">
                        <i className="fas fa-shipping-fast"></i> Fast 24-Hour Delivery Available!
                    </div>
                    <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartModal;
