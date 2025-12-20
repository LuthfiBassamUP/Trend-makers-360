import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
    const locations = [
        { name: "Chennai", x: 60, y: 70 }, // Rough relative positions
        { name: "Thrissur", x: 40, y: 80 },
        { name: "Nellore", x: 65, y: 60 },
        { name: "Hyderabad", x: 55, y: 40 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
                position: 'relative',
                height: '400px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '20px',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Abstract Map Representation */}
            <div style={{
                width: '100%',
                height: '100%',
                background: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/India_location_map.svg/866px-India_location_map.svg.png") no-repeat',
                backgroundPosition: 'center 80%', // Focus on South India
                backgroundSize: 'cover',
                opacity: 100, // Increased visibility
                filter: 'invert(1) hue-rotate(180deg) brightness(1.2)' // Make it look like a cool tech blueprint
            }} />

            {/* Use a grid background instead for tech feel */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.3
            }} />

            {locations.map((loc, idx) => (
                <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + (idx * 0.2) }}
                    style={{
                        position: 'absolute',
                        left: `${loc.x}%`,
                        top: `${loc.y}%`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px var(--color-primary-glow)'
                    }} />
                    <span style={{
                        marginTop: '5px',
                        fontSize: '0.8rem',
                        background: 'rgba(0,0,0,0.8)',
                        padding: '2px 5px',
                        borderRadius: '4px'
                    }}>
                        {loc.name}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Map;
