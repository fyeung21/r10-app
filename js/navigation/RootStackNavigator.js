import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AboutContainer from "../screens/About/AboutContainer";

const AppNavigator = createStackNavigator({
    About: {
        screen: <AboutContainer />
    },
});

export default createAppContainer(AppNavigator);