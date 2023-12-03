import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListItem(props) {
    return(
        <View style={styles.areaPessoa}>
            <View style={styles.areaRow}>
                <Avatar
                    size="large"
                    rounded
                    source={{
                        uri: '../../assts/img/Logo.png',
                    }}
                />
                <View style={styles.areaTextos}>
                    <Text style={styles.textoNome}>{props.data.nome}</Text>
                    <Text style={styles.textoSolicitou}>Solicitou uma coleta</Text>
                    <Text style={styles.textoCidade}>{props.data.cidade}</Text>
                    <View style={styles.iconContainer}>
                        <View style={styles.circunferencia}></View>
                        <Text style={styles.textoInfo}>{props.data.data}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon name="tint" size={20} color="#FF8108" />
                        <Text style={styles.textoInfo}> {props.data.quantidade} Litros de óleo disponíveis</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.botao, styles.buttonNegar]}>
                    <Text style={styles.textoBotao}>Negar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botao, styles.buttonConfirmar]}>
                    <Text style={styles.textoBotao}>Aceitar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    areaPessoa: {
        backgroundColor: '#ADADAD',
        height: 158,
        marginBottom: 3,
    },
    textoNome: {
        color: '#0F0F0F',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '750',
    },
    textoSolicitou:{
        color: '#2E872E',
        fontWeight: 650,
    },
    textoCidade: {
        color: '#0F0F0F',
        fontSize: 19,
        fontWeight: 650,
    },
    textoInfo:{
        color: '#3F3F3E',
        fontSize: 15, 
        fontWeight: 650,
    },
    buttonsContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    botao: {
        width: 100,
        height: 35,
        padding: 8,
        borderRadius: 10,
    },  
    buttonConfirmar: {
        backgroundColor: '#4CAF50',
        marginRight: 60,
        marginLeft: 40,
    },
    buttonNegar: {
        backgroundColor: '#AF504C',
        marginRight: 40,
        marginLeft: 60,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#FFF',
    },  
    areaRow: {
        flexDirection: 'row',
    },
    areaTextos:{
        marginLeft: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circunferencia: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#32CD32',
        marginRight: 8,
    },
})