import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_SPEAKERS = gql`
    query {
        allSpeakers {
            id
            bio
            image
            name
            session {
                id
            }
            url
        }
    }
`;

const SpeakerModal = () => {
    const { loading, error, data } = useQuery(GET_SPEAKERS);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    return (
        <ScrollView>
            <View>
                <Text>
                    Single Speaker is working
                </Text>
            </View>
            <View>
                <Image source={data.image} />
            </View>
            <View>
                <Text>{data.name}</Text>
                <Text>{data.bio}</Text>
            </View>
            <View>
                <Text>{data.url}</Text>
            </View>
        </ScrollView >
    )
}

export default SpeakerModal;