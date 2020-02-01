import React from "react";
import { View, ScrollView, Text, SectionList, Button } from "react-native";
import ScheduleList from "../../components/ScheduleList/ScheduleList";
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { withNavigation } from "react-navigation";

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

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
];

const groupByStartTime = (sessions) => {
    let sessionsObj = sessions.reduce((output, session) => {
        if (output[session.startTime]) {
            output[session.startTime] = output[session.startTime].push(session);
        } else {
            output[session.startTime] = [session];
        }

        return output;
    }, {})

    let sessionsArr = [];

    for (let time in sessionsObj) {
        sessionsArr.push({
            title: time,
            data: sessionsObj[time]
        })
    }
    return sessionsArr;
};


const Schedule = ({ navigation }) => {
    const { loading, error, data } = useQuery(GET_SESSIONS);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;


    console.log(DATA)

    let groupedSessions = groupByStartTime(data.allSessions);
    console.log(JSON.stringify(groupedSessions))
    return (
        <View>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Text>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
            />
            <Button
                title="Go to Single Session"
                onPress={() => navigation.navigate('Session')}
            />
        </View>
    )
}

export default withNavigation(Schedule);