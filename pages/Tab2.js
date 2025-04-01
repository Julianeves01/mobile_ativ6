import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a minha Tab 2</Text>
            <Text style={styles.text}> Julinha </Text>
        </View>
    );
}

const styles = {
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e24e9b",
    },
    title: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    text: {
        fontSize: 18,
        color: "#555",
    },
};