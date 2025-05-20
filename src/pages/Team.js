import React from 'react';
import { Helmet } from 'react-helmet';
import './Team.css';

export default function Team() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Leadership Team | sphAIre - AI-Powered 3D Model Generation</title>
        <meta name="description" content="Meet the visionary team behind sphAIre's AI-powered 3D model generation platform. Our leadership is dedicated to revolutionizing the industrial design process." />
        <meta name="keywords" content="sphAIre team, AI leadership, 3D modeling experts, tech founders, industrial design innovation" />
        <link rel="canonical" href="https://sphaire3d.com/team" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Leadership Team | sphAIre" />
        <meta property="og:description" content="Meet the visionary team behind sphAIre's revolutionary AI-powered 3D model generation platform." />
        <meta property="og:url" content="https://sphaire3d.com/team" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <section className="team-page" aria-labelledby="team-heading">
          <div className="team-container">
            <h1 id="team-heading">Our Leadership Team</h1>
            
            <p className="team-intro">
              The sphAIre team combines expertise in artificial intelligence, 3D modeling, and industrial design 
              to create revolutionary solutions that transform how designers work with 3D models.
            </p>
            
            <div className="team-members" role="list">
              {/* We'll redirect to the cofounders page for now */}
              <div className="redirect-message">
                <p>View our full team on the <a href="/cofounders" aria-label="Go to cofounders page">Cofounders page</a>.</p>
              </div>
            </div>
            
            <div className="careers-section">
              <h2>Join Our Team</h2>
              <p>We're always looking for talented individuals who are passionate about AI, 3D modeling, and industrial design.</p>
              <p>Contact us at <a href="mailto:pranavchahal@sphaire3d.com">pranavchahal@sphaire3d.com</a> to learn about current opportunities.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}