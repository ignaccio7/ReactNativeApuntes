// import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import { IconInfo } from "@/components/Icons";
import PokemonLogo from "@/components/PokemonLogo";
import "@/global.css";
import { Link, Stack } from "expo-router";
// import { Slot } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import { useColorScheme } from "react-native";

// import { AnimatedSplashOverlay } from "@/components/animated-icon";
// import AppTabs from "@/components/app-tabs";

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      {/* Esta configuracion sera global pero se puede personalizar por pantalla como lo haremos en las demas */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => {
            return (
              <View
                style={{
                  width: 100,
                  height: 50,
                  justifyContent: "center",
                }}
              >
                <PokemonLogo />
              </View>
            );
          },
          headerRight: () => (
            <Link asChild href={"/about"}>
              <Pressable>
                {({ pressed }) => {
                  const renderText = !pressed ? "Acerca de" : "nosotros";
                  return (
                    <View className="flex-row items-center">
                      <Text
                        className={`${pressed ? "text-red-400" : "text-blue-400"}`}
                      >
                        <IconInfo />
                      </Text>
                      <Text
                        className={`${pressed ? "text-red-400" : "text-blue-400"}`}
                      >
                        {renderText}
                      </Text>
                    </View>
                  );
                }}
              </Pressable>
            </Link>
          ),
        }}
      />
      {/* <Slot /> */}
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
    backgroundColor: "#060606",
  },
});
