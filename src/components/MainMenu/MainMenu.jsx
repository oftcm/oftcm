import React from 'react';
import { nav } from '../../consts';
import "./MainMenu.scss";
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const MainMenu = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const nav = [
    { id: '1', to: 'about-us', text: 'About Us' },
    { id: '2', to: 'products', text: 'Products' },
    { id: '3', to: 'contact', text: 'Contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    toggleMenu();
    if (isHomePage) {
      scroller.scrollTo(link, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div id="main-menu" className={`main-menu ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-menu no-scrollbar">
        <ul className="nav nav-sidebar nav-vertical nav-uppercase">
          {nav.map(n => (
            <MenuItem
              link={n.to}
              text={n.text}
              key={n.id}
              onClick={(e) => handleLinkClick(e, n.to)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ link, text, onClick }) => {
  return (
    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344">
      <Link to={`/#${link}`} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
};

export default MainMenu;
