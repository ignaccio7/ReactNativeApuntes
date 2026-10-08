// import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import { useColorScheme } from "react-native";

// import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import AppTabs from "@/components/app-tabs";

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Slot />
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
