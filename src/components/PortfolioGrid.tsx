'use client';

import React, { useState, useMemo } from 'react';
import { Search, Grid, ListFilter, AlertCircle } from 'lucide-react';
import worksData from '../data/works.json';
import WorkCard from './WorkCard';
import MediaModal from './MediaModal';

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

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  // Available categories derived from data
  const categories = useMemo(() => {
    const cats = new Set(worksData.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter items based on active category & search query
  const filteredWorks = useMemo(() => {
    return (worksData as WorkItem[]).filter(work => {
      const matchesCategory = activeCategory === 'All' || work.category === activeCategory;
      const matchesSearch = 
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        work.filename.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group filtered works by category for category-wise view
  const groupedWorks = useMemo(() => {
    const groups: { [key: string]: WorkItem[] } = {};
    
    // Initialize groups for all categories (excluding 'All')
    categories.forEach(cat => {
      if (cat !== 'All') {
        groups[cat] = [];
      }
    });

    // Populate groups with matching filtered items
    filteredWorks.forEach(work => {
      if (groups[work.category]) {
        groups[work.category].push(work);
      } else {
        groups[work.category] = [work];
      }
    });

    // Filter out groups with no items (useful when searching)
    return Object.keys(groups)
      .filter(cat => groups[cat].length > 0)
      .map(cat => ({
        category: cat,
        works: groups[cat]
      }));
  }, [filteredWorks, categories]);

  // Navigate prev/next in modal
  const handlePrev = () => {
    if (!selectedWork) return;
    const currentIndex = filteredWorks.findIndex(w => w.id === selectedWork.id);
    if (currentIndex > 0) {
      setSelectedWork(filteredWorks[currentIndex - 1]);
    } else {
      setSelectedWork(filteredWorks[filteredWorks.length - 1]); // Loop to end
    }
  };

  const handleNext = () => {
    if (!selectedWork) return;
    const currentIndex = filteredWorks.findIndex(w => w.id === selectedWork.id);
    if (currentIndex < filteredWorks.length - 1) {
      setSelectedWork(filteredWorks[currentIndex + 1]);
    } else {
      setSelectedWork(filteredWorks[0]); // Loop to start
    }
  };

  return (
    <section id="showcase" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="subgradient-text" style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Creative Showcase
          </h2>
          <p style={{ color: 'var(--fg-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Browse through our portfolio of custom-crafted logos, marketing collateral, product packaging, and culinary menus.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3rem',
          backgroundColor: 'rgba(24, 24, 27, 0.4)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          backdropFilter: 'blur(var(--glass-blur))'
        }}>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--fg-tertiary)' }}>
                <Search size={18} />
              </span>
              <input 
                type="text" 
                placeholder="Search by title, tag, file format..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--fg-primary)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color var(--transition-fast)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>

            {/* Total count indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--fg-secondary)',
              fontSize: '0.9rem',
              fontWeight: 600
            }}>
              <Grid size={16} color="var(--accent-color-hover)" />
              <span>Showing {filteredWorks.length} of {worksData.length} items</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            paddingTop: '1.25rem',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fg-tertiary)', fontSize: '0.85rem', fontWeight: 700, marginRight: '0.5rem' }}>
              <ListFilter size={14} />
              FILTER BY
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--accent-color)' : 'var(--glass-border)',
                      backgroundColor: isActive ? 'rgba(230, 0, 35, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      color: isActive ? 'var(--accent-color-hover)' : 'var(--fg-secondary)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                        e.currentTarget.style.color = 'var(--fg-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                        e.currentTarget.style.color = 'var(--fg-secondary)';
                      }
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Portfolio Showcase List */}
        {filteredWorks.length > 0 ? (
          <div>
            {activeCategory === 'All' ? (
              /* Grouped category-wise list for 'All' tab */
              groupedWorks.map(({ category, works }) => (
                <div key={category} style={{ marginBottom: '4.5rem' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'var(--fg-primary)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderLeft: '4px solid var(--accent-color)',
                    paddingLeft: '0.75rem'
                  }}>
                    {category}
                    <span style={{ fontSize: '0.85rem', color: 'var(--fg-tertiary)', fontWeight: 500 }}>
                      ({works.length})
                    </span>
                  </h3>
                  
                  <div className="pinterest-grid">
                    {works.map((work) => (
                      <div key={work.id} className="pinterest-card" style={{ animation: 'scaleIn 0.3s ease-out' }}>
                        <WorkCard 
                          work={work} 
                          onClick={(w) => {
                            if (w.type === 'pdf') {
                              window.open(w.path, '_blank');
                            } else {
                              setSelectedWork(w);
                            }
                          }} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Single category Pinterest grid view */
              <div className="pinterest-grid">
                {filteredWorks.map((work) => (
                  <div key={work.id} className="pinterest-card" style={{ animation: 'scaleIn 0.3s ease-out' }}>
                    <WorkCard 
                      work={work} 
                      onClick={(w) => {
                        if (w.type === 'pdf') {
                          window.open(w.path, '_blank');
                        } else {
                          setSelectedWork(w);
                        }
                      }} 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Empty Search/Filter State */
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5rem 2rem',
            textAlign: 'center',
            backgroundColor: 'rgba(24, 24, 27, 0.2)',
            border: '1px dashed var(--glass-border)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <AlertCircle size={40} color="var(--fg-tertiary)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--fg-primary)', marginBottom: '0.5rem' }}>
              No matches found
            </h3>
            <p style={{ color: 'var(--fg-secondary)', fontSize: '0.9rem', maxWidth: '360px', marginBottom: '1.5rem' }}>
              We couldn't find any assets matching "{searchQuery}" under the category "{activeCategory}".
            </p>
            <button 
              className="btn btn-secondary"
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              style={{ fontSize: '0.85rem' }}
            >
              Reset Filters & Search
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedWork && (
        <MediaModal 
          work={selectedWork} 
          onClose={() => setSelectedWork(null)}
          onPrev={filteredWorks.length > 1 ? handlePrev : undefined}
          onNext={filteredWorks.length > 1 ? handleNext : undefined}
        />
      )}
    </section>
  );
}
