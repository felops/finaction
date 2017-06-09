import React, { Component } from 'react';

class Footer extends Component {
  render() {
    var style = {
      position: 'absolute',
      bottom: '0'
    };

    return (
      <div style={style}>
        <p>Copyright - All the rights reserved</p>
      </div>
    );
  }
}

export default Footer;
