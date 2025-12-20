import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        { label: "Institutions", value: "20+" },
        { label: "Creatives", value: "1000+" },
        { label: "States", value: "3" },
        { label: "Years", value: "3+" }
    ];

    return (
        <section style={{
            padding: '4rem 2rem',
            position: 'relative',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 243, 255, 0.02), transparent)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem'
            }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="glass-panel"
                        style={{
                            padding: '2rem',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // removed hardcoded background/border to use glass-panel class
                        }}
                    >
                        <motion.span
                            style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: 'var(--color-primary)',
                                marginBottom: '0.5rem',
                                textShadow: '0 0 20px var(--color-primary-dim)'
                            }}
                        >
                            {stat.value}
                        </motion.span>
                        <span style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
