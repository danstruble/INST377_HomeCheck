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
    const navLinks = document.querySelectorAll('.nav-links li')
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })
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
        <div className="burger">
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
        </div>
      </nav>
    );
  }
}
