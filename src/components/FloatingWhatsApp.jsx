import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/918754477912"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                cursor: 'pointer',
                border: '2px solid rgba(255,255,255,0.2)'
            }}
        >
            <motion.div
                animate={{
                    boxShadow: ['0 0 0 0 rgba(37, 211, 102, 0.7)', '0 0 0 20px rgba(37, 211, 102, 0)']
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                }}
            />
            <MessageCircle color="white" size={32} />
        </motion.a>
    );
};

export default FloatingWhatsApp;
