import { StyleSheet, View, Text, Image} from "react-native";
import { Overlay } from "react-native-elements";


export default function Feed() {
    return (
        <View style={styles.container}>
                    <Image style={styles.image} source={require("../assets/fundo_rosa.jpg")} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Bem vindo a minha Page 2!!</Text>
                        <Text style={styles.subtitle}>🎀</Text>
                    </View>
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
    content: {
    backgroundColor: "#e6ccff",
    width: "90%",
    height: "34%",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    },

    title: {
        padding: 10,
        fontSize: 23,
        textAlign: "center",
        fontWeight: "600",
        color: "white",
        marginTop: 10,
    },

    subtitle: {
        padding: 10,
        fontSize: 16,
        color: "white",
        textAlign: "ceter",
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        resizeMode: "cover",
    },
});