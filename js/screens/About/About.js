import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import globalStyles from "../../globalStyles";
import CodeofConduct from "../../components/CodeofConduct/CodeofConduct";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_CONDUCT = gql`
    query {
        allConducts {
            id
            title
            description
            order
        }
    }
`;

const About = () => {
    const { loading, error, data } = useQuery(GET_CONDUCT);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/images/r10_logo.png")} />
            </View>
            <View>
                <Text style={globalStyles.body}>
                    R10 is a conference thats focuses on just any topic related to dev.
                </Text>
                <Text style={styles.heading}>
                    Date & Venue
                </Text>
                <Text style={globalStyles.body}>
                    The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.
                </Text>
            </View>
            <View>
                <Text style={styles.heading}>
                    Code of Conduct
                </Text>
            </View>
            <View>
                {data.allConducts.map(data => {
                    return (
                        <CodeofConduct
                            key={data.id}
                            title={data.title}
                            desc={data.description}
                            order={data.order} />
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: "Montserrat",
        fontSize: 32,
        marginVertical: 10
    },
    imageContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#e6e6e6"
    },
    image: {
        marginLeft: 100,
        marginVertical: 30,
        height: 50,
        resizeMode: 'contain'
    }
});

export default About;