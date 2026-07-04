'use client';

import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="container nav-container">
        <div className="logo cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
          <Sparkles className="text-violet-500" size={24} color="#8b5cf6" />
          <span>PORTFOLIO</span>
          <span className="logo-dot"></span>
        </div>
        
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#showcase" onClick={(e) => { e.preventDefault(); scrollToSection('showcase'); }}>
                Works
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                About & Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
            style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            <MessageSquare size={16} />
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
}
