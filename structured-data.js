// This file contains structured data in JSON-LD format for SEO
// Include this in your main HTML by adding it as a script in index.html
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "sphAIre",
  "url": "https://sphaire3d.com",
  "logo": "https://sphaire3d.com/logo512.png",
  "description": "sphAIre transforms text inputs into detailed, fully customizable 3D models for industrial design. Our AI-powered platform streamlines design workflows, reduces redesign cycles, and empowers designers.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "",
    "contactType": "customer service",
    "email": "pranavchahal@sphaire3d.com"
  },
  "sameAs": [
    "https://twitter.com/sphaire3d",
    "https://linkedin.com/company/sphaire3d",
    "https://instagram.com/sphaire3d"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Pranav Chahal",
      "jobTitle": "CEO",
      "email": "pranavchahal@sphaire3d.com"
    },
    {
      "@type": "Person",
      "name": "Kunal Bhardwaj",
      "jobTitle": "CTO",
      "email": "kunalbhardwaj@sphaire3d.com"
    },
    {
      "@type": "Person",
      "name": "Saksham Jain",
      "jobTitle": "COO",
      "email": "sakshamjain@sphaire3d.com"
    }
  ],
  "offers": {
    "@type": "Offer",
    "name": "3D Model Generation Platform",
    "description": "AI-powered platform that transforms text inputs into detailed, fully customizable 3D models"
  }
};

export default structuredData;
