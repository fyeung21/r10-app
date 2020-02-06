import React from "react";
import { View, Text, SectionList, Button, StyleSheet } from "react-native";
import SessionCard from "../../components/SessionCard/SessionCard";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";
import { formatSessionData } from "../../components/helpers/dataFormatHelper";

const GET_SESSIONS = gql`
    query {
        allSessions {
            id
            startTime
            title
            location
        }
    }
`;

const Schedule = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_SESSIONS);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    if (data)
        console.log(formatSessionData(data.allSessions), null, 2);

    const groupedSessions = formatSessionData(data.allSessions)
    return (
        <View>
            <SectionList
                sections={groupedSessions}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <SessionCard id={item.id} title={item.title} location={item.location}></SessionCard>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionTitle}>{title}</Text>
                )}
            />
            <Button
                title="Go to Single Session"
                onPress={() => navigation.navigate('Session')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    sectionTitle: {
        fontFamily: "Montserrat",
        fontSize: 20,
        backgroundColor: "lightgrey"
    }
});

export default withNavigation(Schedule);