'use client';

import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  id: string;
  filename: string;
  title: string;
  category: string;
  type: string;
  size: string;
  path: string;
  description: string;
  tags: string[];
}

interface MediaModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function MediaModal({ work, onClose, onPrev, onNext }: MediaModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (work) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [work]);

  // Handle keyboard shortcuts (Esc to close, Arrow keys to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!work) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose, onPrev, onNext]);

  if (!work) return null;

  const isImage = work.type === 'image';
  const isPdf = work.type === 'pdf';
  const isArchive = work.type === 'archive';

  return (
    <div 
      className="modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(9, 9, 11, 0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease-out'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Outer Close Button */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-full)',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--fg-primary)',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
          zIndex: 1010
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-color)';
          e.currentTarget.style.borderColor = 'transparent';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.borderColor = 'var(--glass-border)';
        }}
      >
        <X size={20} />
      </button>

      {/* Navigational Arrows */}
      {onPrev && (
        <button 
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--radius-full)',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--fg-primary)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            zIndex: 1010
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {onNext && (
        <button 
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--glass-border)',
            borderRadius: 'var(--radius-full)',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--fg-primary)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)',
            zIndex: 1010
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'}
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Modal Card */}
      <div 
        className="glass-card modal-card" 
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg)',
          animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          maxHeight: 'inherit'
        }} className="modal-content-wrapper">
          
          {/* Left panel: Media viewer */}
          <div 
            className="modal-media-viewer"
            style={{
              flex: '1.6',
              backgroundColor: '#0c0c0e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              minHeight: '300px',
              maxHeight: 'calc(90vh - 2px)',
              overflow: 'hidden'
            }}
          >
            {isImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={work.path} 
                alt={work.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '1.5rem'
                }}
              />
            ) : isPdf ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                color: 'var(--warning-color)',
                padding: '3.5rem 2rem',
                textAlign: 'center',
                width: '100%',
                background: 'linear-gradient(135deg, rgba(30, 30, 40, 0.6) 0%, rgba(15, 15, 20, 0.9) 100%)',
              }}>
                <div style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(245, 158, 11, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(245, 158, 11, 0.2)'
                }}>
                  <FileText size={48} color="#f59e0b" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>
                    PDF Document
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--fg-secondary)', maxWidth: '400px', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    This is a high-resolution PDF document showcase asset. Click below to view it in an external window.
                  </p>
                  <a 
                    href={work.path} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#f59e0b',
                      borderColor: 'transparent',
                      color: '#000',
                      fontWeight: 700,
                      boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d97706'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                  >
                    View PDF in New Tab <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ) : isArchive ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                color: 'var(--info-color)',
                padding: '3rem 2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(59, 130, 246, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <Download size={48} color="#3b82f6" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>
                    Resource Zip Archive
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--fg-secondary)', maxWidth: '400px', lineHeight: 1.5 }}>
                    This file is a compressed archive containing vector assets, fonts, layouts, and print-ready deliverables. Download it to extract the full contents.
                  </p>
                </div>
              </div>
            ) : (
              <HelpCircle size={64} color="var(--fg-tertiary)" />
            )}
          </div>

          {/* Right panel: Details */}
          <div style={{
            flex: '1',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: '1px solid var(--glass-border)',
            overflowY: 'auto',
            maxHeight: 'inherit',
            backgroundColor: 'rgba(20, 20, 25, 0.4)'
          }} className="modal-details-wrapper">
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--accent-color-hover)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {work.category}
                </span>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--fg-primary)',
                  marginTop: '0.5rem',
                  lineHeight: '1.3'
                }}>
                  {work.title}
                </h2>
              </div>

              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Project Description
                </h4>
                <p style={{ fontSize: '0.925rem', color: 'var(--fg-secondary)', lineHeight: 1.6 }}>
                  {work.description}
                </p>
              </div>

              {/* File Specs */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  File Specifications
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  fontSize: '0.85rem'
                }}>
                  <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                    <div style={{ color: 'var(--fg-tertiary)', fontSize: '0.75rem', marginBottom: '0.15rem' }}>Format</div>
                    <div style={{ fontWeight: 600, color: 'var(--fg-primary)' }}>{work.filename.split('.').pop()?.toUpperCase()} File</div>
                  </div>
                  <div style={{ padding: '0.75rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)' }}>
                    <div style={{ color: 'var(--fg-tertiary)', fontSize: '0.75rem', marginBottom: '0.15rem' }}>Size</div>
                    <div style={{ fontWeight: 600, color: 'var(--fg-primary)' }}>{work.size}</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Tags
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {work.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--fg-primary)',
                        backgroundColor: 'rgba(230, 0, 35, 0.1)',
                        border: '1px solid rgba(230, 0, 35, 0.2)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <a 
                href={work.path} 
                download={work.filename}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Download size={16} />
                Download File
              </a>
              {isPdf && (
                <a 
                  href={work.path} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
