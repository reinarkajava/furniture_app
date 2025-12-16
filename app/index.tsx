import App from "@/app/App.jsx";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <App></App>
      </View>
    </SafeAreaProvider>
  );
}
