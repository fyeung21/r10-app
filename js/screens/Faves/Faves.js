import React, { useContext } from 'react'
import { View, Text, SectionList } from 'react-native'
import { withNavigation } from 'react-navigation'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { FavesContext } from '../../context/FavesContext/FavesContext'
import { formatSessionData } from '../../components/helpers/dataFormatHelper'
import SessionCard from '../../components/SessionCard/SessionCard'
import globalStyles from '../../globalStyles'

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

const Faves = () => {
    const { loading, error, data } = useQuery(GET_SESSIONS)

    const { faveIds } = useContext(FavesContext)

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error</Text>;

    const filterFaves = data.allSessions.filter(data => faveIds.includes(data.id))

    const groupedSessions = formatSessionData(filterFaves)

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

export default withNavigation(Faves)