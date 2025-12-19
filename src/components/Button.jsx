import React from 'react';
import { motion } from 'framer-motion';
import '../styles/variables.css';

const Button = ({ children, onClick, variant = 'primary', icon: Icon, className = '' }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--color-primary-glow)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={className}
            style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                background: variant === 'primary' ? 'rgba(0, 243, 255, 0.1)' : 'transparent',
                border: `1px solid ${variant === 'primary' ? 'var(--color-primary)' : 'var(--color-text-muted)'}`,
                color: variant === 'primary' ? 'var(--color-primary)' : 'var(--color-text-main)',
                backdropFilter: 'blur(10px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                transform: 'translateX(-100%)',
            }} />
            {Icon && <Icon size={20} />}
            {children}
        </motion.button>
    );
};

export default Button;
