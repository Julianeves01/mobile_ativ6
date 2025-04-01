import React from "react";
import { View, Text } from "react-native";

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a minha tab 2</Text>
            <Text style={styles.subtitle}> Julinha </Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e24e9b",
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