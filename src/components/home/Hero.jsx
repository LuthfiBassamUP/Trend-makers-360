import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5 // Wait for page load/background
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 2rem',
            position: 'relative'
        }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: '900px', zIndex: 10 }}
            >
                <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
                    <span style={{
                        color: 'var(--color-primary)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        border: '1px solid var(--color-primary-dim)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        background: 'rgba(0, 243, 255, 0.05)'
                    }}>
                        Trend Makers 360
                    </span>
                </motion.div>

                <motion.h1 variants={itemVariants} style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)', // Adjusted for longer text
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    textShadow: '0 0 40px rgba(0,0,0,0.5)'
                }}>
                    Trending Starts Here: <br />
                    <span className="text-gradient" style={{ fontSize: '0.6em' }}>Premier Education Marketing & Skill Development</span>
                </motion.h1>

                <motion.p variants={itemVariants} style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    color: 'var(--color-text-muted)',
                    marginBottom: '3rem',
                    maxWidth: '700px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Building, Engaging, and Growing Brands in the Digital Age.
                </motion.p>

                <motion.div variants={itemVariants} style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link to="/contact">
                        <Button icon={ArrowRight}>Connect Us</Button>
                    </Link>
                    <a href="https://wa.me/918754477912" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" icon={MessageCircle}>WhatsApp Us</Button>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
