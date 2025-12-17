import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

// IMPORTANT: Check this path matches where your Products.js is stored
import products from "./data/Products";

import Button from "@/components/Button";
import Header from "@/components/Header";
import { colors } from "@/utils/colors";

const { width, height } = Dimensions.get("window");

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter(); // Add this line
  
  // Find the product in your array using the ID from the URL
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header showBack={true} showSearch={false} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image }} style={styles.image} />
        
        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          
          <Text style={styles.label}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
          
          {/* Padding for the bottom footer */}
          <View style={{ height: 120 }} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Back to homepage" 
          onPress={() => router.replace("/")} 
          style={{ flex: 1, marginTop: 0 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: width, height: height * 0.45 },
  infoCard: {
    marginTop: -30,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    minHeight: height * 0.6,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#333", flex: 1 },
  price: { fontSize: 20, fontWeight: "600", color: colors.blue },
  label: { fontSize: 18, fontWeight: "700", marginBottom: 10, color: "#444" },
  description: { fontSize: 16, lineHeight: 24, color: "#666" },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  }
});