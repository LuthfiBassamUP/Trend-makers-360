import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import WhyUs from '../components/home/WhyUs';
import Testimonials from '../components/home/Testimonials';
import LiveGallery from '../components/home/LiveGallery';
import FAQ from '../components/home/FAQ';
import SEO from '../components/SEO';
import { OrganizationSchema } from '../components/Schema';

const Home = () => {
    return (
        <div style={{ paddingTop: '0px' }}>
            <SEO
                title="Trending Starts Here: Premier Education Marketing & Skill Development"
                description="Trend Makers 360 specializes in education marketing, language training (German, Japanese), and research support (SCI/Scopus) across South India."
                canonical="https://trendmakers360.in/"
            />
            <OrganizationSchema />
            <Hero />
            <Stats />
            <WhyUs />
            <Testimonials />
            <LiveGallery />
            <FAQ />
        </div>
    );
};

export default Home;
