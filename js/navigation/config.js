import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';

const GradientHeader = props => (
    <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
        <LinearGradient
            colors={['#cf392a', '#9963ea']}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, { width: '100%' }]}
        />
        <Header {...props} />
    </View>
);

export const sharedNavigationOptions = () => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    headerStyle: {
        backgroundColor: 'transparent',
        height: 100
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Montserrat',
        fontSize: 24
    },
});