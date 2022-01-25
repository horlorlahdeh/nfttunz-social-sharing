import React, { Fragment, useState } from 'react';
import logo from '../assets/images/logo_color.png';
import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ toggleTheme, theme }) => {
  const [search, setSearch] = useState('');

  const toogleAction = async () => {
    if (!auth.authenticated) {
      isShowLogIn(!isShow);
    } else {
      const answer = window.confirm('Are you sure to log out?');
      if (answer) {
        logout();
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    searchCollectibles(search);
  };

  return (
    <Fragment>
      <nav className='navbar p-0 hide__desktop'>
        <div className='nfttunz__navbar'>
          <a className='navbar-brand nfttunz__navbar__brand' href='/'>
            <Image src={logo} alt='nav logo' width={60} height={60} />
          </a>
          <button
            className='navbar-toggler hide__sm'
            id='nfttunz__navbar__toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#!navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars' style={{ color: '#9CA0A3' }}></i>
          </button>
          <div
            className='nfttunz__navbar__links__wrapper'
            id='navbarSupportedContent'
          >
            <ul className='nfttunz__navbar__links'>
              {/* Fixing activity bug */}
              <li className='nav-item'>
                <Link
                  className='nav-link active'
                  aria-current='page'
                  href='/activity'
                >
                  Activity
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/feed'>
                  Feed
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/market'>
                  Market
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' href='/communities'>
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className='nfttunz__navbar__search__main__wrapper hide__mobile'>
            <form className='d-flex' onSubmit={handleSubmit}>
              <div className='nfttunz__navbar__search__wrapper'>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='nfttunz__navbar__search__input'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn nfttunz__icon' type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </div>
            </form>

            <div className='dropdown nfttunz__login__button margin__left d-flex'>
              <>
                <button className='' onClick={toogleAction}>
                  <span>Login</span>
                </button>
              </>
            </div>
            <div className='nfttunz__notification__wrapper margin__left d-flex'>
              <button onClick={() => toggleTheme('dark')}>
                {theme === 'dark' ? (
                  <i className='fas fa-sun'></i>
                ) : (
                  <i className='fas fa-moon'></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};


export default Navbar;
