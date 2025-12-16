import Button from "@/components/Button";
import { colors } from "@/utils/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/images/splash.png")}
        style={styles.image}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={styles.innerTitle}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button
        title="Sign Up"
        onPress={() => {
          console.log("Sign Up Pressed");
          router.push("/SignUp");
        }}
      />
      <Pressable onPress={() => {
          console.log("Sign In Pressed");
          router.push("/SignIn");
        }}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.white,
    /* margin: "auto", */
    width: "100%",
    height: "100%",
    padding: 24,
    borderWidth: 0,
  },
  titleContainer: {
    marginVertical: 54,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "DM Sans",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.black,
  },
  innerTitle: {
    fontFamily: "DM Sans",
    fontSize: 40,
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
    color: colors.orange,
  },
  footerText: {
    fontFamily: "Montserrat",
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    textAlign: "center",
    color: colors.blue,
  },
});
