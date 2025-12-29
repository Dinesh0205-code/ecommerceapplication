import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createOrder } from '../services/api';

const Cart = () => {
    const { cartItems, updateQty, removeFromCart, clearCart, getCartTotal } = useCart();

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;

        try {
            // Store in DB
            const orderData = {
                items: cartItems.map(item => ({
                    product: item._id,
                    name: item.name,
                    quantity: item.qty,
                    price: item.price
                })),
                totalAmount: getCartTotal()
            };

            await createOrder(orderData);

            // WhatsApp Integration
            const phone = "918888888888"; // Replace with real business number
            let message = `Hello, I'd like to place an order:%0A%0A`;

            cartItems.forEach(item => {
                message += `*${item.name}*%0AQty: ${item.qty} x $${item.price}%0ASubtotal: $${(item.qty * item.price).toFixed(2)}%0A-----------------%0A`;
            });

            message += `%0A*Total Amount: $${getCartTotal().toFixed(2)}*`;

            const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
            window.open(whatsappUrl, '_blank');

            clearCart();
        } catch (error) {
            console.error('Checkout error', error);
            alert('Something went wrong during checkout. Please try again.');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2 className="section-title">Your cart is empty</h2>
                <Link to="/products" className="btn">Continue Shopping</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Your Shopping Bag</h2>

            <div style={{ overflowX: 'auto' }}>
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <div className="cart-item-info">
                                        <img src={item.image} alt={item.name} className="cart-item-img" />
                                        <div>
                                            <h4 style={{ marginBottom: '0.2rem' }}>{item.name}</h4>
                                            <p className="product-category">{item.category}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>
                                    <div className="qty-controls">
                                        <button onClick={() => updateQty(item._id, 'dec')}><Minus size={14} /></button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => updateQty(item._id, 'inc')}><Plus size={14} /></button>
                                    </div>
                                </td>
                                <td>${(item.price * item.qty).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => removeFromCart(item._id)} style={{ color: '#ff4d4d' }}>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                <button className="nav-link" onClick={clearCart} style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trash2 size={16} /> Clear Cart
                </button>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                    </div>
                    <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <button className="btn" onClick={handleCheckout} style={{ width: '100%', marginTop: '1rem' }}>
                        Checkout via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
