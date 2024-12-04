import React from 'react';
import logo from '../assets/logo.png'; // Path to the logo image

const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#007BFF', color: '#fff' }}>
      <img src={logo} alt="Driving Assistance Logo" style={{ maxWidth: '150px', marginBottom: '10px' }} />
      <h1>בטחון בנהיגה מתחיל כאן</h1>
      <p>ליווי אישי לנהגים חדשים ומנוסים, לבניית בטחון ומיומנויות בכביש</p>
    </header>
  );
};

export default Header;
