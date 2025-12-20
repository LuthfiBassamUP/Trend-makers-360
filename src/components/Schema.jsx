import React from 'react';
import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Trend Makers 360",
        "url": "https://trendmakers360.in",
        "logo": "https://trendmakers360.in/og-image.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-87544 77912",
            "contactType": "customer service",
            "areaServed": ["IN"],
            "availableLanguage": ["en", "ta", "ml", "te"]
        },
        "sameAs": [
            "https://www.instagram.com/trendmakers360",
            "https://www.linkedin.com/company/trend-makers-360"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};

export const ServiceSchema = ({ name, description, areaServed }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "provider": {
            "@type": "Organization",
            "name": "Trend Makers 360"
        },
        "description": description,
        "areaServed": areaServed || "South India"
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};

export const BreadcrumbSchema = ({ items }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );
};
