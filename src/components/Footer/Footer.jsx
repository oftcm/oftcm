import React from 'react';
import { nav } from '../../consts';
import "./Footer.scss";
import { useLocation, Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';

const Footer = () => {
  const handleBackToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <footer id="footer" className="footer-wrapper">
      <div className="absolute-footer dark medium-text-center small-text-center">
        <div className="container clearfix">
          <FooterSecondary />
          <FooterPrimary />
        </div>
      </div>
      <button
        className="back-to-top button icon invert plain fixed bottom z-1 is-outline hide-for-medium circle"
        id="top-link"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleBackToTop}
      >
        <div className="icon__footer"></div>
      </button>
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

  const nav = [
    { id: '1', to: 'about-us', text: 'About Us' },
    { id: '2', to: 'products', text: 'Products' },
    { id: '3', to: 'contact', text: 'Contact' },
  ];

  return (
    <div className="footer-primary pull-left">
      <div className="menu-ust-container">
        <ul id="menu-ust-1" className="links footer-nav uppercase">
          {nav.map(n => (
            <li
              className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344"
              key={n.id}
            >
              <Link
                to={`/#${n.to}`}
                onClick={() => {
                  if (isHomePage) {
                    scroller.scrollTo(n.to, {
                      duration: 800,
                      delay: 0,
                      smooth: 'easeInOutQuart',
                    });
                  }
                }}
              >
                {n.text}
              </Link>
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
