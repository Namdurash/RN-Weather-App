import React, {useContext, useEffect, useState} from "react";

import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Platform,
    TextInput
} from 'react-native';

import ForecastItem from "./Forecast_List_Item";
import { WeatherData } from '../../../../App';

interface Props {
    dateArray: number[]
}

const ForecastList = (props: Props) => {
    const {oneDayData, fullData, allDaysData} = useContext<any>(WeatherData)
    console.log(props.dateArray)
    return(
        <View style={styles.container}>
            {props.dateArray.length === 1 ? 
                <View style = {styles.notAvaliableData}><Text style={styles.text}>Data for these days is not yet available</Text></View>
                :
                <>
                <ForecastItem 
                    weatherTime={fullData.list[props.dateArray[0]].dt_txt.split(' ')[1].slice(0, 5)}
                    degrees = {fullData.list[props.dateArray[0]].main.temp.toFixed()}
                    icon = {fullData.list[props.dateArray[0]].weather[0].icon}
                />
                <ForecastItem 
                    weatherTime={fullData.list[props.dateArray[1]].dt_txt.split(' ')[1].slice(0, 5)}
                    degrees = {fullData.list[props.dateArray[1]].main.temp.toFixed()}
                    icon = {fullData.list[props.dateArray[1]].weather[0].icon}
                />
                <ForecastItem 
                    weatherTime={fullData.list[props.dateArray[2]].dt_txt.split(' ')[1].slice(0, 5)}
                    degrees = {fullData.list[props.dateArray[2]].main.temp.toFixed()}
                    icon = {fullData.list[props.dateArray[2]].weather[0].icon}
                />
                <ForecastItem 
                    weatherTime={fullData.list[props.dateArray[3]].dt_txt.split(' ')[1].slice(0, 5)}
                    degrees = {fullData.list[props.dateArray[3]].main.temp.toFixed()}
                    icon = {fullData.list[props.dateArray[3]].weather[0].icon}
                />
                <ForecastItem 
                    weatherTime={fullData.list[props.dateArray[4]].dt_txt.split(' ')[1].slice(0, 5)}
                    degrees = {fullData.list[props.dateArray[4]].main.temp.toFixed()}
                    icon = {fullData.list[props.dateArray[4]].weather[0].icon}
                />
            </>
            }
        </View>
    )
}

export default ForecastList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20,
        borderBottomColor: '#191C39',
        backgroundColor: '#050929',
        borderBottomWidth: 2
    },
    notAvaliableData: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }, 
    text: {
        fontSize: 20,
        fontFamily: 'worksans_semibold',
        color: 'white',
        textAlign: 'center'
    }
})
