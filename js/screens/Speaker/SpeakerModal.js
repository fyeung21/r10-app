import React from "react";
import { View, ScrollView, Text, Image, Button, Linking, StyleSheet } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import globalStyles from "../../globalStyles";

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
            <View style={{ backgroundColor: "#fff" }}>
                <View>
                    <Image source={{ uri: image }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={globalStyles.body}>{bio}</Text>
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

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Montserrat",
        fontSize: 32,
        marginVertical: 10,
        textAlign: "center"
    },
    textContainer: {
        backgroundColor: "#fff",
        marginHorizontal: 10,
        borderRadius: 5
    }
});

export default SpeakerModal;