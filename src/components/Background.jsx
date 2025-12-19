import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import '../styles/variables.css';

const Background = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // 1. Particle Logic (Atmosphere - Always Visible)
    const particleCount = isMobile ? 8 : 20;
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
    }));

    // 2. Mystery Text Logic (Hidden - Revealed by Flashlight)
    const mysteryItems = useMemo(() => {
        const words = [
            "Trend Makers", "Growth", "Innovation", "Strategy", "Education", "360°",
            "Future", "Impact", "Global", "Scale", "Digital", "Connect", "Services",
            "Marketing", "Branding", "Success", "Vision", "Team"
        ];
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            text: i % 5 === 0 ? "★" : words[i % words.length],
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 1.5 + 0.5,
            rotation: Math.random() * 30 - 15,
        }));
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 50%, #1a1a1d 0%, #000000 100%)' // Dark Charcoal center
        }}>
            {/* Ambient Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vh',
                background: 'radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 60%)',
                filter: 'blur(80px)',
                borderRadius: '50%'
            }} />

            {/* Layer 1: Floating Particles (Always Visible) */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        opacity: 0.3,
                        boxShadow: '0 0 10px var(--color-primary)'
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Layer 2: The Mystery Layer (Hidden Text) 
                - Masked by radial gradient tracking mouse.
                - Low intensity.
            */}
            <div className="mystery-layer" style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                // Mask: Transparent everywhere, Opaque (Allowing content) at cursor
                WebkitMaskImage: 'radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 10%, transparent 70%)',
                maskImage: 'radial-gradient(circle 250px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 10%, transparent 70%)',
            }}>
                {mysteryItems.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: 'absolute',
                            top: `${item.top}%`,
                            left: `${item.left}%`,
                            fontSize: `${item.size}rem`,
                            color: 'var(--color-primary)', // Sky Blue
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: '700',
                            opacity: 0.15, // "Small intensity only" - dimmed down
                            transform: `rotate(${item.rotation}deg)`,
                            whiteSpace: 'nowrap',
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}
                    >
                        {item.text}
                    </div>
                ))}

                {/* Subtle Grid revealed by flashlight too */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'linear-gradient(rgba(0, 191, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 191, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }} />
            </div>
        </div>
    );
};

export default Background;
