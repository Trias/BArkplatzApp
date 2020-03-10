import React from 'react';
import { StyleSheet } from 'react-native';
import Maps from "../components/Maps"
import { Help } from '../components/Help';
import { ParkingLotInfo } from '../components/ParkingLotInfo';

export default class ParkingLot extends React.Component {
    state = {
        parkingLotId: null,
    }

    componentWillMount() {
        let preselectedParkingLotId = this.props.navigation.getParam('preselectedParkingLotId');

        if (preselectedParkingLotId) {
            this.setState({ parkingLotId: preselectedParkingLotId });
        }
    }

    render() {
        return <>
            <Maps
                selectedParkingLotId={this.state.parkingLotId}
                style={styles.map}
                navigation={this.props.navigation}
                onInfo={(parkingLotId) => { this.setState({ parkingLotId }) }}
            />
            {this.state.parkingLotId && <ParkingLotInfo parkingLotId={this.state.parkingLotId} navigation = {this.props.navigation} />}
        </>;
    }

    static navigationOptions = {
        title: 'Parkplätze',
        headerRight: <Help filterFaqKeys={["1", "6", "8", "13"]} />,
    };
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        height: '50%'
    }
});
