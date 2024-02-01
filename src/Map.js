import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetLocation = this.resetLocation.bind(this);
    this.cancel = this.cancel.bind(this);
    this.synchro = this.synchro.bind(this);
  }

  handleClick(e) {
    this.setState({ lat: e.latlng?.lat, lng: e.latlng?.lng });
  }
  resetLocation() {
    this.setState({ lat: "", lng: "" });
  }
  synchro() {
    console.log("synchro");
  }
  cancel() {
    console.log("cancel");
  }

  render() {
    return (
      <div>
        <label>latitude</label>
        <input type="text" value={this.state.lat} />
        <label>longitue</label>
        <input type="text" value={this.state.lng} />
        <input
          onClick={this.resetLocation}
          type="submit"
          value="reset to default country geolocation"
        />

        <Map
          center={this.props.center}
          zoom={this.props.zoom}
          onClick={this.handleClick}
        >
          <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        </Map>
      </div>
    );
  }
}

export default MapExample;
