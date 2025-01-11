import { Pressable } from "react-native";
import Icon from "react-native-remix-icon"
export default function PressableBack({ navigation }) {
  return (
    <Pressable
        onPress={()=> navigation.goBack()}
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
      <Icon name={"arrow-left-line"} color="#666" />
    </Pressable>
  );
}
