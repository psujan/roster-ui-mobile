import { Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import TextPara from "../text/TextPara";

const AppButton = ({ onPress, title, btnStyles }) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? "#005678" : "#22789A",
      },
      styles.appButtonContainer,
      styles.btnStyles

    ]}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    //elevation: 1,
    //backgroundColor: "#22789A",
    color: "#fff",
    borderRadius: 4,
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 600,
    alignSelf: "center",
    fontFamily: "Inter",
    //   textTransform: "uppercase"
  },
});
export default AppButton;
