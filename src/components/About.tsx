'use client';

import React from 'react';
import { PenTool, Target, Compass, Award, HeartHandshake } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Brand Strategy & Identity', level: '95%' },
    { name: 'Culinary Menu Layout Design', level: '90%' },
    { name: 'Vector Illustration & Graphics', level: '95%' },
    { name: 'Print Production & Editorial layout', level: '85%' },
    { name: 'Packaging & Product Mockups', level: '88%' }
  ];

  return (
    <section id="about" style={{
      padding: '6rem 0',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
      background: 'radial-gradient(circle at 10% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left panel: Info */}
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
              <Compass size={14} />
              About The Creative
            </div>

            <h2 className="subgradient-text" style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1.5rem'
            }}>
              Transforming Ideas Into Immersive Visual Realities
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--fg-secondary)',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              With a primary focus on meticulous vector layouts, typography alignment, and visual hierarchy, I create custom branding materials that make products unforgettable. From tap cards that represent your digital presence to physical food menus that define a dining experience, every pixel counts.
            </p>

            <p style={{
              fontSize: '1rem',
              color: 'var(--fg-secondary)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              My workflow bridges clean digital aesthetics with tangible print layouts, utilizing vector software and color-accurate workflows to ensure that what you see on the screen is exactly what you feel in your hands.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-color-hover)', marginTop: '0.2rem' }}>
                  <PenTool size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.25rem' }}>Precision Vectors</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)' }}>Clean bezier curves and infinitely scalable assets.</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent-color-hover)', marginTop: '0.2rem' }}>
                  <Target size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.25rem' }}>Brand Coherence</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)' }}>Consistent layout systems across digital & print.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Skills */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--fg-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--accent-color-hover)" />
              Design Competencies
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: 'var(--fg-secondary)', marginBottom: '0.5rem' }}>
                    <span>{skill.name}</span>
                    <span style={{ color: 'var(--accent-color-hover)' }}>{skill.level}</span>
                  </div>
                  {/* Progress track */}
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-full)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                    <div style={{
                      width: skill.level,
                      height: '100%',
                      backgroundColor: 'var(--accent-color)',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 0 10px rgba(139,92,246,0.5)'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2.5rem',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--glass-border)'
            }}>
              <HeartHandshake size={32} color="#10b981" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.825rem', color: 'var(--fg-secondary)', lineHeight: 1.4 }}>
                Ready to deliver production-ready print layout, SVG/PDF vectors, and packaged design assets for your brand's physical rollout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
