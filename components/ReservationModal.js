import renderTime from "./renderTime";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import TimePicker from "react-native-24h-timepicker";
import ClosableModal from "./ClosableModal";
import { calculatePrice } from "../model/Price";
import React from 'react';
import {asyncAlert} from '../lib/AsyncAlert'

export class ReservationModal extends React.Component {

    state = {
        price: calculatePrice(1, 0),
        hourStart: null,
        minuteStart: null,
        hourDuration: 1,
        minuteDuration: 0,
    }

    componentWillMount(){
        let now = new Date();
        this.state.hourStart = now.getHours();
        this.state.minuteStart = Math.ceil((now.getMinutes() / 5)) * 5;
        if (this.state.minuteStart == 60) {
            this.state.hourStart = (this.state.hourStart + 1) % 24;
            this.state.minuteStart = 0;
        }
    }

    async onReserveStartConfirm(hour, minute) {
        let now = new Date();
        let parkedFrom = new Date();
        let hourStart = parseInt(hour);
        let minuteStart = parseInt(minute);

        parkedFrom.setHours(hourStart);
        parkedFrom.setMinutes(minuteStart);

        if (now > parkedFrom) {
            await alertUserPastDate();
        } else {
            this.setState({ hourStart, minuteStart })

            this.TimePicker.close();
        }
    }
    onReserveDurationConfirm(hour, minute) {
        let hourDuration = parseInt(hour);
        let minuteDuration = parseInt(minute);
        let price = calculatePrice(hour, minute);
        this.setState({ minuteDuration, hourDuration, price });

        this.TimePicker2.close();
    }

    render() {
        let { pressedParkingSpaceId, onReserveParkingSpace, ...rest } = this.props;
        let buttonText = `Parkplatz reservieren ab ${renderTime(this.state.hourStart, this.state.minuteStart)} Uhr für ${renderTime(this.state.hourDuration, this.state.minuteDuration)} Stunden`

        return <ClosableModal
            title={`Parkplatz ${pressedParkingSpaceId} reservieren`}
            actionText={buttonText}
            onAction={async () => {
                let now = new Date();
                let parkedFrom = new Date();
                parkedFrom.setHours(this.state.hourStart);
                parkedFrom.setMinutes(this.state.minuteStart);
                
                if (now > parkedFrom) {
                    await alertUserPastDate();
                    return;
                }
                await onReserveParkingSpace({
                    parkingSpaceId: pressedParkingSpaceId,
                    hourStart: this.state.hourStart,
                    minuteStart: this.state.minuteStart,
                    hourDuration: this.state.hourDuration,
                    minuteDuration: this.state.minuteDuration,
                });
            }}
            {...rest}
        >
            <Text style={{ marginTop: 5, marginBottom: 15 }}>Ab wann wollen sie den Parkplatz reservieren?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.TimePicker.open()}
            >
                <Text style={styles.buttonText}>Beginn wählen</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: 5, marginBottom: 15 }}>Wie lange wollen sie den Parkplatz reservieren?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.TimePicker2.open()}
            >
                <Text style={styles.buttonText}>Dauer wählen</Text>
            </TouchableOpacity>
            {this.state.price ? <View style={{ marginBottom: 30 }}><Text style={{ fontWeight: "bold" }}>Preis: {(Math.round(this.state.price * 100) / 100).toFixed(2)} €</Text></View> : null}

            {/*<TimeTable name={data[parkingLotId].name} />*/}

            <TimePicker
                ref={(ref) => { this.TimePicker = ref }}
                minuteInterval={5}
                selectedHour={this.state.hourStart + ""}
                selectedMinute={Math.ceil((this.state.minuteStart / 5)) * 5 + ""}
                textCancel="Abbrechen"
                textConfirm="Fertig"
                onConfirm={(hour, minute) => { this.onReserveStartConfirm(hour, minute) }}
                onCancel={() => {
                    this.TimePicker.close();
                }} />

            <TimePicker
                ref={(ref) => { this.TimePicker2 = ref }}
                minuteInterval={5}
                selectedHour={this.state.hourDuration + ""}
                selectedMinute={this.state.minuteDuration + ""}
                textCancel="Abbrechen"
                textConfirm="Fertig"
                onConfirm={(hour, minute) => { this.onReserveDurationConfirm(hour, minute) }}
                onCancel={() => {
                    this.TimePicker2.close();
                }} />
        </ClosableModal>
    }
}

async function alertUserPastDate() {
    return asyncAlert('Reservierung in der Vergangenheit!',
        'Das nächste mal bitte vorher nachdenken!',
        [
            { text: 'OK, mach ich' },
        ],
        { cancelable: true }
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
      }
})