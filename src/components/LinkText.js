import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function LinkText({ placeholder, targetScreen }) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    // Navegue para a tela alvo quando o link for clicado
    navigation.navigate(targetScreen);
  };

  return (
    <View>
      <Text>
        <TouchableOpacity onPress={handleNavigation}>
          <Text style={[styles.link, { textDecorationLine: "underline" }]}>
            {placeholder}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#008100",
  },
});

export default LinkText;