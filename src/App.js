import React, { Component } from 'react';
import './App.css';
import VerticalMenu from './components/verticalMenu';
import NavBar from './components/navBar';

// this.props.children is where the child components we declare in our router will be rendered.
class App extends Component {
  render() {
    return (
      <div >
        <NavBar />
        <VerticalMenu />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;