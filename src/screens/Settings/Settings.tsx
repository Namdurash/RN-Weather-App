import React from 'react';
import { useDispatch } from 'react-redux';

import {
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Slider
} from 'react-native';

import ArrowBack from '../../assets/icons/Material_Design_Icons/ArrowBack.svg'
import textStyles from '../textStyles';
import { settingsStyles } from './settingsStyles';

export const Settings = ({ navigation }: any) => {
    const dispatch = useDispatch();

    return (
        <View style={settingsStyles.container}>
            <View style = {settingsStyles.iconBack}>
                <TouchableOpacity onPress = {() => {
                        navigation.goBack()
                        // dispatch(loginStart(credentials));
                    }}>
                    <ArrowBack />
                </TouchableOpacity>
            </View>

            <View style={settingsStyles.inputsBlock}>
                <TextInput 
                    placeholder = 'Name'
                    placeholderTextColor = '#8B8EA5'
                    style = {settingsStyles.textInput}
                />
                <TextInput 
                    placeholder = 'Age'
                    placeholderTextColor = '#8B8EA5'
                    style = {settingsStyles.textInput}
                />
            </View>

            <View style = {settingsStyles.optionsBlock}>
                <View style={settingsStyles.sliderBlockOption}>
                    <View style = {settingsStyles.option}>
                        <Text style ={textStyles.textCityNameSmall}>Show weather for</Text>
                        <Text style ={textStyles.textCityNameSmall}>3 days</Text>
                    </View>

                    <View style={settingsStyles.sliderBlock}>
                        <Slider 
                            maximumValue = {7}
                            step = {1}
                            minimumTrackTintColor = '#7B61FF'
                            maximumTrackTintColor = '#8B8EA5'
                            thumbTintColor = '#ffffff'
                            style = {settingsStyles.slider}
                        />
                    </View>
                </View>

                <View style={settingsStyles.sliderBlockOption}>
                    <View style = {settingsStyles.option}>
                        <Text style ={textStyles.textCityNameSmall}>Update weather every</Text>
                        <Text style ={textStyles.textCityNameSmall}>15 min</Text>
                    </View>

                    <View style={settingsStyles.sliderBlock}>
                        <Slider 
                            maximumValue = {7}
                            step = {1}
                            minimumTrackTintColor = '#7B61FF'
                            maximumTrackTintColor = '#8B8EA5'
                            thumbTintColor = '#ffffff'
                            style = {settingsStyles.slider}
                        />
                    </View>
                </View>
            </View>

            <View style={settingsStyles.degreesBlock}>
                <TouchableOpacity>
                    <Text style={textStyles.textCityNameSmall}>⁰C </Text>
                </TouchableOpacity>

                <Text style={textStyles.textCityNameSmall}>|</Text>

                <TouchableOpacity>
                    <Text style={textStyles.textCityNameSmall}> ⁰F</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={settingsStyles.button}>
                <Text style={textStyles.textCityNameSmall}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}