import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CardColetor from "../../components/Cardcoletor";
import ComboBox from "../../components/ComboBox";

export default function ScreenHistorico() {
  const options = [
    "Mais Recentes",
    "Mais Antigos",
    "+ Óleo",
    "- Óleo",
    "Melhor Avaliação",
    "Pior Avaliação",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Ordenar por:</Text>
        <ComboBox
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          style={styles.comboBox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18, // Defina o tamanho do texto
    marginRight: 10,
  },
  comboBox: {
    width: 200, // Defina a largura do ComboBox
    height: 40, // Defina a altura do ComboBox
  },
});
