import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ScreenNotifi() {

    const [feed, setFeed] = useState([
        {id: '1', nome: 'Mário da Silva de Jesus', cidade: 'Santana de Parnaíba - SP', data: '09 de dezembro, às 13h30'},
        {id: '2', nome: 'Rafael Martis Araújo', cidade: 'Santana de Parnaíba - SP', data: '13 de dezembro, às 15h10'},
        {id: '3', nome: 'Renan Costa Pereira', cidade: 'Barueri - SP', data: '10 de dezembro, às 14h00'},
        {id: '4', nome: 'Michael Jackson', cidade: 'Cajamar - SP', data: '8 de dezembro, às 16h30'},
        {id: '5', nome: 'Erick Willyan dos Santos Cruz', cidade: 'Santana de Parnaíba - SP', data: '02 de janeiro, às 12h30'},
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
        backgroundColor: '#121212',
        height: 200,
        marginBottom: 15,
    },
    textoPessoa: {
        color: '#FFF',
        fontSize: 20, 
    },
})

function Pessoa(props){
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.textoPessoa}>{props.data.nome}</Text>
            <Text style={styles.textoPessoa}>{props.data.cidade}</Text>
            <Text style={styles.textoPessoa}>{props.data.data}</Text>
        </View>
    )
}