import React, {Component} from 'react';
import Header from './Header';
import Nav from './Nav';
import SideDrawer from './SideDrawer';
import Burger from './Burger';


class Layout extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);


  }


  drawerToggleClickHandler = () => {

    this.setState({
      sideDrawerOpen: !this.state.sideDrawerOpen
    });

  };

  renderSideBar = () => (this.state.sideDrawerOpen ? <SideDrawer /> : null)


  render() {

    return (
      <div>
        <Header />
        <div className='top-bar'>
          <div className='inner-topbar'>
            <div className="logo-container">
              <h1>Home<span>CHECK</span></h1>
            </div>
            <Nav drawerToggleClickHandler={this.drawerToggleClickHandler} />
            {this.renderSideBar()}
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
