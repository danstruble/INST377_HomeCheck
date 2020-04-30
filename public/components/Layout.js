import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Layout = (props) => (
  <div>
    <Header/>
    <Nav/>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
