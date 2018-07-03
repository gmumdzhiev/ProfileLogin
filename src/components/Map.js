import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pop from '../pages/PopUpMarker';

const Marker = ({ text, onMouseOver, onMouseOut }) => (
  <div onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    style={{
      color: 'white',
      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
      opacity: 0.8,
      background: 'grey',
      padding: '20px 25px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '200%',
      transform: 'translate(-50%, -50%)'
    }}>
    {text}
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false, tooltipText: '' }
  }

  static defaultProps = {
    center: {
      lat: 51.21,
      lng: 4.41
    },
    zoom: 12
  };

  render() {
    const { showTooltip, tooltipText } = this.state;
    const { lat, lng } = this.props;

    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {showTooltip && <p>{tooltipText}</p>}
          <Marker position={{ lat, lng }}
            lat={51.213376}
            lng={4.416048}
            text={'Hover over here'}
            onMouseOver={() => this.setState({ showTooltip: true, tooltipText: <Pop /> })}
            onMouseOut={() => this.setState({ showTooltip: false, })}>
          </Marker>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;