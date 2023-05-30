import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'red',
    },
    country: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'red',
    },
    desc: {
        fontSize: 20,
    },
    YoutubeLinkBox: {
        //borderBottomColor: 'red',
        borderRadius: 8,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'red',

    }
})