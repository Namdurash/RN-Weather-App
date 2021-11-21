import React, {useContext} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';
import WeatherIcon from '../../../components/WeatherIcon';

// import CloudRainy from '../../../assets/icons/Fontiso_Icons/Rain.svg';
import textStyles from "../../textStyles";

interface Props {
    day: string,
    minDegree: number,
    maxDegree: number,
    iconCode: string
}

const DayListItem = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={textStyles.textDay}>{props.day}</Text>
            {/* <CloudRainy width = {94} height={72} fill='#8B8EA5' /> */}
            <WeatherIcon iconCode = {props.iconCode} width = {94} height = {72} />
            <Text style={textStyles.textDegrees}>{props.minDegree}⁰</Text>
            <View style={styles.temperatureBlock}></View>
            <Text style={textStyles.textDegrees}>{props.maxDegree}⁰</Text>
        </View>
    )
}

export default DayListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#191C39',
        borderBottomWidth: 2
    },
    temperatureBlock: {
        backgroundColor: '#8B8EA5',
        width: 50,
        height: 20,
        borderRadius: 50
    }
})