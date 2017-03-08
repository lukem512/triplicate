import React from 'react';
import parse from './simplemd';
import './Photo.css';

const defaultTimeout = 3000;
const minIconWidth = 12;
const animTime = 400;

const Photo = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
    width: React.PropTypes.string,
    height:  React.PropTypes.string,
    margin: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    location: React.PropTypes.string,
    timeout: React.PropTypes.number,
  },

  getInitialState() {
    return {
      showBlurb: false,
    };
  },

  renderLocation(width = '12px') {
    return (<a target="_blank" className="location"
      onClick={this.handleTapLocation}>
      <img src="./location.png" style={{width}} alt="Show location" />
    </a>);
  },

  renderOverlay() {
    const {title, description, location, margin = 0} = this.props;

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

    const fivePercent = Math.ceil(width / 20);
    const iconWidth = Math.max(fivePercent, minIconWidth);

    return (
      <div className="blurb" style={{top, left, width, opacity, maxHeight}}>
        {title && <h1 className="photo-title"
        dangerouslySetInnerHTML={{__html: parse(title)}}/>}
        {description && <p className="photo-description"
          dangerouslySetInnerHTML={{__html: parse(description)}} />}
        {location &&
          this.renderLocation(iconWidth + 'px')}
      </div>
    );
  },

  render() {
    const {src, width, height, margin, title, description} = this.props;
    const clickable = title || description;

    return (
      <div className="photo">
        <img className="img" src={src} alt={title || ''} role="presentation"
          ref={(a) => { this.img = a; }}
          style={{
            ...(width && {width}),
            ...(height && {height}),
            ...(margin && {margin: margin + 'px'}),
            ...(clickable && {cursor: 'pointer'})
          }}
          onClick={() => this.handleToggleBlurb()}/>
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
  },

  handleTapLocation() {
    const latlong = this.props.location.replace(/\s/g, '');
    const link = 'https://www.google.com/maps/@' + latlong + ',15z';

    const isFinishedAnimating = (new Date() - this.state.tappedAt) > animTime;
    if (this.state.showBlurb && isFinishedAnimating) {
      window.open(link, '_blank');
    }
  }
});

export default Photo;
