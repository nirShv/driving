import React from 'react';
import { FaLink } from 'react-icons/fa';

const Contact = () => {
  return (
    <section style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', direction: 'rtl' }}>
      <h2>פרטי יצירת קשר</h2>
      <p><strong>אימייל:</strong> <a href="mailto:Nir1shv@gmail.com">Nir1shv@gmail.com</a></p>
      <p><strong>טלפון:</strong> <a onClick={() => window.open('https://wa.me/972556895816?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D')}>055-6895816 </a></p>
      <p><strong>איזור שירות:</strong> <span style={{ fontWeight: 'bold', color: '#007BFF' }}>צפון תל אביב</span></p>
    </section>
  );
};

export default Contact;
