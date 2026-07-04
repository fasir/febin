import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
    </>
  );
}
