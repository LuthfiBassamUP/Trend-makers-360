import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

import img1 from '../../assets/socials/1.jpg';
import img2 from '../../assets/socials/2.jpg';
import img3 from '../../assets/socials/3.jpg';
import img4 from '../../assets/socials/4.jpg';
import img5 from '../../assets/socials/5.jpg';
import img6 from '../../assets/socials/6.jpg';
import img7 from '../../assets/socials/7.jpg';

const galleryItems = [
    { id: 1, type: 'instagram', image: img1, caption: 'View Post', link: 'https://www.instagram.com/p/DRw75P3E-rx/' },
    { id: 2, type: 'instagram', image: img2, caption: 'View Post', link: 'https://www.instagram.com/p/DRorQdBE2qP/' },
    { id: 3, type: 'instagram', image: img3, caption: 'View Post', link: 'https://www.instagram.com/p/DRV-ybbk4Uv/' },
    { id: 4, type: 'instagram', image: img4, caption: 'View Post', link: 'https://www.instagram.com/p/DRRh23VE6Id/' },
    { id: 5, type: 'instagram', image: img5, caption: 'View Post', link: 'https://www.instagram.com/p/DQ9fLr7E9Gi/' },
    { id: 6, type: 'instagram', image: img6, caption: 'View Post', link: 'https://www.instagram.com/p/DQwaAvKkwrJ/' },
    { id: 7, type: 'instagram', image: img7, caption: 'View Post', link: 'https://www.instagram.com/p/DRg1LCvE8sC/' },
];

const LiveGallery = () => {
    const scrollContainerRef = React.useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Infinite Scroll logic: Triplicate items for buffer
    const infiniteItems = [...galleryItems, ...galleryItems, ...galleryItems];

    // Handle infinite loop reset
    const handleScroll = () => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth;
        const sectionWidth = maxScroll / 3;

        // If we scroll past the second set, jump back to start of second set
        if (container.scrollLeft >= 2 * sectionWidth) {
            container.scrollLeft -= sectionWidth;
        }
        // If we scroll before the second set, jump to end of second set
        else if (container.scrollLeft <= 50) { // Threshold to prevent getting stuck at 0
            container.scrollLeft += sectionWidth;
        }
    };

    // Robust Wheel Mapping (Non-passive listener)
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Initialize scroll position to the middle section
        const initScroll = () => {
            if (container.scrollWidth > 0 && container.scrollLeft < 100) {
                container.scrollLeft = container.scrollWidth / 3;
            }
        };
        // Attempt immediate and delayed to ensure layout is ready
        setTimeout(initScroll, 100);

        const onWheel = (e) => {
            e.preventDefault();
            // Map vertical (deltaY) to horizontal
            container.scrollLeft += e.deltaY;
            // Map horizontal (deltaX) normally
            container.scrollLeft += e.deltaX;
        };

        // { passive: false } is crucial for preventing page scroll
        container.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <section style={{ padding: '6rem 0', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Live from <span className="text-gradient">Socials</span>
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                        Follow our journey across campuses.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="hide-scrollbar"
                style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    padding: '0 2rem 2rem 2rem',
                    scrollBehavior: 'auto', // Must be auto for instant reset
                    width: '100%',
                    cursor: 'grab'
                }}
            >
                {infiniteItems.map((item, index) => (
                    <motion.a
                        key={`${item.id}-${index}`} // Unique key
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10, boxShadow: '0 0 20px rgba(0, 191, 255, 0.4)' }}
                        viewport={{ once: true }}
                        style={{
                            display: 'block',
                            position: 'relative',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            minWidth: '300px',
                            height: '300px',
                            width: '300px',
                            border: '1px solid var(--glass-border)',
                            flexShrink: 0
                        }}
                    >
                        <img
                            src={item.image}
                            alt="Gallery feed"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />

                        {/* Overlay */}
                        <div className="hover-overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,128,0.8), transparent)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            padding: '1.5rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                {item.type === 'instagram' ? <Instagram color="#00bfff" /> : <Linkedin color="#00bfff" />}
                                <ExternalLink size={16} color="white" />
                            </div>
                            <p style={{ color: 'white', fontSize: '0.9rem', lineHeight: '1.4' }}>{item.caption}</p>
                        </div>

                        <style>{`
                            a:hover .hover-overlay { opacity: 1 !important; }
                            a:hover img { transform: scale(1.1); }
                        `}</style>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default LiveGallery;
