import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderNotifi() {
    return(
        <View style ={styles.container}>
            <Text style ={styles.texto}>Novus Statera</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        height: 70,
        width: '100%',
        justifyContent: 'center',
    },
    texto:{ 
        fontWeight: 650,
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#2E872E',
    },
})