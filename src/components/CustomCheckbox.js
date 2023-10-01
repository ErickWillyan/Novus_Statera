import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBox
      title=" "
      checked={isChecked}
      onPress={toggleCheckbox}
      containerStyle={{
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: 0,
        padding: 0,
      }}
      checkedColor="green" // Cor quando a checkbox está marcada
    />
  );
};

export default CustomCheckbox;