import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";

export default function ScreenPerfilColetor({ route }) {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/img/Juan.jpg")}
                style={styles.profileImage}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => console.log("Botão de Retorno Pressionado")}
                >
                    <ReturnButton />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.nome}>{`Nome`}</Text>
            </View>
            <View style={styles.FavContainer}>
                <Favorito />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    profileImage: {
        width: 400,
        height: 410,
        marginBottom: 345,
        borderWidth: 2,
        borderColor: "white",
    },
    buttonContainer: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    textContainer: {
        position: "absolute",
        bottom: 20,
    },
    FavContainer: {
        position: "absolute",
        bottom: 20,
        right: 10
    },
    nome: {
    color: "black",
    fontSize: 50,
    bottom: 350,
    right: 120,
    fontWeight: "bold",
},
});
