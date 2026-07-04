'use client';

import React from 'react';
import { Mail, MessageCircle, MapPin, Sparkles, ExternalLink } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" style={{ 
      padding: '8rem 0 6rem 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 90%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)'
    }}>
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        bottom: '-100px',
        left: 'calc(50% - 150px)',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(139, 92, 246, 0.15)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(139, 92, 246, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--accent-color-hover)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={14} />
            Get In Touch
          </div>

          <h2 className="subgradient-text" style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Let's Build Something Memorable Together
          </h2>
          <p style={{ color: 'var(--fg-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Whether you need a high-impact menu for a new restaurant, tap-card assets for onboarding, or a premium brand identity, let's discuss details.
          </p>
        </div>

        {/* Restructured Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          
          {/* Card 1: Email */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-color-hover)'
            }}>
              <Mail size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>Direct Email</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)', marginBottom: '0.75rem' }}>For inquiries, collaborations, & contracts</p>
              <a href="mailto:febinaliyeh@gmail.com" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg-primary)', textDecoration: 'none' }} className="hover-link">
                febinaliyeh@gmail.com
              </a>
            </div>
            <a 
              href="mailto:febinaliyeh@gmail.com" 
              className="btn btn-secondary" 
              style={{ width: '100%', marginTop: 'auto', fontSize: '0.85rem' }}
            >
              Email Me <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 2: WhatsApp / Call */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981'
            }}>
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>Direct Chat / Call</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)', marginBottom: '0.75rem' }}>Fast responses & scheduling calls</p>
              <a href="https://wa.me/918137033081" target="_blank" rel="noreferrer" style={{ fontSize: '1rem', fontWeight: 600, color: '#10b981', textDecoration: 'none' }} className="hover-link">
                +91 8137033081
              </a>
            </div>
            <a 
              href="https://wa.me/918137033081" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: 'auto', backgroundColor: '#10b981', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)', border: 'none', fontSize: '0.85rem' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
            >
              WhatsApp Message <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="glass-card" style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            transition: 'transform var(--transition-normal), border-color var(--transition-normal)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-color-hover)'
            }}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>Based In</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)', marginBottom: '0.75rem' }}>Open for remote & hybrid roles globally</p>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg-primary)' }}>
                Calicut, Kerala, India & Remote
              </span>
            </div>
            <div style={{ 
              width: '100%', 
              marginTop: 'auto', 
              fontSize: '0.8rem', 
              color: 'var(--fg-tertiary)',
              padding: '0.75rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--glass-border)'
            }}>
              UTC+05:30 Timezone
            </div>
          </div>

        </div>

        {/* Footer Section */}
        <div style={{ 
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)' }}>
            © {new Date().getFullYear()} FEBIN ALI. All Rights Reserved.
          </div>
          
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              style={{
                color: 'var(--fg-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-secondary)'}
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              style={{
                color: 'var(--fg-secondary)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fg-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-secondary)'}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
