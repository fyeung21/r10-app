import React from "react";
import { View, ScrollView, Text } from "react-native";
import { AsyncStorage } from "../../components/CodeofConduct/AsyncTest";

const Faves = () => {
    return (
        <ScrollView>
            <View>
                <Text>
                    Faves
                </Text>
                <AsyncStorage />
            </View>
        </ScrollView>
    )
}

export default Faves;