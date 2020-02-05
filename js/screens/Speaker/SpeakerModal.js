import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
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
            <View>
                <View style={styles.textContainer}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text style={styles.heading}>{name}</Text>
                    <Text style={globalStyles.body}>{bio}</Text>
                    <TouchableOpacity
                        style={globalStyles.btn}
                        onPress={() => Linking.openURL(url)}>
                        <Text style={globalStyles.btnText}>Read More on Wikipedia</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 10
    },
    heading: {
        fontFamily: "Montserrat",
        fontSize: 32,
        marginVertical: 10,
        textAlign: "center"
    },
    image: {
        height: 135,
        width: 135,
        borderRadius: 70,
        marginHorizontal: 115,
        marginTop: 30
    }
});

export default SpeakerModal;