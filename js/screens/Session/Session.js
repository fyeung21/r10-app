import React, { useState } from "react";
import { View, ScrollView, Text, Image, Button, Modal } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SpeakerModal } from "../Speaker";
import globalStyles from "../../globalStyles";
import styles from "./styles";

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
            }
        }
    }
`;

const Session = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_SESSION, {
        variables: { id: "cjh2j37mo163p01221qpcklry" }
    });
    const [visible, setVisible] = useState(false);
    const toggleModal = () => setVisible(!visible);

    if (loading) return <Text>Loading</Text>;
    if (error) {
        console.log(JSON.stringify(error))
        return <Text>Error</Text>;
    }

    const { title, location, description, startTime } = data.Session
    const { name, image } = data.Session.speaker

    return (
        <ScrollView style={styles.sessionCont}>
            <View>
                <Text style={styles.greyHeading}>{location}</Text>
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
                <TouchableOpacity
                    style={globalStyles.btn}
                    onPress={() => navigation.navigate('Speaker')}>
                    <Text style={globalStyles.btnText}>Remove from Faves</Text>
                </TouchableOpacity>
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
                    <SpeakerModal />
                </View>
            </Modal>
        </ScrollView>
    )
}

export default withNavigation(Session);