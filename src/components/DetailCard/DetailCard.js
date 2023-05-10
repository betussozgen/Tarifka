import React from "react";
import { Image, Text, View } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ detail }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} />
            <Text style={styles.title}></Text>
            <Text style={styles.country}></Text>
            <Text style={styles.desc}></Text>
        </View>

    )

}
export default DetailCard;