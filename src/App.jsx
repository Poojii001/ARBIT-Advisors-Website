import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreCapabilities from './components/CoreCapabilities';
import ImpactStats from './components/ImpactStats';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'services', 'impact', 'about', 'case-studies', 'testimonials', 'insights', 'contact'];
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'impact') {
            setActiveSection('services');
          } else if (id === 'testimonials') {
            setActiveSection('case-studies');
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
        {/* Top Navbar */}
        <Navbar
          activeSection={activeSection}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Main Content Flow */}
        <main style={{ flex: 1 }}>
          {/* Hero Section */}
          <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Core Capabilities (01 Brand PR, 02 Media Relations, 03 Strategic Advisory) */}
          <CoreCapabilities onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Impact Section (150+ Campaigns, 500M+ Reach, 95% Trust) */}
          <ImpactStats />

          {/* About Section */}
          <About onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Case Studies Section */}
          <CaseStudies />

          {/* Strategic Leadership Testimonials */}
          <Testimonials />

          {/* Insights & Analysis Section */}
          <Insights />
        </main>

        {/* Footer Section */}
        <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Interactive Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

