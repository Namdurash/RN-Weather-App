import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SplashScreen from '../screens/SplashScreen';
// import Login from '../screens/Login/index';
import Login from '../screens/Login/index';
import Forecast from '../screens/Forecast/index';
import CitySelection from '../screens/CitySelection/index';
import Weather from '../screens/Weather/index';
import Settings from '../screens/Settings/index';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
        />
        <Stack.Screen 
            name="Login"
            component={Login}
        />
        <Stack.Screen 
            name="Forecast"
            component={Forecast}
        />
        <Stack.Screen 
            name="Weather"
            component={Weather}
        />
        <Stack.Screen 
            name="CitySelection"
            component={CitySelection}
        />
        <Stack.Screen 
            name="Settings"
            component={Settings}
        />
    </Stack.Navigator>
  );
};