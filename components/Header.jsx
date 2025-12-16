import { colors } from "@/utils/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Input from "./Input";

export default function Header({
  title,
  showBack,
  showSearch,
  onBackPress,
  showLogout,
  onLogout,
  onSearchKeyword,
  keyWord,
}) {
  const [showSearchInput, setShowSearchInput] = useState(false);
  /* const onSearch = () => {
    setShowSearchInput(!showSearchInput);
  }; */
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <Pressable
            hitSlop={{ top: 10, bottom: 10, left: 30, right: 10 }}
            style={styles.button}
            onPress={onBackPress ? onBackPress : () => router.back()}
          >
            <MaterialIcons name="arrow-back" size={18} color={colors.blue} />
          </Pressable>
        ) : showSearch ? (
          <Pressable style={styles.searchIcon} hitSlop={20} onPress={() => setShowSearchInput(!showSearchInput)}>
            <Octicons name="search" size={30} color={colors.blue} />
          </Pressable>
        ) : null}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable style={styles.logoutButton} onPress={onLogout}>
            <MaterialIcons name="logout" size={18} color={colors.blue} />
          </Pressable>
        ) : (
          <View style={styles.space} />
        )}
      </View>
      {showSearchInput ? <Input onChangeText={onSearchKeyword} value={keyWord} placeholder="Search..." /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 16,
    backgroundColor: colors.white,
    borderBottomColor: colors.lightGray,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
  searchIcon: {
    padding: 8,
  },
  space: {
    width: 34, // Width to match the logout button size
  },
});
