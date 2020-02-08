import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation"
import globalStyles from '../../globalStyles'
import { FavesContext } from '../../context/FavesContext/FavesContext'
import Icon from 'react-native-vector-icons/Ionicons'


const SessionCard = ({ id, title, location, navigation }) => {
    const { faveIds } = useContext(FavesContext)

    return (
        <View style={globalStyles.borderBottomCont}>
            <View style={globalStyles.sessionCardCont}>
                <TouchableOpacity onPress={() => navigation.push('Session', { id })}>
                    <Text style={globalStyles.sessionCardTitle}>{title}</Text>
                    <View>
                        <Text style={globalStyles.greyHeading}>{location}</Text>
                        {faveIds && faveIds.includes(id) ? (
                            <Icon name="ios-heart" size={20} color={"red"} />
                        ) : (<Icon name="ios-heart-empty" size={20} />)}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default withNavigation(SessionCard)