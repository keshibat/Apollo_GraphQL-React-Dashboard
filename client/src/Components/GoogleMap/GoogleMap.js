import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import * as parkData from "../../data/skateboard-parks.json";
import { Header, Icon, Segment } from "semantic-ui-react";

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   stores: [{ lat: 47.49855629475769, lng: -122.14184416996333 },
    //   { latitude: 47.359423, longitude: -122.021071 },
    //   { latitude: 47.2052192687988, longitude: -121.988426208496 },
    //   { latitude: 47.6307081, longitude: -122.1434325 },
    //   { latitude: 47.3084488, longitude: -122.2140121 },
    //   { latitude: 47.5524695, longitude: -122.0425407 }]
    // }
  }

  displayMarkers = () => {
    return parkData.features.map(park => {
      return (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Segment>
        <Header icon>
          <Icon color="red" name="map marker alternate" size="big" />
          Parking Location
        </Header>
        <div class="ui embed">
          <Map
            google={this.props.google}
            zoom={9}
            initialCenter={{ lat: 45.4211, lng: -75.6903 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </Segment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_KEY}`
})(SimpleMap);
