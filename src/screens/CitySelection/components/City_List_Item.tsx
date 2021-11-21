import React from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';

import CloudRainy from '../../../assets/icons/Fontiso_Icons/Rain.svg';
import textStyles from "../../textStyles";

interface Props {
    degrees: number,
    cityName: string,
    weatherType: string
}

const CityListItem = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={textStyles.textBigWhiteRegular}>{props.degrees}⁰</Text>
            <CloudRainy width = {94} height={72} fill='#8B8EA5' />
            <View style={styles.cityInfo}>
                <Text style={textStyles.textCityNameSmall}>{props.cityName}</Text>
                <Text style={textStyles.textWeatherType}>{props.weatherType.toLocaleUpperCase()}</Text>
            </View>
        </View>
    )
}

export default CityListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 25,
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        borderBottomColor: '#191C39',
        borderBottomWidth: 2
    },
    cityInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }
})