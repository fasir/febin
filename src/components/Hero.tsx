'use client';

import React from 'react';
import { ArrowDown, FileText, LayoutGrid } from 'lucide-react';

export default function Hero() {
  const scrollToShowcase = () => {
    const element = document.getElementById('showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" style={{
      position: 'relative',
      padding: '7rem 0 5rem 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--glass-border)',
      background: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
    }}>
      {/* Decorative backdrop light */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        top: '-150px',
        left: '-100px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(139, 92, 246, 0.08)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--accent-color-hover)',
            marginBottom: '2rem',
            animation: 'fadeIn 0.6s ease-out'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#10b981',
              borderRadius: 'var(--radius-full)',
              display: 'inline-block'
            }}></span>
            Available for Freelance & Full-time Roles
          </div>

          <h1 className="gradient-text" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            Crafting Premium Brands & Culinary Experiences
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--fg-secondary)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            animation: 'fadeIn 1s ease-out'
          }}>
            A showcase of modern identity design, tap cards, marketing rollups, packaging layouts, and bespoke culinary menus. Elevating digital and print media with clean typography and trend-forward aesthetics.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            animation: 'fadeIn 1.2s ease-out'
          }}>
            <button className="btn btn-primary" onClick={scrollToShowcase}>
              <LayoutGrid size={18} />
              Explore Portfolio
            </button>
            <a 
              className="btn btn-secondary" 
              href="/works/SURENDRAN.pdf" 
              target="_blank" 
              rel="noreferrer"
            >
              <FileText size={18} />
              View Resume (PDF)
            </a>
          </div>

          {/* Metric cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            animation: 'fadeIn 1.4s ease-out'
          }}>
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-color-hover)', marginBottom: '0.25rem' }}>45+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Works</div>
            </div>
            
            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-color-hover)', marginBottom: '0.25rem' }}>4</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Categories</div>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#10b981', marginBottom: '0.25rem' }}>Print & Digital</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Media Deliverables</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bounce scroll-down anchor */}
      <div 
        onClick={scrollToShowcase}
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem',
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
