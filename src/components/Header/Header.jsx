import React from 'react';
import { useLocation } from 'react-router-dom';
import { nav, policyContent } from '../../consts';
import "./Header.scss";
import Banner from '../Banner/Banner';
import ServiceSection from '../ServiceSection/ServiceSection';
import AboutUsSection from '../AboutUsSection/AboutUsSection';
import WhatWeDoSection from '../WhatWeDoSection/WhatWeDoSection';
import WholesaleVoiceSection from '../WholesaleVoiceSection/WholesaleVoiceSection';
import DIDServicesSection from '../DIDServicesSection/DIDServicesSection';
import SMSServicesSection from '../SMSServicesSection/SMSServicesSection';
import ContactSection from '../ContactSection/ContactSection';

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
    <header id="header" className="header has-sticky sticky-jump" style={{ backgroundColor: "#fff" }}>
      <div className="header-wrapper">
        <div id="masthead" className="header-main">
          <div className="header-inner flex-row container logo-left medium-logo-center" role="navigation">
            <div id="logo" class="flex-col logo">
              <a href="/" title="Offist Telecom LTD" rel="home">
                <img
                  width="200"
                  height="83"
                  src="http://www.devha.com/wp-content/uploads/2023/04/logo.png"
                  class="header_logo header-logo" alt="Offist Telecom LTD"
                />
                <img
                  width="200"
                  height="83"
                  src="http://www.devha.com/wp-content/uploads/2023/04/logo.png"
                  class="header-logo-dark"
                  alt="Offist Telecom LTD"
                />
              </a>
            </div>

            <div className="flex-col show-for-medium flex-left">
              <ul className="mobile-nav nav nav-left">
                <li className="nav-icon has-icon">
                  <div className="header-button">
                    <a
                      href="#"
                      data-open="#main-menu"
                      data-pos="left"
                      data-bg="main-menu-overlay"
                      data-color=""
                      className="icon primary button circle is-small"
                      aria-label="Menu"
                      aria-controls="main-menu"
                      aria-expanded="false"
                    >
                      <div className="menu"></div>
                    </a>
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
                  <li
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344 menu-item-design-default"
                    key={n.id}
                  >
                    {/* <a href={n.to} className="nav-top-link"> */}
                    <a href={isHomePage ? n.to : `/`} className="nav-top-link">
                      {n.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-col show-for-medium flex-right">
              <ul className="mobile-nav nav nav-right">
              </ul>
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

    {isHomePage ? (
      <main id="main">
      <div id="content" role="main" className="content-area">
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
    ) : (
      <main id="main">
      <div id="content" className="content-area page-wrapper" role="main">
        <div className="row row-main">
          <div className="large-12 col">
            <div className="col-inner">

             <h1 style={{ color: "#223268" }}>Privacy Policy</h1>

             <div>
                {policyContent.map((section, index) => {
                  if (section.type === 'header') {
                    const HeaderTag = `h${section.level}`;
                    return <HeaderTag key={index} style={{ fontSize: '18px', lineHeight: '30px', color: "#223268" }}>{section.text}</HeaderTag>;
                  } else if (section.type === 'paragraph') {
                    return <p key={index}>{section.text}</p>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )}
    </>
  );
};

export default Header;
