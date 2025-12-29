import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await fetchProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products', error);
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <div className="container" style={{ padding: '5rem', textAlign: 'center' }}>Loading Collection...</div>;

    return (
        <main className="section container">
            <h2 className="section-title">Our Collection</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product._id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <span className="product-category">{product.category}</span>
                            <h3 className="product-name">{product.name}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                <span className="product-price">${product.price.toFixed(2)}</span>
                                <button
                                    className="btn"
                                    style={{ padding: '0.6rem 1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                                    onClick={() => addToCart(product)}
                                >
                                    <ShoppingCart size={16} /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Products;
