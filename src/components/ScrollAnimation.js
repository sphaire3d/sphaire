import React, { useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ children }) => {
  const observerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            // Optional: remove the class when element is not in view
            // entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Get all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right, .scale-in, .rotate-in');
    
    // Store elements and observe them
    elementsRef.current = animatedElements;
    animatedElements.forEach(element => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        elementsRef.current.forEach(element => {
          observerRef.current.unobserve(element);
        });
      }
    };
  }, []);

  return <>{children}</>;
};

export default ScrollAnimation;
