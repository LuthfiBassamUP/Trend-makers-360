import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import '../styles/variables.css';
import logo from '../assets/Logo_white.png';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--glass-border)',
            background: 'rgba(5, 5, 5, 0.8)',
            padding: '4rem 2rem 2rem',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                alignItems: 'flex-start'
            }}>
                {/* Top Row: Logo */}
                <div>
                    <img
                        src={logo}
                        alt="Trend Makers 360"
                        style={{ height: '50px', filter: 'brightness(1.1)' }}
                    />
                </div>

                {/* Mid Row: Socials */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {[Instagram, Linkedin, Twitter].map((Icon, idx) => (
                        <a key={idx} href="#" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            border: '1px solid var(--glass-border)'
                        }} className="social-icon">
                            <Icon size={18} color="var(--color-primary)" />
                        </a>
                    ))}
                </div>

                {/* Bottom Row/Section: Tagline and Info */}
                <div style={{ width: '100%' }}>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        maxWidth: '500px',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}>
                        "From Ideas to Innovation. <br />From Learning to Leadership."
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                        gap: '2rem',
                        borderTop: '1px solid var(--glass-border)',
                        paddingTop: '2rem'
                    }}>
                        <div>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Regional Offices</h4>
                            <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                <li>Tamil Nadu (Chennai)</li>
                                <li>Kerala (Thrissur)</li>
                                <li>Andhra Pradesh (Vizag)</li>
                                <li>Telangana (Hyderabad)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>Contact</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>hello@trendmakers360.in</p>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--glass-border)',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Trend Makers 360. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
