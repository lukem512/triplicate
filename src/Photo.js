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
    timeout: React.PropTypes.number,
  },

  getInitialState() {
    return {
      showBlurb: false,
    };
  },

  renderOverlay() {
    const {title, description, margin = 0} = this.props;

    // Display empty div for initial transition
    if (!this.img) {
      return (<div className="blurb" style={{opacity: 0}} />);
    }

    // Retrieve positions from element and document
    const rect = this.img.getBoundingClientRect();
    const body = document.body.getBoundingClientRect();

    // Compute offsets
    const top = rect.top - body.top;
    const left = rect.left - body.left;
    const opacity = this.state.showBlurb ? 0.8 : 0;

    // Retrieve bounds and deduct 2 for the border, 10 for the padding
    const width = rect.width - margin - 2;
    const maxHeight = rect.height - margin - 2 - 10;

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
        {clickable && this.renderOverlay()}
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
      }, this.props.timeout || defaultTimeout);
    }
  }
});

export default Photo;
