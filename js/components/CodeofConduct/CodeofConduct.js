import React from "react";
import { View, ScrollView, Text } from "react-native";

const CodeofConduct = (data) => {
    return (
        <ScrollView>
            <View>
                <Text>
                    {data.title}
                </Text>
                <Text>
                    {data.desc}
                </Text>
            </View>
        </ScrollView>
    )
}

export default CodeofConduct;