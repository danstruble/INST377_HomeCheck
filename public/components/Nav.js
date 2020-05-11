import React from "react";
import Link from "next/link";
import HamburgerMenu from "react-hamburger-menu";

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
    });
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <h1>
            Home<span>CHECK</span>
          </h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/documentation">Documentation</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <HamburgerMenu
          isOpen={this.state.open}
          menuClicked={this.handleClick}
          width={25}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </nav>
    );
  }
}
