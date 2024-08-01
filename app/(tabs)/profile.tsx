import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl">Maplenator and Maria </Text>

      <StatusBar style="auto" />
    </View>
  );
};

export default Profile;
