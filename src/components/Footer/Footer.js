import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
      <p>
          © Anh Nguyen
          <span> </span>
          <span>
            Repo Link: {'  '}
              <a className="footer-link" href="https://github.com/anguyen0208/fcc-markdown-previewer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
            </a>
        </span>
      </p>
  </footer>
);

export default Footer;
