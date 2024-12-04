import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import CalendlyInlineWidget from './components/CalendlyInlineWidget';

const App = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);

  const handleScheduleClick = () => {
    setIsWidgetVisible(true); // Show CalendlyInlineWidget
  };

  const handleBackClick = () => {
    setIsWidgetVisible(false); // Return to CTA
  };

  return (
    <>
      <Header />
      {!isWidgetVisible ? (
        <CTA onScheduleClick={handleScheduleClick} />
      ) : (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <CalendlyInlineWidget />
          <button
            onClick={handleBackClick}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#FF6347',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
        </div>
      )}
      <About />
      <FAQ />
      <Contact />
    </>
  );
};

export default App;
