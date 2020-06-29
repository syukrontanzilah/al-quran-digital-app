import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomNavigator } from '../component';
import {
    Artikel,
    JadwalSholat,
    Quran,
    Splash,
    Surat,
    ArtikelItem
} from '../pages';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const forFade = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
})

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen
                name='Home'
                component={JadwalSholat} />

            <Tab.Screen
                name='Quran'
                component={Quran} />

            <Tab.Screen
                name='Artikel'
                component={Artikel} />

        </Tab.Navigator>
    )
}



const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: forFade
            }}
        >

            <Stack.Screen
                name='Splash'
                component={Splash} />

            <Stack.Screen
                name='MainApp'
                component={MainApp} />

            <Stack.Screen
                name='Surat'
                component={Surat} />

            <Stack.Screen
                name='ArtikelItem'
                component={ArtikelItem} />

        </Stack.Navigator>
    )
}

export default Router

