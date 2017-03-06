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

        {/* These are links to your photographs. Note that these can be the
          source strings or object with optional titles and descriptions.
          To create a new row, simply add a new Triplicate element. */}
        <Triplicate photos={[
          {
            src: "https://i.imgur.com/qOzvV95.jpg",
            title: "Eucalyptus",
            description: "An Oceanic tree in Kew Gardens",
          },
          "https://i.imgur.com/57fNtrZ.jpg",
          "https://i.imgur.com/brm3mBl.jpg",
        ]} />

        {/* This is displayed beneath your photos. This can be moved if
          desired. */}
        <p className="subtitle">A selection of images on the same theme</p>
      </div>
    );
  }
}

export default App;
