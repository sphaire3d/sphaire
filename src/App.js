import React, { useEffect, useState } from 'react';  
import { Routes, Route } from 'react-router-dom';  
import './App.css';  
import Navbar from './components/Navbar';  
import VideoSection from './components/VideoSection';  
import ThreeScene from './components/ThreeScene';
import ScrollAnimation from './components/ScrollAnimation';
import sphaireLogo from './assets/sphaireLogo.png';  
import pranav from './assets/pranav.png';  
import saksham from './assets/saksham.png'; 
import kunal from './assets/kunal.png';  
import up from './assets/wave-left.png';
import down from './assets/wave-right.png';
import DownloadPage from './pages/Download';




  
function CustomCursor() {  
  const [pos, setPos] = useState({ x: 0, y: 0 });  
  useEffect(() => {  
    const move = e => setPos({ x: e.clientX, y: e.clientY });  
    window.addEventListener('mousemove', move);  
    return () => window.removeEventListener('mousemove', move);  
  }, []);  
  return <div className="custom-cursor" style={{ left: pos.x, top: pos.y }} />;  
}  
  
const LandingPage = () => (
  <section id="landing" className="landing animate-on-scroll">
    <div className="parallax-circle circle1" data-speed="0.2" />
    <div className="parallax-circle circle2" data-speed="0.5" />
    <div className="parallax-circle circle3" data-speed="0.1" />
    <div className="logo-container">
      <img 
        src={sphaireLogo} 
        alt="sphAIre Logo - AI-powered 3D model generation platform" 
        className="sphaire-logo" 
        width="300"
        height="300"
      />
    </div>
    <div className="hero">
      <h1>sphAIre</h1>
      <p><strong>Transform Text to Tangible 3D Models</strong></p>
    </div>
  </section>
);  
const InfoPage = () => {
  return (
    <section id="info" className="info animate-on-scroll">
      <img src={up} alt="Decorative wave element" className="up" />
      <img src={down} alt="Decorative wave element" className="down" />
      <article className="content">
        <h2>About sphAIre</h2>
        <div className="rich-text-content">
          <p>
            Industrial design processes demand constant adjustments to trivial 3D parts, wasting valuable man-hours and delaying production. At <strong>sphAIre</strong>, we revolutionize this process by harnessing a <em>machine learning generative program</em> that transforms text inputs into detailed, fully customizable 3D models.
          </p>
          <p>
            Our innovative platform uniquely generates models tailored to specific production needs, streamlining design workflows and reducing costly redesign cycles. By automating repetitive tasks and offering robust customization, sphAIre empowers designers to focus on creativity and innovation, ensuring a faster, more efficient industrial design process.
          </p>
        </div>
      </article>
    </section>
  );
};

