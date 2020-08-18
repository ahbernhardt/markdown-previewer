import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <span>
      Created by:{' '}
      <a>
        Anh Nguyen
      </a>
    </span>
    <span> | </span>
    <span>
      <a
        className="Footer-link"
        href="https://github.com/anguyen0208/fcc-markdown-previewer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
  </footer>
);

export default Footer;
