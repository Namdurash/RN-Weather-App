import React from "react";

import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Platform,
    TextInput
} from 'react-native';

import CloudRainy from '../../../assets/icons/Fontiso_Icons/Rain.svg';
import WeatherIcon from "../../../components/WeatherIcon";
import textStyles from "../../textStyles";

interface Props {
    weatherTime: string;
    icon: string;
    degrees: number;
}

const ForecastItem = (props: Props) => {
    return(
        <View style={styles.container}>
            <Text style={textStyles.textWeatherType}>{props.weatherTime}</Text>
            {/* <CloudRainy width = {64} height={42} fill = '#ffffff'/> */}
            <WeatherIcon iconCode = {props.icon} width = {64} height = {42}/>
            <Text style={textStyles.textTemperatureRange}>{props.degrees}⁰</Text>
        </View>
    )
}

export default ForecastItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '50%',
        alignItems: 'center'
    }
})