import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import TimePicker from "react-native-24h-timepicker";

export default class TimeSelector extends React.Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };
  }

  onCancel() {
    this.TimePicker.close();
  }

   onConfirm(hour, minute) {
     hour = parseInt(hour);
     let partialHour = Math.ceil(minute/60);
    this.setState({
        time: `Dauer: ${hour}:${minute} Stunden`,
        price: hour < 4 ? `Preis: ${((hour+partialHour)*1.50).toFixed(2)} €` : 'Preis: 5.50 €'
    });
    this.TimePicker.close();
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Wählen Sie Ihre Parkdauer</Text>
        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Zeit wählen</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <Text style={styles.text}>{this.state.price}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          textCancel="Abbrechen"
          textConfirm="Fertig"
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100
  },
  text: {
    fontSize: 20,
    marginTop: 10
  },
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
});