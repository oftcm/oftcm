import React from 'react';
import { nav } from '../../consts';

const MainMenu = () => {
  return (
    <div id="main-menu" className="mobile-sidebar no-scrollbar mfp-hide">
      <div className="sidebar-menu no-scrollbar">
        <ul className="nav nav-sidebar nav-vertical nav-uppercase">
          {nav.map(n => (
            <MenuItem
              link={n.to}
              text={n.text}
              key={n.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ link, text }) => {
  return (
    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7344">
      <a href={link}>{text}</a>
    </li>
  );
};

export default MainMenu;
