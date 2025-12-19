import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { ServiceSchema } from '../../components/Schema';
import Button from '../../components/Button';
import { MessageCircle } from 'lucide-react';

const ResearchSupport = () => {
    return (
        <div style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
            <SEO
                title="PhD Research Support & Patent Filing | Trend Makers 360"
                description="Comprehensive research support services: SCI/Scopus publication assistance, Patent filing, and H-Index enhancement for scholars and institutions."
                canonical="https://trendmakers360.in/services/research-support"
            />
            <ServiceSchema
                name="Research Support Ecosystem"
                description="Support for SCI/Scopus publications, patents, and academic research."
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
                >
                    Research <span className="text-gradient">Ecosystem</span>
                </motion.h1>

                <div className="glass-panel" style={{ padding: '3rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Publication Support (SCI/Scopus)</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        We assist scholars and faculty members in publishing their research in high-impact factor journals.
                        Our team guides you through the entire process, from manuscript editing to journal selection and response to reviewers.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Journal Selection</span>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Plagiarism Check</span>
                        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '20px' }}>Formatting</span>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '3rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-accent-purple)' }}>Patent Filing & IPR</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                        Protect your innovations with our expert patent filing services. We support Indian and International patent filings,
                        prior art search, and drafting claims.
                    </p>
                    <a href="https://wa.me/918754477912?text=Research%20%26%20Patent%20Support" target="_blank">
                        <Button icon={MessageCircle}>Consult for Research</Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ResearchSupport;
