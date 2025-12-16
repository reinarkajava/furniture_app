import categories from "@/app/data/Categories";
import products from "@/app/data/Products";
import Header from "@/components/Header";
import TabMenu from "@/components/TabMenu";
import { colors } from "@/utils/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
const { width } = Dimensions.get("window");

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [keyWord, setKeyWord] = useState("");

  useEffect(() => {
    if (selectedCategory && !keyWord) {
      const updatedSelectedProducts = products.filter(
        (product) => product.category === selectedCategory
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && keyWord) {
      const updatedSelectedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(keyWord.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (selectedCategory && keyWord) {
      const updatedSelectedProducts = products.filter(
        (product) =>
          product.category === selectedCategory &&
          product.title.toLowerCase().includes(keyWord.toLowerCase())
      );
      setSelectedProducts(updatedSelectedProducts);
    } else if (!selectedCategory && !keyWord) {
      setSelectedProducts(products);
    }
  }, [selectedCategory, keyWord]);
  // category FlatList render item
  const renderCatList = ({ item }) => {
    const isSelected = selectedCategory === item?.id;
    return (
      <Pressable
        onPress={() => {
          setSelectedCategory(item?.id);
          console.log("Selected category:", item.title);
        }}
        isSelected={selectedCategory === item?.id}
        style={styles.iconTitle}
      >
        <View
          style={[
            styles.icon,
            isSelected ? { borderWidth: 3 } : { borderWidth: 0 },
          ]}
        >
          <MaterialIcons name={item.icon} size={24} color={colors.blue} />
        </View>
        <Text
          style={[
            { color: isSelected ? colors.blue : colors.textGray },
            isSelected ? { fontWeight: "600" } : { fontWeight: "400" },
          ]}
        >
          {item.title}
        </Text>
      </Pressable>
    );
  };

  const renderProductList = ({ item, isSelected }) => {
    return (
      <Pressable
        onPress={() => console.log(item.title)}
        style={styles.productsContainer}
      >
        <Image
          style={styles.productImage}
          source={{ uri: item.image }}
          resizeMode="cover"
        />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}> {item.price}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Header
          title="Find All You Need"
          showSearch={true}
          onSearchKeyword={setKeyWord}
          keyWord={keyWord}
        />
        <View style={styles.iconContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: "row",
              gap: 25,
              overflowY: "scroll",
            }}
            data={categories}
            renderItem={renderCatList}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={selectedProducts}
          renderItem={renderProductList}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={<View style={{ height: 80 }} />}
        />
      </View>
      <TabMenu atHome={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    /* margin: "auto", */
    width: "100%",
    height: "100%",
    padding: 24,
    borderWidth: 0,
  },
  outerContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.lightgray,
    borderColor: colors.blue,
    width: 50,
    height: 50,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 25,
    marginTop: 20,
    /* marginRight: -60,
    marginLeft: -20, */
    marginHorizontal: -100,
    width: "100%",
    zIndex: 5,
  },
  iconTitle: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center",
  },
  productsContainer: {
    marginHorizontal: 8,
    marginBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: width / 2 - 40,
    height: 220,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textGray,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.black,
  },
});
