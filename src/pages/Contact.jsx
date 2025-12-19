import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '3rem' }}
                >
                    Get in <span className="text-gradient">Touch</span>
                </motion.h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Side: Map & Info */}
                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Our Offices</h3>
                            <Map />
                        </div>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Mail color="var(--color-primary)" />
                                <div>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Email Us</p>
                                    <a href="mailto:hello@trendmakers360.in" style={{ fontSize: '1.1rem' }}>hello@trendmakers360.in</a>
                                </div>
                            </div>
                            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Phone color="var(--color-primary)" />
                                <div>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Call Us</p>
                                    <a href="tel:+918754477912" style={{ fontSize: '1.1rem' }}>+91-87544 77912</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
