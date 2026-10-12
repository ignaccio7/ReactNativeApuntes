import ScreenLayout from "@/components/ScreenLayout";
import { getPokemonInfo } from "@/lib/pokemon";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

interface Pokemon {
  name: string
  image: string
  move: string
}


export default function Detail() {
  const { pokename } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    getPokemonInfo(pokename).then((res) => {
      setPokemon(res)
    }).catch((err) => {
      console.log(err);
    })
  }, [pokename])

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffd200" },
          headerLeft: () => { },
          headerRight: () => { },
          headerTitle: `${String(pokename).toUpperCase()}`,
          headerTitleAlign: "center",
          headerTintColor: "black",
        }}
      />
      {/* <Text className="text-white">
        {JSON.stringify(pokemon, null, 2)}
      </Text> */}
      {/* <Text className="text-white">
        PokemonINFO
        {pokename}
      </Text> */}
      {/* <Link href={"/"}>
        <Text className="text-white">Ir Atras</Text>
      </Link> */}
      <View>
        {
          !pokemon
            ? <ActivityIndicator color="white" size="large" />
            : (
              <>
                <View className="w-full px-10 items-center">
                  <Image
                    source={{
                      uri: pokemon.image,
                      width: 200,
                      height: 200
                    }}
                  />
                  <Text className="text-3xl text-yellow-500 capitalize text-center font-black">
                    {pokemon.name}
                  </Text>
                </View>
                <Text className="text-base text-white text-center w-full px-4">
                  {pokemon.move}
                </Text>
              </>
            )
        }
      </View>
    </ScreenLayout >
  );
}
