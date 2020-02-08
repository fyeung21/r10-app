import React, { useState, useContext } from "react"
import { withNavigation } from "react-navigation"
import { useQuery } from '@apollo/react-hooks'
import { gql } from "apollo-boost"
import { FavesContext } from '../../context/FavesContext/FavesContext'
import { View, ScrollView, Text, Image, Modal } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons'
import { SpeakerModal } from "../Speaker"
import globalStyles from "../../globalStyles"
import styles from "./styles"

const GET_SESSION = gql`
    query SessionQuery ($id: ID!) {
        Session(id: $id){
            id
            title
            description
            location
            startTime
            speaker {
              id
              name
              image
              bio
              url
            }
        }
    }
`;

const Session = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { loading, error, data } = useQuery(GET_SESSION, {
        variables: { id }
    });
    const [visible, setVisible] = useState(false)
    const toggleModal = () => setVisible(!visible)

    const { faveIds, addFaveSession, removeFaveSession } = useContext(FavesContext)

    const addToFave = (currentSession) => addFaveSession(currentSession)

    const removeFromFave = (currentSession) => removeFaveSession(currentSession)

    if (loading) return <Text>Loading</Text>
    if (error) {
        console.log(JSON.stringify(error))
        return <Text>Error</Text>
    }

    const { title, location, description, startTime } = data.Session
    const { name, image, bio, url } = data.Session.speaker

    const sessionId = data.Session.id

    return (
        <ScrollView style={styles.sessionCont}>
            <View>
                <View>
                    <Text style={styles.greyHeading}>{location}</Text>
                    {faveIds && faveIds.includes(sessionId) ? (
                        <Icon name="ios-heart" size={20} color={"red"} />
                    ) : (<Icon name="ios-heart-empty" size={20} />)}
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.startTime}>{startTime}</Text>
                <Text style={globalStyles.body}>{description}</Text>
            </View>
            <View>
                <Text style={styles.greyHeading}>Presented by:</Text>
                <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.presentBy}>
                        <Image style={styles.imageThumbnail} source={{ uri: image }} />
                        <Text style={styles.speaker}>{name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                {faveIds && faveIds.includes(sessionId) ? (
                    <TouchableOpacity
                        style={globalStyles.btn}
                        onPress={() => removeFromFave(sessionId)}>
                        <Text style={globalStyles.btnText}>Remove from Faves</Text>
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity
                            style={globalStyles.btn}
                            onPress={() => addToFave(sessionId)}>
                            <Text style={globalStyles.btnText}>Add to Faves</Text>
                        </TouchableOpacity>)}
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}>
                <View style={styles.modalCont}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.modalHeader}>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>About the Speaker</Text>
                    </View>
                    <SpeakerModal name={name} bio={bio} image={image} url={url} />
                </View>
            </Modal>
        </ScrollView>
    )
}

export default withNavigation(Session)