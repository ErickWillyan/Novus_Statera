import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

export default function ScreenNotifi() {

    const [feed, setFeed] = useState([
        {id: '1', nome: 'Matheus', idade: '50', email: 'matheus@matheus.com'},
        {id: '2', nome: 'LambaLamba', idade: '30', email: 'lambarina@lubas.com'},
        {id: '3', nome: 'Maicon', idade: '5', email: 'MJ@jackson.com'},
        {id: '4', nome: 'Elvis Presley', idade: '80', email: 'elvis@presley.com'},

    ]);

    return(
     <View style={styles.container}>

        <FlatList
        data={feed}
        renderItem={({ item }) => }
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
    },
})

function Pessoa(){
    return(
        <View style={styles.areaPessoa}>
            <Text>Minha Lista</Text>
        </View>
    )
}