import React from "react";
import { View, Text, SectionList } from "react-native";
import SessionCard from "../../components/SessionCard/SessionCard";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";
import { formatSessionData } from "../../components/helpers/dataFormatHelper";
import globalStyles from '../../globalStyles';

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

const Schedule = () => {
    const { loading, error, data } = useQuery(GET_SESSIONS);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    if (data)
        console.log(formatSessionData(data.allSessions), null, 2);

    console.log(data.allSessions);

    const groupedSessions = formatSessionData(data.allSessions)
    return (
        <View>
            <SectionList
                sections={groupedSessions}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) =>
                    <SessionCard
                        id={item.id}
                        title={item.title}
                        location={item.location}
                    >
                    </SessionCard>}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={globalStyles.sectionTitleCont}>
                        <Text style={globalStyles.sectionTitle}>{title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default withNavigation(Schedule);