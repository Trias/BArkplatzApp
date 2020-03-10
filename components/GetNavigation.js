import React from 'react';
import { Button } from 'react-native';
import * as Location from 'expo-location';
import getDirections from 'react-native-google-maps-directions';


export default class GetNavigation extends React.Component {
 
    handleGetDirections = () => {
      const data = {
         source: {
             componentWillMount(){
            this.getLocation();
             }
        },
        destination: this.props.coordinates,
        
        params: [
          {
            key: "travelmode",
            value: "driving"        
          },
          {
            key: "dir_action",
            value: "navigate"       
          }
        ],   
        
      }
   
      getDirections(data)
    }
   
    getLocation = async () => {

        const userLocation = await Location.getCurrentPositionAsync();

        this.setState({
            location: userLocation
        })   
    }

    render() {
      return (
          <Button 
          title = "Navigation"
          onPress={this.handleGetDirections} />
      
      );
    }
  }