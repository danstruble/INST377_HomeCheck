import React from 'react';
import Link from 'next/link';
import Burger from './Burger';

const Nav = (props) => (
  <div className='nav-contain'>
    <ul className='nav'>
      <Link href="/">
        <a><li>Home</li></a>
      </Link>
      <Link href="/about">
        <a><li>About</li></a>
      </Link>
      <Link href="/documentation">
        <a><li>Documentation</li></a>
      </Link>
      <Link href="/contact">
        <a><li>Contact Us</li></a>
      </Link>
    </ul>
    <Burger click={props.drawerClickHandler} />
  </div>
);

export default Nav;
