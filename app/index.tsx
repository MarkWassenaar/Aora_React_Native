import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
// import { TailwindProvider } from "tailwindcss-react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    // <TailwindProvider>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl">Maplenator</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
    // </TailwindProvider>
  );
};

export default App;
