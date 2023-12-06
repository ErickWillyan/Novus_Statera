import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const NumberSelector = ({onNumberPress}) => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    const newNumber = number + 1;
    setNumber(newNumber);
    // console.log('Valor selecionado:', newNumber);
    onNumberPress(newNumber)
  };

  const decrementNumber = () => {
    if (number > 0) {
      const newNumber = number - 1;
      setNumber(newNumber);
      console.log('Valor selecionado:', newNumber);
      onNumberPress(newNumber)
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrementNumber} style={styles.decrementButton}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <View style={styles.numberBox}>
        <Text style={styles.numberText}>{number} L</Text>
      </View>

      <TouchableOpacity onPress={incrementNumber} style={styles.incrementButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  decrementButton: {
    backgroundColor: '#FF8108',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  numberBox: {
    width: 90,
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  incrementButton: {
    backgroundColor: '#008100',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default NumberSelector;
