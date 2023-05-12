import React from "react";
import { Image, Text, View } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ detail }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{ uri: detail.strMealThumb }} />
            <Text style={styles.title}>{detail.strMeal}</Text>
            <Text style={styles.country}>{detail.strArea}</Text>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            {/* <Text style={styles.youtube}>{detail.strYoutube}</Text> */}
        </View>

    )

}
export default DetailCard;

