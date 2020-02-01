import React, { useState } from "react";
import { View, ScrollView, Text, Image, Button, Modal } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import SpeakerContainer from "../Speaker";

const GET_SESSION = gql`
    query SessionQuery ($id: ID!) {
        Session(id: $id){
            id
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


    if (loading) return <Text>Loading</Text>;
    if (error) {
        console.log(JSON.stringify(error))
        return <Text>Error</Text>;
    }

    const { location, description, startTime } = data.Session

    const { name, image } = data.Session.speaker

    const [visible, setVisible] = useState(false)

    return (
        <ScrollView>
            <View>
                <Text>
                    Single Session is working
                </Text>
            </View>
            <View>
                <Text>{location}</Text>
                <Text>{startTime}</Text>
                <Text>{description}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => {
                    setVisible(true)
                }}>
                    <Text>Presented by:{name}</Text>
                    <Image source={{ uri: image }} />
                    {/* image doesnt show */}
                </TouchableOpacity>
            </View>
            <View>
                <Button
                    title="go to speakerModal"
                    onPress={() => navigation.navigate('Speaker')}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert('Modal closed.');
                }}>
                <View style={{ marginTop: 200, backgroundColor: '#000' }}>
                    <TouchableOpacity
                        onPress={() => {
                            setVisible(!visible);
                        }}>
                        <Text>Hide Modal text text fgnljagajdlfklks</Text>
                    </TouchableOpacity>
                    <SpeakerContainer />
                </View>
            </Modal>
        </ScrollView>
    )
}

export default withNavigation(Session);