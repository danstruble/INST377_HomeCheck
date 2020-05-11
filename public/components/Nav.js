import React from 'react';
import Link from 'next/link';

import HamburgerMenu from 'react-hamburger-menu'

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      open: !this.state.open
    })
    const nav = document.querySelector('.nav')
    nav.classList.toggle('nav-activate')
  }


  render() {
    return (
      <div className='nav-contain' >
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
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    )
  }
}
