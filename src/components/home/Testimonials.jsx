import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Quote, BookOpen, Globe, Award } from 'lucide-react';

const Card = ({ data, index, scrollYProgress, totalCards }) => {
    // Animation Logic
    // Each card is active for a slice of the scroll: 1 / totalCards
    const step = 1 / totalCards;
    const start = index * step;
    const end = start + step;

    // Discard animation (Front card behavior)
    // When scroll passes 'start', this card starts moving out
    // rotate: 0 -> -45deg
    // x: 0 -> -200%
    // opacity: 1 -> 0
    const rotate = useTransform(scrollYProgress, [start, end], [0, -15]);
    const x = useTransform(scrollYProgress, [start, end], ["0%", "-120%"]);
    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.8]);

    // Entry/Back card behavior is handled by default stack position and z-index, 
    // but we can add a subtle scale up for the NEXT card if we wanted complex lookahead.
    // For now, simpler "stack" logic: 
    // Cards below standardly sit at scale 1. As the one above leaves, they are revealed.
    // To make it look like a deck, we can standardly position them absolute.

    // We actually want the current card to animate OUT.
    // And simple z-index stacking handles the rest (next card is already behind).

    // BUT, let's add the "Incoming" scale effect. 
    // If this card is NEXT (i.e. index + 1 relative to scroll), it should scale up?
    // Actually simpler: Just animate the current one AWAY. The one behind is static until it becomes the current one.
    // To give depth, maybe transform the *remaining* cards? 
    // Let's stick to the user's primary "Discard" request first.

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                rotate,
                x,
                opacity,
                scale,
                zIndex: totalCards - index,
                transformOrigin: "bottom left"
            }}
        >
            <div className="glass-panel" style={{
                height: '100%',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'linear-gradient(135deg, #1a1a20 0%, #0a0a0c 100%)', // Opaque dark gradient
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <div>
                    <Quote size={40} color="var(--color-primary)" style={{ opacity: 0.5, marginBottom: '2rem' }} />
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: '#e0e0e0', fontStyle: 'italic' }}>
                        "{data.quote}"
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)'
                    }}>
                        {data.icon}
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{data.author}</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{data.role}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Testimonials = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Tilt Effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    };

    const reviews = [
        {
            quote: "Trend Makers 360 isn't just an agency; they are institutional partners who understand the Chennai education landscape perfectly.",
            author: "Dr. K. Richards",
            role: "Chairman, TN Institute",
            icon: <Award size={30} />
        },
        {
            quote: "Their mentor-led training for IELTS and GATE has directly improved our students' global career advancement opportunities.",
            author: "Mr. Anand",
            role: "Placement Officer",
            icon: <Globe size={30} />
        },
        {
            quote: "By combining creative branding with SEO and Google Ads, they transformed our digital visibility across South India.",
            author: "Ms. Sarah",
            role: "Marketing Head",
            icon: <Award size={30} />
        },
        {
            quote: "Their expertise in SCI and Scopus publications was vital in elevating our institution's global academic impact and patent filings.",
            author: "Dr. Ramesh",
            role: "Research Coordinator",
            icon: <BookOpen size={30} />
        }
    ];

    return (
        <section ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                <div style={{
                    maxWidth: '1400px', margin: '0 auto', height: '100%',
                    display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem',
                    alignItems: 'center', padding: '0 2rem'
                }}>

                    {/* Left: Static Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', zIndex: 10 }}
                    >
                        <div style={{
                            background: 'rgba(0, 243, 255, 0.05)',
                            borderLeft: '4px solid var(--color-primary)',
                            padding: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <h3 style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Why Trend Makers 360?
                            </h3>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: '1.1' }}>
                                Educational Marketing <br /><span className="text-gradient">Specialists</span>
                            </h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                Founded in 2022 to solve the unique enrollment challenges of colleges in Kerala and Tamil Nadu, we bridge the gap between institutional research and career growth.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#fff' }}>
                                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>20+ Institutions</span>
                                <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>1000+ Assets</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: 3D Deck */}
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                        style={{
                            position: 'relative',
                            height: '500px',
                            width: '100%',
                            perspective: '1000px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* Floating Background Icons */}
                        <div style={{ position: 'absolute', inset: -50, zIndex: 0, pointerEvents: 'none' }}>
                            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} style={{ position: 'absolute', top: '10%', right: '10%', opacity: 0.1, color: 'var(--color-primary)' }}>
                                <Globe size={80} />
                            </motion.div>
                            <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity }} style={{ position: 'absolute', bottom: '10%', left: '10%', opacity: 0.1, color: 'var(--color-accent-purple)' }}>
                                <BookOpen size={100} />
                            </motion.div>
                            <motion.div animate={{ x: [0, 30, 0], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 6, repeat: Infinity }} style={{ position: 'absolute', top: '40%', left: '-10%', fontSize: '4rem', fontWeight: 'bold', opacity: 0.05 }}>
                                IELTS
                            </motion.div>
                        </div>

                        {/* Card Stack */}
                        <motion.div
                            style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                height: '350px',
                                rotateX,
                                rotateY,
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {reviews.map((review, i) => (
                                <Card
                                    key={i}
                                    data={review}
                                    index={i}
                                    totalCards={reviews.length}
                                    scrollYProgress={scrollYProgress}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
