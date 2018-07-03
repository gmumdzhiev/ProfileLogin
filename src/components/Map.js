import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    opacity: 0.8,
    background: 'grey',
    padding: '15px 10px',
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
  static defaultProps = {
    center: {
      lat: 51.21,
      lng: 4.41
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.213376}
            lng={4.416048}
            text={'Georgi Mumdzhiev'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;