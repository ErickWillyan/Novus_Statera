import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
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
    marginLeft: 100,
    top: 100,
    position: "absolute"
  },
  text: {
    fontSize: 18,
    marginRight: 10,
  },
  comboBox: {
    width: 200,
    height: 40,
  },
});
