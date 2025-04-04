import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tab2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo a minha Tab 2</Text>
            <Text style={styles.text}> 🎀 </Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e24e9b",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    subtitle: {
        fontSize: 20,
        color: "white",
    },
});