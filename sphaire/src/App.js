import React, { useEffect, useState } from 'react';
import './App.css';
import sphaireLogo from './assets/sphaireLogo.png';
import up from './assets/up.png';
import down from './assets/down.png';
import pranav from './assets/pranav.png';
import kunal from './assets/kunal.png';



function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  return (
    <div className="custom-cursor" style={{ top: position.y, left: position.x }} />
  );
}

const LandingPage = () => {
  return (
    <section id="landing" className="landing animate-on-scroll">
      <div className="parallax-circle circle1" data-speed="0.2"></div>
      <div className="parallax-circle circle2" data-speed="0.5"></div>
      <div className="parallax-circle circle3" data-speed="0.1"></div>
      <div className="logo-container">
        <img src={sphaireLogo} alt="sphAIre Logo" className="sphaire-logo" />
      </div>
      <div className="hero">
        <h1>sphAIre</h1>
        <p>text to tangible</p>
      </div>
    </section>
  );
};

const InfoPage = () => {
  return (
    <section id="info" className="info animate-on-scroll">
      <img src={up} alt="up" className="up" />
      <img src={down} alt="down" className="down" />
      <div className="content">
        <h1>About sphAIre</h1>
        <br/>
        <p>
          Industrial design processes demand constant adjustments to trivial 3D parts, wasting valuable man-hours and delaying production. At sphAIre, we revolutionize this process by harnessing a machine learning generative program that transforms text inputs into detailed, fully customizable 3D models. Our innovative platform uniquely generates models tailored to specific production needs, streamlining design workflows and reducing costly redesign cycles. By automating repetitive tasks and offering robust customization, sphAIre empowers designers to focus on creativity and innovation, ensuring a faster, more efficient industrial design process.
        </p>
      </div>
    </section>
  );
};

const DetailSection = () => {
  const features = [
    {
      title: "3D model generation",
      description: "Generates 3D models from text inputs."
    },
    {
      title: "Full Customizability",
      description: "Capability of executing minute adjustments, allowing complete control over the final output."
    },
    {
      title: "RAG Integration",
      description: "Retrieval Augmented Generation maintains real-time access to the latest data available online."
    },
    {
      title: "Logic-Driven Neural Training",
      description: "Our algorithm leverages a logic-based programming language to train neural networks on 3D models—seamlessly converting designs into Python code for optimized learning." 
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
    <section id="details" className="details animate-on-scroll">
      <div className="details-content">
        <h2>Features & Innovations</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineData = [
    { title: "Model", description: "Creating a neural network model." },
    { title: "Data", description: "Data collection, transformation and retrieval structure." },
    { title: "Testing", description: "Pipeline Set-up & Human Feedback Phase." },
    { title: "Beta Launch", description: "Public Testing Phase." },
    { title: "Final Release", description: "The final product reaches the market." }
  ];
  return (
    <section id="timeline" className="timeline animate-on-scroll">
      <div className="content">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index} style={{ '--i': index }}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CofounderSection = () => {
  return (
    <section id="cofounders" className="cofounders">
      <div className="content">
        <h1>Our Cofounders</h1>
        <div className="cofounders-cards">
          <div className="cofounder-card">
            <div className="cofounder-image-container">
              <img src={pranav} alt="Pranav" />
            </div>
            <h2>Pranav Chahal</h2>
            <p>Cofounder &amp; C.E.O.</p>
            <a href="mailto:pranavchahal@sphaire3d.com" className="contact-button">Contact</a>
          </div>
          <div className="cofounder-card">
            <div className="cofounder-image-container">
              <img src={kunal} alt="Kunal" />
            </div>
            <h3>Kunal Bhardwaj</h3>
            <p>Cofounder &amp; C.O.O.</p>
            <a href="mailto:kunalbhardwaj@sphaire3d.com" className="contact-button">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FundingSection = () => {
  return (
    <section id="funding" className="funding">
      <div className="content">
        <h2>Join Us in Shaping the Future</h2>
        <p>
          At sphAIre, we are actively seeking funding and strategic investments to accelerate our revolutionary approach to 3D design. Your support—whether through investment, mentorship, or partnerships—can help drive innovation and transform the industry. Every contribution matters in our quest to redefine industrial design.
        </p>
        <a href="mailto:info@sphaire3d.com" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer animate-on-scroll">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} sphAIre. All rights reserved.</p>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    // Parallax effect for background circles
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const circles = document.querySelectorAll('.parallax-circle');
      circles.forEach((circle) => {
        const speed = parseFloat(circle.getAttribute('data-speed')) || 0;
        circle.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
   
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.3 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <LandingPage />
      <InfoPage />
      <DetailSection />
      <TimelineSection />
      <CofounderSection />
      <FundingSection />
      <Footer />
    </div>
  );
}

export default App;
