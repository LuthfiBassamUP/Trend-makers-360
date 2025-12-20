import React from 'react';
import { motion } from 'framer-motion';
import { Users, PenTool, Lightbulb, Code } from 'lucide-react';

const TeamCard = ({ title, count, icon: Icon, description }) => (
    <motion.div
        className="glass-panel"
        whileHover={{ y: -10, boxShadow: '0 10px 30px -10px var(--color-primary-glow)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1rem',
            cursor: 'default'
        }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(0, 243, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
        }}>
            <Icon size={30} color="var(--color-primary)" />
        </div>
        <h3 style={{ fontSize: '1.5rem' }}>{title}</h3>
        <p style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--color-text-main)',
            textShadow: '0 0 10px var(--color-primary-dim)'
        }}>
            {count}
        </p>
        <p style={{ color: 'var(--color-text-muted)' }}>{description}</p>
    </motion.div>
);

const Team = () => {
    const teams = [
        { title: "Creative Team", count: "15+", icon: PenTool, description: "Designers & Content Creators" },
        { title: "Strategy Team", count: "10+", icon: Lightbulb, description: "Marketing Strategists" },
        { title: "Tech Team", count: "12+", icon: Code, description: "Developers & SEO Experts" },
    ];

    return (
        <section style={{ padding: '4rem 2rem 8rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}
                >
                    Our <span className="text-gradient">Force</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {teams.map((team, idx) => (
                        <TeamCard key={idx} {...team} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
