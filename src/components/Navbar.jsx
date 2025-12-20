import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/variables.css';
import logo from '../assets/Logo_white.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            className={`glass-panel`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                background: scrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: scrolled ? `blur(${10}px)` : 'none',
                transition: 'all 0.3s ease'
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ position: 'relative' }}
                    >
                        <motion.img
                            src={logo}
                            alt="Trend Makers 360"
                            style={{
                                height: '40px',
                                filter: 'drop-shadow(0 0 8px #00bfff)' // Sky Blue Glow
                            }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '0.6rem',
                                color: 'var(--color-primary)',
                                marginTop: '4px',
                                letterSpacing: '1px'
                            }}
                        >
                            Trending Starts Here
                        </motion.div>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            style={{
                                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-main)',
                                fontWeight: '500',
                                position: 'relative'
                            }}
                        >
                            {link.title}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--color-primary)'
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 15px var(--color-primary-glow)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid var(--color-primary)',
                                color: 'var(--color-primary)',
                                fontWeight: '600',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            Connect Us
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <Menu color="white" />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
