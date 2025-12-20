import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '3rem', fontSize: '2.5rem' }}
                >
                    The <span className="text-gradient">Journey</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: 'var(--color-text-muted)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem'
                    }}
                >
                    <p>
                        <strong style={{ color: 'var(--color-text-main)', fontSize: '1.5rem', display: 'block', marginBottom: '1rem' }}>
                            "Founded in 2022, TREND MAKERS 360 began with a simple observation:
                        </strong>
                        Colleges across South India were struggling to connect with prospective students in the digital age. Traditional marketing methods weren't cutting through the noise, and generic digital agencies didn't understand the unique challenges of education marketing.
                    </p>
                    <div style={{
                        borderLeft: '4px solid var(--color-primary)',
                        paddingLeft: '2rem',
                        background: 'linear-gradient(90deg, var(--color-primary-dim), transparent)',
                        padding: '2rem'
                    }}>
                        <p>
                            We started with a handful of colleges in Kerala, focusing exclusively on understanding their admissions cycles, student demographics, and what truly drives enrollment decisions. Our specialized approach quickly showed results, and word spread.
                        </p>
                    </div>
                    <p>
                        Today, we're proud to serve <span style={{ color: 'var(--color-primary)' }}>20+ educational institutions</span> across Tamil Nadu, Kerala, and Andhra Pradesh, solidifying our reputation as the <strong>Best Digital Marketing Agency for Colleges in Chennai and Hyderabad</strong>. We have delivered over 1000 creative assets and countless successful campaigns.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
