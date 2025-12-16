import Header from "@/components/Header";
import TabMenu from "@/components/TabMenu";
import { colors } from "@/utils/colors";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import products from "../data/Products";

export default function Favorites() {
  const [favorites, setFavorites] = useState(products);
  const renderFavoriteItem = ({ item }) => {
    return (
      <Pressable style={styles.favoriteItem}>
        <Image
          source={{ uri: item.image }}
          style={styles.favoriteImage}
          resizeMode="cover"
        />
        <View style={styles.favoriteDetails}>
          <Text style={styles.favoriteTitle}>{item.title}</Text>
          <Text style={styles.favoritePrice}>{item.price}</Text>
        </View>
        <View style={styles.removeIcon}>
          {/* A possible area for a remove button/icon */}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Header title="Favorites" />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={{ height: 80 }} />}
        />
        <Text style={styles.subtitle}>
          Your favorite items will appear here.
        </Text>
      </View>
      <TabMenu atFavorites={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: "#888",
  },
  favoriteImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  favoriteItem: {
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  favoritePrice: {
    fontSize: 14,
    color: "#888",
  },
  favoriteDetails: {
    flexDirection: "column",
    flex: 1,
  },
  removeIcon: {
    paddingLeft: 3,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});