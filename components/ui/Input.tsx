import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

export const Input = ({ value, onChangeText, placeholder, ...props }: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      { ...props }
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 353,
    height: 42,
    paddingVertical: 9,
    paddingHorizontal: 13,
    backgroundColor: "#FFFFFF",
    borderColor: "#D1D5DB",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10
  },
});
