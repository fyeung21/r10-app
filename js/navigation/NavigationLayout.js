import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import AboutContainer from '../screens/About';

const AboutStack = createStackNavigator({
    About: <AboutContainer />
});

// Dedicated stacks for Schedule and Faves will go here too!

const TabNavigator = createBottomTabNavigator({
    About: AboutStack,
    Settings: SettingsScreen,
});
export default createBottomTabNavigator(TabNavigator);