'use client';

import React from 'react';
import { FileText, FileArchive, Eye, Download, FileImage } from 'lucide-react';

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

interface WorkCardProps {
  work: WorkItem;
  onClick: (work: WorkItem) => void;
}

export default function WorkCard({ work, onClick }: WorkCardProps) {
  const isImage = work.type === 'image';
  const isPdf = work.type === 'pdf';
  const isArchive = work.type === 'archive';

  return (
    <div 
      className="glass-card" 
      onClick={() => onClick(work)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(139, 92, 246, 0.15)';
        const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
        const overlay = e.currentTarget.querySelector('.card-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = '0';
      }}
    >
      {/* Card Visual Preview */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        backgroundColor: '#121214',
        borderBottom: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {isImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={work.path} 
            alt={work.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--transition-slow)'
            }}
            loading="lazy"
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const placeholder = parent.querySelector('.fallback-icon') as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }
            }}
          />
        ) : null}

        {/* Fallback & Non-image placeholders */}
        <div 
          className="fallback-icon"
          style={{
            display: isImage ? 'none' : 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            color: isPdf ? 'var(--warning-color)' : isArchive ? 'var(--info-color)' : 'var(--fg-tertiary)',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(30, 30, 40, 0.5) 0%, rgba(15, 15, 20, 0.8) 100%)',
            padding: '1.5rem',
            textAlign: 'center'
          }}
        >
          {isPdf ? (
            <FileText size={48} color="#f59e0b" />
          ) : isArchive ? (
            <FileArchive size={48} color="#3b82f6" />
          ) : (
            <FileImage size={48} color="#71717a" />
          )}
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--fg-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isPdf ? 'PDF document' : isArchive ? 'ZIP Archive' : 'Image Work'}
          </span>
        </div>

        {/* Hover action overlay */}
        <div 
          className="card-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(9, 9, 11, 0.6)',
            backdropFilter: 'blur(4px)',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity var(--transition-fast)',
            zIndex: 2
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-color)',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.85rem',
            boxShadow: '0 4px 10px rgba(139, 92, 246, 0.4)'
          }}>
            {isArchive ? <Download size={16} /> : <Eye size={16} />}
            {isArchive ? 'Download ZIP' : isPdf ? 'Read PDF' : 'Quick Preview'}
          </div>
        </div>
      </div>

      {/* Card Info Details */}
      <div style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: 'var(--accent-color-hover)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {work.category}
          </span>
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--fg-tertiary)',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--glass-border)'
          }}>
            {work.size}
          </span>
        </div>

        <h3 style={{
          fontSize: '1rem',
          fontWeight: 700,
          lineHeight: '1.4',
          color: 'var(--fg-primary)',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          wordBreak: 'break-all'
        }}>
          {work.title}
        </h3>

        <p style={{
          fontSize: '0.825rem',
          color: 'var(--fg-secondary)',
          lineHeight: '1.5',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          flexGrow: 1
        }}>
          {work.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
          {work.tags.map((tag, i) => (
            <span 
              key={i} 
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'var(--fg-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '0.15rem 0.4rem',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
