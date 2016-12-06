import React, { Component } from 'react';
import Photo from './Photo';

const defaultMargin = 7.5

class Triplicate extends Component {
  propTypes: {
    photos: React.PropTypes.array.isRequired,
    margin: React.PropTypes.number,
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
        {photos.map((photo, i) =>
          <Photo width={this.getLandscapeWidth(photos, margin)}
            margin={margin + 'px'} key={'photo-' + i} src={photo} />
        )}
      </div>
    );
  }
}

export default Triplicate;
