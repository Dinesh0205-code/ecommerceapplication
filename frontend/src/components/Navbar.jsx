import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Camera } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { getCartCount } = useCart();

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="logo">
                    <Camera size={24} style={{ marginRight: '10px' }} />
                    Lens & Frame
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/gallery" className="nav-link">Gallery</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
                <div className="cart-icon-container">
                    <Link to="/cart">
                        <ShoppingBag size={24} color="#1a1a1a" />
                        {getCartCount() > 0 && (
                            <span className="cart-count">{getCartCount()}</span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
