import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        <h3 style={{marginTop: 0 + 'px'}}>{this.props.title}</h3>
        <p>Content</p>
      </div>
    );
  }
}

export default Content;
