import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { withNavigation } from "react-navigation"
import globalStyles from '../../globalStyles'
import { FavesContext } from '../../context/FavesContext/FavesContext'
import Icon from 'react-native-vector-icons/Ionicons'


const SessionCard = ({ id, title, location, navigation }) => {
    const { faveIds, addFaveSession, removeFaveSession } = useContext(FavesContext)

    const addToFaves = (currentSession) => addFaveSession(currentSession)

    const removeFromFaves = (currentSession) => removeFaveSession(currentSession)

    return (
        <View style={globalStyles.borderBottomCont}>
            <View style={globalStyles.sessionCardCont}>
                <TouchableOpacity onPress={() => { title !== 'Lunch' || 'After Party' ? navigation.push('Session', { id }) : null }}>
                    <Text style={globalStyles.sessionCardTitle}>{title}</Text>
                    <View style={globalStyles.flex}>
                        <Text style={globalStyles.greyHeading}>{location}</Text>
                        {faveIds && faveIds.includes(id) ? (
                            <TouchableOpacity onPress={() => removeFromFaves(id)}>
                                {Platform.OS === 'ios' ?
                                    <Icon name="ios-heart" size={25} color={"red"} />
                                    : <Icon name="md-heart" size={25} color={"red"} />
                                }

                            </TouchableOpacity>
                        ) : (
                                <TouchableOpacity onPress={() => addToFaves(id)}>
                                    {Platform.OS === 'ios' ?
                                        <Icon name="ios-heart-empty" size={25} />
                                        : <Icon name="md-heart-empty" size={25} />
                                    }
                                </TouchableOpacity>)}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default withNavigation(SessionCard)