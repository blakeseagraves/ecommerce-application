import React, { Component } from 'react';

import Header from "./header-nav/header";
import Navbar from "./header-nav/navbar";

class Layout extends Component {
  
  render() {
    return (
      <div className='layout'>
        < Header />
        < Navbar />
       
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
