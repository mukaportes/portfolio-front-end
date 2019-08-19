import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';

// this.props.children is where the child components we declare in our router will be rendered.
class App extends Component {
  render() {
    return (
      <div >
          <NavBar />
          <div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;