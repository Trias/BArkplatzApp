import CloseableModal from './ClosableModal'
import renderTime from "./renderTime";
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TimePicker from 'react-native-24h-timepicker';

export class RememberParkingSpaceModal extends React.Component {
    state = {
        hourDuration: 1,
        minuteDuration: 0
    }

    render() {
        let { pressedParkingSpaceId, onRememberParkingSpace, ...rest } = this.props;
        return <CloseableModal
            title={`Parkplatz ${pressedParkingSpaceId} merken`}
            onAction={() => onRememberParkingSpace({
                parkingSpaceId: pressedParkingSpaceId,
                hourDuration: this.state.hourDuration,
                minuteDuration: this.state.minuteDuration,
            })}
            actionText={"Parkplatz merken"}
            {...rest}
        >
            <Text style={{ marginTop: 5, marginBottom: 15 }}>Wie lange wollen Sie parken?</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.TimePicker.open()}
            >
                <Text style={styles.buttonText}>Zeit wählen</Text>
            </TouchableOpacity>
            <Text>Erinnere mich in {renderTime(this.state.hourDuration, this.state.minuteDuration)} Stunden</Text>

            <TimePicker
                ref={(ref) => { this.TimePicker = ref }}
                minuteInterval={5}
                selectedHour={this.state.hourDuration + ""}
                selectedMinute={this.state.minuteDuration + ""}
                textCancel="Abbrechen"
                textConfirm="Fertig"
                onConfirm={(hour, minute) => { this.onRememberConfirm(hour, minute) }}
                onCancel={() => {
                    this.TimePicker.close();
                }} />
        </CloseableModal>
    }

    onRememberConfirm(hour, minute) {
        let hourDuration = parseInt(hour);
        let minuteDuration = parseInt(minute);
        this.setState({ hourDuration, minuteDuration });

        this.TimePicker.close();
    }
}

const styles = {
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
}