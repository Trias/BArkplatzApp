import {Alert} from 'react-native';

export const asyncAlert = async (title, message, buttons, options) => new Promise((resolve) => {
    buttons.forEach((button, i) => {button.onPress = () => resolve(i)});
    Alert.alert(
        title,
        message,
        buttons,
        options
    );
});