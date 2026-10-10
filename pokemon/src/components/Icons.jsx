import { Ionicons } from "@react-native-vector-icons/ionicons";

export function IconInfo(props) {
  return (
    <Ionicons
      name="information-circle"
      color={"currentColor"}
      size={30}
      {...props}
    />
  );
}

export function IconHome(props) {
  return <Ionicons name="home" color={"currentColor"} size={30} {...props} />;
}
