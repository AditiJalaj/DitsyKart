import React from 'react';
import { BiSearch, BiUserCircle, BiHeart, BiCart } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';

import Logo from '../../assets/logo/ditsy_logo.svg';
import * as styles from './styles';

function Navigation(props) {
  return (
    <>
      <nav className='navbar' style={styles.navbar}>
        <a className='link' href='/'>
          <img className='navbar-logo' src={Logo} />
        </a>
        <div className='navbar-actions'>
          <span>MEN</span>
          <span>WOMEN</span>
          <span>BRAND</span>
          <span>JUST IN</span>
          <span>
            <strong>SALE</strong>
          </span>
        </div>
        <button className='default-btn'>
          <BiSearch />
        </button>
        <div className='navbar-user-options'>
          <button className='default-btn'>
            <BiUserCircle />
          </button>
          <button className='default-btn'>
            <BiHeart />
          </button>
          <button className='default-btn'>
            <GrNotification />
          </button>
          <button className='default-btn'>
            <BiCart />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
