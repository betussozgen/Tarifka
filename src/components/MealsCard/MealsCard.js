import React from 'react';
import { View, TouchableWithoutFeedback, Image, Text } from 'react-native';
import styles from './MealsCard.style'

const MealsCard = ({ meals, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: meals.strMealThumb }} />
                <View style={styles.title_container}>
                    <Text style={styles.title}>{meals.strMeal}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>

    )
}

export default MealsCard;
