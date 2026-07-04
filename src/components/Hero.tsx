'use client';

import React from 'react';
import { ArrowDown, LayoutGrid, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '9rem 0 6rem 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--glass-border)',
      background: 'radial-gradient(circle at 80% 20%, rgba(230, 0, 35, 0.15) 0%, transparent 60%)'
    }}>
      {/* Decorative backdrop light */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        top: '-200px',
        left: '-150px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(230, 0, 35, 0.12)',
        filter: 'blur(120px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        bottom: '-50px',
        right: '10%',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(16, 185, 129, 0.06)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Greeting Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(230, 0, 35, 0.08)',
            border: '1px solid rgba(230, 0, 35, 0.2)',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: 'var(--accent-color-hover)',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px rgba(230, 0, 35, 0.05)',
            animation: 'fadeIn 0.6s ease-out'
          }}>
            <Sparkles size={14} color="var(--accent-color-hover)" />
            <span>Hi, I'm Febin Ali 👋 UX/UI Designer & Front-End Developer</span>
          </div>

          {/* Headline */}
          <h1 className="gradient-text" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            Crafting Premium Brands & Digital Experiences
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--fg-secondary)',
            lineHeight: 1.65,
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            animation: 'fadeIn 1s ease-out'
          }}>
            Specializing in high-performance digital products, pixel-perfect user interfaces, vector branding identity materials, packaging design, and bespoke culinary layouts.
          </p>

          {/* Call to Actions */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4.5rem',
            animation: 'fadeIn 1.2s ease-out'
          }}>
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('showcase')}
              style={{ padding: '0.85rem 1.75rem' }}
            >
              <LayoutGrid size={18} />
              Explore Portfolio
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
              style={{ padding: '0.85rem 1.75rem' }}
            >
              <MessageSquare size={18} />
              Get In Touch
            </button>
          </div>

          {/* Metric cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            animation: 'fadeIn 1.4s ease-out'
          }}>
            <div className="glass-card" style={{ 
              padding: '1.75rem', 
              textAlign: 'center',
              transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 35, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color-hover)', marginBottom: '0.25rem' }}>45+</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--fg-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Works</div>
            </div>

            <div className="glass-card" style={{ 
              padding: '1.75rem', 
              textAlign: 'center',
              transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(230, 0, 35, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color-hover)', marginBottom: '0.25rem' }}>2+ Years</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--fg-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Industry Experience</div>
            </div>

            <div className="glass-card" style={{ 
              padding: '1.75rem', 
              textAlign: 'center',
              transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981', marginBottom: '0.25rem' }}>100%</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--fg-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pixel-Perfect Quality</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bounce scroll-down anchor */}
      <div
        onClick={() => scrollToSection('showcase')}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.5rem',
          cursor: 'pointer',
          color: 'var(--fg-tertiary)',
          transition: 'color var(--transition-fast)',
          animation: 'fadeIn 1.6s ease-out'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg-primary)'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-tertiary)'}
      >
        <ArrowDown style={{ animation: 'pulseGlow 2s infinite ease-in-out' }} />
      </div>
    </section>
  );
}
