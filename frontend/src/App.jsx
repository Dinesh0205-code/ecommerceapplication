import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="section" style={{ borderTop: '1px solid #eee', padding: '3rem 0', textAlign: 'center' }}>
          <div className="container">
            <h3 className="logo" style={{ marginBottom: '1rem' }}>Lens & Frame</h3>
            <p style={{ color: '#999', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Lens & Frame Photography Studio. All rights reserved.</p>
          </div>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
