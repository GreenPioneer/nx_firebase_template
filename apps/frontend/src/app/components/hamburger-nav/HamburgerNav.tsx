import React, { useContext } from 'react';
import crystalBall from '../../images/dash/crystal-ball.svg';
import lineList from '../../images/dash/line-md_list-3-filled.svg';
import { Link } from 'react-router-dom';

import './hamburger.css';

interface HamburgerNavProps {
    show: boolean;
  }

const HamburgerNav: React.FC<HamburgerNavProps> = ({ show }) => {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <aside id="FlyoutMenuRoot" className="fly-out-menu-root">
        <div className="ham-trademark-container">
          <div id="W" className="ham-trademark-letter">
            W
          </div>
          <img
            src={lineList}
            alt="lineList"
            id="lineList"
            className="ham-trademark-symbol"
          />
          <div id="L" className="ham-trademark-letter">
            L
          </div>
          <div className="ham-vertical-line">
            "
            <img
              src={crystalBall}
              alt="CrystalBall"
              id="CrystalBall"
              className="ham-crystalball mb-0 mt-1"
            />
          </div>
        </div>
        <div className="link-container">
          <div className="hamburger-link">
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="hamburger-link">
            <Link to="/">Cash Flow</Link>
          </div>
          <div className="hamburger-link">
            <Link to="/assets">Assets</Link>
          </div>
          <div className="hamburger-link">
            <Link to="/">Liabilities</Link>
          </div>
          <div className="hamburger-link">
            <Link to="/">Logout</Link>
          </div>
          <div className="hamburger-link">
            <Link to="/">Settings</Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
export default HamburgerNav;
