import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from 'react-native';
import styles from './Categories.style';

import Config from "react-native-config";


import CategoryCard from "../../components/CategoryCard/CategoryCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


function Categories({ navigation }) {

    // To fetch data
    const { loading, data, error } = useFetch(Config.API_URL)

    // Go to the Detail page.
    const handleCategoriesSelect = (id) => {
        navigation.navigate('Meals', { id })

    }

    //To render a meal card.
    const renderCategories = ({ item }) => <CategoryCard categories={item} onSelect={() => handleCategoriesSelect(item.strCategory)} />;

    //Animations
    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={data.categories}
                renderItem={renderCategories}
                keyExtractor={item => (item.idCategory)} />
        </SafeAreaView>
    )
}


export default Categories;


// { "idCategory": "9", "strCategory": "Side", "strCategoryThumb": "https:\/\/www.themealdb.com\/images\/category\/side.png", "strCategoryDescription": "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes)." },