import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { ParkingLotMarker } from './ParkingLotMarker';
import { getData } from '../services/ApiService';
import MapViewDirections from 'react-native-maps-directions';
import { getLocation } from '../services/LocationTrackingService';
import LatLon from 'geodesy/latlon-nvector-spherical.js';
import { GOOGLE_MAPS_APIKEY } from '../constants/Keys.js'

export default class Maps extends React.Component {
  state = {
    location: null,
    selectedFilterIndex: 0,
    showParkingSpaces: false,
    easterEgg: false,
  };

  hasZoomOngoing = false;
  region = {
    latitude: 49.890774,
    longitude: 10.882515,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  componentWillMount() {
    this.data = getData();
    this.setState({ location: getLocation() });

    if (this.props.selectedParkingLotId) {
      // 50% is info screen now
      this.region.latitudeDelta = this.region.latitudeDelta / 2;
    }
  }

  onRegionChange(region) {
    this.region = region;
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          onPress={(event) => {
            if (event.nativeEvent.action !== 'marker-press') {
              this.props.onInfo(null)
              this.setState({ lastPressedCoordinate: null });
              const erba = new LatLon(49.9028939, 10.8686975);
              console.log(erba.distanceTo(new LatLon(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)));
              if (erba.distanceTo(new LatLon(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)) < 150) {
                this.setState({ easterEgg: !this.state.easterEgg });
              }
            }
          }}
          initialRegion={this.region}
          showsUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}>
          {this.getMarker()}
          {this.getDirections()}
        </MapView>
      </View>
    );
  }

  getDirections() {
    if (this.state.location != null && this.props.selectedParkingLotId != null) {
      return <MapViewDirections
        origin={this.state.location.coords}
        destination={this.data[this.props.selectedParkingLotId]}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#19B5FE"
        optimizeWaypoints={true}
      />
    }
  }

  getMarker() {
    return Object.keys(this.data).map(parkingLotId =>
      <ParkingLotMarker
        key={parkingLotId}
        parkingLot={this.data[parkingLotId]}
        onPress={this.props.onInfo}
        easterEgg={this.state.easterEgg}
        focus={parkingLotId == this.props.selectedParkingLotId}
      />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  mapStyle: {
    flex: 1,
    height: "100%",
    width: "100%"
  }
});
