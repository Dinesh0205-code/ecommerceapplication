import React from 'react';

const Gallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493863641943-9b6899d0864e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502602732142-3e5a74f35831?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?q=80&w=800&auto=format&fit=crop',
    ];

    return (
        <div className="section container">
            <h2 className="section-title">Our Visual Diary</h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
                A collection of captured moments, showcasing our photography style and the products that house them.
            </p>

            <div className="gallery-grid">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery ${index}`} className="gallery-img" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
