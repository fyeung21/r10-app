import React from "react";
import { View, ScrollView, Text, Image } from "react-native";

const Map = () => {
    return (
        <ScrollView>
            <View>
                <Text>
                    Map
                </Text>
                <Image source={require("../../assets/images/map_pin.png")} />
            </View>
        </ScrollView>
    )
}

export default Map;