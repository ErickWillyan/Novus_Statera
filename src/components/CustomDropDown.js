import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CustomDropDown = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        items={options}
        onValueChange={(value) => handleValueChange(value)}
        value={selectedValue}
        placeholder={{ label: 'Selecione uma opção', value: null }}
        style={pickerSelectStyles}
      />
    </View>
  );
};


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fafafa',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fafafa',
  },
});

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
});

export default CustomDropDown;
