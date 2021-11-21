import React from 'react';

import Settings from '../assets/icons/Material_Design_Icons/Settings.svg';
import LocationCity from '../assets/icons/Material_Design_Icons/LocationCity.svg';

import {
    View,
    TouchableOpacity, 
    StyleSheet, 
} from 'react-native';

interface Props {
    nav: any
}

const Header = (props: Props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} 
            onPress = {() => props.nav.navigate('Settings')}>
                <Settings width={35} height={35}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.icon} 
            onPress = {() => props.nav.navigate('CitySelection')}>
                <LocationCity width={35} height={35}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    icon: {
        paddingHorizontal: 15,
    }
})