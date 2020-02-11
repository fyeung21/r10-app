import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScheduleScreen from '../screens/Schedule'
import MapScreen from '../screens/Map'
import FavesScreen from '../screens/Faves'
import AboutScreen from '../screens/About'
import SessionScreen from '../screens/Session'
import SpeakerScreen from '../screens/Speaker'
import { sharedNavigationOptions } from './config'

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
    })

const DrawerNavigator = createDrawerNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            drawerIcon: ({ tintColor }) => {
                const { routeName } = navigation.state
                let IconComponent = Ionicons
                let iconName
                if (routeName === 'Schedule') {
                    iconName = 'md-calendar'
                } else if (routeName === 'Map') {
                    iconName = 'md-map';
                } else if (routeName === 'Faves') {
                    iconName = 'md-heart';
                } else if (routeName === 'About') {
                    iconName = 'md-information-circle'
                }
                return <IconComponent name={iconName} size={30} color={tintColor} />
            },
        }),
        contentOptions: {
            activeTintColor: '#9963EA',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 14,
                fontFamily: 'Montserrat-Regular'
            }
        }
    }
)
export default DrawerNavigator