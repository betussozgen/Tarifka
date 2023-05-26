import React, { Input, useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from 'react-native';
import MealsCard from "../../components/MealsCard/MealsCard";

//import Config from "react-native-config";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import styles from './Meals.style';


function Meals({ route, navigation }) {

    const meal = route.params.meal;

    console.log(meal)

    // Gets the category meals
    const { loading, data, error } = useFetch('http://www.themealdb.com/api/json/v1/1/filter.php?i=' + `${meal}`);

    // Go to the Detail page.
    const handleDetailSelect = (detail) => {
        navigation.navigate('Detail', { detail })

    }

    //To render a meal card.
    const renderMeals = ({ item }) => <MealsCard meals={item} onSelect={() => handleDetailSelect(item.strMeal)} />;


    //Animations
    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList

                data={data.meals}
                renderItem={renderMeals}
            // keyExtractor={item => (item.idMeal)}
            />
        </SafeAreaView>
    )
}


export default Meals;




// {"strMeal":" Bubble & Squeak","strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/xusqvw1511638311.jpg","idMeal":"52885"}