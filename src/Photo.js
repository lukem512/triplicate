import React from 'react';
import './Photo.css';

const defaultTimeout = 3000;

const Photo = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height:  React.PropTypes.string,
    margin: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    blurbTimeout: React.PropTypes.number,
  },

  getInitialState() {
    return {
      showBlurb: false,
    };
  },

  renderOverlay() {
    const {title, description, margin} = this.props;

    // Retrieve position from element
    const rect = this.img.getBoundingClientRect();
    const top = rect.top;
    const left = rect.left;
    const opacity = this.state.showBlurb ? 0.8 : 0;

    // Retrieve bounds and deduct 2 for the border
    const width = rect.width - margin - 2;
    const maxHeight = rect.height - margin - 2;

    return (
      <div className="blurb" style={{top, left, width, opacity, maxHeight}}>
        {title && <h1 className="photo-title">{title}</h1>}
        {description && <p className="photo-description">{description}</p>}
      </div>
    );
  },

  render() {
    const {src, width, height, margin, title, description} = this.props;
    const clickable = title || description;

    return (
      <div className="photo"
        style={{...(clickable && {cursor: 'pointer'})}}
        onClick={() => this.handleToggleBlurb()}>
        <img src={src} role="presentation" ref={(a) => { this.img = a; }}
          style={{
            ...(width ? {width} : null),
            ...(height ? {height} : null),
            ...(margin ? {margin: margin + 'px'} : null),
          }} />
        {clickable && this.img && this.renderOverlay()}
      </div>
    );
  },

  handleCloseBlurb(expectedTappedAt) {
    if (expectedTappedAt === this.state.tappedAt && this.state.showBlurb) {
      this.handleToggleBlurb();
    }
  },

  handleToggleBlurb() {
    const tappedAt = new Date();
    const showBlurb = !this.state.showBlurb;

    this.setState({
      showBlurb,
      tappedAt,
    });

    if (showBlurb) {
      window.setTimeout(() => {
        return ((d) => this.handleCloseBlurb(d))(tappedAt);
      }, this.props.blurbTimeout || defaultTimeout);
    }
  }
});

export default Photo;
