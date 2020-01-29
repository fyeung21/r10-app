import React from "react";
import { View, ScrollView, Text, Image, Button } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const GET_SESSIONS = gql`
    query {
        allSessions {
            id
            startTime
            location
            title
            description
            speaker {
                id
            }
        }
    }
`;

const Session = () => {
    const { loading, error, data } = useQuery(GET_SESSIONS);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    return (
        <ScrollView>
            <View>
                <Text>
                    Single Session is working
                </Text>
            </View>
            <View>
                <Text>{data.location}</Text>
                <Text>{data.title}</Text>
                <Text>{data.startTime}</Text>
                <Text>{data.description}</Text>
            </View>
            <View>
                <Text>Presented by:</Text>
                <Image source={data.Image} />
            </View>
            <View>
                {/* <Button>{'remove from faves'}</Button> */}
            </View>
        </ScrollView>
    )
}

export default Session;