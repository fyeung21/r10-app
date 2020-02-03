import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";

const CodeofConduct = (data) => {
    const [toggle, setToggle] = useState(false);

    const animate = LayoutAnimation.create(400, 'linear', 'opacity');

    return (
        <ScrollView>
            <View>
                <TouchableOpacity onPress={() => {
                    setToggle(!toggle)
                    LayoutAnimation.configureNext(animate)
                }}>
                    <Text style={styles.heading}>
                        {data.title}
                    </Text>
                </TouchableOpacity>
                {toggle &&
                    <Text style={styles.body}>
                        {data.desc}
                    </Text>
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontFamily: "Montserrat",
        fontSize: 24,
        color: "#9963EA",
        marginVertical: 10,
    },
    body: {
        fontFamily: "Montserrat-Light",
        fontSize: 20,
        lineHeight: 28,
        marginHorizontal: 5,
        marginVertical: 10
    }
});

export default CodeofConduct;