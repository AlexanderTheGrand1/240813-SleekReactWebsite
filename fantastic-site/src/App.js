import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;

