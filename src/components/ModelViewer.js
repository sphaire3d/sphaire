import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './ModelViewer.css';

const ModelViewer = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const frameId = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      1, // We'll update this with the container's aspect ratio
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setClearColor(0x000000, 0);
    
    // Get container dimensions
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    mountRef.current.appendChild(renderer.domElement);
    
    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xff82c3, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x9c4dcc, 1, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // Create a 3D model - we'll use a torus knot as a placeholder for a downloadable 3D model
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    
    // Create material with custom shader for gradient effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0xff82c3) },
        color2: { value: new THREE.Color(0x9c4dcc) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
          // Create a pulsing effect
          float pulse = sin(time * 2.0) * 0.5 + 0.5;
          
          // Create a gradient based on position and time
          vec3 color = mix(color1, color2, vUv.x * sin(time) + vUv.y * cos(time));
          
          // Add some shimmer
          float shimmer = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time) * 0.1;
          
          gl_FragColor = vec4(color + shimmer, 0.9);
        }
      `,
      transparent: true
    });
    
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);
    
    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.time.value = elapsedTime;
      
      // Rotate the model
      torusKnot.rotation.x = elapsedTime * 0.3;
      torusKnot.rotation.y = elapsedTime * 0.5;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener('resize', handleResize);
      
      // Store reference to DOM element to avoid lint warnings
      const mount = mountRef.current;
      
      // Remove renderer from DOM
      if (mount && renderer) {
        mount.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      
      if (controls) controls.dispose();
    };
  }, []);
  
  return (
    <div className="model-viewer-container">
      <div className="model-viewer" ref={mountRef}></div>
      <div className="model-info">
        <h3>Interactive 3D Preview</h3>
        <p>Drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default ModelViewer;
