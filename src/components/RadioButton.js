import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class RadioButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }

  handleOptionChange = (option) => {
    this.setState({
      selectedOption: option,
    });

    // Executar uma função de retorno (se necessário)
    if (this.props.onSelect) {
      this.props.onSelect(option);
    }
  };

  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;

    return (
      <View style={{ flexDirection: 'row' }}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => this.handleOptionChange(option)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 16, // Adiciona margem direita para espaçamento
            }}
          >
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedOption === option ? '#008100' : 'gray',
                backgroundColor:
                  selectedOption === option ? '#008100' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {selectedOption === option && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: 'white',
                  }}
                />
              )}
            </View>
            <Text
              style={{
                marginLeft: 8,
                color: selectedOption === option ? '#008100' : 'black', // Define a cor do texto
              }}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default RadioButton;
