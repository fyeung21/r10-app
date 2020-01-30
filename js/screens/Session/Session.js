import React from "react";
import { View, ScrollView, Text, Image, Button } from "react-native";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";

const GET_SESSION = gql`
    query {
        Session(id:"cjh2j37mo163p01221qpcklry"){
            id
            description
            location
            startTime
            speaker {
              id
            }
        }
    }
`;

const Session = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_SESSION);
    const { title, location, description, startTime } = data.Session
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
                <Text>{title}</Text>
                {/* <Text>{data.title}</Text>
                <Text>{data.startTime}</Text>
                <Text>{data.description}</Text> */}
            </View>
            <View>
                <Text>Presented by:</Text>
                <Image source={data.Image} />
            </View>
            <View>
                <Button
                    title="go to speakerModal"
                    onPress={() => navigation.push('Speaker')}
                />
            </View>
        </ScrollView>
    )
}

export default withNavigation(Session);