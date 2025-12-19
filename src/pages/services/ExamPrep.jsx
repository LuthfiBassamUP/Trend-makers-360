import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/Schema';
import Button from '../../components/Button';
import { MessageCircle } from 'lucide-react';

const ExamPrep = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <SEO
                title="IELTS, TOEFL & GATE Prep | Trend Makers 360"
                description="Top-rated coaching for IELTS, TOEFL, and GATE exams. Achieve your dream scores with personalized training and expert mentors in Chennai and Kerala."
                canonical="https://trendmakers360.in/services/exam-prep"
            />
            <ServiceSchema
                name="Exam Preparation Services"
                description="Coaching for IELTS, TOEFL, GATE and competitive exams."
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Exam <span className="text-gradient">Preparation</span>
                </motion.h1>

                <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Study Abroad (IELTS/TOEFL)</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                            Unlock global education with high band scores. Our intensive training modules focus on all four skills: Listening, Reading, Writing, and Speaking.
                        </p>
                        <a href="https://wa.me/918754477912?text=IELTS%20Training%20Enquiry" target="_blank">
                            <Button icon={MessageCircle}>Start IELTS Prep</Button>
                        </a>
                    </div>

                    <div className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ffb700' }}>GATE & Competitive Exams</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                            Secure your future in PSUs and IITs with our specialized GATE coaching. Subject-matter experts and rigorous mock tests.
                        </p>
                        <a href="https://wa.me/918754477912?text=GATE%20Coaching%20Enquiry" target="_blank">
                            <Button icon={MessageCircle} style={{ borderColor: '#ffb700', color: '#ffb700' }}>Join GATE Batch</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamPrep;
