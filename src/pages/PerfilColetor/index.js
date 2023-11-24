import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";
import ReturnButton from "../../components/ReturnButton";
import Favorito from "../../components/Favorito";
import ColetorInfo from "../../components/ColetorInfo";
import Calendario from "../../components/Calendario";
import NumberSelector from "../../components/NumberSelector";




export default function ScreenPerfilColetor({ route }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
        const handleDropdownChange = (value) => {
        setSelectedOption(value);
        console.log('Opção Selecionada:', value);
    };

    const handleTimeSelected = (time) => {
        console.log('Tempo selecionado:', time);
    };    

    return (
        <View style={styles.container}>
            <Modal style={styles.modal} visible={modalOpen} animationType="slide">
                <View>
                    <View style={{marginTop:10, marginLeft:10}}>
                    <ReturnButton onPress={closeModal} />
                    </View>
                    <View style={{alignSelf:"center", fontSize:20}}><Text style={{fontSize:35, bottom:"100%", color:"#429241"}}>Agendar Coleta</Text></View>
                    <View style={{bottom:80}}>
                    <View style={{top:70, left:130}}>
                        <Text style={{fontSize:20, color:"#429241"}}>Selecione um dia</Text>
                    </View>
                        <Calendario />
                    </View>
                        <View style={{bottom:70, right:90, bottom:140, alignSelf:"center"}}>
                        <View><Text style={{fontSize:20, left:0, color:"#429241"}}>Quantidade de óleo</Text></View>
                            <NumberSelector/>
                        </View>
                </View>
            </Modal>
            <Image
                source={require("../../assets/img/Juan.jpg")}
                style={styles.profileImage}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{ right: '250%' }}>
                    <ReturnButton />
                </TouchableOpacity>
                <TouchableOpacity style={{ left: '250%' }} onPress={() => setModalOpen(true)}>
                    <Text>Agendar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.nome}>{`Nome`}</Text>
                <Text style={styles.endereco}>{`Endereço`}</Text>
            </View>
            <View style={styles.FavContainer}>
                <Favorito />
            </View>
            <View style={{ top: 250 }}>
                <ColetorInfo style={styles.card} coletas="125" avaliacao={1.5} />
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
        width: '101%',
        height: 410,
        top: -2,
        borderWidth: 2,
        borderColor: "white",
        position: "absolute"
    },
    buttonContainer: {
        position: "absolute",
        top: 20,
        flex: 1,
        flexDirection: "row",

    },
    textContainer: {
        position: "absolute",
        left: 5,
        bottom: 200
    },
    FavContainer: {
        position: "absolute",
        bottom: 240,
        right: 10
    },
    nome: {
        color: "black",
        fontSize: 50,
        fontWeight: "bold",
    },
    endereco: {
        color: "grey",
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        bottom: "10",
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 0,
    },
});
