
import { View, Text, StyleSheet, Image } from "react-native";
import { Overlay } from "react-native-elements";    

export default function Page() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/fundo_rosa.jpg")} />
            <View style={styles.content}>
                <Text style={styles.title}>Bem vindo a minha Page!!</Text>
                <Text style={styles.subtitle}>🎀</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    content: {
    backgroundColor: "#e6ccff",
    width: "90%",
    height: "60%",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    },

    title: {
        padding: 2,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "600",
        color: "white",
        marginTop: 10,
    },

    subtitle: {
        padding: 10,
        marginTop: '20',
        fontSize: 17,
        color: "white",
        textAlign: "center",
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        resizeMode: "cover",
    },
});