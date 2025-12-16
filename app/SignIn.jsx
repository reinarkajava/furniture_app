import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Sep from "@/components/Sep";
import { colors } from "@/utils/colors";
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onPress={() => navigation.goBack()} />
      <Input label={"E-mail"} placeholder={"Email"} />
      <Input isPassword={true} label={"Password"} placeholder={"***"} />
        <Button title="Sign In" onPress={() => router.push("/Home/Home")} />
        <Sep text="Or sign in with" />
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.googleBtn}>
                <Fontisto name="google" size={36} color="white" />
            </View>
            
        </TouchableOpacity>
        <Pressable  onPress={() => {
          console.log("Sign Up Pressed");
          router.push("/SignUp");
        }}>
          <Text style={styles.footerText}>Don't have an account?
            <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
          </Text>
        </Pressable>
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
    width: "100%",
    height: "100%",
    padding: 24,
    borderWidth: 0,
  },
    googleBtn: {
    backgroundColor: colors.googleGray,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 142,
  },
  footerText: {
    color: colors.blue,
    fontSize: 14,
    marginTop: 12,
    marginBottom: 56,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
});