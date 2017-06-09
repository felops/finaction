import React, { Component } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class Header extends Component {
  render() {
    return (
      <PageHeader>
        FinAction <small>Your finance in action</small>
      </PageHeader>
    );
  }
}

export default Header;
