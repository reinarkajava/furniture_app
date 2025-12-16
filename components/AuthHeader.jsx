import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "@/utils/colors";
import { useRouter } from "expo-router";

export default function AuthHeader({ title, onBackPress }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{ top: 10, bottom: 10, left: 30, right: 10 }}
        style={styles.button}
        onPress={onBackPress ? onBackPress : () => router.back()}
      >
        <MaterialIcons name="arrow-back" size={18} color={colors.blue} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 54,
    marginRight: "auto",
  },
  button: {
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    color: colors.blue,
  },
});
