import React from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import { colors } from "@/utils/colors";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function Input({ label, placeholder, isPassword, value, onChangeText }) {
  const [isPWVisible, setIsPWVisible] = useState(false);
  const onEyePress = () => {
    setIsPWVisible(!isPWVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPWVisible}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={"#c5c5c5"}
          value={value}
          onChangeText={onChangeText}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Feather
              name={isPWVisible ? "eye-off" : "eye"}
              size={24}
              color={colors.black}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",

    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    border: "none",
    width: 300,
    fontSize: 16,
    fontFamily: "Montserrat",
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat",
    fontWeight: "500",
    color: colors.blue,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 16,
    paddingRight: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
