import React from "react";
import { View, ScrollView, Text, Image, Button, Linking } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_SPEAKER = gql`
    query SpeakerQuery ($id: ID!) {
        Speaker(id: $id){
            id
            name
            bio
            image
            url
        }
    }
`;

const SpeakerModal = () => {
    const { loading, error, data } = useQuery(GET_SPEAKER, {
        variables: { id: "cjh2ka8z500gs0108v08v6pyk" }
    });

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    const { name, bio, image, url } = data.Speaker

    return (
        <ScrollView>
            <Text>
                About the Speaker
                </Text>
            <View style={{ backgroundColor: "#fff" }}>
                <View>
                    <Image source={{ uri: image }} />
                </View>
                <View>
                    <Text>{name}</Text>
                    <Text>{bio}</Text>
                </View>
                <View>
                    <Button
                        title="go to wiki bio"
                        onPress={() => Linking.openURL(url)}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SpeakerModal;