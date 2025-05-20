import React, { useRef, useEffect } from 'react';  
  
export default function VideoSection() {  
  const videoRef = useRef();  
  useEffect(() => {  
    const obs = new IntersectionObserver(  
      ([entry]) => {  
        if (entry.isIntersecting) {  
          videoRef.current.play().catch(() => {});  
        } else {  
          videoRef.current.pause();  
        }  
      },  
      { threshold: 0.5 }  
    );  
    if (videoRef.current) obs.observe(videoRef.current);  
    return () => obs.disconnect();  
  }, []);  
  
  return (  
    <section className="video-section animate-on-scroll" id="mvp">  
      <div className="video-text">  
        <h2>See sphAIre in Action</h2>  
        <p>Watch our 3D MVP transform text into detailed models in real time.</p>  
      </div>  
      <div className="video-card">  
        <video  
          ref={videoRef}  
          src={require('../assets/sphaire.mp4')}  
          muted  
          playsInline  
        />  
      </div>  
    </section>  
  );  
}  