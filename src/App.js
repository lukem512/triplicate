import React, { Component } from 'react';
import Triplicate from './Triplicate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* This is the title, displayed at the top of the page. */}
        <div className="header">
          <h1 className="title">Triplicate</h1>
        </div>

        {/* These are links to your photographs. To create a new row,
          simply add a new Triplicate element. */}
        <Triplicate photos={[
          "https://i.imgur.com/qOzvV95.jpg",
          "https://i.imgur.com/57fNtrZ.jpg",
          "https://i.imgur.com/brm3mBl.jpg",
        ]} />

        {/* This is displayed beneath your photos. */}
        <p className="subtitle">A selection of images on the same theme</p>
      </div>
    );
  }
}

export default App;
