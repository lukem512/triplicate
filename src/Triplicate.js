import React, { Component } from 'react';
import Photo from './Photo';

const defaultMargin = 7.5;

class Triplicate extends Component {
  propTypes: {
    photos: React.PropTypes.array.isRequired,
    margin: React.PropTypes.number,
    timeout: React.PropTypes.number,
  }

  getLandscapeWidth(photos, margin) {
    const width = (100 - (margin * photos.length)) / photos.length;
    return width.toFixed(2) + '%';
  }

  render() {
    const photos = this.props.photos || [];
    const margin = this.props.margin || defaultMargin;
    return (
      <div className="triplicate">
        {photos.map((photo, i) => {
          const obj = typeof photo === 'object' ? photo : {src: photo};
          const key = `photo-${i}`;
          return (<Photo width={this.getLandscapeWidth(photos, margin)}
            margin={margin} key={key} timeout={this.props.timeout}
            src={obj.src} title={obj.title} description={obj.description} />);
        })}
      </div>
    );
  }
}

export default Triplicate;
