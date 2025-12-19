import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, X, MessageCircle, Mail } from 'lucide-react';
import '../styles/variables.css';

const HiringPulse = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Pulsing Anchor Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    position: 'fixed',
                    bottom: '110px', // Stacked above WhatsApp (approx 15px gap)
                    right: 'calc(2rem + 5px)', // Center-aligned with WhatsApp button
                    zIndex: 999, // High z-index but below modal
                    cursor: 'pointer'
                }}
                onClick={() => setIsOpen(true)}
            >
                <div style={{ position: 'relative' }}>
                    {/* Glowing Pulse Ring */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            background: 'var(--color-primary)',
                            zIndex: -1
                        }}
                    />

                    {/* Main Button */}
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'var(--color-surface)',
                        border: '2px solid var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 15px var(--color-primary-glow)'
                    }}>
                        <Briefcase size={24} color="var(--color-primary)" />
                    </div>

                    {/* Badge */}
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-5px',
                            background: '#ea4335', // Red notification color
                            color: 'white',
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            padding: '2px 6px',
                            borderRadius: '10px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                        }}
                    >
                        HIRING
                    </motion.div>
                </div>
            </motion.div>

            {/* Hiring Overlay Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: 'blur(10px)' }} // "Shatter" fade out
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2000,
                            background: 'rgba(0, 0, 0, 0.7)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setIsOpen(false)} // Close on background click
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 1.1, opacity: 0, filter: 'blur(20px)' }} // Shatter effect
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                background: 'rgba(26, 26, 29, 0.9)', // Dark charcoal glass
                                border: '1px solid var(--color-primary)',
                                borderRadius: '24px',
                                padding: '3rem', // Increased padding
                                maxWidth: '500px',
                                width: '100%',
                                position: 'relative',
                                boxShadow: '0 0 50px rgba(0, 191, 255, 0.2)',
                                textAlign: 'left'
                            }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
                            className="glass-panel"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'transparent',
                                    color: 'var(--color-text-muted)',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Join the <br />
                                <span className="text-gradient">Trend Makers Team</span>
                            </h2>

                            {/* Content Body */}
                            <div style={{ marginBottom: '2.5rem', color: 'var(--color-text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>
                                        Japanese Language Trainers
                                    </strong>
                                    Requirements: JLPT N3 / N4 Level Completed.
                                </div>

                                <div>
                                    <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '0.5rem' }}>
                                        German Language Trainers
                                    </strong>
                                    Requirements: B1 / B2 Level Certified.
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <motion.a
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://wa.me/918754477912?text=Hi,%20I%20am%20interested%20in%20joining%20Trend%20Makers%20as%20a%20Trainer."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                                        color: 'white',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.8rem',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        boxShadow: '0 4px 15px rgba(0, 191, 255, 0.3)'
                                    }}
                                >
                                    <MessageCircle size={20} />
                                    Apply via WhatsApp
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                    whileTap={{ scale: 0.98 }}
                                    href="mailto:hello@trendmakers360.in"
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid var(--glass-border)',
                                        color: 'var(--color-text-main)',
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.8rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    <Mail size={20} />
                                    Email Resume
                                </motion.a>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HiringPulse;
