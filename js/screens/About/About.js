import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
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
        <ScrollView>
            <View>
                <Image source={require("../../assets/images/r10_logo.png")} />
            </View>
            <View>
                <Text style={styles.heading}>
                    Code of Conduct heading h1
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
        fontWeight: 'bold',
        fontSize: 30,
    }
});

export default About;