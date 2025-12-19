import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, TrendingUp } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel"
        style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            // removed hardcoded gradient to use glass-panel class
        }}
    >
        <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: 'var(--color-primary-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary)'
        }}>
            <Icon size={24} />
        </div>
        <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{description}</p>
        </div>
    </motion.div>
);

const WhyUs = () => {
    const features = [
        {
            title: "Education Specialists",
            description: "We don't just do marketing; we understand admissions. Our strategies are tailored to the unique enrollment cycles and student decision-making processes.",
            icon: Target
        },
        {
            title: "Multi-Experience Depth",
            description: "With over 1000+ creative assets delivered for 20+ institutions, we bring a wealth of cross-functional expertise to every campaign.",
            icon: Layers
        },
        {
            title: "Growth-Focused",
            description: "Data-driven solutions that focus on what matters most: measurable enrollment impact, improved student quality, and institutional visibility.",
            icon: TrendingUp
        }
    ];

    return (
        <section style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        style={{
                            color: 'var(--color-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}
                    >
                        Why Trend Makers 360?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '2.5rem', marginTop: '1rem', maxWidth: '700px', margin: '1rem auto 0' }}
                    >
                        More Than An Agency. <br />
                        <span className="text-gradient">We Are Partners In Growth.</span>
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} delay={i * 0.2} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
