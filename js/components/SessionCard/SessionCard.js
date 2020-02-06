import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const SessionCard = ({ id, title, location }) => {
    return (
        <View>
            {/* <TouchableOpacity onPress={toggleModal}> */}
            <Text>{title}</Text>
            <Text>{location}</Text>
            {/* </TouchableOpacity> */}
        </View>
    );
}

export default SessionCard;