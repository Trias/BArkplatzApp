import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ParkingLot from '../screens/ParkingLot';
import ParkingLotDetail from '../screens/ParkingLotDetail';
import HelpDesk from '../screens/HelpDesk'
import TimeCalculation from '../screens/TimeCalculation';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused} name={'md-home'}
    />
  ),
};

HomeStack.path = '';

const ParkStack = createStackNavigator(
  {
    ParkingLot: ParkingLot,
    ParkingLotDetail: ParkingLotDetail
  },
  config
);

ParkStack.navigationOptions = {
  tabBarLabel: 'Parkplätze',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-car'} />
  ),
};

ParkStack.path = '';

const PriceStack = createStackNavigator(
  {
    Preis: TimeCalculation,
  },
  config
);

PriceStack.navigationOptions = {
  tabBarLabel: 'Preise',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-cash'} />
  ),
};

PriceStack.path = '';

const HelpStack = createStackNavigator(
  {
    Help: HelpDesk,
  },
  config
);

HelpStack.navigationOptions = {
  tabBarLabel: 'FAQ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-help'} />
  ),
};

HelpStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ParkStack,
  PriceStack,
  HelpStack,
});

tabNavigator.path = '';

export default tabNavigator;
