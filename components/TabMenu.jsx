import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "@/utils/colors";
import Home from "@/app/Home/Home";
import Favorites from "@/app/Favorites/Favorites";
import Profile from "@/app/Profile/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

export default function TabMenu({ atHome, atFavorites, atProfile }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => router.push("/Home/Home")}
      >
        <Ionicons
          name={atHome ? "home" : "home-outline"}
          size={50}
          color={colors.blue}
        />
      </Pressable>

      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => router.push("/Favorites/Favorites")}
      >
        <MaterialIcons
          name={atFavorites ? "favorite" : "favorite-border"}
          size={50}
          color={colors.blue}
        />
      </Pressable>

      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => router.push("/Profile/Profile")}
      >
        <Ionicons
          name={atProfile ? "person" : "person-outline"}
          size={50}
          color={colors.blue}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   /*  flex: 1, */
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: "#837e7eff",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  tabItem: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
