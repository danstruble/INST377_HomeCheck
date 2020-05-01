import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <ul className ='nav'>
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
);

export default Nav;
