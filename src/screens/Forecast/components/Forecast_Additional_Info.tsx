import React, {useContext, useState} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';

import Sunset from '../../../assets/icons/Vector_Icons/Sunset.svg';
import Drops from '../../../assets/icons/Vector_Icons/Drops.svg';
import Wind from '../../../assets/icons/Vector_Icons/Wind.svg';
import Sunrise from '../../../assets/icons/Vector_Icons/Sunrise.svg';
import textStyles from "../../textStyles";
import { WeatherData } from '../../../../App';

const ForecastAdditionalInfo: React.FC = () => {
    const {oneDayData, fullData} = useContext<any>(WeatherData)
    // const [sunrise, setSunrise] = useState('')
    const sunrise = new Date(oneDayData.sunrise*1000-(7200*1000));
    const sunset = new Date(oneDayData.sunset*1000-(7200*1000));
    return (
        <View style={styles.container}>
            <View style={styles.blockInfo}>
                <Drops width = {34} height={32} fill = '#ffffff'/>
                <Text style={textStyles.textTemperatureRange}>{oneDayData.humidity}%</Text>
            </View>

            <View style={styles.blockInfo}>
                <Wind width = {34} height={32} fill = '#ffffff'/>
                <Text style={textStyles.textTemperatureRange}>{oneDayData.wind_speed.toFixed()}m/c</Text>
            </View>

            <View style={styles.blockInfo}>
                <Sunrise width = {34} height={32} fill = '#ffffff'/>
                <Text style={textStyles.textTemperatureRange}>{`${sunrise.getHours()}:${sunrise.getMinutes()}`}</Text>
            </View>

            <View style={styles.blockInfo}>
                <Sunset width = {34} height={32} fill = '#ffffff'/>
                <Text style={textStyles.textTemperatureRange}>{`${sunset.getHours()}:${sunset.getMinutes()}`}</Text>
            </View>
        </View>
    )
}

export default ForecastAdditionalInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
        alignItems: 'center',
        backgroundColor: '#050929',
        height: '25%'
    },
    blockInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '40%',
        justifyContent: 'space-between'
    }
})