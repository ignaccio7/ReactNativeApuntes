import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import ScreenLayout from "@/components/ScreenLayout";
export default function Detail() {
  const { pokename } = useLocalSearchParams();

  return (
    <ScreenLayout>
      <Text className="text-white">
        PokemonINFO
        {pokename}
      </Text>
      <Link href={"/"}>
        <Text className="text-white">Ir Atras</Text>
      </Link>
      <Text className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
        sapiente autem libero, sed distinctio ratione recusandae accusantium ex
        praesentium vero quibusdam, natus unde adipisci eaque ullam tempora?
        Velit, incidunt.
      </Text>
    </ScreenLayout>
  );
}
