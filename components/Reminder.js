import React from "react";
import { View, Text } from "react-native"
import renderTime from "./renderTime";

export class Reminder extends React.Component {
    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 10 * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.interval = null;
    }

    render() {
        let { until, color, onExpiration, children } = this.props;
        let now = new Date();
        if (until) {
            if (now > until) {
                onExpiration();
                return null;
            }
        }else{
            return null;
        }

        let hour = Math.floor((until.getTime() - now.getTime() + 60000) / (1000 * 60 * 60));
        let minutes = Math.floor(((until.getTime() - now.getTime() + 60000) % (1000 * 60 * 60)) / (1000 * 60));

        return <View style={{ width: "100%", padding: 10, backgroundColor: color }}>
            <Text>{React.Children.map(children, (child) => {
                if (child.type === Time) {
                    return renderTime(hour, minutes);
                }
                return child;
            })} </Text>
        </View>;
    }
}

export class Time extends React.Component {
    render() { return null; }
}