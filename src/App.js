// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import BenefitsSection from './components/BenefitsSection';
import VideoSection from './components/VideoSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import StatisticsSection from './components/StatisticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TimelineSection from './components/TimelineSection';



// Import các component khác khi cần

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TargetAudience />
      <BenefitsSection />
      <TimelineSection />
      <VideoSection />
      <PricingSection />
      <FAQSection />
      <StatisticsSection />
      <TestimonialsSection />


      {/* Thêm các component khác ở đây */}
    </>
  );
}

export default App;
