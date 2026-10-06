import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreCapabilities from './components/CoreCapabilities';
import ImpactStats from './components/ImpactStats';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Insights from './components/Insights';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'case-studies', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
  );
}
