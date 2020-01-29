import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useQuery } from '@apollo/react-hooks';
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

const Speaker = () => {
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

export default Speaker;