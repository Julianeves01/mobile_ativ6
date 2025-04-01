import React from "react";
import { View, Text } from "react-native";

export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Screen</Text>
            <Text style={styles.subtitle}> Julinha </Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d03b8a",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    subtitle: {
        fontSize: 18,
        color: "#555",
    },
};