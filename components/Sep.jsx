import { colors } from "@/utils/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Separator({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightgray,
    marginVertical: 8,
  },
  text: {
    paddingHorizontal: 8,
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.grey,
  },
});
