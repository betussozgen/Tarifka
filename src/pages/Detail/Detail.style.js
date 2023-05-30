import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {},
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    country: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red',
    },

})