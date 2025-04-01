import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Screen da Julinha</Text>
        </View>
    );
}

const styles = {
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d03b8a",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
};