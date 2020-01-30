import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleScreen from '../screens/Schedule';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';
import SessionScreen from '../screens/Session';
import SpeakerScreen from '../screens/Speaker';
import { sharedNavigationOptions } from './config';

const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen,
    Session: SessionScreen,
    Speaker: SpeakerScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    });
const MapStack = createStackNavigator({
    Map: MapScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    });
const FavesStack = createStackNavigator({
    Faves: FavesScreen,
    Session: SessionScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    });
const AboutStack = createStackNavigator({
    About: AboutScreen
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            ...sharedNavigationOptions(navigation)
        })
    });

const TabNavigator = createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Schedule') {
                    iconName = 'ios-calendar'
                } else if (routeName === 'Map') {
                    iconName = 'ios-map';
                } else if (routeName === 'Faves') {
                    iconName = 'ios-heart';
                } else if (routeName === 'About') {
                    iconName = 'ios-information-circle';
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 14,
                fontFamily: 'Montserrat'
            },
            style: {
                backgroundColor: "black"
            }
        },
    }
);
export default TabNavigator;