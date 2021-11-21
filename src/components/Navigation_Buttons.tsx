import React from 'react';

import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
} from 'react-native';

import textStyles from '../screens/textStyles';

interface Props {
    nav: any
}

const NavigationButtons = (props: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress = {() => props.nav.navigate('Weather')}
            >
                <Text style={textStyles.textNavigationButtons}>WEATHER</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress = {() => props.nav.navigate('Forecast')}
            >
                <Text style={textStyles.textNavigationButtons}>FORECAST</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavigationButtons;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: '15%'
    },
    button: {
        width: '50%',
        backgroundColor: '#191C39'
    }
})