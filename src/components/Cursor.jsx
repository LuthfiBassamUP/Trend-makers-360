import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/variables.css';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);

            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <React.Fragment>
            {/* Main Dot Cursor */}
            <motion.div
                className="cursor"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference' // Visible over light/dark
                }}
            />
            {/* Flashlight Halo - Visualizing the concept of the flashlight */}
            <motion.div
                style={{
                    translateX: cursorX, // Track perfectly with background mask
                    translateY: cursorY,
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    marginLeft: '-115px', // Center vs 250px/2 width radius
                    marginTop: '-115px',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 70%)', // Low intensity Sky Blue
                    pointerEvents: 'none',
                    zIndex: 9998,
                    mixBlendMode: 'screen'
                }}
            />
        </React.Fragment>
    );
};

export default Cursor;
