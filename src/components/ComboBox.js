import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ComboBox = ({ options, selectedOption, onSelect }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [comboBoxWidth, setComboBoxWidth] = useState(200);
  const comboBoxRef = useRef(null);

  useEffect(() => {
    if (isDropdownVisible) {
      const maxOptionWidth = Math.max(
        ...options.map((option) => {
          const textWidth = getTextWidth(option);
          return textWidth;
        })
      );
      setComboBoxWidth(maxOptionWidth + 32); // Adicione algum espaço extra
    }
  }, [isDropdownVisible, options]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  const getTextWidth = (text) => {
    // Você pode usar uma biblioteca como 'react-native-text-size' para medir o texto em React Native
    // Aqui, vou definir uma largura padrão apenas para fins de exemplo
    return 200; // Aumente a largura para acomodar texto mais longo
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[styles.comboBox, { width: comboBoxWidth }]}
        ref={comboBoxRef}
      >
        <Text numberOfLines={1} style={styles.optionText}>
          {selectedOption}
        </Text>
        {isDropdownVisible ? (
          <AntDesign name="up" size={16} color="black" style={styles.icon} />
        ) : (
          <AntDesign name="down" size={16} color="black" style={styles.icon} />
        )}
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectOption(item)}
                style={styles.option}
              >
                <Text numberOfLines={1} style={styles.optionText}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  comboBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    borderColor: "gray",
    borderWidth: 1,
    zIndex: 999,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  optionText: {
    maxWidth: "100%",
    fontSize: 16,
    flexWrap: "nowrap", // Impede que o texto seja quebrado em várias linhas
  },
  icon: {
    marginLeft: 10,
  },
});

export default ComboBox;
