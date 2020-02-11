import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Header } from 'react-navigation-stack'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

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
)

const Hamburger = ({ navigation }) => {
    const { routeName } = navigation.state;
    return routeName !== "Session"
        ? (
            <Icon style={{ marginLeft: 20 }} name="md-menu" size={25} color={'white'} onPress={navigation.openDrawer} />
        ) : (
            <Icon style={{ marginLeft: 20 }} name="md-arrow-round-back" size={25} color={'white'} onPress={() => navigation.goBack()} />
        );
}

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <GradientHeader {...props} />,
    ...Platform.select({
        android: { headerLeft: () => <Hamburger navigation={navigation} /> }
    }),
    headerStyle: {
        backgroundColor: 'transparent',
        height: 100
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Montserrat',
        fontSize: 24
    },
})