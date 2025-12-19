import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <motion.div
        initial={false}
        className="glass-panel"
        style={{
            marginBottom: '1.5rem',
            overflow: 'hidden',
            cursor: 'pointer',
            border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)'
        }}
        onClick={onClick}
        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
    >
        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '500', color: isOpen ? 'white' : 'var(--color-text-muted)' }}>{question}</h3>
            <div style={{ color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </div>
        </div>

        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How does Trend Makers 360 ensure high success rates in GATE and IELTS?",
            answer: "We employ a two-pronged approach: expert mentorship from industry veterans and rigorous mock testing protocols that mirror actual exam conditions. Our curriculum is constantly updated to reflect the latest exam patterns."
        },
        {
            question: "Can you help our institution establish a Scopus-indexed research presence?",
            answer: "Absolutely. Our Research Ecosystem support includes identifying high-impact journals suited for your faculty's work, assisting with manuscript structure, and guiding you through the peer-review process to maximize acceptance rates."
        },
        {
            question: "Do you offer customized digital marketing packages for colleges?",
            answer: "Yes. We understand that every institution is unique. We conduct a preliminary audit of your current digital presence and enrollments goals to tailor a strategy that specifically targets your ideal student demographics in your region."
        },
        {
            question: "What regions do you specifically serve?",
            answer: "While we operate digitally, our core expertise is rooted in South India, with dedicated focus on Tamil Nadu, Kerala, Andhra Pradesh, and Telangana educational landscapes."
        }
    ];

    return (
        <section style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Common <span className="text-gradient">Questions</span></h2>
                    <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>Expert answers to your doubts.</p>
                </div>

                <div>
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            {...faq}
                            isOpen={i === openIndex}
                            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
