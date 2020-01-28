import React from "react";
import { View, ScrollView, Text } from "react-native";
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
                {/* {data.allConducts.map(data => {
                    return (
                        <CodeofConduct
                            key={data.id}
                            title={data.title}
                            desc={data.description}
                            order={data.order} />
                    )
                })} */}
            </View>
        </ScrollView>
    )
}

export default Session;