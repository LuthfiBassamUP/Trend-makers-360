import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import { Send } from 'lucide-react';

const InputField = ({ label, type = 'text', textarea = false }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);

    return (
        <div style={{ position: 'relative', marginBottom: '2rem' }}>
            {textarea ? (
                <textarea
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: focused ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                        color: 'white',
                        borderRadius: '8px',
                        outline: 'none',
                        minHeight: '120px',
                        resize: 'vertical',
                        transition: 'all 0.3s ease'
                    }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: focused ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                        color: 'white',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'all 0.3s ease'
                    }}
                />
            )}
            <label style={{
                position: 'absolute',
                left: '1rem',
                top: (focused || value) ? '-0.8rem' : '1rem',
                fontSize: (focused || value) ? '0.8rem' : '1rem',
                color: (focused || value) ? 'var(--color-primary)' : 'var(--color-text-muted)',
                background: (focused || value) ? 'var(--color-bg)' : 'transparent',
                padding: '0 0.5rem',
                pointerEvents: 'none',
                transition: 'all 0.3s ease'
            }}>
                {label}
            </label>
        </div>
    );
};

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel"
            style={{ padding: '3rem' }}
        >
            <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Send Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <InputField label="Your Name" />
                <InputField label="Email Address" type="email" />
                <InputField label="Message" textarea />
                <Button icon={Send} style={{ width: '100%' }}>Send Message</Button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
