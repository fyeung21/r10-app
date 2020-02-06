import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import globalStyles from '../../globalStyles';

const SessionCard = ({ id, title, location, navigation }) => {
    return (
        <View style={globalStyles.borderBottomCont}>
            <View style={globalStyles.sessionCardCont}>
                <TouchableOpacity onPress={() => navigation.push('Session', { id })}>
                    <Text style={globalStyles.sessionCardTitle}>{title}</Text>
                    <Text style={globalStyles.greyHeading}>{location}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(SessionCard);