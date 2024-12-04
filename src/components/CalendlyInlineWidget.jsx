import React, { useEffect } from 'react';

const CalendlyInlineWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/nirdriving/45min"
      style={{ minWidth: '320px', height: '700px', margin: '20px auto' }}
    ></div>
  );
};

export default CalendlyInlineWidget;
