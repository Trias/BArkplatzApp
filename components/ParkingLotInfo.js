import React from 'react';
import {
    ScrollView,
    Text,
    Button,
    View,
    StyleSheet,
} from 'react-native';
import { UsageChart, Explanation } from './UsageChart';
import GetNavigation from './GetNavigation';
import { getData } from '../services/ApiService';

export function ParkingLotInfo({ parkingLotId , navigation}) {
    let parkingLot = getData()[parkingLotId];
    return <ScrollView style={styles.info}>
        <Text style={{ textAlign: "center", fontWeight: 'bold' }}>{parkingLot.name}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 5 }}>
            <Button
                title="Parkplatzansicht"
                onPress={() => {
                    navigation.navigate('ParkingLotDetail', { parkingLotId: parkingLot.id, title: parkingLot.name })
                }}
            />
            <GetNavigation coordinates={parkingLot} />
        </View>
        <Explanation parkingLot={parkingLot} />
        <UsageChart parkingLot={parkingLot} />
        <Text style={{ textAlign: "center" }}>Freie Parkplätze: {parkingLot.unoccupied} / {Object.keys(parkingLot.spaces).length}</Text>
    </ScrollView>
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        height: '50%',
        paddingTop: 5,
        backgroundColor: '#fff',
    },
})