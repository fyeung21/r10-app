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
        fontSize: 30,
    },
    body: {
        marginVertical: 10,
        marginHorizontal: 5
    },
});

export default CodeofConduct;