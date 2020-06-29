import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconJadwal, IconBackGreen, IconBackWhite } from './asset'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
