import React, { Component } from 'react';
import './Photo.css';

class Photo extends Component {
  propTypes: {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height:  React.PropTypes.string,
    margin: React.PropTypes.string,
  }

  render() {
    const {src, width, height, margin} = this.props;
    return (
      <div className="photo">
        <img src={src} role="presentation" style={{
          ...(width ? {width} : null),
          ...(height ? {height} : null),
          ...(margin ? {margin} : null),
        }}/>
      </div>
    );
  }
}

export default Photo;
