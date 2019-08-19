
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="mukaportes-responsive-wrapper">{this.props.children}</div>
    );
  }
}

export default Footer;
