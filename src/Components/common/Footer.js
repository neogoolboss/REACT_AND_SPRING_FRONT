import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='color-footer'>
      <div className='footer-logo'>
        <img src={`${process.env.PUBLIC_URL}/images/common/white-logo.png`} alt="로고" />
      </div>
    </footer>
  );
};

export default Footer;
