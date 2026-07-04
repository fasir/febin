'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageCircle, MapPin, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'stretch'
        }}>
          {/* Left panel: details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(139, 92, 246, 0.08)',
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
                fontSize: '2.25rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '1.5rem'
              }}>
                Let's Build Something Memorable Together
              </h2>

              <p style={{
                fontSize: '1rem',
                color: 'var(--fg-secondary)',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Whether you need a high-impact menu for a new restaurant venture, tap-card assets for corporate onboarding, or a full company profile deck layout, drop a line. Let's discuss details, specifications, and timelines.
              </p>
            </div>

            {/* Location and Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: '2rem 0' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color-hover)'
                }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--fg-tertiary)' }}>Direct Email</div>
                  <a href="mailto:design@portfolio-creative.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--fg-primary)' }} className="hover-link">
                    design@portfolio-creative.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color-hover)'
                }}>
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--fg-tertiary)' }}>Direct Chat</div>
                  <a href="https://wa.me/#" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#10b981' }} className="hover-link">
                    WhatsApp Message
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color-hover)'
                }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--fg-tertiary)' }}>Based In</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--fg-primary)' }}>
                    Creative Studios, London & Remote
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--fg-tertiary)' }}>
              © {new Date().getFullYear()} Designer Portfolio. All Rights Reserved.
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {isSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                animation: 'scaleIn 0.3s ease-out'
              }}>
                <CheckCircle2 size={56} color="#10b981" />
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>
                    Message Sent Successfully
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--fg-secondary)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
                    Thank you! We've received your request and will get back to you within 24 hours.
                  </p>
                </div>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => setIsSubmitted(false)}
                  style={{ fontSize: '0.85rem', marginTop: '1rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>
                  Project Request Form
                </h3>
                
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-secondary)', marginBottom: '0.5rem' }}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--fg-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-secondary)', marginBottom: '0.5rem' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--fg-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--fg-secondary)', marginBottom: '0.5rem' }}>
                    Brief Project Details
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="What project can we help you craft? List menu items, branding details, envelopes, timelines, etc."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--fg-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={16} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
