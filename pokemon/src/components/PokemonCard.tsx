import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function PokemonCard({ image, name }: { image: string; name: string }) {
  return (
    <Link href={`/${name}`} asChild>
      <Pressable>
        {({ pressed }) => (
          <View
            className={`${pressed ? "bg-gray-700" : ""}`}
            style={styles.card}
          >
            <Image
              className=""
              source={{
                uri: image,
              }}
              style={{
                width: 100,
                aspectRatio: 4 / 3,
                resizeMode: "contain",
              }}
            />
            <Text
              className="text-xl font-bold capitalize px-1"
              style={styles.text}
            >
              {name}
            </Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#707070",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 8,
  },
  text: {
    color: "#d6d6d6",
  },
});
