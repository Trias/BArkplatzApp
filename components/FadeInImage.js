import React from 'react';
import { Animated } from 'react-native';

export default class FadeInImage extends React.Component {
    state = {
        opacity: new Animated.Value(0)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            Animated.timing(this.state.opacity, {  
                toValue: 1,
                duration: 4000,
                useNativeDriver: true,
            }).start()
         
        }
      }

    componentDidMount() {
            Animated.timing(this.state.opacity, {  
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
        }).start()
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLOad}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1],
                                })
                            }
                        ]
                    },
                    this.props.style,
                ]}
            />
        )
    }
}