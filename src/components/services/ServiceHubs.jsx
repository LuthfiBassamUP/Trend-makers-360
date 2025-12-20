import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Monitor, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

const HubCard = ({ title, services, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.6 }}
        className="glass-panel"
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
        style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        {/* Decorative corner glow */}
        <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            background: 'var(--color-primary)',
            filter: 'blur(50px)',
            opacity: 0.2
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(0, 243, 255, 0.1)',
                color: 'var(--color-primary)'
            }} aria-label={`${title} Icon - Trend Makers 360`}>
                <Icon size={32} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700' }}>{title}</h3>
        </div>

        <ul style={{
            listStyle: 'none',
            display: 'grid',
            gap: '1rem',
            marginTop: '1rem'
        }}>
            {services.map((item, idx) => (
                <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + (idx * 0.1) }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        color: 'var(--color-text-muted)',
                        fontSize: '1.1rem'
                    }}
                >
                    <CheckCircle size={18} color="var(--color-primary)" />
                    {item}
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

const ServiceHubs = () => {
    const hubs = [
        {
            title: "Digital Media Management",
            icon: Monitor,
            link: "/services", // Keeping distinct link if needed or anchor
            services: ["Social Media Strategy", "Branding & Identity", "SEO & Google Ads", "Website Design & Development", "Video Production"]
        },
        {
            title: "Research Ecosystem",
            icon: BookOpen,
            link: "/services/research-support",
            services: ["SCI/Scopus Support & Publication", "Patent Filing & Consultation", "H-Index & Citation Enhancement", "Academic Research Guidance", "Journal Selection Strategies"]
        },
        {
            title: "Skill Development Hub",
            icon: GraduationCap,
            link: "/services/language-hub", // Primary link, or maybe split? User asked for "Skill Development Hub" H2. Let's link to language hub for now as it's the main requested expansion.
            services: ["Language Training (German, Japanese)", "IELTS / TOEFL Preparation", "GATE Coaching", "Career Development Workshops", "Soft Skills Training"]
        }
    ];

    return (
        <section style={{ padding: '4rem 2rem 8rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2 // Changed to h2 per SEO requirement if H1 is on Hero
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem' }}
                >
                    Skill Development Hub: <span className="text-gradient">Master Japanese, German, and Competitive Exams</span>
                </motion.h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {hubs.map((hub, idx) => (
                        <Link to={hub.link || '#'} key={idx} style={{ textDecoration: 'none' }}>
                            <HubCard {...hub} delay={idx * 0.2} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHubs;
