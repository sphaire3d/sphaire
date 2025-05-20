import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './ThreeScene.css';

const ThreeScene = ({ scrollPosition }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const spheresRef = useRef([]);
  const frameId = useRef(null);

  // Setup scene
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xff82c3, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x9c4dcc, 1, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // Create floating spheres
    const createSpheres = () => {
      const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
      
      // Create material with custom shader for gradient effect
      const sphereMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color1: { value: new THREE.Color(0xff82c3) },
          color2: { value: new THREE.Color(0x9c4dcc) }
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          
          void main() {
            vec3 color = mix(color1, color2, vUv.y);
            gl_FragColor = vec4(color, 0.7);
          }
        `,
        transparent: true
      });
      
      // Create multiple spheres
      for (let i = 0; i < 15; i++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
        
        // Random positions
        sphere.position.x = (Math.random() - 0.5) * 10;
        sphere.position.y = (Math.random() - 0.5) * 10;
        sphere.position.z = (Math.random() - 0.5) * 5;
        
        // Store animation properties
        sphere.userData = {
          speedX: (Math.random() - 0.5) * 0.01,
          speedY: (Math.random() - 0.5) * 0.01,
          speedZ: (Math.random() - 0.5) * 0.01,
          rotationSpeed: (Math.random() - 0.5) * 0.01
        };
        
        scene.add(sphere);
        spheresRef.current.push(sphere);
      }
    };
    
    createSpheres();
    
    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      // Animate spheres
      spheresRef.current.forEach(sphere => {
        sphere.position.x += sphere.userData.speedX;
        sphere.position.y += sphere.userData.speedY;
        sphere.position.z += sphere.userData.speedZ;
        
        sphere.rotation.x += sphere.userData.rotationSpeed;
        sphere.rotation.y += sphere.userData.rotationSpeed;
        
        // Boundary check and reverse direction if needed
        if (Math.abs(sphere.position.x) > 5) sphere.userData.speedX *= -1;
        if (Math.abs(sphere.position.y) > 5) sphere.userData.speedY *= -1;
        if (Math.abs(sphere.position.z) > 3) sphere.userData.speedZ *= -1;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener('resize', handleResize);
      
      // Store reference to DOM element and spheres to avoid lint warnings
      const mount = mountRef.current;
      const spheres = [...spheresRef.current];
      
      // Remove renderer from DOM
      if (mount && renderer) {
        mount.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      spheres.forEach(sphere => {
        if (sphere && sphere.geometry) sphere.geometry.dispose();
        if (sphere && sphere.material) sphere.material.dispose();
      });
    };
  }, []);
  
  // Update based on scroll position
  useEffect(() => {
    if (!cameraRef.current || !spheresRef.current.length) return;
    
    // Parallax effect on camera
    cameraRef.current.position.y = -scrollPosition * 0.002;
    
    // Affect sphere positions based on scroll
    spheresRef.current.forEach((sphere, index) => {
      const factor = (index % 3 + 1) * 0.0005;
      sphere.position.y += scrollPosition * factor - sphere.userData.lastScroll * factor || 0;
      sphere.userData.lastScroll = scrollPosition;
    });
  }, [scrollPosition]);
  
  return <div className="three-scene" ref={mountRef} />;
};

export default ThreeScene;