const DetailSection = () => {
  const features = [
    {
      title: "AI-Powered 3D Model Generation",
      description: "Instantly transform text descriptions into detailed, production-ready 3D models using our advanced machine learning algorithms."
    },
    {
      title: "Full Customizability",
      description: "Execute precise adjustments at any level of detail, giving you complete control over every aspect of your generated 3D models."
    },
    {
      title: "RAG Integration",
      description: "Our Retrieval Augmented Generation technology maintains real-time access to the latest industry data, ensuring your models incorporate current standards and innovations."
    },
    {
      title: "Logic-Driven Neural Training",
      description: "Our proprietary algorithm leverages a logic-based programming language to train neural networks on 3D models—seamlessly converting designs into Python code for optimized learning." 
    },
    {
      title: "Industry Game Changer",
      description: "By merging AI-driven 3D generation with robust customization, sphAIre revolutionizes traditional workflows, setting a new benchmark in industrial design innovation."
    },
    {
      title: "Future-Proof Innovation",
      description: "Engineered for scalability and adaptability, sphAIre paves the way for next-generation solutions, ensuring unmatched efficiency and creative freedom."
    }
  ];
  return (
    <section id="details" className="details animate-on-scroll" aria-labelledby="features-heading">
      <div className="details-content">
        <h2 id="features-heading">Features & Innovations</h2>
        <div className="features-grid" role="list">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card" 
              style={{ animationDelay: `${index * 0.2}s` }}
              role="listitem"
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const CofounderSection = () => (
  <section id="cofounders" className="cofounders animate-on-scroll" aria-labelledby="team-heading">
    <div className="content glass-large">
      <h2 id="team-heading">Team</h2>
      <div className="cofounders-cards" role="list">
        {[
          { img: pranav, name: 'Pranav Chahal', role: 'Chief Executive Officer', email: 'pranavchahal@sphaire3d.com', description: '' },
          { img: kunal,  name: 'Kunal Bhardwaj', role: 'Chief Technology Officer', email: 'kunalbhardwaj@sphaire3d.com', description: '' },
          { img: saksham,  name: 'Saksham Jain', role: 'Chief Operating Officer', email: 'sakshamjain@sphaire3d.com', description: '' }
        ].map((c, i) => (
          <div key={i} className="cofounder-card glass" role="listitem">
            <div className="cofounder-image-container">
              <img 
                src={c.img} 
                alt={`${c.name}, ${c.role} at sphAIre`} 
                width="200"
                height="200"
                loading="lazy"
              />
            </div>
            <h3>{c.name}</h3>
            <p className="role">{c.role}</p>
            <p className="team-description">{c.description}</p>
            <a href={`mailto:${c.email}`} className="cta-button" aria-label={`Contact ${c.name}`}>Contact</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);  

const FundingSection = () => (
  <section id="funding" className="funding animate-on-scroll" aria-labelledby="funding-heading">
    <div className="content glass">
      <h2 id="funding-heading">Join Us in Shaping the Future of 3D Design</h2>
      <div className="rich-text-content">
        <p>At <strong>sphAIre</strong>, we are actively seeking funding and strategic investments to accelerate our revolutionary approach to AI-powered 3D design. Your support—through investment, mentorship, or partnerships—can help drive innovation and transform the industry.</p>
        <p>Every contribution matters in our quest to redefine industrial design through artificial intelligence and advanced 3D modeling.</p>
      </div>
      <a 
        href="mailto:pranavchahal@sphaire3d.com" 
        className="cta-button"
        aria-label="Contact us about investment opportunities"
        rel="noopener"
      >
        Explore Investment Opportunities
      </a>
    </div>
  </section>
);



const Footer = () => (
  <footer className="footer animate-on-scroll">
    <div className="footer-content">
      <div className="footer-links">
        <a href="/" aria-label="Home page">Home</a>
        <a href="/cofounders" aria-label="Learn about our team">Team</a>
        <a href="/download" aria-label="Download sphAIre software">Download</a>
      </div>
      <p>© {new Date().getFullYear()} sphAIre. All rights reserved. AI-powered 3D model generation.</p>
      <div className="footer-legal">
        <a href="#privacy" aria-label="View our privacy policy">Privacy Policy</a>
        <a href="#terms" aria-label="View our terms of service">Terms of Service</a>
      </div>
    </div>
  </footer>
);  
  
function HomePage() {  
  useEffect(() => {  
    const obs = new IntersectionObserver(  
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),  
      { threshold: 0.3 }  
    );  
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));  
    return () => obs.disconnect();  
  }, []);  
  return (  
    <>  
      <LandingPage />  
      <InfoPage />  
      <VideoSection />  
      <DetailSection />  
      <FundingSection />  
      <Footer />  
    </>  
  );  
}  
  
function CofoundersPage() {  
  useEffect(() => {  
    const obs = new IntersectionObserver(  
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),  
      { threshold: 0.3 }  
    );  
    document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));  
    return () => obs.disconnect();  
  }, []);  
  return (  
    <>  
      <CofounderSection />  
      <Footer />  
    </>  
  );  
}  
  
export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Parallax circles on scroll and track scroll position
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      setScrollPosition(y);
      
      document.querySelectorAll('.parallax-circle').forEach(c => {
        const speed = parseFloat(c.getAttribute('data-speed')) || 0;
        c.style.transform = `translateY(${y * speed}px)`;
      });
      
      // Parallax for other elements
      document.querySelectorAll('.parallax-element').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0;
        const direction = el.getAttribute('data-direction') || 'y';
        
        if (direction === 'y') {
          el.style.transform = `translateY(${y * speed}px)`;
        } else if (direction === 'x') {
          el.style.transform = `translateX(${y * speed}px)`;
        } else if (direction === 'rotate') {
          el.style.transform = `rotate(${y * speed}deg)`;
        }
      });
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      {/* 3D background scene */}
      <ThreeScene scrollPosition={scrollPosition} />
      
      {/* Normal UI on top */}
      <ScrollAnimation>
        <Navbar />
        <CustomCursor />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cofounders" element={<CofoundersPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </ScrollAnimation>
    </div>
  );
}