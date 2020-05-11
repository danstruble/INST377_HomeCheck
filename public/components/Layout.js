import React from "react";
import Header from "./Header";
import Nav from "./Nav";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
