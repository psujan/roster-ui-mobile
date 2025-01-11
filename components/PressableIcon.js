import { Pressable } from "react-native";
import Icon from "react-native-remix-icon"
export default function PressableIcon({ icon = "more-2-line" }) {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#f4f4f4" : "white",
        },
        {
          padding: 6,
          borderRadius: 4,
        },
      ]}
    >
      <Icon name={icon} color="#666" />
    </Pressable>
  );
}
