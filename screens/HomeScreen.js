import React from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import FadeInImage from "../components/FadeInImage";
import {determinePreselectedParkingLotId} from '../model/ArtificialIntelligence';

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return <View>
      <ImageBackground source={require('../assets/images/Bamberg.png')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.getStartedContainer}>

        <Text style={styles.title}> <Text style={styles.bA}> BA</Text>rkplatz</Text>
        <FadeInImage
          source={
            require('../assets/images/barkerEdges.png')
          }
          style={styles.welcomeImage}
        />
        </View>
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity style={styles.helpLink}>
            <Button style={styles.helpLinkText}
              title="Eine neue Welt des Parkens"
              onPress={() => navigate('ParkingLot', { preselectedParkingLotId: determinePreselectedParkingLotId() })}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  };
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: Platform.OS == "ios" ? 24 : 12,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginTop: 50,
  },
  getStartedContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  title: {
    marginTop: 20,
    fontSize: 40,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 40,
    textAlign: 'center',
  },
  bA: {
    fontSize: 40,
    color: 'red',
    lineHeight: 40,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
    opacity: 0.95,
  }
});
