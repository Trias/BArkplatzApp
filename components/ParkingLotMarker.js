import React from 'react';
import { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';

export function ParkingLotMarker({parkingLot, onPress, easterEgg, focus}) {
  let firstParkingSpaceId = Object.keys(parkingLot.spaces)[0];
  let firstParkingSpace = parkingLot.spaces[firstParkingSpaceId];

  let backcolor = 'blue'
  if (focus) {
    backcolor = '#7f7fff'
  }
  return <Marker
      key={parkingLot.id}
      coordinate={firstParkingSpace}
      onPress={() => { onPress(parkingLot.id) }}

      // add some height for circle as an indicator
      style={{ width: 50, height: 50}}
    >
      <View style={style.marker(backcolor)} >
        <MaterialCommunityIcons name={easterEgg ? "dog" : "parking"} style={style.icon} color="white" />
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          style={{ zIndex: 100, position: 'absolute', top: -8, left: 27 }}
        >
          <Circle cx="8" cy="8" r="8" fill={getOccupancyColor(parkingLot)} />
        </Svg>
      </View>
    </Marker>;
}

function getOccupancyColor(parkingLot) {
  let percentage = 1 - parkingLot.unoccupied / Object.keys(parkingLot.spaces).length;
  if (percentage == 1) {
    return 'red';
  } else if (percentage > 0.9) {
    return '#ff8c00';
  } else if (percentage > 0.75) {
    return '#fdee00';
  } else {
    return 'lightgreen';
  }
}

const style = StyleSheet.create({
  marker: ( backcolor) => {
    return {
      position: 'relative',
      width: 40,
      height: 40,
      marginTop: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#FFF',
      backgroundColor: backcolor,
      color: 'white',
    }
  },
  icon: {
    fontSize: 26,
  }
});
