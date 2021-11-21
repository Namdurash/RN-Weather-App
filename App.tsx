import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from './src/routes/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

export const WeatherData = React.createContext({})

const App = () => {
  const [oneDayData, setoneDayData] = useState({});
  const [fullData, setFullData] = useState({});
  const [allDaysData, setAllDaysData] = useState({})

  useEffect(() => {
      const oneDayWeatherData = 'https://api.openweathermap.org/data/2.5/onecall?lat=49.988358&lon=36.232845&units=metric&appid=684daf5a6c92971a9ba2de76ffe22532';
      fetch(oneDayWeatherData).then(res => res.json())
      .then((data) => {
          console.log('ONE DAY DATA', data)
          setoneDayData(data.daily[0]);
          setAllDaysData(data);
      })

      const fullWeatherData = 'https://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&units=metric&appid=684daf5a6c92971a9ba2de76ffe22532';
      fetch(fullWeatherData).then(res => res.json())
      .then((data) => {
          console.log('FULL DATA', data)
          setFullData(data);
      })
  }, [])

  return (
    <NavigationContainer>
      <Provider store = {store}>
        <WeatherData.Provider value = {{oneDayData, fullData, setoneDayData, allDaysData}}>
          <View style={styles.container}>
            <MyStack />
          </View>
        </WeatherData.Provider>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050929' // #050929 (forecast) #191C39 (login)
  }
});

export default App;
