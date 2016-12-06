import React, { Component } from 'react';
import Triplicate from './Triplicate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1 className="title">Triplicate</h1>
        </div>
        <Triplicate photos={[
          "https://i.imgur.com/qOzvV95.jpg",
          "https://i.imgur.com/57fNtrZ.jpg",
          "https://i.imgur.com/brm3mBl.jpg",
        ]} />
        <p className="subtitle">A selection of images on the same theme</p>
      </div>
    );
  }
}

export default App;
