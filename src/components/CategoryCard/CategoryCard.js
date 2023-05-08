import React from "react";
import { Image, Text, View } from 'react-native';
import styles from './CategoryCard.style'


const CategoryCard = ({ categories }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: categories.strCategoryThumb }} />
            <Text style={styles.title}>{categories.strCategory}</Text>

        </View>

    )
}

export default CategoryCard;