import React, {useContext, useState, useEffect} from 'react';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

import Header from '../../../components/Header';
import textStyles from '../../textStyles';
// import IconDrops from '../../../assets/icons/Drops';
// import CloudSunny from '../../../assets/icons/Fontiso_Icons/Thunderstorm.svg'
import WeatherIcon from '../../../components/WeatherIcon';
import { WeatherData } from '../../../../App';

interface Props {
    nav: any
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const ForecastHeader = (props: Props) => {
    const {oneDayData, fullData} = useContext<any>(WeatherData)
    const [date, setDate] = useState('')
    const transformDate = (milliseconds: number) => {
        const date = new Date(milliseconds*1000-(7200*1000));
        const day = date.getDay();
        const month = date.getMonth();
        const newDate = date.getDate();
        setDate(days[day] + ', ' + months[month] + ' ' + newDate)
    }
    useEffect(() => {
        transformDate(oneDayData.dt)
    })
    // console.log(oneDayData)
    // console.log(fullData)
    return (
        <View style={styles.wrapper}>
            <Header nav = {props.nav} />
            <ImageBackground source = {require('../../../assets/images/Cloud.png') } resizeMode="cover">
                <View style={styles.container}>
                    <Text style={textStyles.textCityName}>Kharkiv</Text>
                    <Text style={textStyles.textDate}>{date.toLocaleUpperCase()}</Text>
                    <View style={styles.weatherInfo}>
                        <View style={styles.temperatureDegrees}>
                            <Text style={textStyles.textTemperature}>{oneDayData.temp.day.toFixed()}</Text>
                            <Text style={textStyles.textDegrees}>0</Text>
                        </View>
                        
                        <View>
                            {/* <Ionicons name='md-cloudy' style={styles.watherIcon}/> */}
                            {/* <IconDrops width = {44} height = {44} color = '#8B8EA5' /> */}
                            {/* <CloudSunny width = {84} height={65} /> */}
                            <WeatherIcon iconCode = {oneDayData.weather[0].icon} width = {84} height ={65}/>
                        </View>

                        <View style={styles.weatherType}>
                            <Text style={textStyles.textWeatherType}>{oneDayData.weather[0].description.toLocaleUpperCase()}</Text>
                        </View>

                        <View style={styles.temperatureRange}>
                            <Text style={textStyles.textTemperatureRange}>{oneDayData.temp.min.toFixed()} /{oneDayData.temp.max.toFixed()}⁰C</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ForecastHeader;

const styles = StyleSheet.create({
    wrapper: {
        borderBottomColor: '#191C39',
        borderBottomWidth: 2,
        backgroundColor: '#050929',
        paddingBottom: 30
    },
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 20,
    },
    weatherInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    temperatureDegrees: {
        flexDirection: 'row',
    },
    weatherType: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '30%'
    },
    temperatureRange: {
        width: '15%'
    }
})