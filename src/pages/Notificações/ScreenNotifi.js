import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ScreenNotifi() {

    const [feed, setFeed] = useState([
        {id: '1', nome: 'Mário da Silva de Jesus', cidade: 'Santana de Parnaíba - SP', data: '09 de dezembro, às 13h30', quantidade: '2'},
        {id: '2', nome: 'Rafael Martis Araújo', cidade: 'Santana de Parnaíba - SP', data: '13 de dezembro, às 15h10', quantidade: '4'},
        {id: '3', nome: 'Renan Costa Pereira', cidade: 'Barueri - SP', data: '10 de dezembro, às 14h00', quantidade: '2'},
        {id: '4', nome: 'Michael Jackson', cidade: 'Cajamar - SP', data: '8 de dezembro, às 16h30', quantidade: '3'},
        {id: '5', nome: 'Erick Willyan dos Santos Cruz', cidade: 'Santana de Parnaíba - SP', data: '02 de janeiro, às 12h30', quantidade: '5'},
        {id: '6', nome: 'Guilherme Lima Seredko', cidade: 'Santana de Parnaíba - SP', data: '30 de fevereiro, às 11h00', quantidade: '2' },
    ]);

    return(
     <View style={styles.container}>

        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id} 
        data={feed}
        renderItem={({ item }) => <Pessoa data={item}/>}
        />

     </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    textSolicitou:{
        color: '#2E872E',
        fontWeight: 650,
    },
    textoCidade: {
        fontSize: 19,
        color: '#0F0F0F',
        fontWeight: 650,
    },
    textoInfo:{
        color: '#3F3F3E',
        fontSize: 15, 
        fontWeight: 650,
    },
})

function Pessoa(props){
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.textoNome}>{props.data.nome}</Text>
            <Text style={styles.textSolicitou}>Solicitou uma coleta</Text>
            <Text style={styles.textoCidade}>{props.data.cidade}</Text>
            <Text style={styles.textoInfo}>{props.data.data}</Text>
            <Text style={styles.textoInfo}>{props.data.quantidade} Litros de óleo disponíveis</Text>
        </View>
    )
}