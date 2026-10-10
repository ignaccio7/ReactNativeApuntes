import { PokemonCard } from "@/components/PokemonCard";
import PokemonLogo from "@/components/PokemonLogo";
import { getPokemons, getPokemonsWithImages } from "@/lib/pokemon";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@react-native-vector-icons/ionicons";
import { IconInfo } from "@/components/Icons";

type Pokemon = {
  name: string;
  image: string;
};

export default function Index() {
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    getPokemons()
      .then((data) => {
        setPokemons(data);
      })
      .catch((err) => {
        setPokemons([]);
      });
  }, []);

  useEffect(() => {
    getPokemonsWithImages(pokemons)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setData([]);
      });
  }, [pokemons]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="w-full flex-row items-center justify-between px-4">
        <View
          style={{
            width: 100,
            height: 50,
            justifyContent: "center",
          }}
        >
          <PokemonLogo />
        </View>
        {/* <Link
          href={"/about"}
          style={{ color: "#fff" }}
          className="text-xl text-blue-500"
        >
          Ir al about
        </Link> */}
        <View className="grow justify-end items-end">
          <Link asChild href={"/about"}>
            <Pressable>
              {({ pressed }) => {
                const renderText = !pressed ? "Acerca de" : "nosostros";
                return (
                  <View className="flex-row items-center">
                    <Text
                      className={`${pressed ? "text-red-400" : "text-blue-400"}`}
                    >
                      {/* <Ionicons
                        name="information-circle"
                        color={"text-blue-400"}
                        size={30}
                      /> */}
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
        </View>
      </View>
      <View style={styles.container}>
        <StatusBar style="light" />
        {/* <Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text> */}
        {data.length === 0 ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          // <ScrollView style={{ width: "100%" }}>
          //   <View style={{ gap: 7, width: "100%" }}>
          //     {data.map((pokemon) => {
          //       const { name, image } = pokemon;
          //       return <PokemonCard key={name} image={image} name={name} />;
          //     })}
          //   </View>
          // </ScrollView>
          <FlatList
            style={{
              width: "100%",
            }}
            data={data}
            ItemSeparatorComponent={() => <View style={{ height: 7 }} />}
            keyExtractor={(poke) => poke.name}
            renderItem={({ item }) => {
              return (
                <PokemonCard
                  key={item.name}
                  image={item.image}
                  name={item.name}
                />
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060606",
    alignItems: "center",
    justifyContent: "center",
    paddingBlock: 4,
    paddingInline: 10,
  },
  text: {
    color: "#d6d6d6",
  },
});

// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import {
//   Button,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } from "react-native";

// export default function Index() {
//   const [timesPressed, setTimesPressed] = useState(0);
//   return (
//     <View style={styles.container}>
//       <StatusBar style="dark" />
//       <Text>holaaaaaaaaaaaaaaaa</Text>
//       <Image
//         source={require("@/assets/expo.icon/Assets/grid.png")}
//         style={{
//           width: 200,
//           height: 200,
//           resizeMode: "contain",
//           backgroundColor: "#000000",
//         }}
//       />
//       <Image
//         source={{
//           uri: "https://imgs.search.brave.com/LcPRwI_nXsEU78Rb39lHh_STP2fQAyhJoesxyF7LyCQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZGl4LmNvbS9sb2dv/LzIxOTc5OTUuanBn",
//         }}
//         style={{
//           width: "100%",
//           aspectRatio: 16 / 9,
//           resizeMode: "cover",
//         }}
//       />
//       <Button
//         title="Pulsa aquí"
//         onPress={() => alert("Hola desde Boton Nativo")}
//         color={"#0099ff"}
//       />
//       <TouchableHighlight
//         underlayColor={"#09f"}
//         onPress={() => alert("Hola desdse TouchableHighlight")}
//         style={{
//           width: 300,
//           height: 100,
//           backgroundColor: "red",
//           borderRadius: 25,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Text style={{ color: "#fff" }}>Pulsa aquí</Text>
//       </TouchableHighlight>

//       <Pressable
//         onPress={() => {
//           setTimesPressed((current) => current + 1);
//         }}
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
//           },
//         ]}
//       >
//         {({ pressed }) => <Text>{pressed ? "Pressed!" : "Press Me"}</Text>}
//       </Pressable>
//       <View>
//         <Text>{timesPressed}</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

/**
 *
 *
 *
 *
 * ---------------------------------------------------------------------
 *
 *
 *
 *
 */

// import * as Device from "expo-device";
// import { Platform, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { AnimatedIcon } from "@/components/animated-icon";
// import { HintRow } from "@/components/hint-row";
// import { ThemedText } from "@/components/themed-text";
// import { ThemedView } from "@/components/themed-view";
// import { WebBadge } from "@/components/web-badge";
// import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

// function getDevMenuHint() {
//   if (Platform.OS === "web") {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

// export default function HomeScreen() {
//   return (
//     <ThemedView style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
//         <ThemedView style={styles.heroSection}>
//           <AnimatedIcon />
//           <ThemedText type="title" style={styles.title}>
//             Welcome to&nbsp;Expo
//           </ThemedText>
//         </ThemedView>

//         <ThemedText type="code" style={styles.code}>
//           get started
//         </ThemedText>

//         <ThemedView type="backgroundElement" style={styles.stepContainer}>
//           <HintRow
//             title="Try editing"
//             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//           />
//           <HintRow title="Dev tools" hint={getDevMenuHint()} />
//           <HintRow
//             title="Fresh start"
//             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//           />
//         </ThemedView>

//         {Platform.OS === "web" && <WebBadge />}
//       </SafeAreaView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: "center",
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: "center",
//     justifyContent: "center",
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: "center",
//   },
//   code: {
//     textTransform: "uppercase",
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: "stretch",
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });
