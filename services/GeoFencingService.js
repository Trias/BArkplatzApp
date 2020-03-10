import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { Notifications } from 'expo';
import { requestLocationPermission, requestNotificationPermission } from './PermissionsService';

const TASK_NAME = "parkingLots";

let geoFencingActive = false;
export async function initGeofencing() {
  try {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    let locationStatus = await requestLocationPermission();
    let notificationStatus = await requestNotificationPermission();

    if (!geoFencingActive) {
      if (locationStatus && notificationStatus) {
        geoFencingActive = true;
        await Location.startGeofencingAsync(TASK_NAME, [{
          // erba: 49.903, 10.87
          // harcoded for now to avoid dependency on network request
          identifier: "631", // heinrichsdamm
          latitude: 49.89,
          longitude: 10.903,
          radius: 100
        },
        {
          identifier: "38", // brennerstraße
          latitude: 49.901,
          longitude: 10.90,
          radius: 100
        }]);
      } else {
        console.log('Location permission or notification permission not granted');
      }
    }
  } catch (e) {
    console.log('error while geofencing');
  }
}

TaskManager.defineTask(TASK_NAME, ({ data: { eventType, region }, error }) => {
  console.log("geofencing event");
  if (error) {
    // check `error.message` for more details.
    console.log(error)
    return;
  }
  if (eventType === Location.GeofencingEventType.Enter) {
    const localNotification = {
      title: "Sie sind am Parkplatz angekommen!",
      body: "jetzt Parkplatz merken"
    }
    Notifications.addListener(notification => {
      if (notification.origin == "selected") {
        let { MainTabNavigator } = import('../navigation/MainTabNavigator');
        MainTabNavigator.navigation.navigate('ParkingLotDetail', { parkingLotId: region.identifier })
      }
    })
    Notifications.presentLocalNotificationAsync(localNotification);
    console.log("You've entered region:", region);
  } else if (eventType === Location.GeofencingEventType.Exit) {
    console.log("You've left region:", region);
  }
});