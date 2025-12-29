import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="section container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container" style={{ marginTop: '3rem' }}>
                <div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Studio Inquiries</h3>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                        Whether you have a question about our products or want to book a custom photography session,
                        we're here to help. Reach out to us through any of the following channels.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '50%' }}><Phone size={20} /></div>
                            <span>+91 88888 88888</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '50%' }}><Mail size={20} /></div>
                            <span>hello@lensandframe.com</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ background: '#f4f4f4', padding: '10px', borderRadius: '50%' }}><MapPin size={20} /></div>
                            <span>123 Photography Lane, Arts District, City</span>
                        </div>
                    </div>
                </div>

                <div style={{ background: '#fafafa', padding: '3rem', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Direct Message</h3>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                        The fastest way to reach us is through WhatsApp. Click the button below to start a chat.
                    </p>
                    <a
                        href="https://wa.me/918888888888"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    >
                        <MessageSquare size={20} /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
