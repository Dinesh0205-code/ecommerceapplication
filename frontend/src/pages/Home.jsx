import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div>
            <section className="hero" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1493863641943-9b6899d0864e?q=80&w=2000&auto=format&fit=crop")'
            }}>
                <div className="hero-content">
                    <p className="product-category" style={{ color: 'white' }}>Preserving Moments</p>
                    <h1>Artful Frames for Your Best Memories</h1>
                    <p>Bespoke wooden frames and custom polaroid sets crafted with passion and precision.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/products" className="btn" style={{ background: '#d4a373' }}>Shop Collection</Link>
                        <Link to="/gallery" className="btn" style={{ border: '1px solid white', background: 'transparent' }}>View Gallery</Link>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1544000051-17368532f913?q=80&w=800&auto=format&fit=crop"
                            alt="Quality Frames"
                            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Elegance in Every Detail</h2>
                        <p style={{ color: '#666', marginBottom: '2rem' }}>
                            Our frames are made from locally sourced, sustainable hardwoods. Each piece is unique,
                            bringing a natural and warm touch to your home decor.
                        </p>
                        <Link to="/products" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Explore Wooden Frames <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#fcfcfc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="section-title">Why Choose Us?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Handcrafted</h3>
                            <p style={{ color: '#666' }}>Every product is manually finished to ensure the highest quality standards.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Eco Friendly</h3>
                            <p style={{ color: '#666' }}>We use sustainable materials and plastic-free packaging for all orders.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1rem' }}>Fast Delivery</h3>
                            <p style={{ color: '#666' }}>Prompt processing and secure shipping for your delicate items.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
