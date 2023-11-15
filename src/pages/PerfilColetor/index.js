import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import CardColetor from "../../components/CardColetor";

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
                <Text style={styles.endereco}>{`Endereço`}</Text>
            </View>
            <View style={styles.FavContainer}>
                <Favorito /> 
            </View>
            <CardColetor style={styles.cardColetor} title="Título do Card" content="Conteúdo do Card" />
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
        top:-2,
        borderWidth: 2,
        borderColor: "white",
        position: "absolute"
    },
    buttonContainer: {
        position: "absolute",
        top: 20,
        left: 20,
    },
    textContainer: {
        position: "absolute",
        left:5,
        bottom:200
    },
    FavContainer: {
        position: "absolute",
        bottom: 280,
        right: 10
    },
    nome: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    },
    endereco:{
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
    },
    cardColetor: {
        bottom: 10,
    },
});
