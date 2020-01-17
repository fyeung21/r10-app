import React from "react";
import { View, Text } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import About from "./About";

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

function CodeOfConduct() {
    const { loading, error, data } = useQuery(GET_CONDUCT);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    return (
        <View>
            <About />
        </View>
    );
}

const AboutContainer = () => {
    return (
        <View>
            <CodeOfConduct />
        </View>
    )
}

export default AboutContainer;
