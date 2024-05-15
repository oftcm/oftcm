import React from 'react';
import { useLocation } from 'react-router-dom';
import { nav } from '../../consts';
import "./Header.scss";

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
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
                    <a href={isHomePage ? n.to : `/home${n.to}`} className="nav-top-link">
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
  );
};

export default Header;
