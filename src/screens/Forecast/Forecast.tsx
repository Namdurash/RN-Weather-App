import React, {useEffect, useState, useContext} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';

// export const WeatherData = React.createContext({})

import ForecastHeader from './components/Forecast_Header';
import ForecastList from'./components/Forecast_List';
import ForecastAdditionalInfo from './components/Forecast_Additional_Info';
import NavigationButtons from '../../components/Navigation_Buttons';
import { WeatherData } from '../../../App';

const Forecast = ({ navigation }: any) => {
    // const [date, setDate] = useState('');
    // const [data, setData] = useState({});
    const {oneDayData, fullData, allDaysData} = useContext<any>(WeatherData)
    const [timeDays, setTimeDays] = useState<number[]>([0, 1, 2, 3, 4])

    // useEffect(() => {
    //     const openWeatherMap = 'https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&appid=684daf5a6c92971a9ba2de76ffe22532';
    //     fetch(openWeatherMap).then(res => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])

    // useEffect(() => {
    //     setInterval(() => {
    //         const now = new Date();
    //         const day = now.getDay();
    //         const month = now.getMonth();
    //         const date = now.getDate();

    //         setDate(days[day] + ', ' + months[month] + ' ' + date)
    //     })
    // })
    useEffect(() => {
        let arr: number[] = []
        if (oneDayData.dt === allDaysData.daily[0].dt) {
            setTimeDays([0, 1, 2, 3, 4]);
        } else if (oneDayData.dt === allDaysData.daily[5].dt || oneDayData.dt === allDaysData.daily[6].dt) {
            setTimeDays([0])
        } else {
            fullData.list.forEach((el: any , idx: number) => {
                if (oneDayData.dt === el.dt) {
                    arr.push(idx-1)
                    const result = arr.concat(idx, idx+1, idx+2, idx+3)
                    setTimeDays(result)
                }
            })
        }
    }, [oneDayData])
    return (
        <View>
            <ForecastHeader nav = {navigation}/>
            <ForecastList dateArray = {timeDays} />
            <ForecastAdditionalInfo />
            <NavigationButtons nav = {navigation}/>
        </View>
    )
}

export default Forecast;

const styles = StyleSheet.create({
    
})