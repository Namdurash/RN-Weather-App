import React, {useEffect, useState} from 'react';

import {
    View, 
    Text, 
} from 'react-native';
import { splashScreenStyles } from './splashScreenStyles';

export const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        // const openWeatherMap = 'https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&appid=684daf5a6c92971a9ba2de76ffe22532';
        // fetch(openWeatherMap).then(res => res.json())
        // .then((data) => {
        //     console.log(data)
        //     setData(data);
        // })
        setTimeout(() => navigation.navigate('Login'), 2000)
    }, [])

    return (
        <View style={splashScreenStyles.container}>
            <Text style={splashScreenStyles.title}>WEATHER APP</Text>
        </View>
    )
}