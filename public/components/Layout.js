import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Layout = (props) => (
  <div>
    <Header/>
    <div className ='topBar'>
      <div className = 'innerTopBar'>
        <div className = "logoContainer">
          <h1>Home<span>CHECK</span></h1>
        </div>
        <Nav/>
      </div>

    </div>
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
