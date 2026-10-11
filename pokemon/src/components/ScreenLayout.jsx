import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScreenLayout({ children }) {
  return (
    <View className="flex-1 w-full bg-black">
      <SafeAreaView
        edges={["left", "right", "bottom"]}
        style={{ flex: 1 }}
        className="mt-4"
      >
        {children}
      </SafeAreaView>
    </View>
  );
}
