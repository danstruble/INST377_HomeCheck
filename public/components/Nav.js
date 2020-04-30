import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <ul>
    <Link href="/">
      <a><li>Home</li></a>
    </Link>
    <Link href="/about">
      <a><li>About</li></a>
    </Link>
    <Link href="/documentation">
      <a><li>Documentation</li></a>
    </Link>

  </ul>
);

export default Nav;
