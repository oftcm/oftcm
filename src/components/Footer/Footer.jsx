import React from 'react';
import { nav } from '../../consts';
import "./Footer.scss";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer-wrapper">
      <div className="absolute-footer dark medium-text-center small-text-center">
        <div className="container clearfix">
          <FooterSecondary />
          <FooterPrimary />
        </div>
      </div>
      <a 
        href="#top" 
        className="back-to-top button icon invert plain fixed bottom z-1 is-outline hide-for-medium circle" 
        id="top-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="icon__footer"></div>
      </a>
    </footer>
  );
};

const FooterSecondary = () => {
  return (
    <div className="footer-secondary pull-right">
      <div className="footer-text inline-block small-block">
        <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>
      </div>
    </div>
  );
};

const FooterPrimary = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="footer-primary pull-left">
      <div className="menu-ust-container">
        <ul id="menu-ust-1" className="links footer-nav uppercase">
          {nav.map(n => (
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344"
              key={n.id}
            >
              <a href={isHomePage ? n.to : `home${n.to}`}>{n.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="copyright-footer">
        Copyright 2024 © <strong>OffistTelecom</strong>
      </div>
    </div>
  );
};

export default Footer;
