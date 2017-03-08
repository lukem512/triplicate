import React, { Component } from 'react';
import Triplicate from './Triplicate';
import './App.css';

class App extends Component {
  render() {
    /* These are links to your photographs. Note that these can be the
      source strings or object with optional titles and descriptions. */
    const photos = [{
        src: "https://i.imgur.com/qOzvV95.jpg",
        title: "Eucalyptus",
        description: "An *Oceanic* tree in _Kew Gardens_.",
        location: '51.4823816, -0.2891944',
      },
      {
        src: "https://i.imgur.com/57fNtrZ.jpg",
        title: "Oil-bearing",
        description: "*Eucalyptus* oil is famed for it's ability to aid asthma and respiratory illness.",
      },
      {
        src: "https://i.imgur.com/brm3mBl.jpg",
        title: "Red hot",
        description: "Due to it's oils this species is extremely flammable.",
      }];

    return (
      <div className="app">
        {/* This is the title, displayed at the top of the page. */}
        <div className="header">
          <h1 className="title">Trees in Triplicate</h1>
        </div>

        {/* This is the component that displays your photos.
          To create a new row, simply add a new Triplicate element. */}
        <Triplicate photos={photos} height='60vh' timeout={3000} />

        {/* This is displayed beneath your photos. This can be moved if
          desired. */}
        <p className="subtitle">A small collection of photographs of the Eucalyptus.</p>
      </div>
    );
  }
}

export default App;
