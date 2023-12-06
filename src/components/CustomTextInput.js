import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";

const CustomTextInput = ({ placeholderText, valorInput, textChange, isPassword, showPasswordButton, isRgMasked, isPhoneMasked }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {isRgMasked ? (
          <TextInputMask
            style={styles.input}
            type={"custom"}
            options={{
              mask: "99.999.999-9",
            }}
            value={valorInput}
            onChangeText={textChange}
            placeholder={placeholderText}
            placeholderTextColor="#008100"
            secureTextEntry={!showPassword && isPassword}
          />
        ) : isPhoneMasked ? (
          <TextInputMask
            style={styles.input}
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={valorInput}
            onChangeText={textChange}
            placeholder={placeholderText}
            placeholderTextColor="#008100"
          />
        ) : (
          <TextInput
            style={styles.input}
            value={valorInput}
            onChangeText={textChange}
            placeholder={placeholderText}
            placeholderTextColor="#008100"
            underlineColorAndroid="transparent"
            secureTextEntry={!showPassword && isPassword}
          />
        )}
        {showPasswordButton && (
          <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#008100" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#FF8108",
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    width: 300,
    height: 52,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "black",
    fontSize: 20,
    fontStyle: "normal",
    lineHeight: 24,
  },
  iconContainer: {
    padding: 8,
  },
});

export default CustomTextInput;
