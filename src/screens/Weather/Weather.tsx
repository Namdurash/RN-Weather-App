import React, {useContext, useEffect, useState} from 'react';

import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import DayListItem from './components/Day_List_Item';
import NavigationButtons from '../../components/Navigation_Buttons';
import { WeatherData } from '../../../App';

export const Weather = ({ navigation }: any) => {
    let {oneDayData, fullData, setoneDayData} = useContext<any>(WeatherData)
    const [dailyWeatherData, setdailyWeatherData] = useState<any>({})
    const [dataLoaded, setStateLoad] = useState(false)

    useEffect(() => {
        const openWeatherMap = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.988358&lon=36.232845&units=metric&appid=684daf5a6c92971a9ba2de76ffe22532';
        fetch(openWeatherMap).then(res => res.json())
        .then((data) => {
            // console.log('DATA FOR ALL DAYS', data)
            setdailyWeatherData(data)
            setStateLoad(true)
        })
    }, [])

    const getNameDay = (milliseconds: number) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(milliseconds*1000-(7200*1000));
        const day = date.getDay();
        const result = days[day]
        return result
    }

    return (
        <View style={styles.container}>
            <View style={styles.dayList}>
                { dataLoaded ? 
                <>
                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[0])
                        // console.log('FULL DATA', fullData)
                        // console.log('ALL DAYS DATA', dailyWeatherData)
                        navigation.navigate('Forecast')
                        // console.log('ONE DAY DATA', oneDayData)
                    }}>
                        <DayListItem day='Today' maxDegree={dailyWeatherData.daily[0].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[0].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[0].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[1])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[1].dt)} maxDegree={dailyWeatherData.daily[1].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[1].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[1].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[2])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[2].dt)} maxDegree={dailyWeatherData.daily[2].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[2].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[2].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[3])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[3].dt)} maxDegree={dailyWeatherData.daily[3].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[3].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[3].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[4])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[4].dt)} maxDegree={dailyWeatherData.daily[4].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[4].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[4].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[5])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[5].dt)} maxDegree={dailyWeatherData.daily[5].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[5].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[5].weather[0].icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => {
                        setoneDayData(dailyWeatherData.daily[6])
                        navigation.navigate('Forecast')
                    }}>
                        <DayListItem day={getNameDay(dailyWeatherData.daily[6].dt)} maxDegree={dailyWeatherData.daily[6].temp.max.toFixed()} 
                            minDegree={dailyWeatherData.daily[6].temp.min.toFixed()} 
                            iconCode = {dailyWeatherData.daily[6].weather[0].icon}/>
                    </TouchableOpacity>
                </>
                    : 
                    <View><Text>Please, reload app</Text></View>
                }

            </View>
                <NavigationButtons nav = {navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#050929'
    },
    dayList: {
        flexDirection: 'column',
        marginTop: 10
    }
})