import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScheduleScreen from '../screens/Schedule';
import MapScreen from '../screens/Map';
import FavesScreen from '../screens/Faves';
import AboutScreen from '../screens/About';

const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen
});
const MapStack = createStackNavigator({
    Map: MapScreen
});
const FavesStack = createStackNavigator({
    Faves: FavesScreen
});
const AboutStack = createStackNavigator({
    About: AboutScreen
});

const TabNavigator = createBottomTabNavigator(
    {
        Schedule: ScheduleStack,
        Map: MapStack,
        Faves: FavesStack,
        About: AboutStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Schedule') {
                    iconName = 'ios-calendar'
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Map') {
                    iconName = 'ios-map';
                } else if (routeName === 'Faves') {
                    iconName = 'ios-heart';
                } else if (routeName === 'About') {
                    iconName = 'ios-information-circle';
                }

                // You can return any component that you like here!
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
        }
    }
);
export default TabNavigator;