import React from 'react';
import Link from 'next/link';


const SideDrawer = (props) => {

  let drawerClasses = 'nav';
  if (props.show) {

    drawerClasses = 'nav-activate';

  }
  return (
    <nav className ="side-drawer">
      <ul className={drawerClasses}>
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
    </nav>
  )

};

export default SideDrawer;