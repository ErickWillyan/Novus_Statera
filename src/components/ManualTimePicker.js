import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

const ManualTimePicker = ({onTimeSelected}) => {
  const [enteredTime, setEnteredTime] = useState('');
  const [isValidFormat, setIsValidFormat] = useState(true);
  const [isTimeSaved, setIsTimeSaved] = useState(false);

  const handleTimeChange = (text) => {
    setEnteredTime(text);
    // A cada alteração, reavalia o formato do tempo
    checkTimeFormat(text);

    // Se o texto estiver vazio, redefine isTimeSaved para false
    if (!text.trim()) {
      setIsTimeSaved(false);
    }
  };

  const handleSave = () => {
    // Verifica se o formato do tempo é válido antes de salvar
    if (isValidFormat) {
      const formattedTime = formatTime(enteredTime);
      console.log('Tempo formatado:', formattedTime);
      // Define que o horário foi salvo com sucesso
      setIsTimeSaved(true);
      onTimeSelected(enteredTime)
      setIsValidFormat(true);
    } else {
      console.log('Formato de tempo inválido. Preencha todos os espaços.');
    }
  };

  // Função para formatar o tempo para uma string
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    return `${hours}:${minutes}`;
  };

  // Função para verificar se o formato do tempo é válido
  const checkTimeFormat = (timeString) => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    setIsValidFormat(timeRegex.test(timeString));
  };

  return (
    <View style={styles.container}>
      <TextInputMask
        style={[styles.input, !isValidFormat && styles.inputError]}
        placeholder="Escolha um horáro para a coleta"
        keyboardType="numeric"
        maxLength={5}
        value={enteredTime}
        type={'datetime'}
        options={{
          format: 'HH:mm',
        }}
        onChangeText={handleTimeChange}
      />
      {!isValidFormat && (
        <Text style={styles.errorMessage}>Formato de tempo inválido. Preencha todos os espaços.</Text>
      )}
      {isTimeSaved && (
        <Text style={styles.successMessage}>Horário salvo com sucesso!</Text>
      )}
      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color:"#008100"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  successMessage: {
    color: 'green',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ManualTimePicker;
