import React, { useEffect, useRef, useState } from 'react';
import { nav, policyContent } from '../../consts';
import { useLocation, Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import "./Header.scss";
import Banner from '../Banner/Banner';
import ServiceSection from '../ServiceSection/ServiceSection';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import WhatWeDoSection from '../WhatWeDoSection/WhatWeDoSection';
import WholesaleVoiceSection from '../WholesaleVoiceSection/WholesaleVoiceSection';
import DIDServicesSection from '../DIDServicesSection/DIDServicesSection';
import SMSServicesSection from '../SMSServicesSection/SMSServicesSection';
import ContactSection from '../ContactSection/ContactSection';
import MainMenu from '../MainMenu/MainMenu';
import { MainPage } from '../../pages/MainPage/MainPage';
import { PrivacyPolicy } from '../../pages/PrivacyPolicy/PrivacyPolicy';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isPrivacyPage = location.pathname === '/privacy-policy';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
    }
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isHomePage) {
      const hash = location.hash;
      if (hash) {
        scroller.scrollTo(hash.substring(1), {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }
    }
  }, [location, isHomePage]);

  const nav = [
    { id: '1', to: 'about-us', text: 'About Us' },
    { id: '2', to: 'products', text: 'Products' },
    { id: '3', to: 'contact', text: 'Contact' },
  ];

  return (
    <>
      <header id="header" className="header has-sticky sticky-jump" style={{ backgroundColor: "#fff" }}>
        <div className="header-wrapper">
          <div id="masthead" className="header-main">
            <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
              <div id="logo" className="flex-col logo">
                <Link to="/" title="Offist Telecom LTD" rel="home">
                  <img
                    width="200"
                    height="83"
                    src="http://www.devha.com/wp-content/uploads/2023/04/logo.png"
                    className="header_logo header-logo" alt="Offist Telecom LTD"
                  />
                  <img
                    width="200"
                    height="83"
                    src="http://www.devha.com/wp-content/uploads/2023/04/logo.png"
                    className="header-logo-dark"
                    alt="Offist Telecom LTD"
                  />
                </Link>
              </div>

              <div className="flex-col show-for-medium flex-left">
                <ul className="mobile-nav nav nav-left">
                  <li className="nav-icon has-icon">
                    <div className="header-button">
                      <a
                        href="#"
                        onClick={toggleMenu}
                        className="icon primary button circle is-small"
                        aria-label="Menu"
                        aria-controls="main-menu"
                        aria-expanded={isMenuOpen}
                      >
                        <div className="menu"></div>
                      </a>
                      <div ref={menuRef}>
                        <MainMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex-col hide-for-medium flex-left flex-grow">
                <ul className="header-nav header-nav-main nav nav-left nav-divided nav-uppercase">
                </ul>
              </div>

              <div className="flex-col hide-for-medium flex-right">
                <ul className="header-nav header-nav-main nav nav-right nav-divided nav-uppercase">
                {nav.map(n => (
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344 menu-item-design-default" key={n.id}>
                      <Link
                        to={`/#${n.to}`}
                        className="nav-top-link"
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

              <div className="flex-col show-for-medium flex-right">
                <ul className="mobile-nav nav nav-right"></ul>
              </div>
            </div>

            <div className="container">
              <div className="top-divider full-width"></div>
            </div>
          </div>

          <div className="header-bg-container fill">
            <div className="header-bg-image fill"></div>
            <div className="header-bg-color fill"></div>
          </div>
        </div>
      </header>

      {isHomePage && (
        <main id="main">
          <div id="content" role="main" className="content-area">
            <MainMenu />
            <Banner />
            <ServiceSection />
            <div id='about-us'>
              <AboutUsSection />
            </div>
            <div id='products'>
              <WhatWeDoSection />
            </div>
            <WholesaleVoiceSection />
            <DIDServicesSection />
            <SMSServicesSection />
            <div id="contact">
              <ContactSection />
            </div>
          </div>
        </main>
      )}

      {isPrivacyPage && <PrivacyPolicy />}
    </>
  );
};

export default Header;
