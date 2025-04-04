import React from "react";
import { View, Text} from "react-native";
import { StyleSheet } from "react-native";


export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎀 Oi amigos e amigas!</Text>
            <Text style={styles.subtitle}>Bem vindos ao Tab Screen da Julinha!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d03b8a",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
    subtitle: {
        fontSize: 20,
        color: "white",
    },

});