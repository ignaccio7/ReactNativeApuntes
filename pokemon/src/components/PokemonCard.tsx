import { Image, StyleSheet, Text, View } from "react-native";

export function PokemonCard({ image, name }: { image: string; name: string }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 100,
          aspectRatio: 4 / 3,
          resizeMode: "contain",
        }}
      />
      <Text style={styles.text} key={image}>
        {name}
      </Text>
    </View>
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
  },
  text: {
    color: "#d6d6d6",
  },
});
