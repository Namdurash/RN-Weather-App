import React from 'react';

import {
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    ScrollView,
    TextInput
} from 'react-native';

import ArrowBack from '../../assets/icons/Material_Design_Icons/ArrowBack.svg';
import Search from '../../assets/icons/Material_Design_Icons/Search.svg';
import CityListItem from './components/City_List_Item';
import { citySelectionStyles } from './citySelectionStyles';

export const CitySelection: React.FC = ({navigation}: any) => {
    return (
        <View style = {citySelectionStyles.container}>
            <View style={citySelectionStyles.arrow}>
                <TouchableOpacity onPress = {() => navigation.goBack()}>
                    <ArrowBack />
                </TouchableOpacity>
            </View>

            <View style={citySelectionStyles.searchBlock}>
                <TextInput 
                    placeholder = 'Enter the name of the city'
                    style = {citySelectionStyles.searchField}
                    placeholderTextColor = '#8B8EA5'
                />
                <View style={citySelectionStyles.searchIcon}>
                    <Search />
                </View>
            </View>

            <ScrollView style={citySelectionStyles.cityList}>
                <CityListItem degrees={-2} cityName='Dnipro' weatherType='mostly cloudy'/>
                <CityListItem degrees={-3} cityName='Zaporizhzhia' weatherType='mostly cloudy'/>
                <CityListItem degrees={-1} cityName='Donetsk' weatherType='mostly cloudy'/>
                <CityListItem degrees={0} cityName='Kyiv' weatherType='mostly cloudy'/>
                <CityListItem degrees={0} cityName='Kryvyi Rih' weatherType='mostly cloudy'/>
                <CityListItem degrees={0} cityName='Lviv' weatherType='mostly cloudy'/>
                <CityListItem degrees={1} cityName='Kharkiv' weatherType='mostly cloudy'/>
                <CityListItem degrees={2} cityName='Poltava' weatherType='mostly cloudy'/>
            </ScrollView>
        </View>
    )
}

// export default CitySelection;

