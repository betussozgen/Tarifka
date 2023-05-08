import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#bdbdbd',
        backgroundColor: '#e0e0e0',
        margin: 6,
        padding: 6,
        flexDirection: 'row',
        borderBottomLeftRadius: 55,
        borderTopLeftRadius: 55,
        alignItems: 'center',

    },
    image: {
        width: 100,
        minHeight: 100,
        //height: 100,
        resizeMode: 'contain',
        position: 'relative',
        // margin: 5,
        // padding: 5,
        //backgroundColor: 'white',

    },
    title: {
        fontWeight: 'normal',
        fontSize: 18,
        color: 'black',
        paddingLeft: 15,

    },
})