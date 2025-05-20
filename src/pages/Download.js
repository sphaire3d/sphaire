import React, { useEffect } from 'react';
import './Download.css';
import { Helmet } from 'react-helmet';

function DownloadPage() {
  useEffect(() => {
    // Set up intersection observer for animations
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.3 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));

    // Cleanup observer on component unmount
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Download sphAIre | AI-Powered 3D Model Generation Software</title>
        <meta name="description" content="Download sphAIre's AI-powered software for transforming text descriptions into fully customizable 3D models. Alpha version coming soon." />
        <meta name="keywords" content="sphAIre download, 3D model software, AI design tools, text to 3D conversion" />
        <link rel="canonical" href="https://sphaire3d.com/download" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Download sphAIre | AI-Powered 3D Model Generation" />
        <meta property="og:description" content="Download our revolutionary AI software that transforms text to tangible 3D models. Alpha version coming soon." />
        <meta property="og:url" content="https://sphaire3d.com/download" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <section id="download" className="download animate-on-scroll" aria-labelledby="download-heading">
          <div className="content glass">
            <h1 id="download-heading">Download sphAIre</h1>
            <article className="download-info">
              <p> <strong>Alpha version will be available for download soon</strong>.</p>
              <div className="coming-soon-badge" aria-label="Alpha version coming soon">Coming Soon</div>
              
              <div className="download-features">
                <h2>What to Expect in Our Alpha Release</h2>
                <ul>
                  <li>Text prompt to 3D model conversion</li>
                  <li>Basic customization options</li>
                  <li>Export to standard 3D file formats</li>
                  <li>Regular updates with new features</li>
                </ul>
              </div>
              
              
            </article>
          </div>
        </section>
      </main>

      <footer className="footer animate-on-scroll">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/" aria-label="Go to Home page">Home</a>
            <a href="/cofounders" aria-label="Learn about our team">Team</a>
          </div>
          <p>&copy; {new Date().getFullYear()} sphAIre. All rights reserved. AI-powered 3D model generation.</p>
        </div>
      </footer>
    </>
  );
}

export default DownloadPage;
