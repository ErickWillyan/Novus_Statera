import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ placeholderText }) => {
  const [valorInput, setValorInput] = useState('');

  const lidarComMudancaDeInput = (texto) => {
    setValorInput(texto);
     };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={valorInput}
        onChangeText={lidarComMudancaDeInput}
        placeholder={placeholderText}
        placeholderTextColor="rgba(0, 129, 0, 0.34)"
        maxLength={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF8108',
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    padding: 10,
    width: 338,
    height: 52,
    flexShrink: 0,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default TextInputComponent;