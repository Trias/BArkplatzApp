import React from 'react';
import BrennerSvg from '../svgs/BrennerSvg';
import { Notifications } from 'expo';
import Heinrichsdamm from "../svgs/Heinrichsdamm.jsx";
import { StyleSheet, View, ScrollView } from 'react-native';
import { requestNotificationPermission } from '../services/PermissionsService';
import * as ApiService from '../services/ApiService';
import { getLocation } from '../services/LocationTrackingService';
import { Help } from '../components/Help';
import { asyncAlert } from '../lib/AsyncAlert';
import { FilterTabs } from '../components/FilterTabs';
import { Reminder, Time } from '../components/Reminder';
import Reservation from '../model/Reservation'
import RememberParkingSpace from '../model/RememberParkingSpace'
import { getColorOfParkingSpace } from '../viewModel/ParkingSpaceViewModel';
import { RememberParkingSpaceModal } from '../components/RememberParkingSpaceModal';
import { ReservationModal } from '../components/ReservationModal';
import * as Location from '../model/Location';
import Spinner from 'react-native-loading-spinner-overlay'

const filters = ['Alle', 'Standard', 'Elektro', 'Mutter-Kind', 'Behindertenparkplatz'];

export default class ParkingLotDetail extends React.Component {
    state = {
        activeFilter: filters[0],
        pressedParkingSpaceId: null,
        showModal: false,
        location: null,
        spinner: false,
    }

    componentWillMount() {
        this.setState({ location: getLocation() });
        this.data = ApiService.getData();
        this.interval = null;
        this.reservation = new Reservation();
        this.rememberParkingSpace = new RememberParkingSpace();
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.data = ApiService.getData();
            this.setState({ location: getLocation() });
        }, 10 * 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
        this.interval = null;
    }

    onFilterPress = (filter) => {
        this.setState({ activeFilter: filter });
    }

    async onParkingSpacePress(id) {
        let parkingLotId = this.getParkingLotId();
        let parkingSpace = this.data[parkingLotId].spaces[id];

        if (parkingSpace && parkingSpace.occupied
            || this.reservation.isParkingSpaceReserved(parkingSpace)) {
            if (!Location.isOnParkingLot(parkingLotId)) {
                await asyncAlert('Nicht reservierbar',
                    `Der Parkplatz ${id} ist schon belegt. Such dir doch einen anderen aus`,
                    [
                        { text: 'OK, mach ich' },
                    ],
                    { cancelable: true }
                )
                return;
            }
        }

        if (parkingSpace) {
            this.setState({ pressedParkingSpaceId: id, showModal: true })
        } else {
            console.warn('no parkingSpace found!');
            console.log(id);
            console.log(this.data);
        }
    }

    getParkingLotId() {
        return this.props.navigation.getParam('parkingLotId');
    }

    render() {
        let parkingLotId = this.getParkingLotId();
        const ParkinglotSvg = parkingLotId == '634' ? Heinrichsdamm : BrennerSvg
        const coords = this.state.location && this.state.location.coords;

        return <>
            <ScrollView horizontal>
                <ParkinglotSvg
                    location={coords}
                    getColor={(parkingSpaceId) => {
                        return getColorOfParkingSpace(
                            this.getParkingLotId(),
                            this.rememberParkingSpace.getParkingLotId(),
                            parkingSpaceId,
                            this.state.activeFilter,
                            this.rememberParkingSpace.getRememberedParkingSpaceId()
                        );
                    }}
                    onParkingSpacePress={(id) => { return this.onParkingSpacePress(id) }}
                />
            </ScrollView>
            <View style={styles.reminders}>
                {this.rememberParkingSpace.getParkingLotId() == parkingLotId && <Reminder
                    key='reminder'
                    until={this.rememberParkingSpace.getUntil()}
                    color={'lightblue'}
                    onExpiration={this.rememberParkingSpace.forgetRemember}
                    parkingLotId={this.rememberParkingSpace.getRememberedParkingSpaceId()}
                >
                    Parkplatz {this.rememberParkingSpace.getRememberedParkingSpaceId()} noch belegt für <Time /> Stunden
                </Reminder>}
                {this.reservation.getParkingLotId() == parkingLotId && <Reminder
                    key='reservation'
                    until={this.reservation.getUntil()}
                    parkingSpaceId={this.reservation.getReservedParkingSpaceId()}
                    color={'orange'}
                    onExpiration={this.reservation.forgetReservation}
                >
                    Parkplatz {this.reservation.getReservedParkingSpaceId()} noch reserviert für <Time /> Stunden
                </Reminder>}
            </View>
            {this.renderModal()}
            <Spinner
                visible={this.state.spinner}
                color={"black"}
                textContent={'Reservieren...'}
                textStyle={{ color: "black" }}
                overlayColor={"rgba(255, 255, 255, 0.7)"}
            />
            <FilterTabs
                filters={filters}
                onFilterPress={this.onFilterPress}
                activeFilter={this.state.activeFilter}
            />
        </>
    }

    onRememberParkingSpace = async ({parkingSpaceId, hourDuration, minuteDuration}) => {
        this.rememberParkingSpace.hourDuration = hourDuration;
        this.rememberParkingSpace.minuteDuration = minuteDuration;

        let parkingLotId = this.getParkingLotId();

        this.rememberParkingSpace.rememberParkingSpace({ parkingSpaceId, parkingLotId })

        if (await requestNotificationPermission()) {
            await Notifications.cancelAllScheduledNotificationsAsync();
            await Notifications.scheduleLocalNotificationAsync({ title: "Ihre Parkdauer ist abgelaufen", body: "jetzt aber flott!" }, { time: this.rememberParkingSpace.getUntil() });
            Notifications.addListener(() => {});
        }
    }

    onReserveParkingSpace = async ({parkingSpaceId, hourStart, minuteStart, hourDuration, minuteDuration}) => {
        this.reservation.hourStart = hourStart;
        this.reservation.minuteStart = minuteStart;
        this.reservation.hourDuration = hourDuration;
        this.reservation.minuteDuration = minuteDuration;

        let parkingLotId = this.getParkingLotId()

        this.setState({ spinner: true });
        await this.reservation.reserveParkingSpace({parkingLotId, parkingSpaceId});
        this.setState({ spinner: false });

        this.forceUpdate();

        this.setState({ showModal: false });
    }

    renderModal() {
        let parkingLotId = this.getParkingLotId();
        return Location.isOnParkingLot(parkingLotId) ?
            <RememberParkingSpaceModal
                visible={this.state.showModal}
                parkingLotId={parkingLotId}
                pressedParkingSpaceId={this.state.pressedParkingSpaceId}
                onRememberParkingSpace={this.onRememberParkingSpace}
                onClose = {() => {this.setState({showModal: false})}}
            /> :
            <ReservationModal
                visible={this.state.showModal}
                parkingLotId={parkingLotId}
                pressedParkingSpaceId={this.state.pressedParkingSpaceId}
                onReserveParkingSpace={this.onReserveParkingSpace}
                onClose = {() => {this.setState({showModal: false})}}
            />
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title') || 'Parkplätze',
            headerRight: <Help filterFaqKeys={["5", "9", "10", "11", "12"]} />,
        }
    };
}

const styles = StyleSheet.create({
    canvas: {
        position: 'absolute',
        top: 60,
        height: "100%",
    },
    reminder: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginBottom: 30,
        marginTop: 0,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
    }
});