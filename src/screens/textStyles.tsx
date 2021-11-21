import React from 'react';

import { StyleSheet } from 'react-native';


const white = '#ffffff';
const gray = '#8B8EA5';
const violet = '#C5BBF6';


const textStyles = StyleSheet.create({
    textCityName: {
        fontSize: 52,
        color: white,
        fontFamily: 'worksans_semibold'
    },
    textDate: {
        fontSize: 20,
        color: gray,
        fontFamily: 'worksans_regular'
    },
    textDegrees: {
        fontSize: 30,
        color: white,
        fontFamily: 'worksans_regular',
    },
    textTemperature: {
        fontSize: 60,
        color: white,
        fontFamily: 'worksans_regular',
    },
    textWeatherType: {
        fontSize: 16,
        fontFamily: 'worksans_regular',
        color: gray
    },
    textTemperatureRange: {
        fontSize: 20,
        color: white,
        fontFamily: 'worksans_regular',
    },
    textNavigationButtons: {
        fontSize: 20,
        color: violet,
        textAlign: 'center',
        fontFamily: 'worksans_regular',
        paddingTop: 30
    },
    textCityNameSmall: {
        fontSize: 20,
        fontFamily: 'worksans_semibold',
        color: white,
    },
    textBigWhiteRegular: {
        fontSize: 45,
        color: white,
        fontFamily: 'worksans_regular',
    },
    textDay: {
        fontSize: 32,
        color: white,
        fontFamily: 'worksans_semibold'
    },
})

export default textStyles;