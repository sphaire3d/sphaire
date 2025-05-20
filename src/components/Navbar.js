import React from 'react';  
import { NavLink, useNavigate } from 'react-router-dom';  
import './Navbar.css';  
  
export default function Navbar() {  
  const navigate = useNavigate();  
  const scrollTo = id => {  
    if (window.location.pathname !== '/') {  
      navigate('/');  
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 200);  
    } else {  
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });  
    }  
  };  
  return (  
    <nav className="navbar">  
      <div className="navbar-logo">sphAIre</div>  
      <div className="navbar-links">  
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>  
        <NavLink to="/cofounders" className={({ isActive }) => isActive ? 'active' : ''}>Team</NavLink>  
        <NavLink to="/download" className={({ isActive }) => isActive ? 'active' : ''}>Download</NavLink>  
        <button onClick={() => scrollTo('mvp')}>Demo</button>  
        <button onClick={() => scrollTo('funding')}>Contact</button>  
      </div>  
    </nav>  
  );  
}  