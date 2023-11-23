import React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";

export default function ScreenPontoColeta({ route }) {
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [nome, setNome] = useState("");

    const handleEnderecoChange = (text) => {
        setEndereco(text);
        logAllFields(); // Exibe todos os campos preenchidos no console
    };

    const handleNumeroChange = (text) => {
        setNumero(text);
        logAllFields(); // Exibe todos os campos preenchidos no console
    };

    const handleComplementoChange = (text) => {
        setComplemento(text);
        logAllFields(); // Exibe todos os campos preenchidos no console
    };

    const handleNomeChange = (text) => {
        setNome(text);
        logAllFields(); // Exibe todos os campos preenchidos no console
    };

    const logAllFields = () => {
        console.log("Endereço:", endereco);
        console.log("Número:", numero);
        console.log("Complemento:", complemento);
        console.log("Nome:", nome);
    };

    return (
        <View style={styles.container}>
            <CustomTextInput
                valorInput={endereco}
                textChange={handleEnderecoChange}
                placeholderText={"Endereço"}
            />
            <View style={styles.containerInputs}>
                <View style={styles.numeroContainer}>
                    <CustomTextInput
                        valorInput={numero}
                        textChange={handleNumeroChange}
                        placeholderText={"Nº"}
                    />
                </View>
                <View style={styles.complementoContainer}>
                    <CustomTextInput
                        valorInput={complemento}
                        textChange={handleComplementoChange}
                        placeholderText={"Complemento"}
                    />
                </View>
            </View>
            <View style={styles.nomeContainer}>
                <CustomTextInput
                    valorInput={nome}
                    textChange={handleNomeChange}
                    placeholderText={"Nomear como:"}
                    style={{ fontSize: 14 }}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title={"Confirmar"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 90,
    },
    containerInputs: {
        marginTop: 20,
    },
    numeroContainer: {
        marginTop: 150,
    },
    complementoContainer: {
        marginTop: 100,
    },
    buttonContainer: {
        alignItems: "center", // Alinha o conteúdo no centro verticalmente
        marginTop: 20,
    },
    nomeContainer:{
        marginTop: 100,
        marginBottom:100,
    }
});
