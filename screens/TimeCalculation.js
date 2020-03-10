import React from 'react';
import {
    ScrollView
} from 'react-native';
import TimeSelector from "../components/TimeSelector";
import TimeTable from "../components/TimeTable";
import { Help } from "../components/Help";

export default class TimeCalculation extends React.Component {
    render() {
        return <ScrollView>
            <TimeSelector />
            <TimeTable name="Park + Ride Bahnhof/Brennerstraße" />
            <TimeTable name="Park + Ride Heinrichsdamm" />
        </ScrollView>
    }
    static navigationOptions = {
        title: 'Preise',
        headerRight: <Help filterFaqKeys={["2", "4"]} />,
    };
}