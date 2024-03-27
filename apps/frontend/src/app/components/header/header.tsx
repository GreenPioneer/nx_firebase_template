import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger_menu from '../../images/dash/hamburger_menu.svg';
import HamburgerNav from '../hamburger-nav/HamburgerNav';
import hankHill from '../../images/dash/Hank_Hill.webp';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
import { useUser } from '../../context/UserContext';
import HeaderLogo from '../logo/HeaderLogo';

import './header.css'

export default function Header() {
  const [error, setError] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error: any) {
      setError(error.message);
    }
  };
  const { user } = useUser();

  return (
    <header className="py-3 lg:bg-black">
      <nav className="relative z-50 flex justify-center w-full">
          <button
            onClick={toggleSidebar}
            className="border-0 bg-transparent px-2 text-xl leading-none Transition-shadow duration-150 ease-in-out lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={hamburger_menu}
              alt="Hamburger Menu"
              className="w-10 h-10"
            />
          </button>
          <div onClick={toggleSidebar} className="lg:hidden">
            <HamburgerNav show={showSidebar} />
          </div>
          <div
            className="header-container"
            id="navbarSupportedContentY"
            data-te-collapse-item
          >

            <div
              className="!visible hidden grow basis-[100%] lg:!flex"
              id="navbarSupportedContentY"
              data-te-collapse-item
            >
              <ul className="unordered-list">
                <li className='li-nav-logo'>
                <NavLink className="block lg:p-0" to="/dashboard">
                    <HeaderLogo />
                  </NavLink>
                </li>
                <li className="li-navlink">
                  <NavLink className="block lg:p-2" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li className="li-navlink">
                  <NavLink className="block lg:p-2" to="/cashflow">
                    Cash Flow
                  </NavLink>
                </li>
                <li className="li-navlink">
                  <NavLink className="block lg:p-2" to="/assets">
                    Assets
                  </NavLink>
                </li>
                <li className="li-navlink">
                  <NavLink className="block lg:p-2" to="/liabilities">
                    Liabilities
                  </NavLink>
                </li>
                <li>
                  <button
                    id="FirstTimeUserBTN"
                    className="header-first-time-user-text"
                  >
                    First Time User?
                  </button>
                </li>
                <li>
                  <img
                    src={hankHill}
                    alt="Frame2"
                    className="header-profile-image"
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer' }}
                  />
                  {dropdownVisible && (
                    <div style={{ position: 'absolute', top: '50px', right: '10px', backgroundColor: 'white', border: '1px solid black' }}>
                      <ul>
                        <NavLink to='signup'>
                          <li>Sign Up</li>
                        </NavLink>
                        <NavLink to="/login">
                          <li>Login</li>
                        </NavLink>
                        <NavLink to='/assets'>
                          <li>Assets</li>
                        </NavLink>
                        <NavLink to='/liabilities'>
                          <li>Liabilities</li>
                        </NavLink>
                        <NavLink to='/cashflow'>
                          <li>Cash Flow</li>
                        </NavLink>
                        <NavLink to='/about'>
                          <li>About</li>
                        </NavLink>
                        <NavLink to='/dashboard'>
                          <li>dashboard</li>
                        </NavLink>

                        <li onClick={handleSignOut}>Logout</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </header>
  );
}

function setError(message: any) {
  throw new Error('Function not implemented.');
}
