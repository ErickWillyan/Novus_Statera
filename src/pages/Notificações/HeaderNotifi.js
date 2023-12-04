import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderNotifi() {
    return(
        <View style={styles.container}>
            <View style={styles.rowHeader}>
                <Text style ={styles.texto}>Novus</Text>
                <Text style ={[styles.texto, styles.texto2]}> Statera</Text>
            </View>
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
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#2E872E',
    },
    texto2:{
    },
    rowHeader:{
        flexDirection:'row',
    },
})