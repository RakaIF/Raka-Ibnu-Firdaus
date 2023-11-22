import React from 'react';
import './footerStyle.css';
import Facebook from '../../img/facebook.png';
import Instagram from '../../img/instagram.png';
import Github from '../../img/github.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container bd-grid">
        <div className="footer_social">
          <a href="https://www.facebook.com/karaius" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook Icon" />
          </a>
          <a href="https://github.com/RakaIF" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="Github Icon" />
          </a>
          <a href="https://www.instagram.com/raka.ibnu.f/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram Icon" />
          </a>
        </div>

        <div className="footer_copyright">
          <p>&copy; Raka Ibnu Firdaus @ Copyright 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
