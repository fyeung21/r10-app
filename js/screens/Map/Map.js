import React from "react";
import { View, ScrollView, Image, StyleSheet } from "react-native";

const Map = () => {
    return (
        <ScrollView>
            <View>
                {/* <Image source={require("../../assets/images/map_pin.png")} /> */}
                <Image style={styles.map} source={require("../../assets/images/map.png")} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 700
    },
})

export default Map;