import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ou qualquer outro conjunto de ícones suportado

const ComboBox = ({ options, selectedOption, onSelect }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [comboBoxWidth, setComboBoxWidth] = useState(200); // Largura inicial do ComboBox
  const comboBoxRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    if (comboBoxRef.current) {
      comboBoxRef.current.measure((_ox, _oy, width, _height, _px, _py) => {
        setComboBoxWidth(width); // Define a largura com base nas dimensões reais do ComboBox
      });
    }
  };

  const handleSelectOption = (option) => {
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.comboBox} ref={comboBoxRef}>
        <Text>{selectedOption}</Text>
        <View style={styles.iconContainer}>
          {isDropdownVisible ? <Icon name="arrow-up" size={16} color="black" /> : <Icon name="arrow-down" size={16} color="black" />}
        </View>
      </TouchableOpacity>

      {isDropdownVisible && (
        <View style={[styles.dropdownContainer, { width: comboBoxWidth }]}>
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
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  comboBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  iconContainer: {
    marginLeft: 8, // Espaço entre o texto e a seta
  },
  dropdownContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    zIndex: 999,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  optionText: {
    maxWidth: '100%',
  },
});

export default ComboBox;
