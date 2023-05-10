import { StyleSheet, Dimensions } from 'react-native';
const widthOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;
export default StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginBottom: 10,


    },
    image: {

        maxWidth: widthOfScreen,
        height: heightOfScreen / 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title_container: {
        width: '100%',
        position: 'absolute',
        bottom: 0,


    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        fontWeight: '600',
        backgroundColor: '#424242',
        opacity: .6,
        //flexDirection: 'row',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'right',
    },
})