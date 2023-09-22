import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CardColetor from "../../components/Cardcoletor";
import ComboBox from '../../components/ComboBox';

export default function ScreenHistorico() {
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (

    
    <View style={styles.container}>
      <View>
      <CardColetor
        perfilImageUrl="https://exemplo.com/seu-perfil.jpg"
        nome="Joo da Silva"
        endereco="Osasco-SP"
      />
      </View>
    <View>
      <ComboBox options={options} selectedOption={selectedOption} onSelect={handleSelect} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});