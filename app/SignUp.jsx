import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Sep from "@/components/Sep";
import { colors } from "@/utils/colors";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SignUp() {
    const [checked, setChecked] = useState(false);
    const router = useRouter();
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onPress={() => navigation.goBack()} />
      <Input label={"Name"} placeholder={"Username"} />
      <Input label={"E-mail"} placeholder={"Email"} />
      <Input isPassword={true} label={"Password"} placeholder={"***"} />
      <View style={styles.termsContainer}>
        <Pressable hitSlop={10} onPress={() => setChecked(!checked)}>
          <MaterialCommunityIcons name={checked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
        </Pressable>
        <Text style={styles.termsText}>
          I agree with <Text style={{ fontWeight: "bold" }}>Terms </Text>&{" "}
          <Text style={{ fontWeight: "bold" }}>Privacy Policy</Text>
        </Text>
      </View>

        <Button title="Sign Up" onPress={() => console.log("Sign Up Pressed")} />
        <Sep text="Or sign up with" />
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.googleBtn}>
                <Fontisto name="google" size={36} color="white" />
            </View>
            
        </TouchableOpacity>
        <Pressable  onPress={() => {
          console.log("Sign In Pressed");
          router.push("/SignIn");
        }}>
          <Text style={styles.footerText}>Already have an account?
            <Text style={{ fontWeight: "bold" }}> Sign In</Text>
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
    /* margin: "auto", */
    width: "100%",
    height: "100%",
    padding: 24,
    borderWidth: 0,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: "auto",
  },
  termsText: {
    color: colors.blue,
    fontSize: 14,
    paddingLeft: 8,
    fontFamily: "Montserrat",
  },
  googleBtn: {
    backgroundColor: colors.googleGray,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 142,
    
  },
  googleTxt: {
    fontSize: 48,
    fontWeight: "bold",
    fontFamily: "Product Sans",
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
