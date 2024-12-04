import React from 'react';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa'; // Icons for WhatsApp and Calendar

const CTA = ({ onScheduleClick }) => {
  return (
    <section style={{ padding: '20px', textAlign: 'center', direction: 'rtl' }}>
      <h2>קבעו ליווי נהיגה עוד היום</h2>
      <div style={{ display: 'inline-flex', gap: '10px', marginTop: '20px' }}>
        {/* Schedule Button */}
        <button
          onClick={onScheduleClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <FaCalendarAlt size={20} /> {/* Calendar icon */}
          קבעו ליווי
        </button>

        {/* WhatsApp Contact Button */}
        <button
          onClick={() => window.open('https://wa.me/972556895816?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '10px 20px',
            backgroundColor: '#25D366',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          <FaWhatsapp size={20} /> {/* WhatsApp icon */}
          צור קשר
        </button>
      </div>
    </section>
  );
};

export default CTA;
