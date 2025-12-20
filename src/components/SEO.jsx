import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    image,
    canonical,
    type = 'website'
}) => {
    const siteName = 'Trend Makers 360';
    // If title is provided, append site name. If not, use the default title requested.
    const fullTitle = title
        ? `${title} | ${siteName}`
        : 'Trend Makers 360 | Japanese & German Training | Digital Marketing for Colleges';

    const defaultDescription = "Premier Foreign Language Training in Japanese (JLPT) and German. We provide specialized Social Media Management and Digital Marketing for colleges across South India";
    const metaDescription = description || defaultDescription;

    const defaultKeywords = "Japanese JLPT training, German language training, digital marketing for colleges, social media management for colleges, foreign language training";
    const metaKeywords = keywords || defaultKeywords;

    const defaultImage = 'https://www.trendmakers360.in/og-image.png'; // Using the one we copied
    const metaImage = image || defaultImage;

    const defaultCanonical = canonical || 'https://www.trendmakers360.in';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={defaultCanonical} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content="Trend Makers 360 - Empowering Institutions for a Smarter Tomorrow" />
            <meta property="og:description" content="From Ideas to Innovation. Leading the way in digital visibility and academic growth for colleges in Tamil Nadu, Kerala, and Andhra Pradesh" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
