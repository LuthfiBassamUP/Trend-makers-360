import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import '../styles/variables.css';
import logo from '../assets/Logo_white.png';

const KineticRibbon = () => {
    const { scrollY } = useScroll();
    // Inverse parallax: Move down as user scrolls down (Reduced speed ~0.6x)
    const y = useTransform(scrollY, [0, 2000], [-100, 1100]);

    // Mouse interaction for "jitter"
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const ribbonRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Jitter effect: Random small shake
    const jitterX = useSpring(0, { stiffness: 500, damping: 10 });
    const jitterY = useSpring(0, { stiffness: 500, damping: 10 });

    useEffect(() => {
        const distance = Math.abs(mousePos.x - window.innerWidth / 2); // Distance from center X
        if (distance < 400) {
            const intensity = 1 - (distance / 400); // 0 to 1
            jitterX.set((Math.random() - 0.5) * 10 * intensity);
            jitterY.set((Math.random() - 0.5) * 10 * intensity);
        } else {
            jitterX.set(0);
            jitterY.set(0);
        }
    }, [mousePos, jitterX, jitterY]);

    const items = [
        "TREND MAKERS 360",
        "BEST FOREIGN LANGUAGE TRAINING IN SOUTH INDIA",
        "JAPANESE JLPT TRAINING",
        "GERMAN LANGUAGE TRAINING",
        "IELTS / OET / PTE COACHING"
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none', // Allow clicks to pass through
            zIndex: 0, // Behind main content
            overflow: 'hidden'
        }}>
            <motion.div
                ref={ribbonRef}
                style={{
                    position: 'absolute',
                    top: '20%', // Start somewhat high
                    left: '-10%',
                    width: '120%', // Wider to cover rotation
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(2px)',
                    borderTop: '1px solid rgba(0, 191, 255, 0.3)',
                    borderBottom: '1px solid rgba(0, 191, 255, 0.3)',
                    boxShadow: '0 0 20px rgba(0, 191, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    rotate: -8,
                    y: y, // Vertical movement
                    x: jitterX,
                    translateY: jitterY
                }}
            >
                {/* Marquee Content */}
                <div style={{
                    display: 'flex',
                    gap: '4rem',
                    whiteSpace: 'nowrap',
                    animation: 'marquee 40s linear infinite',
                    paddingLeft: '2rem'
                }}>
                    {[...items, ...items, ...items, ...items].map((text, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <span style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: '700',
                                fontSize: '1.5rem',
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)', // Outline style
                                letterSpacing: '2px'
                            }}>
                                {text}
                            </span>
                            {/* Logo Icon Mark */}
                            <img
                                src={logo}
                                alt="mark"
                                style={{ height: '30px', opacity: 0.5 }}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default KineticRibbon;
