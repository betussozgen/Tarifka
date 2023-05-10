import React, { Input, useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList } from 'react-native';

import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


import DetailCard from "../../components/DetailCard/DetailCard";

function Detail({ route }) {

    const strMeal = route.params.idMeal;

    // const { loading, data, error } = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + strMeal)


    if (loading) {
        return <Loading />
    } if (error) {
        return <Error />
    }

    const renderDetail = ({ item }) => {
        <DetailCard />

    }

    return (
        <FlatList data={data.detail} renderItem={renderDetail} />
    )
}


export default Detail;