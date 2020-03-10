import React from 'react';
import {Animated } from 'react-native';
import { Rect } from 'react-native-svg';

function getInitialState() {
    const anim = new Animated.Value(0.3);
    const fillOpacity = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return { anim, fillOpacity };
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);

export default class PulsingRect extends React.Component {
    state = getInitialState();

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        const { anim } = this.state;
        Animated.timing(anim, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            this.secondAnimation()
        });
    }

    secondAnimation() {
        const { anim } = this.state;
        Animated.timing(anim, {
            toValue: 0.8,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            this.startAnimation()
        });
    }

    render() {
        let { x, y, width, height, fill } = this.props;
        const { fillOpacity } = this.state;
        return <AnimatedRect
                fillOpacity={fillOpacity}
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
            />
    }
}
