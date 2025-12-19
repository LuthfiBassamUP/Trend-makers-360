import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/Schema';
import Button from '../../components/Button';
import { MessageCircle } from 'lucide-react';

const LanguageHub = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <SEO
                title="German & Japanese Language Training | Trend Makers 360"
                description="Master German and Japanese languages with Trend Makers 360. Expert-led courses for JLPT and Goethe-Zertifikat preparation in Chennai, Kerala, and Hyderabad."
                canonical="https://trendmakers360.in/services/language-hub"
            />
            <ServiceSchema
                name="Language Training Hub"
                description="German and Japanese language courses, JLPT and Goethe exam preparation."
                areaServed="South India"
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Language <span className="text-gradient">Hub</span>
                </motion.h1>

                <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>German Language Training</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                            Open doors to global opportunities with our comprehensive German language courses.
                            From A1 to C1 levels, we prepare you for higher education and careers in Germany.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Goethe-Zertifikat Prep</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Native-level Instructors</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Visa Interview Support</li>
                        </ul>
                        <a href="https://wa.me/918754477912?text=Hi,%20I'm%20interested%20in%20German%20Classes" target="_blank">
                            <Button icon={MessageCircle}>Enroll for German</Button>
                        </a>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ff0055' }}>Japanese Language (JLPT)</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                            Master the Japanese language and culture. Our JLPT focused training ensures you are ready for
                            opportunities in Japan's booming tech and manufacturing sectors.
                        </p>
                        <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✓ JLPT N5 to N2 Levels</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Kanji & Conversation Focus</li>
                            <li style={{ marginBottom: '0.5rem' }}>✓ Job Placement Assistance</li>
                        </ul>
                        <a href="https://wa.me/918754477912?text=Hi,%20I'm%20interested%20in%20Japanese%20Classes" target="_blank">
                            <Button icon={MessageCircle} style={{ borderColor: '#ff0055', color: '#ff0055' }}>Enroll for Japanese</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageHub;
