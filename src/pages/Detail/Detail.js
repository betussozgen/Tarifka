import React, { Input, useState, useEffect } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from 'react-native';

import Config from "react-native-config";

import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import styles from './Detail.style';
import DetailCard from "../../components/DetailCard/DetailCard";

function Detail({ route }) {

    const { idMeal } = route.params;

    console.log(idMeal)

    const { loading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + idMeal)




    // Actions
    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    //To render a meal card.
    // const renderDetail = ({ item }) => <DetailCard detail={item} />;


    return (
        // <View>
        //     <FlatList
        //         data={data.meals}
        //         renderItem={renderDetail}
        //     //keyExtractor={item => item.idMeal}
        //     />
        //     <Text>deneme</Text>
        // </View>


        <View style={styles.container}>
            {/* <Image style={styles.image}
                source={{ uri: data.strMealThumb }} /> */}
            <Text style={styles.title}>{data.strMeal}</Text>
            <Text style={styles.country}>{data.strArea}</Text>
            <Text style={styles.desc}>{data.strInstructions}</Text>
            {/* <Text style={styles.youtube}>{detail.strYoutube}</Text> */}
        </View>

    )
}


export default Detail;