import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import styles from "./Map.module.css"

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "600px",
      height: "400px",
    };

    const position = {
      lat: -28.301356875662552,
      lng: -52.79844259213033,
    };

    return (
      <div className={styles.container}>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={position}
        >
          <Marker position={position} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBhbD0vR3D9lPNjK-jYPJzLDh9aFSJNU1Q",
})(MapContainer);
