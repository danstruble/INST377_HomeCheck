import React from 'react';
import Header from './Header';
import Nav from './Nav';



class Layout extends React.Component {

  constructor(props) {

    super(props);

  };




  render() {

    return (
      <div>
        <Header />
        <div className='top-bar'>
          <div className='inner-topbar'>
            <div className="logo-container">
              <h1>Home<span>CHECK</span></h1>
            </div>
            <Nav />
          </div>

        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );

  }

}

export default Layout;
